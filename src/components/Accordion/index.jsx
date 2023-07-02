import React, { useEffect, useState, useRef, useImperativeHandle } from 'react';
// import './style';

const Accordion = React.forwardRef(
  ({ title, content, isOpenDefault, closeOnOutsideClick }, ref) => {
    const [isOpen, setIsOpen] = useState(isOpenDefault || false);
    const accordionRef = useRef(null);

    const toggleAccordion = () => {
      setIsOpen((prevOpen) => !prevOpen);
    };

    const handleClickOutside = (event) => {
      if (
        closeOnOutsideClick &&
        accordionRef.current &&
        !accordionRef.current.contains(event.target)
      ) {
        setIsOpen(false);
      }
    };

    useEffect(() => {
      if (closeOnOutsideClick) {
        document.addEventListener('click', handleClickOutside);
      }
      return () => {
        if (closeOnOutsideClick) {
          document.removeEventListener('click', handleClickOutside);
        }
      };
    }, [closeOnOutsideClick]);

    useImperativeHandle(ref, () => ({
      closeAccordion: () => setIsOpen(false),
      openAccordion: () => setIsOpen(true),
      toggleAccordion: () => setIsOpen((prevOpen) => !prevOpen),
    }));

    return (
      <div
        className={`accordion_item ${isOpen ? 'active' : ''}`}
        ref={accordionRef}
      >
        <div className="accordion_header">
          <div
            className={`accordion_button ${isOpen ? 'active' : ''}`}
            onClick={toggleAccordion}
          >
            {title}
          </div>
        </div>
        <div className={`accordion_body ${isOpen ? 'active' : ''}`}>
          <div className="accordion_content">{content}</div>
        </div>
      </div>
    );
  }
);

export default Accordion;
