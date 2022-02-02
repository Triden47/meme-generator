import { React, useState, useEffect } from "react";

//Components
import { addImage, getImages } from "../api/api";
import Meme from "./Meme";

const Home = () => {
  const [file, setFile] = useState();

  const [imagePath, setImagePath] = useState();
  const [loading, setLoading] = useState(0);

  useEffect(() => {
    console.log(imagePath);
  }, [imagePath]);

  useEffect(() => {
    const getImagePath = async () => {
      const data = await getImages();
      setImagePath(data.imageData.public_id);
    };
    if (loading) getImagePath();
  }, [loading]);

  const submit = async (event) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", "eeqw5ln2");

    addImage(formData);
  };

  const submit1 = async (event) => {
    event.preventDefault();
    setLoading(loading + 1);
  };
  return (
    <div className="">
      <form onSubmit={submit}>
        <input
          filename={file}
          onChange={(e) => setFile(e.target.files[0])}
          type="file"
        />
        <button type="submit">Submit</button>
      </form>
      <form onSubmit={submit1}>
        <button type="submit">Get a meme!</button>
      </form>

      {imagePath && <Meme imagePath={imagePath} />}
    </div>
  );
}

export default Home;
