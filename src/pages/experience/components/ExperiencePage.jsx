import { SpinningTagClouds } from "../../home/components/SpinningTagCloud";
import { TagCloud } from "react-tagcloud";
import "../../../colors.scss";
import getExperiences from "../data/WorkExperience";

const ExperienceRolesAndResponsibility = (experience) => {
  const experienceDescriptionRows = [];
  for (var i = 0; i < experience.length; i++) {
    experienceDescriptionRows.push(ExperienceDescription(experience[i]));
  }
  return (
    <>
      <div>{experienceDescriptionRows}</div>
    </>
  );
};

const ExperienceDescription = (experienceDescription) => {
  return (
    <>
      <span>
        <h5>{experienceDescription.title}</h5>
        <p>{experienceDescription.description}</p>
      </span>
    </>
  );
};

const experienceList = (experienceList) => {
  const experiencesRows = []
  for(var i = 0; i < experienceList.length; i++) {
    experiencesRows.push(
      ExperienceItem(experienceList[i])
    )
  }
  return experiencesRows
}

const ExperienceItem = (experience) => {
  return <>
          <div className="row" style={{paddingBottom: "3em"}}>
          <div className="col-lg-2" >
            {}
            <h3>{experience.companyName}</h3>
            <h4>{experience.timeAtCompany}</h4>
            <div style={{paddingBottom: "2em"}}>
              <TagCloud
                minSize={10}
                maxSize={15}
                tags={experience.tags}
                style={{ width: "13vw", textAlign: "left" }}
                colorOptions={{
                  luminosity: "bright",
                  hue: "green",
                }}
              />
            </div>
          </div>
          <div className="col-lg-10">
            {ExperienceRolesAndResponsibility(experience.experienceDescription)}
          </div>
          </div>
        </>
}

function Experience() {
  return (
    <>
      <div className="container-fluid" style={{paddingTop : "4em"}}>
        <div className="row">
         {experienceList(getExperiences)}
        </div>
      </div>
    </>
  );
}

export default Experience;
