import React from "react";
import "./style.css";
import HeroComponent from "./HeroComponent";
import SidebarComponent from "./SidebarComponent";

export default function AsideComponent() {
  return (
    <aside className="aside">
      <HeroComponent />
      <SidebarComponent />
    </aside>
  );
}
