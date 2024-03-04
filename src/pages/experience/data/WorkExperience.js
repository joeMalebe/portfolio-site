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

const getExperiences = [
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
      { value: "Dynatrace" },
      { value: "Google analytics" },
      { value: "MVI" },
      { value: "Microservice" },
      { value: "Google maps" },
    ]
  ),
];

export default getExperiences;