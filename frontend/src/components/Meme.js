import { useState, useEffect, useContext } from "react";
import { Image, Transformation } from "cloudinary-react";

//Components
import { useNavigate } from "react-router-dom";
import { DetailsContext } from "../context/DetailsProvider";

const Meme = ({ imagePath }) => {
  const [doodle, setDoodle] = useState(false);
  const [top, setTop] = useState("");
  const [bottom, setBottom] = useState("");
  const [color, setColor] = useState("white");
  const { setDetails } = useContext(DetailsContext);

  useEffect(() => {
    setDoodle(false);
    setTop("");
    setBottom("");
  }, [imagePath]);

  const navigate = useNavigate();
  const routeChange = () => {
    setDetails({
      path: imagePath,
      topText: top,
      bottomText: bottom,
      color: color.toUpperCase(),
    });
    let path = "/generate";
    navigate(path);
  };

  return (
    <div>
      <div>
        <div className="img-div">
          <Image cloudName="triden47" publicId={imagePath}>
            <Transformation crop="scale" width="400" />
          </Image>
          <h1 className="top-text" style={{ color: color }}>
            {top}
          </h1>
          <h1 className="bottom-text" style={{ color: color }}>
            {bottom}
          </h1>
        </div>
      </div>

      {!doodle ? (
        <button onClick={() => setDoodle(true)}>Let's go with it</button>
      ) : (
        <button style={{ padding: "20px" }}onClick={routeChange}>Generate the meme</button>
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
            <button
              onClick={() => {
                color === "white" ? setColor("black") : setColor("white");
              }}
            >
              Text Color!
            </button>
        </div>
      )}
    </div>
  );
};

export default Meme;
