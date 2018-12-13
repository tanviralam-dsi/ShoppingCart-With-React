import React, {Component} from "react"

class SideItem extends Component{
    render(){
        return(
             <div>
            <li className="App">
            <img src = {this.props.sideItem.imageLink} width = "200" height = "200"
            ></img>
            <h2>
                id: {this.props.sideItem.id}. Name = {this.props.sideItem.name}
            </h2>
            <h3>Product type : {this.props.sideItem.type} , Product Price = {this.props.sideItem.price}   </h3>
            <button onClick = {()=>this.props.deleteFromCart(this.props.sideItem.id)} >Delete From Cart</button>
            </li>
            

            </div>

        );
    }
}
export default SideItem