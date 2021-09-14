import React from "react";
import "./Footer.css";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import LinkedInIcon from "@material-ui/icons/LinkedIn";

function Footer() {
  return (
    <div className="footer">
      <div className="footer-wrap">
        <p>© 2021 Airbnb clone. Privacy · Terms · Sitemap</p>
        <div class="social">
          <a href="/">
            <FacebookIcon className="social-icon" />
          </a>
          <a href="https://www.instagram.com/kevserrcicek/?hl=tr">
            <InstagramIcon className="social-icon" />
          </a>
          <a href="https://www.linkedin.com/in/kevser-%C3%A7i%C3%A7ek-08230b144/">
            <LinkedInIcon className="social-icon" />
          </a>
        </div>
      </div>
      <p>Created by kcicek❀</p>
    </div>
  );
}

export default Footer;

/*  <div className="footer">
      <p>© 2021 Airbnb clone, Privacy · Terms · Sitemap</p>
      <div className="Language">
      <a className="language__icon" href="/">
      <LanguageIcon />
      <p>English(US)</p>
      <p>₺ TRY</p>
       </a>
      </div>
      <div className="social__media">
       <a className="social__icon" href="https://www.instagram.com/kevserrcicek/?hl=tr">
        <InstagramIcon/>
       </a>
       <a className="social__icon" href="https://www.linkedin.com/in/kevser-%C3%A7i%C3%A7ek-08230b144/">
        <LinkedInIcon/>
       </a>
       <a className="social__icon" href="/">
        <FacebookIcon/>
       </a>
      </div>
    </div> */
