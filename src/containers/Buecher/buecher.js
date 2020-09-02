import React from "react";
import "./buecher.css";
import { NavLink, Route } from "react-router-dom";
import Card from "../../components/UI/Card/card";
import blogPost from "../../data/blog.json";
import Layout from "../../components/Layout/layout";

const Buecher = (props) => {

    let bookBlogPosts = [];
    for (let i=0; blogPost.data.length > i; i++) {
        if (blogPost.data[i].blogCategory === "Bücher") {
            bookBlogPosts.push(blogPost.data[i]);
        }
    }
    let flipBookBlogPosts = bookBlogPosts.reverse();


  return (
    <Layout>
      <div style={{ width: "70%" }}>
        {flipBookBlogPosts.map((post) => {
          return (
            <Card style={{ marginBottom: "20px" }} key={post.id}>
              <div className="postImageWrapper">
                <img
                  src={require("../../blogPostImages/" + post.blogImage)}
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
    </Layout>
  );
};
export default Buecher;
