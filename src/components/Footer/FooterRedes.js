import { GoMarkGithub } from "react-icons/go";
import { FaLinkedin } from "react-icons/fa";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const FooterRedes = () => {
    return (
        <div>
            <Button variant="outline" target="_blank" as={Link}to={'https://github.com/mchristello'}>
                <GoMarkGithub />
            </Button>
            <Button variant="outline" target="_blank" as={Link}to='https://www.linkedin.com/in/matias-christello/'>
                <FaLinkedin />
            </Button>
        </div>
    );
}

export default FooterRedes;