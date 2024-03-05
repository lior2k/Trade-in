import React from "react";
import "./Widget.css";
import { Icon } from "@iconify/react";

interface WidgetProps {
  icon: string;
  title: string;
  description: string;
}

const Widget: React.FC<WidgetProps> = ({ icon, title, description }) => {
  return (
    <div className="widget-container bradius">
      <Icon className="big-icon" icon={icon}></Icon>
      <span className="mini-title">{title}</span>
      <span className="sub-text">{description}</span>
    </div>
  );
};

export default Widget;
