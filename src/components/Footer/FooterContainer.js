import { Container } from "react-bootstrap";
import FooterRedes from "./FooterRedes";
import './FooterContainer.css';

const FooterContainer = () => {
    return (
        <div bg="dark" className='footer_container'>
            <h3>Designed & Develop by <b>Matias Christello</b>.</h3>
            <FooterRedes />
        </div>
    );
}

export default FooterContainer;