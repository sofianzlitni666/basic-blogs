import React, { useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { useMatch, useNavigate } from "react-router-dom";
import { deletePost, getPost} from "../JS/Actions/post";
import { formatISO9075 } from "date-fns";
import { Button } from "react-bootstrap";



const PostPage = () => {
  
  const dispatch = useDispatch();
  const navigate = useNavigate();
  
  const onePost = useSelector((state) => state.postReducer.onePost);  
  const user = useSelector((state)=> state.userReducer.user); 


    const match = useMatch("/post/:id");

  
  useEffect(() => {
      dispatch(getPost(match.params.id));
  });

  return (
<div>
<div className="post-page">
      <h1>{onePost.title}</h1>
      <time>{formatISO9075(new Date())}</time>
      <div className="author">by @blogger</div>
      {user && (
        <div className="btn-row">
          <Button  variant="danger" onClick={()=> dispatch(deletePost(match.params.id),navigate(-1))}>Delete</Button>&nbsp;&nbsp;
          <Button  variant="info" onClick={()=> navigate(`/edit/${match.params.id}`)} >Edit</Button>
          
           
            
          
        </div>
      )}
      <div className="image">
        <img src="https://www.searchenginejournal.com/wp-content/uploads/2020/08/7-ways-a-blog-can-help-your-business-right-now-5f3c06b9eb24e-1280x720.png" alt="" />
      </div>

      <div className="content"  dangerouslySetInnerHTML={{ __html: onePost.content }}>
        </div>

    </div>
</div>
  );
};
export default PostPage;
