import { Routes, Route } from 'react-router-dom';
//import { Navbar, Home, CreatePost, PostDetail } from './';
import Home from './Home';
import NavBar from './NavBar';
import CreatePost from './CreatePost';
import PostDetail from './PostDetail';

function App() {
  return (
    <div className="container">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/post/:postId" element={<PostDetail/>} />
        <Route path="/create-post" element={<CreatePost/>} />
      </Routes>
    </div>
  );
}

export default App;