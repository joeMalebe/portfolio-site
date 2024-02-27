import { SpinningTagClouds } from "../../home/components/SpinningTagCloud";
import { TagCloud } from "react-tagcloud";
import "../../../colors.scss";
class WorkExperience {
  constructor(companyName, experienceDescription, timeAtCompany, tags) {
    this.companyName = companyName;
    this.experienceDescription = experienceDescription;
    this.timeAtCompany = timeAtCompany;
    this.tags = tags;
  }
}

class DescriptionPoint {
  constructor(title, description) {
    this.title = title;
    this.description = description;
  }
}

const experience = [
  new WorkExperience(
    "DIscovery Ltd",
    [
      new DescriptionPoint(
        "Android Development Expertise:",
        "Spearheaded Android development efforts, contributing to the continuous improvement of the Discovery Member App. Leveraged cutting-edge technologies and best practices to ensure optimal performance and user experience."
      ),

      new DescriptionPoint(
        "Microservices Architecture:",
        "Collaborated on the development and maintenance of microservices written in Java to support the seamless operation of mobile (Android and iOS) and web applications. These services, powered by Spring Boot and Hazelcast for efficient caching of backend responses, played a critical role in delivering real-time data to users."
      ),

      new DescriptionPoint(
        "Performance Monitoring and Optimization:",
        "Implemented Dynatrace monitoring solutions to meticulously track and optimize the performance of microservices in production environments. Proactively addressed bottlenecks and inefficiencies, ensuring a smooth and responsive user experience."
      ),

      new DescriptionPoint(
        "Technology Migration:",
        "Embraced Kotlin as a strategic initiative to modernize the Discovery Member App. Actively participated in the migration process, mastering Kotlin's nuances and serving as a key reviewer during the transition phase. Contributed invaluable insights and expertise to streamline the migration process, resulting in enhanced codebase maintainability and developer productivity."
      ),
    ],
    "4 years",
    [
      { value: "Retrofit" },
      { value: "RxJava" },
      { value: "SpringBoot" },
      { value: "Java" },
      { value: "Kotlin" },
    ]
  ),
];

const D = (experience) => {
  const rows = [];
  for (var i = 0; i < experience.length; i++) {
    rows.push(Exp(experience[i]));
  }
  return (
    <>
      <div>{rows}</div>
    </>
  );
};

const Exp = (experienceDescription) => {
  return (
    <>
      <span>
        <h5>{experienceDescription.title}</h5>
        <p>{experienceDescription.description}</p>
      </span>
    </>
  );
};

function Experience() {
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col col-lg-2">
            <h3>{experience[0].companyName}</h3>
            <h4>{experience[0].timeAtCompany}</h4>
            <div>
              <TagCloud
                minSize={10}
                maxSize={15}
                tags={experience[0].tags}
                style={{ width: "13vw", textAlign: "left" }}
                colorOptions={{
                  luminosity: "bright",
                  hue: "green",
                }}
              />
            </div>
          </div>
          <div className="col col-lg-10">
            {D(experience[0].experienceDescription)}
          </div>
        </div>
      </div>
    </>
  );
}

export default Experience;
