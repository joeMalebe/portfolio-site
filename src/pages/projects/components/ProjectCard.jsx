import Card from "react-bootstrap/Card";
import "../components/ProjectCards.scss";
import { useNavigate } from "react-router-dom";
import { Row, Col } from "react-bootstrap";

const styles = {
  cardImage: {
    objectFit: "cover",
    width: "100%",
    height: "30%",
  },
};

export function ProjectCard(project) {
  const navigate = useNavigate();
  const handleClick = (title) => {
    var url = "/project?name=";
    console.log("clicked" + url);
    //todo handle navigation after creating product discription screen. navigate(url.concat(title));
  };
  return (
    <>
      <div
        className="card phone"
        style={{ backgroundColor: project.tint }}
        onClick={() => handleClick(project.title)}
      >
        <img className="Thumbnail" src={project.thumbnail} />
        
          <div className="container">
            <Row className="align-items-center">
              <Col xs={2}>
                <img className="Logo " src={project.logo} />
              </Col>
              <Col>
                <div className="CardText">
                  <h5>{project.title}</h5>
                  <h6>{project.platform}</h6>
                  <p className="roboto-light">{project.tags}</p>
                </div>
              </Col>
            </Row>
          </div>
      </div>
    </>
  );
}
