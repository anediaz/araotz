import React from "react";
import Page from "../components/Page";
import { info } from "../data/data";
import "./Info.css";

const Info = () => {
  const { more } = info;

  return (
    <Page>
      <div className="info-wrapper">
        <div className="info-content">
          <div className="info-text">
            {info.text.map((paragraph, key) => (
              <p key={`paragraph${key}`}>{paragraph}</p>
            ))}
          </div>
          <div className="info-contact">
            <div className="info-title">{info.contact.title}</div>
            <div className="info-line">
              <div>{more.name}</div>
              <div>{more.phone}</div>
            </div>
            <div className="info-line">
              <div>
                {info.contact.mail}: {" "}
                <a className="info-link" href={`mailto:${more.mail}`} target="_top">
                  {more.mail}
                </a>
              </div>
              <div>
                <a className="info-link" href={more.site} target="_blank" rel="noopener noreferrer">
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
