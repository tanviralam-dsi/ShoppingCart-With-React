import React, {Component} from "react"
class AddProductFrom extends Component{
    render(){
        return(
          <form  onSubmit = {(e)=>{this.props.submitHandler(e)}}>
          <div className = "form-group">
          <label htmlFor = "name">Enter your Product details:</label>
          <br/>
          <input
              type = "text"
              placeholder = "Product Name"
              name = "name"
              id = "name"
              value = {this.props.name}
              onChange = {(e)=>this.props.onChangeFrom(e)}/>
              <br/>
          <input
              type = "text"
              placeholder = "Product Type"
              name = "type"
              id = "type"
              value = {this.props.type}
              onChange = {(e)=>this.props.onChangeFrom(e)}/>
              <br/>
          <input
              type = "text"
              placeholder = "Product Price"
              name = "price"
              id = "price"
              value = {this.props.price}
              onChange = {(e)=>this.props.onChangeFrom(e)}/> 
              <br/>   
          <input
              type = "text"
              placeholder = "Product id"
              name = "id"
              id = "id"
              value = {this.props.id}
              onChange = {(e)=>this.props.onChangeFrom(e)}/> 
              <br/>
          <input
              type = "text"
              placeholder = "Product image Link"
              name = "imageLink"
              id = "imageLink"
              value = {this.props.imageLink}
              onChange = {(e)=>this.props.onChangeFrom(e)}/> 
          </div>

          <button className = "btn-btn-primary" type = "submit">Submit</button>
          </form>
        );
    }
}
export default AddProductFrom