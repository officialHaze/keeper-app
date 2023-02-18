import React, { useState, useEffect } from "react";
import Heading from "./header";
import Note from "./note";
import Footer from "./footer";
import InputArea from "./InputArea";
import { motion } from "framer-motion";

export default function App() {
	const [notes, setNotes] = useState([]);
	const [editTheNote, setEditDetails] = useState({});
	const [active, setActive] = useState();

	useEffect(() => {
		const notes = JSON.parse(localStorage.getItem("notes"));
		notes && setNotes(notes);
	}, []);

	const addNote = (note) => {
		setNotes((prevNotes) => {
			const revisedNotes = prevNotes.filter((prevNotes, index) => {
				return index !== note.id;
			});
			localStorage.setItem("notes", JSON.stringify([...revisedNotes, note]));
			return [...revisedNotes, note];
		});
	};

	const editNote = (title, newBody, id) => {
		setEditDetails({
			id,
			title,
			newBody,
		});
	};

	const deleteNote = (id) => {
		setNotes((prevNotes) => {
			const newNotesArr = prevNotes.filter((prevNotes, index) => {
				console.log(index);
				return index !== id;
			});
			localStorage.setItem("notes", JSON.stringify(newNotesArr));
			return newNotesArr;
		});
	};

	const activeMotion = (isActive) => {
		console.log(isActive);
		setActive(isActive);
	};

	return (
		<div>
			<Heading />
			<InputArea onAdd={addNote} noteEditInfo={editTheNote} />
			<motion.div layout className={active ? "active-note-container" : "note-container"}>
				{notes.map((note, index) => {
					return (
						<Note
							key={index}
							onActive={activeMotion}
							onEdit={editNote}
							onDelete={deleteNote}
							title={note.title}
							body={note.body}
							id={index}
						/>
					);
				})}
			</motion.div>
			<Footer />
		</div>
	);
}
