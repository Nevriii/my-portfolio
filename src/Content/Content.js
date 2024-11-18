import React, { useState, useEffect } from 'react';
import './Content.css';
import BarongPic from '../Images/barong-pic-bg.jpg';
import GradPic from '../Images/grad-pic-bg.jpg';
import 'bootstrap/dist/css/bootstrap.min.css';

const images = [BarongPic, GradPic]; // Add more classes if you have more images


const Content = () => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 3000); // Change image every 3 seconds

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="container d-flex flex-column flex-md-row align-items-center justify-content-center my-5">
            <div className="text-content ms-md-1 text-center text-md-start concept-seven">
                <h1 className="display-4 roboto-thin ms-md-1">
                    <span className="animated-word hello" data-word="Hello,">Hello,</span>
                    <span className="animated-word i" data-word="I">I</span>
                    <span className="animated-word am" data-word="am">am</span>
                    <span className="animated-word name text-info roboto-regular" data-word="Ervin">Ervin</span>
                </h1>
                <p className="text-content ms-md-2 text-center text-md-start roboto-light concept-three">
                    An aspiring <span className="animated-profession roboto-black text-success" data-word="Software Engineer">Software Engineer</span>
                </p>
            </div>
            <div className="d-flex justify-content-center me-md-5">
                <div className="slider">
                    {images.map((image, index) => (
                        <div
                            className={`slider-image ${index === currentImageIndex ? 'active' : ''}`}
                            key={index}
                            style={{backgroundImage: `url(${image})`}}
                        ></div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Content;
