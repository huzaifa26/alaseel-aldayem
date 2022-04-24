import styles from "./Home.module.css";
import ImageSlider from "../../components/ImageSlider";
import CTA from "../../components/CTA";
import FoodProduct from "../../components/FoodProduct";
import HomeContact from "../../components/HomeContact";

export const foodProduct={
    heading1:"Shipping Service",
    para1:"Fresh products from authorities",
    heading2:"Food Products",
    cardsData:[
        {
            key:"wheat",
            image:"./wheat.png",
            name:"wheat",
        },
        {
            key:"Rice",
            image:"rice.png",
            name:"Rice",
        },
        {
            key:"Flour",
            image:"./flour.png",
            name:"Flour",
        },
        {
            key:"Milk",
            image:"./milk.png",
            name:"Milk",
        },
        {
            key:"Mayonnaise",
            image:"./mayo.png",
            name:"Mayonnaise",
        },
        {
            key:"Tomato Paste",
            image:"./tomato.png",
            name:"Tomato Paste",
        },
        {
            key:"Nuts",
            image:"./almonds.png",
            name:"Nuts",
        },
        {
            key:"Sugar",
            image:"./sugar.png",
            name:"Sugar",
        },
    ]
}


export const electronicProduct={
    heading1:"Electronic Products",
    para1:"All variant electronic equipment and gadgets from authorities",
    heading2:"Electronic Products",
    cardsData:[
        {
            key:"Smart phones",
            image:"mobile.png",
            name:"Smart phones",
        },
        {
            key:"LED/TV",
            image:"./tv.png",
            name:"LED/TV",
        },
        {
            key:"Smart watches",
            image:"./watch.png",
            name:"Smart watches",
        },
        {
            key:"Head phones",
            image:"./headphone.png",
            name:"Head phones",
        },
        {
            key:"Camera",
            image:"./camera.png",
            name:"Camera",
        },

        {
            key:"Kitchen Electronics",
            image:"./kitchen.png",
            name:"Kitchen Electronics",
        },
        {
            key:"Washing Machine",
            image:"./washingMachine.png",
            name:"Washing Machine",
        },
        {
            key:"Laptop",
            image:"./mackbook.png",
            name:"Laptop",
        },

    ]
}

function Home() {
    return ( 
        <div>
            <ImageSlider />
            <CTA />
            <FoodProduct foodProduct={foodProduct} />
            <FoodProduct foodProduct={electronicProduct} />
            <HomeContact />

        </div>
     );
}

export default Home;