import React, { Component } from 'react';

import './App.css';
import Intro from "./cart/Intro";
import _ from "lodash"

import SideCart from "./cart/SideCart";
import AddProductFrom from './cart/AddProductFrom';

class App extends Component {



  state = {
    shoppingCart: [
      { id: "1", name: "Naviforce Watch", type: "watch", price: "1500", imageLink: "https://ug.jumia.is/KMQC6NoI67e8F8wab7c6nbhXcuE=/fit-in/680x680/filters:fill(white):sharpen(1,0,false):quality(100)/product/69/111/1.jpg" },
      { id: "2", name: "Naviforce Watch", type: "watch", price: "1000", imageLink: "https://images-na.ssl-images-amazon.com/images/I/71lPrXzJtgL._UX342_.jpg" },
      { id: "3", name: "Naviforce Watch", type: "watch", price: "3000", imageLink: "https://ae01.alicdn.com/kf/HTB1qCQvKFXXXXbSXXXXq6xXFXXXa/Watches-Men-NAVIFORCE-Brand-Full-Steel-Army-Military-Watches-Men-s-Quartz-Hour-Clock-Watch-Sports.jpg_640x640.jpg" },
      { id: "4", name: "Naviforce Watch", type: "shoes", price: "3200", imageLink: "https://images-na.ssl-images-amazon.com/images/I/71ts8TQb70L._UX342_.jpg" },
      { id: "5", name: "fossil", type: "watch", price: "9000", imageLink: "https://skonewatch.in/wp-content/uploads/2018/03/FOSSIL-BLACK-1-1.jpg" },
      { id: "6", name: "fossil", type: "watch", price: "7000", imageLink: "https://icdn1.digitaltrends.com/image/fossil-q-venture-hr-buttons-640x640.jpg" },
      { id: "7", name: "fortuna", type: "shoes", price: "1300", imageLink: "https://img.alicdn.com/tfscom/i8/TB1y4lePpXXXXbKapXXYXGcGpXX_M2.SS2_230x230q80.jpg" },
      { id: "8", name: "Bata", type: "shoes", price: "2800", imageLink: "https://img.alicdn.com/tfscom/i2/1809171703/TB2lbXnXPgy_uJjSZKPXXaGlFXa_!!1809171703.jpg_230x230q80.jpg" },
      { id: "9", name: "Apex", type: "shoes", price: "2700", imageLink: "https://img.alicdn.com/tfscom/i2/1091756444/O1CN011xTOhmQXdpuxNcm_!!1091756444.jpg_230x230q80.jpg" },
      { id: "10", name: "wanrerbare", type: "shoes", price: "3300", imageLink: "https://i.pinimg.com/236x/52/2d/d0/522dd02145ab95e82f67616603056496--summer-men-flat-shoes.jpg" },
      { id: "11", name: "wanrerbare", type: "shoes", price: "8000", imageLink: "https://img.alicdn.com/tfscom/i1/3558675051/O1CN011nBOzKnroyNDZmU_!!3558675051.jpg_230x230q80.jpg" }
    ],
    selectedCart: [

    ],
    AddedList:
      { id: "", name: "", type: "", price: "", imageLink: "" }

    ,
    id: "",
    name: "",
    type: "",
    price: "",
    imageLink: "",
    itemCount: 0

  }

  addToCart = (id) => {
    let leftProduct = this.state.shoppingCart.filter(item => item.id !== id);
    let selectedProduct = this.state.shoppingCart.filter(item => item.id === id);
    this.setState({
      shoppingCart: leftProduct,
      selectedCart: this.state.selectedCart.concat(selectedProduct),
      itemCount: this.state.itemCount + 1

    })

  }

  deleteFromCart = (id) => {
    let leftProduct = this.state.selectedCart.filter(item => item.id !== id);
    let selectedProduct = this.state.selectedCart.filter(item => item.id === id);
    this.setState({
      shoppingCart: this.state.shoppingCart.concat(selectedProduct),
      selectedCart: leftProduct,
      itemCount: this.state.itemCount - 1
    })
  }
  sortByPrice = () => {
    let myData = _.sortBy(this.state.shoppingCart, ["price"]);
    this.setState({
      shoppingCart: myData
    })
    console.log(myData);

  }
  //to edit the product name
  nameChangeHandler = (name, id) => {
    let productWithNewName = this.state.shoppingCart.map(item => {
      if (id == item.id) {
        return ({
          ...item,
          name
        }
        );
      }
      return item
    })

    this.setState({
      shoppingCart: productWithNewName
    })
  }
  onChangeFrom = (event) => {

    if (event.target.name === "name") {
      this.setState({
        name: event.target.value
      })

    }
    if (event.target.name === "id") {
      this.setState({
        id: event.target.value
      })
    }
    if (event.target.name === "type") {
      this.setState({
        type: event.target.value
      })
    }
    if (event.target.name === "price") {
      this.setState({
        price: event.target.value
      })
    }
    if (event.target.name === "imageLink") {
      this.setState({
        imageLink: event.target.value
      })
    }
  }
  submitHandler = event => {
    const mylist = {
      id: this.state.id,
      name: this.state.name,
      type: this.state.type,
      price: this.state.price,
      imageLink: this.state.imageLink
    }
    this.setState({
      shoppingCart: this.state.shoppingCart.concat(mylist),
      id: "",
      name: "",
      type: "",
      price: "",
      imageLink: ""

    })
    event.preventDefault()
    console.log(this.state)


  }

  render() {
    return (

      <div className="Wrapper">
        <div>
          <AddProductFrom

            onChangeFrom={this.onChangeFrom.bind(this)}
            submitHandler={this.submitHandler.bind(this)}
            id={this.state.id}
            name={this.state.name}
            type={this.state.type}
            price={this.state.price}
            imageLink={this.state.imageLink}
          />

        </div>
        <div>
          <div className="DropDown">
            <div className="dropdown">
              <button className="dropbtn">Dropdown
    <i className="fa fa-caret-down"></i>
              </button>
              <div className="dropdown-content">
                <button onClick={() => this.sortByPrice()}>sort by price</button><br />
                <button >sort by size </button><br />
                <button >sort by Name </button>
              </div>
            </div>
          </div>


        </div>


        <div className="Main">
          <Intro
            nameChangeHandler={this.nameChangeHandler.bind(this)}
            addToCart={this.addToCart.bind(this)}
            shoppingCart={this.state.shoppingCart}>
          </Intro>
        </div>

        <div className="Nav">
          <h2 className="App-header">Total Item Added :{this.state.itemCount} </h2>
          <SideCart deleteFromCart={this.deleteFromCart.bind(this)} selectedCart={this.state.selectedCart}></SideCart>
        </div>
      </div>



    );
  }
}

export default App;
