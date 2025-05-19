import { useEffect, useState, type JSX } from "react";
import Loader from '../../components/Loader/Loader'
import styles from "./Lesson10.module.css";
import MyGallery from '../../components/myGallery/MyGallery'
import type { GalleryItem } from "../../components/myGallery/GalleryItem";



export default function Lesson10(): JSX.Element {
  useEffect(() => {
    document.title = "Homework 10: Random Facts about cats";
  }, []);

    const [loading, setLoading] = useState(true);

    const [gallery, setGallery] = useState<GalleryItem[]>([]);

    const fetchImage = async (): Promise<string> => {
    const res = await fetch("https://api.thecatapi.com/v1/images/search");
    const data = await res.json();
    return data[0].url;
  };

  const fetchFact = async (): Promise<string> => {
    const res = await fetch("https://catfact.ninja/fact");
    const data = await res.json();
    return data.fact;
  };

  const addGallery = async () => {
    const fact = await fetchFact();
    const image = await fetchImage();
    setGallery((prev) => [...prev, { fact, image }]);
    setTimeout(() => {
      setLoading(false);
    }, 400);
  };

  const clearGallery = () => {
    setGallery([]);
  };

  useEffect(() => {
    setLoading(true);
    addGallery();
  }, []);

  return (
    <div className={styles.container}>
      {loading ? (
        <Loader/>
      ) : (
        <>
          <MyGallery gallery={gallery} onAdd={addGallery} onClear={clearGallery} />
        </>
      )}
    </div>
  );
}
