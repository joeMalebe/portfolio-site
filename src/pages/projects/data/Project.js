export class Project {
  constructor(thumbnail, title, description, projectId) {
    this.thumbnail = thumbnail;
    this.title = title;
    this.description = description;
    this.projectId = projectId;
  }
}
const path = "./assets/";
export const projects = [
  new Project(
    path + "clearscore.png",
    "ClearScore",
    "I developed Node feature service endpoints using JavaScript to cater to frontend clients. Additionally, I made configuration changes in Scala backend services to handle services that needed to be rendered to specific markets. In Android development, I wrote features in Jetpack Compose using the MVVM architecture, while also conducting UI testing using Espresso.",
    "1"
  ),
  new Project(
    path + "discovery.png",
    "Discovery",
    "I developed custom animated views for Discovery's app and built microservices with Spring Boot for both web and mobile clients. I implemented a feature using the Google Maps API to help users locate various vendors. I also led my team in transitioning from Java to Kotlin and adopting the MVI design pattern.",
    "2"
  ),
  new Project(
    path + "budgetBliss.png",
    "Budget Bliss",
    "Budget Bliss is a native Android app built with Room for local database management and MVP architecture pattern with RxJava. It empowers users to track spending habits and income sources efficiently. With intuitive transaction recording and insightful reports, Budget Bliss promotes financial awareness and control with ease.",
    "3"
  )
];

