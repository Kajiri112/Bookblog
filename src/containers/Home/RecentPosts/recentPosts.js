import React from "react";
import { NavLink, Route } from 'react-router-dom'
import "./recentPosts.css";
import Card from "../../../components/UI/Card/card";
import blogPost from "../../../data/blog.json";

//reverse flipt das Array global, daher werden die letzten Einträge überall zuerst angezeigt
let flipBlogPosts = blogPost.data.reverse();

const RecentPosts = (props) => {
  return (
    <div style={props.style}>
      {flipBlogPosts.slice(0, 4).map((post) => {
        console.log(post);
        return (
          <Card style={{ marginBottom: "20px" }} key={post.id}>
            <div className="postImageWrapper">
              <img
                src={require("../../../blogPostImages/" + post.blogImage)}
                alt="Post Image"
              />
            </div>

            <div style={{ textAlign: "center" }}>
              <span>{post.blogCategory}</span>
              <h2>{post.blogTitle}</h2>
              <span>
                {post.postedOn} gepostet von {post.author}
              </span>
              <p className="shortText">{post.blogText}</p>
              <NavLink to={`/post/${post.slug}`}>
                <button className="readMore">Weiterlesen</button>
              </NavLink>
            </div>
          </Card>
        );
      })}
    </div>
  );
};
export default RecentPosts;
