import React, { useState, useEffect } from "react";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, db } from "../../config/firebaseConfig";
import { collection, addDoc, getDocs, query, deleteDoc, doc, where } from "firebase/firestore";



export default function Likes({articleId}) {

    const [likeCount, setLikesCount]=useState(0)
    const [isLiked, setIsLiked]=useState(false)

    const [user]=useAuthState(auth);

    useEffect(() => {
        const likesRef = collection(db, 'likes')
        const q = query(likesRef, where("articleId", "==", articleId), where("userId", "==", user && user?.uid))
        getDocs(q, likesRef)
        .then(res=>{
            if(res.size > 0) {
                setIsLiked(true)
            }
        })
        .catch(err=>console.log(err))

        const q2 = query(likesRef, where("articleId", "==", articleId))
        getDocs(q2, likesRef)
        .then(res=>{
            setLikesCount(res.size)
        })

    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [user,isLiked])

    const handleLike = () => {
        const likesRef = collection(db, 'likes')
        addDoc(likesRef, {
            userId:user?.uid,
            articleId: articleId
        })
        .then(res => {
            setIsLiked(true)
        })
        .catch(err => console.log(err))
    }

    const handleUnlike = () => {
        const likesRef = collection(db, 'likes')
        const q = query(likesRef, where("articleId", "==", articleId), where("userId", "==", user && user?.uid))
        getDocs(q, likesRef)
        .then(res=>{
            const likeId = res.docs[0].id;
            deleteDoc(doc(db, "likes", likeId))
            .then(res=>{
                setIsLiked(false)
            })
        })
        .catch(err=>console.log(err))
    }

    return (
        <div style={
            {marginLeft: "10px",
            display: 'flex',
            alignItems: 'center',
            cursor: 'pointer'
            }}>
                {
                isLiked
                ? <div>
                    <FaHeart onClick={handleUnlike} />
                    <span>{likeCount}</span>
                </div>
                : <div>
                    <FaRegHeart onClick={handleLike} />
                    <span>{likeCount}</span>
                </div>
                }
            </div>
    )
}