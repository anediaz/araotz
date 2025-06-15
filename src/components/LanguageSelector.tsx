import React from "react";
import "./LanguageSelector.css";

interface LanguageSelectorProps {
  language?: string;
  handleLanguageClick: (lang: string) => void;
}

const LanguageSelector: React.FC<LanguageSelectorProps> = ({ language = "EU", handleLanguageClick }) => {
  return (
    <div className="language-selector-wrapper">
      <ul className="language-selector-content">
        {[
          { code: "EU", title: "euskara" },
          { code: "ES", title: "castellano" },
          { code: "EN", title: "english" },
          { code: "FR", title: "français" },
          { code: "CA", title: "català" },
        ].map(({ code, title }) => (
          <li
            key={code}
            className={`language-selector-element${language === code ? " active" : ""}`}
            title={title}
            onClick={() => handleLanguageClick(code)}
          >
            {code}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LanguageSelector;
