import React from "react";
import "../Footer/index.scss";
import logo from "../../images/LOGO_footer.jpg";

function Footer() {
  return (
    <footer className='footer'>
		<div>
			<img src={logo} alt="Kasa" />
		</div>
		<div>
			<p>© 2020 Kasa. All rights reserved</p>
		</div>
	</footer>
  );
}

export default Footer;