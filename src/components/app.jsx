import React from "react";
import Heading from "./header";
import Note from "./note";
import Footer from "./footer";

function app() {
	return (
		<div>
			<Heading />
			<div className="note-container">
				<Note />
			</div>
			<Footer />
		</div>
	);
}

export default app;
