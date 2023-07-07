import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Header } from '../components/Header';
import { Home } from '../pages/Home';
import ErrorPage from '../pages/NotFound/index';
import Footer from '../components/Footer';

function Layout() {
  return (
    <>
      {/* <div className='layout-side'>
                <SideContent />
            </div> */}
      <Router>
        <Header />
        <div className="page_wrapper">
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="*" element={<ErrorPage />} />
          </Routes>
        </div>
        <Footer />
      </Router>
    </>
  );
}

export default Layout;
