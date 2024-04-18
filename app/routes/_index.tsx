import { Annotorious, ImageAnnotator } from "@annotorious/react";
import "@annotorious/react/annotorious-react.css";

export default function Index() {
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.8" }}>
      <h1>Welcome to Remix</h1>
      <Annotorious>
        <ImageAnnotator>
          <img src="my-image.jpg" alt="Example" />
        </ImageAnnotator>
      </Annotorious>
    </div>
  );
}
