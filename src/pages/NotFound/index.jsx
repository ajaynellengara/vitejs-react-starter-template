import React from 'react';
import { Link } from 'react-router-dom';
import errorImage from '../../assets/images/error-img.png';
import './style.scss';

const ErrorPage = () => {
  return (
    <div className="error_wrapper">
      <img src={errorImage} alt="error-image" className="error_image" />
      <div className="btn_wrapper">
        <Link to="/" className="error_btn">
          back to home
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
