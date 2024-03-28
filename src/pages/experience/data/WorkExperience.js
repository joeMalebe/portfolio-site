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
      { value: "Kotlin"},
      { value: "Java" },
      { value: "Dynatrace" },
      { value: "Google analytics" },
      { value: "MVI" },
      { value: "Microservice" },
      { value: "Google maps" },
    ]
  ),
  new WorkExperience(
    "ClearScore",
    [
      new DescriptionPoint(
        "Team of the Year Award:",
        "Honored as part of the award-winning team, recognized for our outstanding contributions to ClearScore's success. Our consistent delivery of major projects to diverse markets underscored our team's commitment to excellence and innovation."
      ),
      new DescriptionPoint(
        "Backend Service Development:",
        "Collaborated on the design, development, and maintenance of Node feature services tailored to cater to the needs of mobile clients across iOS and Android platforms. Utilized JavaScript to craft robust and scalable backend solutions, ensuring seamless integration with mobile applications."
      ),

      new DescriptionPoint(
        "Cross-Platform Collaboration:",
        "Engaged in cross-functional collaboration, working closely with colleagues from diverse backgrounds to deliver feature-rich experiences to users. Played a pivotal role in bridging the gap between mobile and backend development teams, facilitating efficient communication and project execution."
      ),

      new DescriptionPoint(
        "Technology Stack Mastery:",
        "Expanded my skill set by gaining hands-on experience with Scala, contributing to the development of specialized backend services for local clients. This diversification of expertise enabled me to deliver tailored solutions to meet the unique requirements of different markets."
      ),

      new DescriptionPoint(
        "Feature Delivery:",
        "Led the delivery of key features, including in-app notifications, home page refresh functionality, and Betterscore enhancements, targeting ClearScore's South African and Australian markets. These initiatives not only enriched the user experience but also contributed to the company's market expansion efforts."
      ),
      new DescriptionPoint(
        "Performance Monitoring:",
        "Implemented robust performance monitoring solutions, leveraging tools such as Amplitude and SignalFx to meticulously monitor feature performance in production environments. Proactively identified and addressed performance bottlenecks, ensuring optimal user experience and system reliability."
      ),
      new DescriptionPoint(
        "Technology Migration:",
        "Embraced Kotlin as a strategic initiative to modernize the Discovery Member App. Actively participated in the migration process, mastering Kotlin's nuances and serving as a key reviewer during the transition phase. Contributed invaluable insights and expertise to streamline the migration process, resulting in enhanced codebase maintainability and developer productivity."
      ),
    ],
    "1 year",
    [
      { value: "Coroutines" },
      { value: "Scala" },
      { value: "Jetpack Compose" },
      { value: "Amplitude" },
      { value: "SignalFx" },
      { value: "Mvvm" },
      { value: "Javascript" },
      { value: "Node" },
      { value: "Kotlin" },
    ]
  )
];

export default getExperiences;