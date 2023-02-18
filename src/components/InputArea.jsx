import React, { useState, useEffect } from "react";

export default function InputArea({ onAdd, noteEditInfo }) {
	let { id, title, newBody } = noteEditInfo;
	const [note, setNote] = useState({
		id: "",
		title: "",
		body: "",
	});

	useEffect(() => {
		const editNote = () => {
			if ((newBody && id) || title) {
				let body = newBody.replace("</br>", "\n");
				for (let i = 0; i < newBody.length; i++) {
					body = body.replace("</br>", "\n");
				}
				setNote({
					id: id,
					title: title,
					body: body,
				});
			}
		};
		editNote();
	}, [title, newBody, id]);

	const handleChange = (e) => {
		const { value, name } = e.target;
		switch (name) {
			case "title":
				setNote((prevNote) => {
					return {
						...prevNote,
						title: value,
					};
				});
				break;

			case "body":
				setNote((prevNote) => {
					return {
						...prevNote,
						body: value,
					};
				});
				break;

			default:
				break;
		}
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		onAdd(note);
		setNote({
			title: "",
			body: "",
		});
	};

	return (
		<div className="input-container">
			<form className="input-form" onSubmit={handleSubmit}>
				<div>
					<input
						name="title"
						className="input"
						placeholder="Title"
						onChange={handleChange}
						value={note.title}
						style={{ fontWeight: "600" }}
					/>
				</div>
				<div>
					<textarea
						onChange={handleChange}
						name="body"
						rows={10}
						className="input"
						placeholder="Note..."
						value={note.body}
						style={{ lineHeight: "1.85" }}
					/>
				</div>
				<button className="addButton">+</button>
			</form>
		</div>
	);
}
