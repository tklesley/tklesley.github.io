import React, { useState } from 'react';
import './addArticle.css';
import { db, storage, auth } from '../../config/firebaseConfig';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { collection, addDoc, Timestamp } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { v4 } from 'uuid';


export default function AddArticle({categories}) {

  const [user] = useAuthState(auth);
  console.log(user);
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    title: "",
    summary:"",
    paragraph1:"",
    paragraph2:"",
    paragraph3:"",
    category:"",
    imageData:""
  });

  const createArticle = (e) => {
    e.preventDefault();
    const imageRef = ref(storage, `image/${formData.imageData.name + v4()}`);
    uploadBytes(imageRef, formData.imageData)
    .then(res=>{
      console.log(res)
      getDownloadURL(res.ref)
      .then(url=>{
        console.log(url)
        const articleRef = collection(db, 'articles');
        addDoc(articleRef, {
          title: formData.title,
          summary:formData.summary,
          paragraph1:formData.paragraph1,
          paragraph2:formData.paragraph2,
          paragraph3:formData.paragraph3,
          category:formData.category,
          imageUrl: url,
          createdAt: Timestamp.now().toDate(),
          createdBy: user?.displayName,
          isSelected: false
        })
        .then(res=>{
          toast.success('Article added successfully', {
            position: "top-center",
            autoClose: 1500,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            });
          setTimeout(()=>{
            navigate('/portfolio/blog')
          }, 2000);
        })
        .catch(err=>{console.log(err)})
      })

    })
    .catch(err=>{console.log(err);})
  }

  

  return (
    <div className='add-article-container'>
      <ToastContainer
          position="top-center"
          autoClose={1500}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
      <form className='add-article-form' onSubmit={createArticle}>
        <h2>Create Article</h2>
        <div className='input-group'>
          <label htmlFor='title'>Title</label>
          <input type='text'  name='title' placeholder='Max 100 Characters' maxLength={100} onChange={(e)=>setFormData({...formData, title: e.target.value})} required />
        </div>
        <div className='input-group'>
          <label htmlFor='summary'>Summary</label>
          <textarea type='text'  name='summary' placeholder='Max 120 Characters' maxLength={120} onChange={(e)=>setFormData({...formData, summary: e.target.value})} required />
        </div>
        <div className='input-group'>
          <label htmlFor='paragraph1'>Paragraph 1</label>
          <textarea type='text'  name='paragraph1' placeholder='Max 650 Characters' maxLength={650} onChange={(e)=>setFormData({...formData, paragraph1: e.target.value})} required />
        </div>
        <div className='input-group'>
          <label htmlFor='paragraph2'>Paragraph 2</label>
          <textarea type='text'  name='paragraph2' placeholder='Max 650 Characters' maxLength={650} onChange={(e)=>setFormData({...formData, paragraph2: e.target.value})} required />
        </div>
        <div className='input-group'>
          <label htmlFor='paragraph3'>Paragraph 3</label>
          <textarea type='text'  name='paragraph3' placeholder='Max 650 Characters' maxLength={650} onChange={(e)=>setFormData({...formData, paragraph3: e.target.value})} required />
        </div>
        <div className='input-group'>
          <label htmlFor='category'>Category</label>
          <select type='text' defaultValue={'default-select'}  name='category'  onChange={(e)=>setFormData({...formData, category: e.target.value})} required>
            <option value="default-select" disabled>Select a Category</option>
            {
              categories.map((item, index)=>{
                return <option key={index} value={item}>{item}</option>
              })
            }
          </select>
        </div>
        <div className='input-group'>
          <label htmlFor='image'>Upload Image</label>
          <input type='file'  name='image' accept='image/*' onChange={(e)=>setFormData({...formData, imageData: e.target.files[0]})} required />
        </div>
        <button type='submit'>Submit</button>
      </form>
    </div>
  )
}