import { useState } from "react";
import { addImage } from "../api/api";
const Insert = () => {
  const [file, setFile] = useState();
  const submit = async (event) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", "eeqw5ln2");

    addImage(formData);
  };
  return (
    <div>
      <form onSubmit={submit}>
        <input
          filename={file}
          onChange={(e) => setFile(e.target.files[0])}
          type="file"
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Insert;
