import React from "react";
import ScrollToTop from "./component/ScrollToTop";
import Navbar from "./component/Navbar";
import Home from "./component/Home";
import Free from "./component/Free";
import Clients from "./component/Clients";
import SuperRare from "./component/SuperRare";
import Release from "./component/Release";
import Like from "./component/Like";
import Signup from "./component/Signgup";
import "./scss/index.scss";

export default function APP() {
  return (
    <div className="app-container">
      <ScrollToTop />
      <Home />
      <Free />
      <Clients />
      <SuperRare />
      <Release />
      <Like />
      <Signup />
    </div>
  );
}
