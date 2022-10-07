import { useState, useEffect } from "react";
import Gallery from "./Gallery";

function GetImages() {
  const [images, setImages] = useState([]);
  useEffect(() => {
    const fetchImages = async () => {
      const response = await fetch(
        "https://api.unsplash.com/photos/?client_id=2mRxqs8Cw7BybkmW0t0-Py37RUAmU6ib6nlUxKXdPiE&per_page=30&page=1"
      );
      const data = await response.json();
      setImages(data);
      console.log(data);
    };

    fetchImages();
  }, []);
  return (
    <div>
      {!images ? (
        <h2>loading .......</h2>
      ) : (
        <div>
          <Gallery galleryImages={images} />
        </div>
      )}
    </div>
  );
}

export default GetImages;
