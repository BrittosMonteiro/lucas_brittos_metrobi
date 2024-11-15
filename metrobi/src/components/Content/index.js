import React from "react";
import "./style.css";
import MainContentComponent from "./MainContentComponent";
import ExtraContentComponent from "./ExtraContentComponent";

export default function ContentComponent() {
  return (
    <section className="content">
      <MainContentComponent />
      <ExtraContentComponent />
    </section>
  );
}
