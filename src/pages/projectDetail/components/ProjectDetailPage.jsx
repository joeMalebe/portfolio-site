import { useLocation } from 'react-router-dom';

function ProjectDetail() {
    const { search } = useLocation();
    const queryParams = new URLSearchParams(search);
    const name = queryParams.get('name');

    return (
        
      <>
        <div className="container-fluid Page" >
          <div className="row">
           <h1>{name}</h1>
           <p>This page is under construction</p>
          </div>
        </div>
      </>
    );
  }

  export default ProjectDetail;