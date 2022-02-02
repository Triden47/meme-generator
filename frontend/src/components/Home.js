import { React, useState, useEffect } from "react";

//Components
import { getImages } from "../api/api";
import Insert from "./Insert";
import Meme from "./Meme";


const Home = () => {
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
    setLoading(loading + 1);
  };
  return (
    <section id="home">
      <Insert />
      <form onSubmit={submit}>
        <button type="submit">
          Get a meme !
        </button>
      </form>

      {imagePath && <Meme imagePath={imagePath} />}
    </section>
  );
};

export default Home;
