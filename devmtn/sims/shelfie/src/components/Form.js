import React, { Component } from 'react'
import Axios from 'axios';

class Form extends Component {
    constructor(){
        super()
        
        this.state = {
            imageUrl: '',
            productName: '',
            price: ''
        }
        this.handleImageUrl = this.handleImageUrl.bind(this)
        this.handlePriceUpdate = this.handlePriceUpdate.bind(this)
        this.handleProductName = this.handleProductName.bind(this)
    }

    createProduct(imageUrl, productName, price){
        console.log(imageUrl, productName, price)
        Axios.post(`/api/product`, {imageUrl, productName, price}).then((response) => {
            console.log('customer created')
            
        })

        // this.props.getRequest()
        this.handleReset()

    }

    


    handleImageUrl(val){
        this.setState({
            imageUrl: val
        })
    }

    handleProductName(val){
        this.setState({
            productName: val
        })
    }

    handlePriceUpdate(val){
        this.setState({
            price: val
        })
    }

    handleReset(){
        this.setState({
            price: '',
            productName: '',
            imageUrl: ''
        })
    }
    
    render() {
        const {imageUrl, productName, price} = this.state
        return (
            <div>
                <input onChange={(e) => this.handleImageUrl(e.target.value)} placeholder="Image Url"/>
                <input onChange={(e) => this.handlePriceUpdate(e.target.value)} placeholder="Price"/>
                <input onChange={(e) => this.handleProductName(e.target.value)} placeholder="Product"/>
                <button onClick={() => this.handleReset()}>Cancel</button>
                <button onClick={() => this.createProduct(imageUrl, productName, price)}>Add to Inventory</button>                
            </div>
        )
    }
}



export default Form