
import React, { useState, useEffect, useRef } from 'react';

const ImageGallery = () => {
  const [images, setImages] = useState([]);
  const observer = useRef();

  useEffect(() => {
    observer.current = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const lazyImage = entry.target;
          lazyImage.src = lazyImage.dataset.src;
          observer.current.unobserve(lazyImage);
        }
      });
    });

    const lazyImages = document.querySelectorAll('.lazy');
    lazyImages.forEach(image => {
      observer.current.observe(image);
    });

    return () => {
      if (observer.current) {
        observer.current.disconnect();
      }
    };
  }, []);

  useEffect(() => {
    fetch('https://api.unsplash.com/photos/?client_id=NfipXD_KjFMJYkBo5LcpHFhORrAn1zkVbEqE-0f6vGg')
      .then(response => response.json())
      .then(data => {
        setImages(data);
      })
      .catch(error => {
        console.error('Error fetching images: ', error);
      });
  }, []);

  return (
    <div className="image-gallery">
      {images.map(image => (
        <img
          key={image.id}
          className="lazy"
          data-src={image.urls.small}
          alt={image.alt_description}
        />
      ))}
    </div>
  );
};

export default ImageGallery;
