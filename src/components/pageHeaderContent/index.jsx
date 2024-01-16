import React from "react";
import "./style.css";
export default function PageHeaderContent({ headerText, icon }) {
  return (
    <>
      <div className="wrapper">
        <h2>{headerText}</h2>
        <span>{icon}</span>
      </div>
    </>
  );
}
