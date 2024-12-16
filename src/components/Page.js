import React from "react";
import Menu from "./Menu";
import { menu, webSiteInfo } from "../data/data.json";
import { useHistory } from "react-router-dom";
import './page.css';

const BLOCK = 'gatza-page';

const getFooter = () => {
  const clickableText = (
    <a href={webSiteInfo.url} target="_blank" rel="noopener noreferrer" key={2}>
      {webSiteInfo.author}
    </a>
  );
  const footerText = webSiteInfo.text.split("$author");
  return [footerText[0] && (<div key={1}>{footerText[0]}</div>), clickableText, footerText[1] && (<div key={3}>{footerText[1]}</div>)];
}

const Page = ({ children, alternativeMenu, onBackToHome  = () => {}}) => {
  const history = useHistory();

  const redirectToHome = () => {
    onBackToHome();
    history.push("/");
  };
  return (
    <div className={BLOCK}>
      <div className={alternativeMenu ? `${BLOCK}__header-alternative` : `${BLOCK}__header`}>
        <div className={`${BLOCK}__logo`} onClick={redirectToHome}>
          <div className={`${BLOCK}__logo-title`} />
        </div>
        {alternativeMenu ? alternativeMenu : <Menu items={menu} />}
      </div>
      <div className={`${BLOCK}__container`}>{children}</div>
      <div className={`${BLOCK}__footer`}>{getFooter()}</div>
    </div>
  );
};

export default Page;
