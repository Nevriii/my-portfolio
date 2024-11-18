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
                <div className="text-content ms-md-1 text-center text-md-start concept-seven">
                    <h1 className="display-4 roboto-thin ms-md-1">
                        <span className="animated-word hello" data-word="Hello,">Hello,</span>
                        <span className="animated-word i" data-word="I">I</span>
                        <span className="animated-word am" data-word="am">am</span>{' '}
                        <span className="animated-word name text-info roboto-regular" data-word="Ervin">Ervin</span>
                    </h1>
                    <p className="text-content ms-md-2 text-center text-md-start roboto-light concept-three">
                        An aspiring <span className="animated-profession roboto-black text-success" data-word="Software Engineer">Software Engineer</span>
                    </p>
                </div>
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
            <div
                className="position-absolute bottom-0 start-0 ms-2 mb-2"
                style={{ width: '100px', paddingLeft: '50px', paddingTop: '70px' }}
            >
                <p 
                    className="text-content mb-0"
                    style={{ paddingBottom: '20px', letterSpacing: '5px', fontSize: '12px'}}    
                >
                    SCROLL
                </p>
                <div 
                    className="d-flex flex-column align-items-center"
                    style={{ paddingLeft: '6px'}}
                >
                    <div
                        className="rounded-circle bg-secondary"
                        style={{ width: '5px', height: '5px' }}
                    ></div>
                    <div
                        className="bg-secondary"
                        style={{ width: '0.5px', height: '50px' }}
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
