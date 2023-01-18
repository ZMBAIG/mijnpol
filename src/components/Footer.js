import React from "react";
function Footer(props) {
  return (
    <footer>
      <div class="vacatures">
        <a href="/"> Vacatures</a>
        <a href="/"> Pers</a>
        <a href="/">Open data </a>
        <a href="/">Contact </a>
        <a href="/">RSS </a>
      </div>
      <div class="disclaim">
        <a href="/"> Disclaimer</a>
        <a href="/"> Privacy</a>
        <a href="/"> Cookies</a>
        <a href="/"> Toegankelijkeleid</a>
      </div>
      <div class="social-media">
        <a
          href="http://www.facebook.com/politie"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i class="fa fa-facebook-official"></i>
        </a>
        <a
          href="http://www.instagram.com/politie"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i class="fa fa-instagram"></i>
        </a>
        <a
          href="http://www.twitter.com/politie"
          target="_blank"
          rel="noopener
          noreferrer"
        >
          <i class="fa fa-twitter"></i>
        </a>
        <a
          href="https://www.linkedin.com/company/politie-nederland"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i class="fa fa-linkedin"></i>
        </a>
        <a
          href="http://www.youtube.com/user/politie"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i class="fa fa-youtube"></i>
        </a>
      </div>
    </footer>
  );
}

export default Footer;
