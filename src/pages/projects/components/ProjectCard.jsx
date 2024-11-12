import Card from "react-bootstrap/Card";
import "../components/ProjectCards.scss";
import { useNavigate } from "react-router-dom";

const styles = {
cardImage: {
    objectFit: 'cover',
    width: '100%',
    height: '30%',
    }
}

export function ProjectCard(project) {
  const navigate = useNavigate();
  
  const handleClick = (title) => {
    var url = "/project?name=";
    console.log("clicked" + url)
    navigate(url.concat(title));
  };
  return (
    <>
    
      <Card className="Card" bg="dark" text="light" onClick={
       ()=> handleClick(project.title)
      }>
        <Card.Img variant="top" src={project.thumbnail } className="CardImage"/>
        <Card.Body >
          <Card.Title className="CardText">{project.title} </Card.Title>
          <Card.Subtitle className="CardBody">{project.platform}</Card.Subtitle>
          <Card.Text className="CardBody">{project.tags}</Card.Text>
        </Card.Body>
      </Card>
    </>
  );
}
