import React, { useState, useEffect } from 'react';

const Typewriter = ({ texts, delay }) => {
  const [currentText, setCurrentText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentArrayIndex, setCurrentArrayIndex] = useState(0);

  useEffect(() => {
    // Check if texts is a valid array and not empty
    if (!Array.isArray(texts) || texts.length === 0) {
      return;
    }

    const currentString = texts[currentArrayIndex];

    if (currentIndex < currentString.length+1) {
      const timeout = setTimeout(() => {
        setCurrentText(prevText => prevText + currentString[currentIndex]);
        setCurrentIndex(prevIndex => prevIndex + 1);
      }, delay);

      return () => clearTimeout(timeout);
    } else {
      // Move to the next string in the array and reset index to 0
      setCurrentArrayIndex(prevArrayIndex => (prevArrayIndex + 1) % texts.length);
      setCurrentText(''); // Reset the current text
      setCurrentIndex(0);
    }
  }, [currentIndex, currentArrayIndex, delay, texts]);

  return <span className='transition-opacity duration-500 ease-in-out opacity-100'

  >{currentText}</span>;
};

export default Typewriter;
