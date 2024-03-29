import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const styles = {
cardImage: {
    objectFit: 'cover',
    width: '100%',
    height: '200px',
    }
}

export function ProjectCard(project) {
  return (
    <>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={project.thumbnail } style={styles.cardImage}/>
        <Card.Body>
          <Card.Title>{project.title} </Card.Title>
          <Card.Text> {project.description}</Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
    </>
  );
}
