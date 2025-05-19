
import type { JSX } from 'react';
import styles from './myGallery.module.css'
import type { GalleryItem } from './GalleryItem';

interface MyGalleryProps{
gallery: GalleryItem[];
  onAdd: () => void;
  onClear: () => void;
}
export default function MyGallery({gallery, onAdd, onClear}:MyGalleryProps):JSX.Element {
    
  return (
    <div className={styles.galleryWrapper}>
      <div className={styles.buttonGroup}>
        <button onClick={onAdd}>GET MORE INFO</button>
        <button onClick={onClear}>DELETE ALL DATA</button>
      </div>

      <div className={styles.gallery}>
        {gallery.map((item, index) => (
          <div key={index} className={styles.galleryItem}>
            <img src={item.image} alt="Kat" className={styles.catImage} />
            <p className={styles.catFact}>{item.fact}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

