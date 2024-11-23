import React from 'react';
import './nextContent.css';
import JavaLogo from '../Images/Logos/javalogo.png';
import JavascriptLogo from '../Images/Logos/JavaScriptlogo.png';
import PythonLogo from '../Images/Logos/pythonlogo.png';
import HtmlLogo from '../Images/Logos/htmllogo.png';
import CssLogo from '../Images/Logos/csslogo.png';
import PhpLogo from '../Images/Logos/phplogo.png';
import MySqlLogo from '../Images/Logos/mysqllogo.png';
import ReactJsLogo from '../Images/Logos/reactjslogo.png';
import AngularLogo from '../Images/Logos/angularlogo.png';
import IonicLogo from '../Images/Logos/ioniclogo.png';
import SpringBootLogo from '../Images/Logos/springbootlogo.png';

const NextContent = () => {
    return (
        <div className="about-container my-5">
                    <h1 className="display-4 roboto-regular" style={{ letterSpacing: '5px', paddingTop: "65px" }}>
                        About
                    </h1>
            <div className="container d-flex flex-column flex-md-row align-items-start justify-content-center">
                <div className="gallery-wrapper container d-flex flex-wrap flex-md-column me-md-5" style={{ paddingRight: "50px" }}>
                    <div className="gallery">
                        <span style={{ "--i": 1 }}>
                            <img src={JavaLogo} alt="Java Logo" />
                        </span>
                        <span style={{ "--i": 2 }}>
                            <img src={PythonLogo} alt="Python Logo" />
                        </span>

                        <span style={{ "--i": 3 }}>
                            <img src={PhpLogo} alt="PHP Logo" />
                        </span>
                        <span style={{ "--i": 4 }}>
                            <img src={MySqlLogo} alt="MySQL Logo" />
                        </span>
                    </div>
                    <div className="gallery">
                        <span style={{ "--i": 5 }}>
                            <img src={HtmlLogo} alt="HTML5 Logo" />
                        </span>
                        <span style={{ "--i": 6 }}>
                            <img src={CssLogo} alt="CSS Logo" />
                        </span>
                        <span style={{ "--i": 7 }}>
                            <img src={JavascriptLogo} alt="JavaScript Logo" />
                        </span>
                    </div>
                    <div className="gallery">
                        <span style={{ "--i": 8 }}>
                            <img src={ReactJsLogo} alt="ReactJS Logo" />
                        </span>
                        <span style={{ "--i": 9 }}>
                            <img src={AngularLogo} alt="Angular Logo" />
                        </span>
                        <span style={{ "--i": 10 }}>
                            <img src={IonicLogo} alt="Ionic Logo" />
                        </span>
                        <span style={{ "--i": 11 }}>
                            <img src={SpringBootLogo} alt="Spring Boot Logo" />
                        </span>
                    </div>
                </div>
                <div className="container text-content1 ms-md-3" style={{ paddingLeft: "60px" }}>
                    <p className="robot-thin adjust-font">
                        I'm a Computer Science Student at Mapúa University specializing in Application Development.
                        Throughout my journey as a student, I have developed projects that uses Java, JavaScript,
                        Python, HTML, CSS, PHP, and MySQL. I also have experience using frameworks such as ReactJS,
                        Angular, Ionic, and Spring Boot.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default NextContent;
