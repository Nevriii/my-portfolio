import React from 'react';
import './nextContent.css';

const NextContent = () => {
    return (
        <div className="about-container">
            {/* Content Section */}
            <div className="content-wrapper">
                <div className="container d-flex flex-column flex-md-row align-items-center justify-content-center my-5">
                    
                    {/* Text Content */}
                    <div className="text-content ms-md-1 text-center text-md-start">
                        <h1 
                            className="display-4 roboto-regular ms-md-1" 
                            style={{ letterSpacing: '5px' }}
                        >
                            About
                        </h1>
                        <p className="text-content ms-md-2 text-center text-md-start robot-light">
                            I'm a Computer Science Student at Mapúa University specializing in Application Development.
                            Throughout my journey as a student, I have developed projects that use Java, Javascript,
                            Python, HTML, CSS, PHP, and MYSQL. I also have experience using frameworks such as ReactJS,
                            Angular, Ionic, and Spring Boot.
                        </p>
                    </div>
                    
                    {/* Placeholder for Additional Content */}
                    <div className="d-flex justify-content-center me-md-5">
                        {/* Additional content or image can go here */}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NextContent;
