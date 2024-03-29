import Container from "../../shared/container/Container";
import FooterPage from "../footer/FooterPage";

const About = () => {
    return (
      <>
        <Container>
            <div>
                <h1 className="text-2xl font-bold text-center my-5">This is About Section of My History</h1>
            </div>
        </Container>
        <FooterPage />
      </>
    );
};

export default About;