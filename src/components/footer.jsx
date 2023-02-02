import React from "react";

function footer() {
	const currentYear = new Date().getFullYear();

	return (
		<div className="footer">
			<p>&copy; Copyright {currentYear}</p>
		</div>
	);
}

export default footer;
