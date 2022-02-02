import { useState, useEffect, useContext } from "react";
import { generateImage } from "../api/api";
import { Image, Transformation } from 'cloudinary-react';
import { DetailsContext } from "../context/DetailsProvider";

const Generate = () => {
  const [imagePath, setImagePath] = useState();

  // const [loading, setLoading] = useState(false);
  const { details } = useContext(DetailsContext);

  useEffect(() => {
    console.log(imagePath);
  }, []);

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
        <Image cloudName="triden47" publicId={imagePath}>
          {/* <Transformation crop="scale" width="700" /> */}
        </Image>
      )}
    </div>
  );
};

export default Generate;
