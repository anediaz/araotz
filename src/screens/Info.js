import React from "react";
import Page from "../components/Page";
import { info } from "../data/data";
import './info.css';

const BLOCK = 'info-screen'

const Info = () => {
  const { more } = info;

  return (
    <Page>
      <div className={BLOCK}>
        <div className={`${BLOCK}__content`}>
          <div className={`${BLOCK}__text`}>
            {info.text.map((paragraph, key) => (
              <p key={`paragraph${key}`}>{paragraph}</p>
            ))}
          </div>
          <div className={`${BLOCK}__contact`}>
            <div className={`${BLOCK}__title`}>{info.contact.title}</div>
            <div className={`${BLOCK}__line`}>
              <div>{more.name}</div>
              <div>{more.phone}</div>
            </div>
            <div className={`${BLOCK}__line`}>
              <div>
                {info.contact.mail}:{" "}
                <a className={`${BLOCK}__link`} href={`mailto:${more.mail}`} target="_top">
                  {more.mail}
                </a>
              </div>
              <div>
                <a className={`${BLOCK}__link`} href={more.site} target="_blank" rel="noopener noreferrer">
                  Flickr
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Page>
  );
};
export default Info;
export { Info };
