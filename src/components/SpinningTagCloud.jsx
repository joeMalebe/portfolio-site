import { TagCloud } from "@frank-mayer/react-tag-cloud";
import "../SpinningTagCloud.scss";



function SpinningTagCloud() {
  return (
    <TagCloud className="Tagcloud"
      options={(window) => ({
        radius: Math.min(300, window.innerWidth, window.innerHeight) / 2,
        maxSpeed: "fast",
      })}
      onClick={(tag, event) => alert(tag)}
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
        "RxJava",
        "RoomDB",
        "Firebase",
      ]}
    </TagCloud>
  );
}
export default SpinningTagCloud;
