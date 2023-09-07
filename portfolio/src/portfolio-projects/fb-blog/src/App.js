import './App.css';
import HomePage from './pages/homepage/HomePage';
import { Routes, Route } from 'react-router-dom';
import Header from './components/header/Header';
import Auth from './pages/Auth/Auth';
import AddArticle from './pages/AddArticle/AddArticle';
import CategoryArticles from './pages/CategoryArticles/CategoryArticles';
import ArticleDetails from './pages/ArticleDetails/ArticleDetails'
import Footer from './components/footer/footer'



function FBApp() {
  const categories = ["Health", "Food", "Technology", "Travel"];

  return (
    <div className='fb-blog'>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/auth/*" element={<Auth />} />
        <Route path="/addArticle" element={<AddArticle 
          categories={categories}
        />} />
        <Route path="/category/:categoryName" element={<CategoryArticles />} />
        <Route path="/article" element={<CategoryArticles />}/>
        <Route path="/article/:articleId" element={<ArticleDetails />} />
      </Routes>
      <Footer />
    </div>
    
  );
}

export default FBApp;
