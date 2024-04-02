import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "../components/ProjectCards.scss";

const styles = {
cardImage: {
    objectFit: 'cover',
    width: '100%',
    height: '30%',
    }
}

export function ProjectCard(project) {
  return (
    <>
      <Card className="Card" bg="dark" text="light">
        <Card.Img variant="top" src={project.thumbnail } className="CardImage"/>
        <Card.Body className="CardText">
          <Card.Title>{project.title} </Card.Title>
          <Card.Text> {project.description}</Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
    </>
  );
}
