import React from "react";
import Menu from "./Menu";
import { menu, webSiteInfo } from "../data/data";
import { useNavigate } from "react-router-dom";
import "./Page.css";
import araotzLogo from "../assets/araotz.png";

interface PageProps {
  children?: React.ReactNode;
  alternativeMenu?: React.ReactNode;
  onBackToHome?: () => void;
}

const getFooter = () => {
  const clickableText = (
    <a href={webSiteInfo.url} target="_blank" rel="noopener noreferrer" key={2}>
      {webSiteInfo.author}
    </a>
  );
  const footerText = webSiteInfo.text.split("$author");
  return [footerText[0] && (<div key={1}>{footerText[0]}</div>), clickableText, footerText[1] && (<div key={3}>{footerText[1]}</div>)];
}

const Page: React.FC<PageProps> = ({ children, alternativeMenu, onBackToHome = () => {} }) => {
  const navigate = useNavigate();

  const redirectToHome = () => {
    onBackToHome();
    navigate("/");
  };
  return (
    <div className="page-wrapper">
      <div className="page-header" data-alternative-menu={!!alternativeMenu}>
        <div className="page-logo" onClick={redirectToHome}>
          <div className="page-logo-title" style={{ backgroundImage: `url(${araotzLogo})` }} />
        </div>
        {alternativeMenu ? alternativeMenu : <Menu items={menu} />}
      </div>
      <div className="page-container">{children}</div>
      <div className="page-footer">{getFooter()}</div>
    </div>
  );
};

export default Page;
