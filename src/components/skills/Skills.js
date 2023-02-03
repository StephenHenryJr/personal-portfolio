import "./skills.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { SiReact, SiTailwindcss, SiJavascript, SiGit, SiMongodb, SiNodedotjs} from "react-icons/si";
// import arrow1 from "../../assets/img/arrow1.svg";
// import arrow2 from "../../assets/img/arrow2.svg";
// import colorSharp from "../../assets/img/color-sharp.png";

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <section className="skill" id="skills">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn">
              <h2>Skills</h2>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.<br></br> Lorem Ipsum has been the industry's standard
                dummy text.
              </p>
              <Carousel
                responsive={responsive}
                infinite={true}
                className="owl-carousel owl-theme skill-slider"
              >
                <div className="item">
                  <SiReact size={100} />
                  <h5>React JS</h5>
                </div>
                <div className="item">
                  <SiJavascript size={100} />
                  <h5>Javascript</h5>
                </div>
                <div className="item">
                  <SiTailwindcss size={100} />
                  <h5>Tailwind CSS</h5>
                </div>
                <div className="item">
                  <SiGit size={100} />
                  <h5>Git Controls</h5>
                </div>
                <div className="item">
                  <SiMongodb size={100} />
                  <h5>Mongo db</h5>
                </div>
                <div className="item">
                  <SiNodedotjs size={100} />
                  <h5>Node JS</h5>
                </div>
              </Carousel>
            </div>
          </div>
        </div>
      </div>
      {/* <img className="background-image-left" src={colorSharp} alt="background" /> */}
    </section>
  );
};
