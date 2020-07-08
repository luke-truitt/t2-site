import React from "react";
import { ShopifyUi } from "../core/ShopifyClient";
import Storage from "../core/Storage";
import "./HomePage.scss";

class Product extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.mountingDiv = null;
    console.log(this.props.product);
  }

  componentDidMount = () => {
    ShopifyUi.createComponent("product", {
      id: atob(this.props.product.id).split("/").pop(),
      node: this.mountingDiv,
      options: Storage.shopifyDisplayOptions,
    });
  };

  render() {
    return (
      <div className="app-product" ref={(el) => (this.mountingDiv = el)}></div>
    );
  }
}

export default Product;
