import React from "react";
import "./post.css";
import BlogPost from "../../components/BlogPost/blogpost";
import Layout from "../../components/Layout/layout";

const Post = (props) => {
  console.log(props);

  return (
      <Layout>
        <BlogPost {...props} />
      </Layout>
  );
};
export default Post;
