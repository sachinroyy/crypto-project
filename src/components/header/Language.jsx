import { useState } from 'react';
import './Language.css'; // Import your CSS file

const Language = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState("English"); // Default to English

  const languages = [
    "English", "German", "Chinese", "Arabic", "French",
    "Italian", "Turkey", "Japanese", "Hindi"
  ];

  const toggleDropdown = () => setIsOpen(!isOpen);
  const selectLanguage = (language) => {
    setSelectedLanguage(language);
    setIsOpen(false);
  };

  return (
    <div className="custom-select-wrapper">
      <div className="custom-select" onClick={toggleDropdown}>
        {selectedLanguage}
        <span className="arrow">&#9662;</span> {/* Custom arrow */}
      </div>
      {isOpen && (
        <ul className="custom-dropdown">
          {languages.map((language, index) => (
            <li key={index} onClick={() => selectLanguage(language)}>
              {language}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Language;
