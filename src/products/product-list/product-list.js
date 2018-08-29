import React from 'react'
import ProductForm from '../product-form/product-form'
import ProductItem from '../product-item/product-item'
import axios from 'axios'

export default class ProductList extends React.Component{

    render(){
        const { products, onSubmit } = this.props
        return(
            <React.Fragment>
                <section>
                    <ProductForm onSubmit = { onSubmit}/>
                </section>
                <section>    
                    <ul className ={"productList"}>
                        { 
                            products.map(product => 
                                <li className={"item-list"}key={product.asin}>
                                    <ProductItem asin={product.asin} name={product.name}/>
                                </li>)
                        }
                    </ul>
                </section>
            </React.Fragment>
        )
    }
}