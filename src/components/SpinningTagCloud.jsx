import { TagCloud } from "@frank-mayer/react-tag-cloud";
import "../SpinningTagCloud.scss";
function SpinningTagCloud() {
  return (
    <TagCloud
      options={(window) => ({
        radius: Math.min(200, window.innerWidth, window.innerHeight) / 2,
        maxSpeed: "fast",
      })}
      onClick={(tag, event) => alert(tag)}
      onClickOptions={{ passive: true }}
    >
      {[
        "VSCode",
        "TypeScript",
        "React",
        "Preact",
        "Parcel",
        "Jest",
        "Next",
        "ESLint",
        "Framer Motion",
        "Three.js",
      ]}
    </TagCloud>
  );
}
export default SpinningTagCloud;
