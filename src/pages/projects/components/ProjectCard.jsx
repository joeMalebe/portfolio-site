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
    <div className="card phone" style={{backgroundColor: project.tint}} onClick={() => handleClick(project.title)}>

      <img src={project.thumbnail}/>
      <div className="CardText">
      <h2 >{project.title}</h2>
      <h3 >{project.platform}</h3>
      <p >{project.tags}</p>
      </div>
    </div>

    {/* 
      <Card className="Card" bg="dark" text="light" onClick={
       ()=> handleClick(project.title)
      }>
        <Card.Img variant="top" src={project.thumbnail } className="CardImage"/>
        <Card.Body >
        <Card.Img variant="bottom" src={project.thumbnail } className="CardImage"/>
          <Card.Title className="CardText">{project.title} </Card.Title>
          <Card.Subtitle className="CardBody">{project.platform}</Card.Subtitle>
          <Card.Text className="CardBody">{project.tags}</Card.Text>
        </Card.Body>
      </Card>
      */}
    </>
  );
}
