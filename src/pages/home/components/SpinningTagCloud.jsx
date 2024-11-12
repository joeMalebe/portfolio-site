import { TagCloud } from "@frank-mayer/react-tag-cloud";
import "./SpinningTagCloud.scss";

export function SpinningTagCloud() {
  return (
    <TagCloud className="Tagcloud"
      options={(window) => ({
        radius: Math.min(400, window.innerWidth, window.innerHeight) / 2,
        maxSpeed: "fast",
      })}
      style={{fontFamily: "roboto"}}
      onClick={(tag, event) => {}/*alert(tag)*/}
      onClickOptions={{ passive: true }}
    >
      {[
        "Android",
        "Kotlin",
        "Java",
        "Node",
        "SpringBoot",
        "JetPack",
        "JavaScript",
        "Backbase",
        "RxJava",
        "RoomDB",
        "Microservice",
        "MVVM",
        "Firebase",
      ]}
    </TagCloud>
  );
}

export function SpinningTagClouds({sptags}) {
  return (
    <>
    <TagCloud  className="Tagcloud"
      options={(window) => ({
        radius: Math.min(300, window.innerWidth, window.innerHeight) / 2,
        maxSpeed: "fast",
      })}
      onClick={(tag, event) => alert(tag)}ß
      onClickOptions={{ passive: true }}
    >
      {sptags}
    </TagCloud>
    </>
  );
}
export default SpinningTagCloud;

