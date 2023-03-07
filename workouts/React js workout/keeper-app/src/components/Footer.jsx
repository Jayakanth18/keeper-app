import React from "react";

var date = new Date();

function Footer() {
  return (
    <footer>
      <p>Copyright &copy; {date.getFullYear()}</p>
    </footer>
  );
}

export default Footer;
