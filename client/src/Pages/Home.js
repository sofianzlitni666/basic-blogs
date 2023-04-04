import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPosts } from "../JS/Actions/post";
import Post from '../Components/Post';

const Home = () => {
  const allPosts = useSelector((state) => state.postReducer.allPosts);
  const load = useSelector((state) => state.postReducer.load);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);

  return (
    <div>
          {load ? <h2>Loading...</h2> : allPosts.map((el)=> <Post post={el} key={el.id}/>)}
          
    </div>
  );
};

export default Home;
