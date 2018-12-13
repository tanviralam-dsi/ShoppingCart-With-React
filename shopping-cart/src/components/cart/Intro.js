import React , {Component} from "react"
import Item from "./Item";


class Intro extends Component{
    render(){
        return(
            <div >
                {
                   this.props.shoppingCart.map((item,index) =>{
                       return(
                        <Item 
                        key = {index}
                        nameChangeHandler = {this.props.nameChangeHandler}
                        addToCart = {this.props.addToCart}
                        item = {item}
                        // id = {item.id}
                        // name = {item.name}
                        // type = {item.type}
                        // price = {item.price} 
                        // imageLink = {item.imageLink}
                 ></Item>
                       )
                   }) 
                }
            </div>
           
        )
    }
} 
export default Intro;