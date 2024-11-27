import React from 'react';
import './thirdContent.css';
import './thirdContent.scss';

const ThirdContent = () => {

    return (
        <div className="mainContent-container my-5">
            <h1 className="display-4 roboto-regular" style={{ letterSpacing: "5px", paddingTop: "65px" }}>
                Experience
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
            </div>
        </div>
    );
};

export default ThirdContent;