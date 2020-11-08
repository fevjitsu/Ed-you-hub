import React from "react";
import { useDispatch } from "react-redux";
import _ from "lodash";
import { Link } from "react-router-dom";
import styles from "./Footer.module.css";
import { setSelected } from "../search/searchSlice";
export default function Footer({ social, faq, copyright }) {
  let dispatch = useDispatch();
  const socialLinks = (links) => {
    return _.map(links, (link, key) => {
      return (
        <div key={key}>
          <div>
            <a href={`${link.url}`}>{link.name}</a>
          </div>
        </div>
      );
    });
  };
  const faqLinks = (faqs) => {
    return _.map(faqs, (faq, key) => {
      return (
        <div key={key}>
          <div>
            <Link
              to={`/faq/${faq.title}`}
              onClick={() => {
                dispatch(setSelected(faq));
              }}
            >
              {faq.title}
            </Link>
          </div>
        </div>
      );
    });
  };
  return (
    <div className={styles.footer}>
      <div className={styles.social}>
        <div>Social</div>
        <div>{socialLinks(social)}</div>
      </div>
      <div className={styles.faq}>
        <div>{faq ? "FAQ" : null}</div>
        <div>{faqLinks(faq)}</div>
      </div>
      <div className={styles.copy}>
        <div>&copy;&nbsp;{copyright}</div>
      </div>
    </div>
  );
}
