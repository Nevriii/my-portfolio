import React, { useState, useEffect } from 'react';
import './Content.css';
import BarongPic from '../Images/barong-pic.png';
import GradPic from '../Images/grad-pic.png';
import 'bootstrap/dist/css/bootstrap.min.css';

const images = [BarongPic, GradPic];


const Content = () => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const images = [ BarongPic, GradPic ];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 3000);

        const handleScroll = () => {
            const auroraItems = document.querySelectorAll(".aurora__item");
            const textContent = document.querySelector(".text-content");

            auroraItems.forEach((auroraItem) => {
                const auroraRect = auroraItem.getBoundingClientRect();
                const textRect = textContent.getBoundingClientRect();

                // Check if the aurora item overlaps with the text content
                if (
                    auroraRect.top < textRect.bottom &&
                    auroraRect.bottom > textRect.top &&
                    auroraRect.left < textRect.right &&
                    auroraRect.right > textRect.left
                ) {
                    textContent.classList.add("text-black");
                } else {
                    textContent.classList.remove("text-black");
                }
            });
        };

        //event listener for scroll
        window.addEventListener("scroll", handleScroll);

        // Cleanup function to clear interval and remove event listener
        return () => {
            clearInterval(interval);
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <div className="container d-flex flex-column flex-md-row align-items-center justify-content-center my-5">
            <div className="d-flex flex-column flex-md-row align-items-center justify-content-center my-5">
                <div className="ms-md-1 text-center text-md-start concept-seven">
                    <h1 className="display-4 roboto-thin ms-md-1">
                        <span className="text-content"></span>
                        <span className="text-content animated-word hello" data-word="Hello," style={{ fontSize:"50px" }}>Hello,</span>
                        <span className="text-content animated-word i" data-word="I" style={{ fontSize:"50px" }}>I</span>{' '}
                        <span className="text-content animated-word am" data-word="am" style={{ fontSize:"50px" }}>am</span>{' '}
                        <span className="text-content animated-word name text-info roboto-bold" data-word="Ervin" style={{ fontSize:"50px" }}>Ervin</span>
                    </h1>
                    <p className="text-content ms-md-2 text-center text-md-start roboto-light">
                        An aspiring <span className="animated-profession roboto-black text-success" data-word="Software Engineer">Software Engineer</span>
                    </p>
                </div>
            </div>
            <div className="d-flex justify-content-center me-md-5">
                <div className="slider" style={{ paddingBottom: '60px' }}>
                    {images.map((image, index) => (
                        <div
                            className={`slider-image ${index === currentImageIndex ? 'active' : ''}`}
                            key={index}
                            style={{backgroundImage: `url(${image})`}}
                        ></div>
                    ))}
                </div>
            </div>
            <div
                className="position-absolute bottom-0 start-0 ms-2 mb-2"
                style={{ width: '100px', paddingLeft: '60px', paddingTop: '80px' }}
            >
                <p 
                    className="text-content mb-0"
                    style={{ paddingBottom: '5px', letterSpacing: '6px', fontSize: '12px'}}    
                >
                    SCROLL
                </p>
                <div 
                    className="d-flex flex-column align-items-center"
                    style={{ paddingLeft: '25px'}}
                >
                    <div
                        className="bg-secondary"
                        style={{ width: '0.5px', height: '60px' }}
                    ></div>
                </div>
            </div>
            <div className="aurora">
                <div className="aurora__item"></div>
                <div className="aurora__item"></div>
                <div className="aurora__item"></div>
                <div className="aurora__item"></div>
            </div>
        </div>
    );
};

export default Content;
