import React, { Component } from 'react'
import Product from './Product'
import Axios from 'axios';

class Dashboard extends Component {

    deleteItem(id){
        const { getRequest } = this.props
        Axios.delete(`/api/product/${id}`).then(res => {
            // getRequest()
        })

    }
    render() {
        const { inventoryList } = this.props
        const mappedInventory = inventoryList.map((item, id) =>{
            return(
                <div key={id}>
                    <Product
                        name = {item.product_name}   
                        price = {item.price}
                        image = {item.image_url}                 
                    />
                    <button onClick={() => this.deleteItem(item.product_id)}>delete</button>
                </div>
            )
        })
        return (
            <div>
                <h1>Dashboard</h1>
                {mappedInventory}
            </div>
        )
    }
}

export default Dashboard