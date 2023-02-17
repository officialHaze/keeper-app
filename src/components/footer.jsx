import React from "react";

function Footer() {
	const currentYear = new Date().getFullYear();

	return (
		<div className="footer">
			<p>&copy; Copyright {currentYear}</p>
			<p style={{ marginTop: "1rem" }}>Made with 💛 by Moinak</p>
		</div>
	);
}

export default Footer;
