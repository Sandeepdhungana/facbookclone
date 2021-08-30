import { useState } from "react";

const useUploadImage = () => {
  const [data, setData] = useState();
  const [postFrontImage, setFrontPostImage] = useState();

  const uploadImage = (imageFile) => {
    const data = imageFile ? new FormData() : "";
    if (imageFile) {
      data.append("file", imageFile);
      data.append("upload_preset", "facebookclone");
      data.append("cloud_name", "facebookclone");

      setData(data);

      setFrontPostImage(URL.createObjectURL(imageFile));
    }
  };

  return { data, postFrontImage, uploadImage };
};

export { useUploadImage };
