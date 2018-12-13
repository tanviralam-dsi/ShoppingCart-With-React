import React, {Component} from "react"
import SideItem from "./SideItem"



class SideCart extends Component{
    render(){
        return(
            <div>
            {
                this.props.selectedCart.map((sideItem,index)=>{
                    return(
                        <SideItem 
                        key = {index}
                        deleteFromCart = {this.props.deleteFromCart}
                        sideItem = {sideItem}
                        ></SideItem>
                    );
                })
            }
            </div>
        );
    }

}
export default SideCart