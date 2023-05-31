import Style from '../assets/scss/modules/Carrousel.module.scss'
import { useEffect, useState } from 'react'

export default function Carrousel ({ images }) {
    const [currentImage, setCurrentImage] = useState(0);
    const prevImage = () => {
        setCurrentImage(currentImage === 0 ? images.length - 1 : currentImage - 1);
    };
    
    const nextImage = () => {
        setCurrentImage(currentImage === images.length - 1 ? 0 : currentImage + 1);
    };

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentImage(currentImage === images.length - 1 ? 0 : currentImage + 1);
        }, 3000);

        return () => {
            clearInterval(intervalId);
        };
    }, [currentImage, setCurrentImage]);
    
    const transitionStyles = {
        transform: `translateX(-${currentImage * 100}%)`,
        transition: 'transform .5s ease-in-out',
    };

    return (
        <section className={Style.Carrousel}>
            <ul className={Style.ListOfImages}>
                {images?.map((image, index) => (
                    <li key={index} className={Style.ImageElement} style={transitionStyles}>
                        <img key={index} src={image} alt={image} />
                    </li>
                ))}
            </ul>
            <p className={Style.ImagesCounter}>{currentImage + 1}/{images.length}</p>
            <aside className={Style.ImagesControl}>
                <button onClick={prevImage} className={Style.PreviousImage}>
                    <figure>
                        <svg width="100%" height="100%" viewBox="0 0 48 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M47.04 7.78312L39.92 0.703125L0.359985 40.3031L39.96 79.9031L47.04 72.8231L14.52 40.3031L47.04 7.78312Z" fill="white"/>
                        </svg>
                    </figure>
                </button>
                <button onClick={nextImage} className={Style.NextImage}>
                    <figure>
                        <svg width="100%" height="100%" viewBox="0 0 48 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0.960022 72.3458L8.04002 79.4258L47.64 39.8258L8.04002 0.22583L0.960022 7.30583L33.48 39.8258L0.960022 72.3458Z" fill="white"/>
                        </svg>
                    </figure>
                </button>
            </aside>
        </section>
    )
}