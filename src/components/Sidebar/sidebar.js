import React, { useState, useEffect } from "react";
import { NavLink, Route } from "react-router-dom";
import "./sidebar.css";
import Card from "../UI/Card/card";
import blogPost from "../../data/blog.json";

const Sidebar = (props) => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const posts = blogPost.data;
    setPosts(posts);
  }, [posts]);

  return (
    <div className="sidebarContainer">
      <Card
        style={{
          marginBottom: "20px",
          padding: "20px",
          boxSizing: "border-box",
        }}
      >
        <div className="cardHeader">
          <span>&Uuml;ber Mich</span>
        </div>
        <div className="profileImageContainer">
          <img src={require("../../assets/Lisa.jpg")} alt="" />
        </div>
        <div className="cardBody">
          <p className="personalBio">
            Lisa, 30, ich liebe Bücher und Manga und die japanische Kultur. Wenn
            ich nicht gerade in meinem Lesesessel schmökere und Kaffee trinke,
            vereise ich mit meiner Kamera.
          </p>
        </div>
      </Card>

      <Card
        style={{
          marginBottom: "20px",
          padding: "20px",
          boxSizing: "border-box",
        }}
      >
        <div className="cardHeader">
          <span>Ich lese gerade</span>

          <script
            src="https://www.goodreads.com/review/custom_widget/119669965.Ich%20lese%20gerade?cover_position=middle&cover_size=medium&num_books=5&order=a&shelf=currently-reading&show_author=0&show_cover=1&show_rating=0&show_review=0&show_tags=0&show_title=0&sort=date_added&widget_bg_color=FFFFFF&widget_bg_transparent=&widget_border_width=1&widget_id=1598947814&widget_text_color=000000&widget_title_size=medium&widget_width=medium"
            type="text/javascript"
          ></script>
        </div>
      </Card>

      <Card
        style={{
          marginBottom: "20px",
          padding: "20px",
          boxSizing: "border-box",
        }}
      >
        <div className="cardHeader">
          <span>Neuste Beitr&auml;ge</span>
        </div>

        <div className="recentPosts">
          {posts.slice(0, 5).map((post) => {
            return (<NavLink key={post.id} to={`/post/${post.slug}`}>
              <div className="recentPost">
                <h3>{post.blogTitle}</h3>
                <span>{post.postedOn}</span>
              </div>
            </NavLink>);
          })}
        </div>
      </Card>
    </div>
  );
};
export default Sidebar;
