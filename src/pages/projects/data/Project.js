export class Project {
  constructor(thumbnail, title, description, projectId) {
    this.thumbnail = thumbnail;
    this.title = title;
    this.description = description;
    this.projectId = projectId;
  }
}

export const projects = [
  new Project(
    "../assets/clearscore.png",
    "ClearScore",
    "I developed Node feature service endpoints using JavaScript to cater to frontend clients. Additionally, I made configuration changes in Scala backend services to handle services that needed to be rendered to specific markets. In Android development, I wrote features in Jetpack Compose using the MVVM architecture, while also conducting UI testing using Espresso.",
    "1"
  ),
  new Project(
    "../assets/discovery.png",
    "Discovery",
    "I developed Node feature service endpoints using JavaScript to cater to frontend clients. Additionally, I made configuration changes in Scala backend services to handle services that needed to be rendered to specific markets. In Android development, I wrote features in Jetpack Compose using the MVVM architecture, while also conducting UI testing using Espresso.",
    "2"
  ),
];

