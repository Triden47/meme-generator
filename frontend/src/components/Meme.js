import { useState, useEffect } from "react";
import { Image, Transformation } from "cloudinary-react";

//Components
import { generateImage } from "../api/api";

const Meme = ({ imagePath }) => {
  const [doodle, setDoodle] = useState(false);
  const [top, setTop] = useState("");
  const [bottom, setBottom] = useState("");

  useEffect(() => {
    setDoodle(false);
    setTop("");
    setBottom("");
  }, [imagePath]);

  const imageGenerate = () => {
    // setDoodle(false);
    generateImage({ path: imagePath, topText: top, bottomText: bottom });
  };

  return (
    <div>
      <div>
        <div className="img-div">
          <Image cloudName="triden47" publicId={imagePath}>
            <Transformation crop="scale" width="700" />
          </Image>
          <h1 className="top-text">{top}</h1>
          <h1 className="bottom-text">{bottom}</h1>
        </div>
      </div>

      {!doodle ? (
        <button onClick={() => setDoodle(true)}>Let's go with it</button>
      ) : (
        <button
          onClick={() => {
            imageGenerate();
          }}
        >
          Generate the meme
        </button>
      )}
      {doodle && (
        <div>
          <input
            type="text"
            placeholder="Enter top text"
            value={top}
            onInput={(e) => setTop(e.target.value)}
          />
          <input
            type="text"
            placeholder="Enter bottom text"
            value={bottom}
            onInput={(e) => setBottom(e.target.value)}
          />
        </div>
      )}
    </div>
  );
};

export default Meme;
