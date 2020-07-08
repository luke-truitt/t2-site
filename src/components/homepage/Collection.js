import React from "react";
import Storage from "../core/Storage";
import Product from "./Product";
import "./HomePage.scss";

class Collection extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    let collection = this.props.collectionInstance;
    console.log("collection", collection);

    let products = collection.products.map((p) => (
      <Product key={p.id} product={p} />
    ));
    console.log(products);
    return (
      <div className="app-collection">
        <div className="collection-title">{collection.title}</div>

        <div className="product-display">{products}</div>
      </div>
    );
  }
}

export default Collection;
