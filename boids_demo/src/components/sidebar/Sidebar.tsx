import React from "react";
import "./Sidebar.css";
import { Vector, Flock, FlockSettings } from "boids_lib";

type SidebarProps = {
  isOpen: boolean;
  flock: Flock;
  flockSettings: FlockSettings;
};

const Sidebar: React.FC<SidebarProps> = (props) => {
  var sidebarClass = props.isOpen ? "Sidebar open" : "Sidebar";
  return <div className={sidebarClass}>{props.children}</div>;
};

export default Sidebar;
