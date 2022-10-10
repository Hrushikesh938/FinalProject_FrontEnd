import Footer from "./footer";
import Header from "./header";
import './About.css'
import MultiplePizzas from './multiplePizzas.jpeg'

function AboutUs(){
    return(<div>
        <Header/>
        <div className="about">
      <div
        className="aboutTop"
        style={{ backgroundImage: `url(${MultiplePizzas})` }}
      ></div>
      <div className="aboutBottom">
        <h1> ABOUT US</h1>
        <p>
        An excellent infrastructure comprising of state-of-the-art machineries  healthy cooked products in tune with consistent quality. Strict quality control guidelines and standards are followed while cooking which ensures that all products that roll are consistent in taste and appearance. A well-streamlined distribution management system aided by a good fleet of vehicles helps in making available the products at the various outlets on daily basis on time.
        </p>
      </div>
    </div>
        <Footer/>
    </div>);
}

export default AboutUs;