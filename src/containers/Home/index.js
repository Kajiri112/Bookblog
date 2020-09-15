import React from "react";
import "./style.css";
import Card from "../../components/UI/Card/card";
import RecentPosts from "./RecentPosts/recentPosts";
import blogData from "../../data/blog.json";
import Layout from "../../components/Layout/layout";
import { NavLink } from 'react-router-dom'

const SideImage = (props) => {
  return (
    <NavLink to={"/post/" + props.slug} className="sideImage" style={{ height: `${props.height}px` }}>
      <img src={props.src} alt="" />
      <div className="sideImageText">{props.title}</div>
    </NavLink>
  );
};

const ImageGallery = (props) => (
  <div className="gallaryPost" style={props.gallaryStyle}>
    <section style={{ width: props.largeWidth }}>
      <NavLink to={"/post/" + props.slugArray[4]}  className="mainImageWrapper">
        <img
          src={require("../../blogPostImages/" + props.imagesArray[4])}
          alt=""
        />
        <div className="mainImageText">{props.titleArray[4]}</div>
      </NavLink>
    </section>
    <section className={"sideImageWrapper"} style={{ width: props.smallWidth }}>
      {props.imagesArray.slice(0, 3).map((image, index) => (
        <SideImage
          height={props.sideImageHeight}
          src={require("../../blogPostImages/" + image)}
          alt=""
          title={props.titleArray[index]}
          slug={props.slugArray[index]}
        />
        ))}
    </section>
  </div>
);

const Home = (props) => {
  const gallaryHeight = 450;
  const gallaryStyle = {
    height: gallaryHeight + "px",
    overflow: "hidden",
  };

  const sideImageHeight = gallaryHeight / 3;

  const imgAr = blogData.data.map((post) => post.homeImage);
  const titleAr = blogData.data.map((post) => post.blogTitle);
  const slugAr = blogData.data.map((post) => post.slug);

  return (
    <div>
      <Card>
        <ImageGallery
          largeWidth="70%"
          smallWidth="30%"
          sideImageHeight={sideImageHeight}
          gallaryStyle={gallaryStyle}
          imagesArray={imgAr}
          titleArray={titleAr}
          slugArray={slugAr}
        />
      </Card>

      <Layout>
        <RecentPosts style={{ width: "70%" }} />
      </Layout>
    </div>
  );
};

export default Home;
