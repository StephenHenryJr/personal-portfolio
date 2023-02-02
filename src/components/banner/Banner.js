import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { BsArrowRightCircle } from "react-icons/bs";
import office from "../../assets/img/hero-img2.webp";
import "./banner.css";

export const Banner = () => {
  // Sets loopNum variable to 0 initially
  const [loopNum, setLoopNum] = useState(0);
  // Sets isDeleting variable to true 
  const [isDeleting, setIsDeleting] = useState(false);
  // Sets text variable to an empty string
  const [text, setText] = useState("");
  // Sets delta variable to random number 
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  // Sets index varaible to to 1
  const [index, setIndex] = useState(1);
  // Variable containing our words to rotate in our banner
  const toRotate = ["Web Developer", "Web Designer", "UI/UX Designer"];
  // Variable containing the number 200
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => {
      clearInterval(ticker);
    };
  }, [text]);

  
  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex((prevIndex) => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex((prevIndex) => prevIndex + 1);
    }
  };

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="aligh-items-center">
          <Col xs={12} lg={6} md={12} xl={7}>
            <div>
              <div className="box">
                <span className="tagline">Welcome to my Portfolio</span>
              </div>
              <h1>
                {`Hi! I'm Stephen,`}{" "}
                <span
                  className="txt-rotate"
                  dataPeriod="1000"
                  data-rotate='[ "Web Developer", "Web Designer", "UI/UX Designer" ]'
                >
                  <span className="wrap">{text}</span>
                </span>
              </h1>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
              </p>
              <button onClick={() => console.log("connect")}>
                Let’s Connect <BsArrowRightCircle />
              </button>
            </div>
          </Col>
          <Col xs={12} lg={6} md={12} xl={5}>
            <img src={office} alt="Header Img" />
          </Col>
        </Row>
      </Container>
    </section>
  );
};
