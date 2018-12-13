import React, {Component} from "react";

class Item extends Component {
    // constructor(props){
    //     super(props)
    //     let sidebar = document.createElement("div");

    // }
    state = {
            isEditable : false
    }

    changeKeyHandler = (event)=>{
        if(event.key ==="Enter"){
            this.setState({
                isEditable :false
            })
        }
    }
    render(){


        let outPut = this.state.isEditable?(<input
            onChange = {e=>
                this.props.nameChangeHandler(e.target.value,this.props.item.id)
            }
            onKeyPress = {this.changeKeyHandler}
            type = "text"
            placeholder = "EnterName"
            value ={this.props.item.name}/>
        ):
        (<h2>Product Name = {this.props.item.name}</h2>)


        return(

            <div>
            <li className="App">
            <img src = {this.props.item.imageLink} width = "200" height = "200"
            ></img>
            {outPut}
            
            <h3>id: {this.props.item.id}. Product type : {this.props.item.type} <br/> Product Price = {this.props.item.price}   </h3>
            
            <button onClick = {()=>this.setState({isEditable :true})} >Edit Product Name</button>
            <button onClick = {()=>this.props.addToCart(this.props.item.id)} >Add to Cart</button>
            </li>
            

            </div>
        );
    }


}
export default Item;