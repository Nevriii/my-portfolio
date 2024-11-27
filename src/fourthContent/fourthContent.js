import React, { useEffect } from 'react';
import './fourthContent.scss';
import Image1 from '../Images/Certificates/software_development_process_and_methodologies.png';
import Image2 from '../Images/Certificates/essential_tools_for_app_dev.png';
import Image3 from '../Images/Certificates/greedy_algorithms.png';
import Image4 from '../Images/Certificates/data_warehouse.png';
import Image5 from '../Images/Certificates/intro_to_ai_cert.png';
import Image6 from '../Images/Certificates/intro_to_data_sci.png';
import Image7 from '../Images/Certificates/version_control_git.png';
import Image8 from '../Images/Certificates/engineering_practices.png';

const FourthContent = () => {
  const Photo = [Image1, Image2, Image3, Image4, Image5, Image6, Image7, Image8];

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
    <div className="content-wrapper"> {/* Acts as the `body` replacement */}
      <div className="photo-gallery">
        <h1 className="gallery-title">Certificates</h1>
        {Photo.map((photo, index) => (
          <figure key={index}>
            <img src={photo} alt={`Certificate ${index + 1}`} />
          </figure>
        ))}
      </div>
    </div>
  );
};

export default FourthContent;
