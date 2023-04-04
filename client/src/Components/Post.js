import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { format } from "date-fns";
import { useSelector } from "react-redux";



const Post = ({post}) => {
  const user = useSelector((state)=> state.userReducer.user);

  return (
    <div>
      
      <div className="post">
        <div className="image">
          <Link>
            <img
              src='https://www.searchenginejournal.com/wp-content/uploads/2020/08/7-ways-a-blog-can-help-your-business-right-now-5f3c06b9eb24e-1280x720.png'
              alt=""
            ></img>
          </Link>
        </div>
        <div className="texts">
          <Link to={`/post/${post._id}`}>
            <h2>{post.title}</h2>
          </Link>

          <p className="info">
            <a className="author">blogger</a>
            <time>{format(new Date(), "d MMM, yyyy HH:mm")}</time>
          </p>
          <p className="summary">{post.summary}</p>
        </div>
      </div>
    </div>
  );
};

export default Post;
