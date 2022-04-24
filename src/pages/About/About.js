import ImageSection from "../../components/About/ImageSection";
import Info from "../../components/About/Info";
import Cta from "../../components/About/Cta";

function About() {
    return ( 
        <div>
            <ImageSection image={"./dubai.jpg"} mainHeading={"About Us"}/>
            <Info />
            <Cta />
        </div>
     );
}

export default About;