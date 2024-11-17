import React from 'react';
import './Content.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import BarongPic from '../Images/barong-pic.jpg';

const Content = () => {
    return (
        <div className="container d-flex align-items-center justify-center-between my-5">
            <div className='ms-5'>
                <h1 className="display-4 roboto-thin ms-5">
                    Hello, I am <span className="roboto-black text-info w-75 p-3">Ervin</span>
                </h1>
                <p className="roboto-light">
                    An aspiring <span className="roboto-black text-success">Software Engineer</span>
                </p>
            </div>
            <div className="d-flex justify-content-center me-5">
                <img
                    src={BarongPic}
                    alt="Ervin Pogi !!"
                    className="rounded shadow me-5"
                    style={{ width: '350px', height: '350px' }}
                />
            </div>
        </div>
    );
};

export default Content;