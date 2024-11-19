export class Project {
  constructor(thumbnail,logo, title, description, projectId, platform, tags,tint) {
    this.thumbnail = thumbnail;
    this.logo = logo;
    this.title = title;
    this.description = description;
    this.projectId = projectId;
    this.platform = platform;
    this.tags = tags;
    this.tint = tint;
  }
}
const path = "portfolio-site/assets/";
export const projects = [
  new Project(
    path + "clearscore2.png",
    path + "clearscoreIcn.png",
    "ClearScore",
    "I developed Node feature service endpoints using JavaScript to cater to frontend clients. Additionally, I made configuration changes in Scala backend services to handle services that needed to be rendered to specific markets. In Android development, I wrote features in Jetpack Compose using the MVVM architecture, while also conducting UI testing using Espresso.",
    "1",
    "Android",
    "Mvvm node scala kotin",
    "#4F777A"
  ),
  new Project(
    path + "discovery1.png",
    path + "discoveryIcn.png",
    "Discovery",
    "I developed custom animated views for Discovery's app and built microservices with Spring Boot for both web and mobile clients. I implemented a feature using the Google Maps API to help users locate various vendors. I also led my team in transitioning from Java to Kotlin and adopting the MVI design pattern.",
    "2",
    "Android",
    "Mvi rxJava spring-boot Java kotlin",
    "#105297"
  ),
  new Project(
    path + "standardbank2.png",
    path + "standardbankIcn.png",
    "Standard Bank",
    "I developed custom animated views for Discovery's app and built microservices with Spring Boot for both web and mobile clients. I implemented a feature using the Google Maps API to help users locate various vendors. I also led my team in transitioning from Java to Kotlin and adopting the MVI design pattern.",
    "4",
    "Android",
    "Mvvm volley compose kotlin",
    "#173B80"
  ),
  new Project(
    path + "budgetbliss2.png",
    path + "sqwareIcn.png",
    "Budget Bliss",
    "Budget Bliss is a native Android app built with Room for local database management and MVP architecture pattern with RxJava. It empowers users to track spending habits and income sources efficiently. With intuitive transaction recording and insightful reports, Budget Bliss promotes financial awareness and control with ease.",
    "3",
    "Android",
    "Mvp charts Room RxKotlin",
    "#1D82D4"
  ),
  new Project(
    path + "healthCare.png",
    path + "sqwareIcn.png",
    "Healing hand",
    "Health app using swiftUi with Mapkit",
    "5",
    "Ios",
    "SwiftUi MapKit",
    "#735499"
  ),
  new Project(
    path + "gymGuild.png",
    path + "sqwareIcn.png",
    "Gym Guild",
    "Gym app using compose animation to handle navigation transitions.",
    "6",
    "Android",
    "Animation",
    "#282F43"
  ),
  new Project(
    path + "learningLab.png",
    path + "sqwareIcn.png",
    "Learning Lab",
    "Learning platform using compose navigation with safe args.",
    "7",
    "Android",
    "Compose navigation",
    "#282F43"
  )
];

