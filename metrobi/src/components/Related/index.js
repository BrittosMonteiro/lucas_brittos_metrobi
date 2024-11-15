import React from "react";
import "./style.css";
import PostsComponent from "./PostsComponent";
import ImagesComponent from "./ImagesComponent";

export default function RelatedComponent() {
  return (
    <div className="related">
      <ImagesComponent />
      <PostsComponent />
    </div>
  );
}
