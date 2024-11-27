import React, { useEffect } from 'react';
import './thirdContent.css';
import './thirdContent.scss';
import Image1 from '../Images/Certificates/software_development_process_and_methodologies.png';
import Image2 from '../Images/Certificates/essential_tools_for_app_dev.png';
import Image3 from '../Images/Certificates/greedy_algorithms.png';
import Image4 from '../Images/Certificates/data_warehouse.png';
import Image5 from '../Images/Certificates/intro_to_ai_cert.png';
import Image6 from '../Images/Certificates/intro_to_data_sci.png';
import Image7 from '../Images/Certificates/version_control_git.png';
import Image8 from '../Images/Certificates/engineering_practices.png';

const ThirdContent = () => {

    const photos = [
        Image1, Image2, Image3, Image4,
        Image5, Image6, Image7, Image8
    ];

    useEffect(() => {
        const timer = setTimeout(() => {
          const nextSection = document.getElementById('next-content');
          if (nextSection) {
            nextSection.scrollIntoView({ behavior: 'smooth' });
          }
        }, 8000);
    
        return () => clearTimeout(timer);
      }, []);

    return (
        <div className="mainContent-container my-5">
            <h1 className="display-4 roboto-regular" style={{ letterSpacing: "5px", paddingTop: "65px" }}>
                <section className="animation">
                    <div className="first"><div>Experience</div></div>
                    <div className="second"><div>Certificates</div></div>
                </section>
            </h1>
            <div className="container d-flex flex-column flex-md-row align-items-start justify-content-center">
                <div className="text-content1 ms-md-3">
                    <p className="roboto-thin adjust-font">
                        I have interned as a QA Engineer at Achieve Without Borders, Inc.
                        It was a learning experience trying out new role that I haven't focused on.
                        <br /><br />
                        I have an intermediate freelancing experience, where it focuses on accepting student's
                        programming related projects.
                    </p>
                </div>
            
                <div className="image-container d-flex justify-content-center">
                    {photos.map((photo, index) => (
                        <figure key={index}>
                            <img src= {photo} alt= {`Photo ${index + 1}`} width= "100" height= "100" />
                        </figure>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ThirdContent;