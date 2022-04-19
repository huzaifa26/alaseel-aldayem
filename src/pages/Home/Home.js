import styles from "./Home.module.css";
import ImageSlider from "../../components/ImageSlider";
import CTA from "../../components/CTA";
import FoodProduct from "../../components/FoodProduct";
import HomeContact from "../../components/HomeContact";

function Home() {

    const foodProduct={
        heading1:"Shipping Service",
        para1:"Fresh products from authorities",
        heading2:"Food Products",
        cardsData:[
            {
                key:"wheat",
                image:"",
                name:"wheat",
            },
            {
                key:"Rice",
                image:"",
                name:"Rice",
            },
            {
                key:"Flour",
                image:"",
                name:"Flour",
            },
            {
                key:"Milk",
                image:"",
                name:"Milk",
            },
            {
                key:"Mayonnaise",
                image:"",
                name:"Mayonnaise",
            },
            {
                key:"Tomato Paste",
                image:"",
                name:"Tomato Paste",
            },
            {
                key:"Nuts",
                image:"",
                name:"Nuts",
            },
            {
                key:"Sugar",
                image:"",
                name:"Sugar",
            },
        ]
    }


    const electronicProduct={
        heading1:"Electronic Products",
        para1:"All variant electronic equipment and gadgets from authorities",
        heading2:"Electronic Products",
        cardsData:[
            {
                key:"Smart phones",
                image:"",
                name:"Smart phones",
            },
            {
                key:"LED/TV",
                image:"",
                name:"LED/TV",
            },
            {
                key:"Smart watches",
                image:"",
                name:"Smart watches",
            },
            {
                key:"Head phones",
                image:"",
                name:"Head phones",
            },
            {
                key:"Camera",
                image:"",
                name:"Camera",
            },
            {
                key:"wheat",
                image:"",
                name:"wheat",
            },
            {
                key:"Kitchen Electronics",
                image:"",
                name:"Kitchen Electronics",
            },
            {
                key:"Washing Machine",
                image:"",
                name:"Washing Machine",
            },
        ]
    }

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