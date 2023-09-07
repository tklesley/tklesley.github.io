import React, { useState, useEffect } from 'react'
import './comments.css'
import { auth, db } from "../../config/firebaseConfig";
import { collection, addDoc, deleteDoc, doc, onSnapshot, query, where, Timestamp } from "firebase/firestore";
import { useAuthState } from "react-firebase-hooks/auth";
import { toast } from 'react-toastify';

export default function Comments({articleId}) {

  const [user]=useAuthState(auth);
  const [newComment, setNewComment] = useState('');
  const [comments, setComments] = useState([])

  useEffect(()=>{
    const commentsRef = collection(db, 'comments');
    const q = query(commentsRef, where("articleId", "==", articleId));
    onSnapshot(q, (snapshot)=>{
      const comments = snapshot.docs.map(item=>({
        id:item.id,
        ...item.data()
      }))
      setComments(comments)
    })
  }, [])

  const addComment=(e)=>{
    e.preventDefault();
    const commentsRef = collection(db, 'comments');
    addDoc(commentsRef, {
      userId: user?.uid,
      articleId: articleId,
      content: newComment,
      userName: user?.displayName,
      createdAt: Timestamp.now().toDate()
    })
    .then(res=>{
      setNewComment('')
    })
    .catch(err=>console.log(err))
  }

  const deleteComment=(id)=>{
    deleteDoc(doc(db, "comments", id))
    .then(res=>{
      toast.success('Comment deleted', {
        position: "top-center",
        autoClose: 1500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        });
    })
    .catch(err=>console.log(err))
  }

  return (
    <div className='comments-container'>
      {
        comments?.map(item=>{
          return (
            <div className='comment' key={item.id} >
              <p className='comment-author'>{item.userName}</p>
              <p>{item.content}</p>
              {
                user?.uid === item.userId
                ? <button onClick={()=>{deleteComment(item.id)}} >Delete</button>
                : null
              }
            </div>
          )
        })
      }
      {
        user
        ? <form onSubmit={addComment}>
          <input
            value={newComment}
            typle="text"
            placeholder="Add a comment"
            onChange={(e)=> setNewComment(e.target.value)} />
          <button type='submit'>Add Comment</button>
        </form>
        : <p>Please Login to Comment</p>
      }
    </div>
  )
}