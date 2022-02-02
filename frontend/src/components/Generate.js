import { useState, useEffect, useContext } from "react";
import { Image } from "cloudinary-react";

//Components
import { DetailsContext } from "../context/DetailsProvider";
import { generateImage } from "../api/api";
import Share from "./Share";

const Generate = () => {
  const [imagePath, setImagePath] = useState();
  const { details } = useContext(DetailsContext);

  useEffect(() => {
    const getImagePath = async () => {
      const data = await generateImage(details);
      console.log(data);
      setImagePath(data);
    };
    getImagePath();
  }, []);

  return (
    <div>
      {imagePath && (
        <div>
          <div className="generated-img">
            <Image cloudName="triden47" publicId={imagePath}>
              {/* <Transformation crop="scale" width="700" /> */}
            </Image>
          </div>
          <div>
            <Share
              imagePath={`https://res.cloudinary.com/triden47/image/upload/${imagePath}`}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Generate;
