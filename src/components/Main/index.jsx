import React from "react";
import "../Main/index.scss";

export default function Main(props) {
  const children = props.children;
  return (
    <div className="main">{children}</div>
  )
}

