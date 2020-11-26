import React from 'react'
import CollectionItem from './CollectionItem'

export default function CollectionList(props) {
    // const collectionItems = [
    //     {
    //         name: "Red Hoodie",
    //         des: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has",
    //         price: "123",
    //         img: "https://demo.uix.store/sober/wp-content/uploads/sites/2/2016/09/red.png"
    //     },
    //     {
    //         name: "Red Hoodie",
    //         des: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has",
    //         price: "123",
    //         img: "https://demo.uix.store/sober/wp-content/uploads/sites/2/2016/09/pink.png"
    //     },
    //     {
    //         name: "Red Hoodie",
    //         des: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has",
    //         price: "123",
    //         img: "https://demo.uix.store/sober/wp-content/uploads/sites/2/2016/09/orange.png"
    //     },
    //     {
    //         name: "Red Hoodie",
    //         des: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has",
    //         price: "123",
    //         img: "https://demo.uix.store/sober/wp-content/uploads/sites/2/2016/09/khaki.png"
    //     },
    //     {
    //         name: "Red Hoodie",
    //         des: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has",
    //         price: "123",
    //         img: "https://demo.uix.store/sober/wp-content/uploads/sites/2/2016/09/green.png"
    //     },
    //     {
    //         name: "Red Hoodie",
    //         des: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has",
    //         price: "123",
    //         img: "https://demo.uix.store/sober/wp-content/uploads/sites/2/2016/09/blue.png"
    //     }
    // ]


    const collection = props.collection;

    return (
        <div className="CollectionList flex">
            { collection && 
                collection.collectionItems.map((item, index) => {
                    return (
                        <CollectionItem
                            key={index}
                            product={item}
                        />
                    )
                })
            }
            <div className="product-info-line" style={{margin: `40px 20px`}}></div>
        </div>
    )
}