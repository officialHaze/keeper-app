import React, { useState } from "react";
import { motion } from "framer-motion";
import "./note.css";

export default function Note({ title, body, onEdit, id, onActive }) {
	const [active, setActive] = useState(false);
	const newBody = body.replace(/\n/g, "</br>");
	const truncatedBody = newBody.substr(0, 150) + "...";

	const handleEdit = () => {
		onEdit(title, newBody, id);
	};

	const noteStyle = {
		display: "flex",
		flexDirection: "column",
		gap: "0.5rem",
		margin: "1rem 2rem",
		padding: "1rem",
		height: "15rem",
		background: "white",
		transition: "width 1s, height 1s",
		width: "40rem",
		borderRadius: "0.5rem",
		boxShadow: "7px 7px 20px rgba(122, 122, 122, 0.3)",
	};

	const activeStyle = {
		transition: "width 1s,height 1s",
		width: "100%",
		height: "100%",
		padding: "2rem",
	};

	return (
		<motion.div
			className={active ? "notes-container-active" : "notes-container"}
			layout
			style={
				active
					? {
							transition: "width 1s, height 1s",
							width: "50%",
							height: "100%",
							display: "flex",
							justifyContent: "center",
							alignItems: "center",
					  }
					: { transition: "width 1s", width: "45rem", height: "17rem" }
			}
		>
			<div
				id="note"
				onClick={() => {
					setActive(true);
					onActive(true);
				}}
				style={active ? activeStyle : noteStyle}
			>
				<div style={{ display: "flex", justifyContent: "space-between" }}>
					<p className="note-heading" style={{ fontWeight: "600", fontSize: "1.25rem" }}>
						{title}
					</p>
					<i
						onClick={handleEdit}
						style={{ fontSize: "1.5rem", marginRight: "0.5rem" }}
						className="fa-solid fa-square-pen"
					></i>
				</div>
				<p dangerouslySetInnerHTML={active ? { __html: newBody } : { __html: truncatedBody }} />
			</div>
			<button
				onClick={() => {
					setActive(false);
					onActive(false);
				}}
				className={active ? "backBtn-active" : "backBtn-inactive"}
			>
				⬅
			</button>
		</motion.div>
	);
}
