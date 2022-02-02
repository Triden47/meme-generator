import axios from "axios";

const url = "http://localhost:5000";

export const addImage = async (data) => {
  try {
    return await axios
      .post("https://api.cloudinary.com/v1_1/triden47/image/upload", data)
      .then((response) => {
        // console.log(response.data);
        addImageData(response.data);
        return response;
      });
  } catch (error) {
    console.log("Error while calling addImage api", error);
  }
};

const addImageData = async (data) => {
  console.log(data);
  try {
    return await axios.post(`${url}/api/images`, data);
  } catch (error) {
    console.log("Error while calling addImageData", error);
  }
};

export const getImages = async () => {
  try {
    const imageData = await axios.get(`${url}/images`);
    // console.log(imageData.data);
    return imageData.data;
  } catch (error) {
    console.log("Error while calling getImages api", error);
  }
};

export const generateImage = async (data) => {
  console.log(data);
  try {
    const path = await axios.post(`${url}/api/generate`, data);
    console.log("yes");
    console.log(path);
    return path.data.result.public_id;
  } catch (error) {
    console.log("Error while calling generateImageData", error);
  }
};
