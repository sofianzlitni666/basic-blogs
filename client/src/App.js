import { useEffect } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import Error from "./Pages/Error";
import NavBar from "./Components/NavBar";
import Profile from "./Pages/Profile";
import { useDispatch } from "react-redux";
import { current } from "./JS/Actions/user";
import Create from "./Pages/Create";
import PostPage from "./Pages/PostPage";
import Edit from './Pages/Edit';
import Post from "./Components/Post";



function App() {
  const dispatch = useDispatch();
  
useEffect(()=> {
  if (localStorage.getItem("token")) {
    dispatch(current());
  }
}, [dispatch]);
  
  return (
    <div className="App">
      <NavBar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/post/:id" element={<PostPage/>} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/create" element={<Create />} />
        <Route path='/edit/:id' element={<Edit/>}/>

        <Route path="/*" element={<Error />} />
      </Routes>
    </div>
  );
}

export default App;
