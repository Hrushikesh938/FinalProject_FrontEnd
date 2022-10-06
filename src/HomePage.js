import applogo from './applogo.png';
import bgimage from './bgimage.jpg';
import { Outlet, Link } from "react-router-dom";
import Header from './header';
import Background from './bg';
import Footer from './footer';
import Product from './Product';
import HeaderComponent from './HeaderComponent';
import './home.css';
function HomePage(){
    return (
        <>
        <HeaderComponent/>
        <div className='all-products-contain'>
                <Product
                    imgSrc='https://th.bing.com/th/id/OIP.UhGz6tniIp51tn2tUrcvbwHaEK?w=301&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7'
                    productName="Burger"
                    price="$5"
                />
                <Product
                    imgSrc='https://th.bing.com/th/id/OIP.w-x-zzJwrCBGqYePkIKcOQHaFP?pid=ImgDet&w=1600&h=1131&rs=1'
                    productName="Sub"
                    price="$5"
                />
                <Product
                    imgSrc='https://th.bing.com/th/id/OIP.jQHxM00UHLIZToTLzpU5-wHaE8?w=244&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7'
                    productName="Pasta"
                    price="$5"
                />
                <Product
                    imgSrc='https://th.bing.com/th/id/OIP.LGULFKjtOTpDWNWNV76N9QHaEK?w=276&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7'
                    productName="Noodles"
                    price="$5"
                />
                <Product
                    imgSrc='https://th.bing.com/th/id/OIP.O7eEDmLVsPsD5PVrGTqJHAHaEK?w=275&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7'
                    productName="Pizza"
                    price="$5"
                />
                <Product
                    imgSrc='https://th.bing.com/th/id/OIP.UHhxdmJO4RvUksJ5W_JOaAHaEK?w=330&h=185&c=7&r=0&o=5&dpr=1.5&pid=1.7'
                    productName="Frankie"
                    price="$5"
                />
                <Product
                    imgSrc='https://th.bing.com/th/id/OIP.eiUogQPoALPWGlX7Q24CcAEhDY?w=203&h=152&c=7&r=0&o=5&dpr=1.5&pid=1.7'
                    productName="Ice Cream"
                    price="$5"
                />
                <Product
                    imgSrc='https://th.bing.com/th/id/OIP.K47c9VmBr-pqZ4vB_18ImwHaEK?w=276&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7'
                    productName="French Fries"
                    price="$5"
                />
                <Product
                    imgSrc='https://th.bing.com/th/id/OIP.9WzgJEgkdsxQCopUjS9d-QHaE6?w=228&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7'
                    productName="Sandwich"
                    price="$5"
                />
            </div>
        <Footer/>
        </>
    );


}
export default HomePage;