import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import "./app.scss";
import shopifyCollectionWrapper from "./components/core/ShopifyCollectionWrapper";

async function init() {
  await shopifyCollectionWrapper.fetchCollections();

  ReactDOM.render(<App />, document.getElementById("root"));
}

init();
