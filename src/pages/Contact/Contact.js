import ImageSection from "../../components/About/ImageSection";
import Form from "../../components/Contact/Form";
import Map from "../../components/Contact/Map";

function Contact() {
    return ( 
        <div>
            <ImageSection image={"./callCenter.jpg"} mainHeading={"Contact Us"}/>
            <Form />
            <Map />
        </div>
     );
}

export default Contact;