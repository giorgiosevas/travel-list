//Generic Imports
import React, { useState } from 'react';
//Project Imports
//CSS imports
import './index.css';

export const Form = () => {
	const [description, setDescription] = useState('');
	const [quantity, setQuantity] = useState('');

	const handleSubmit = (e) => {
		e.preventDefault(); //->to prevent the page reloading, cause it is pure HTML from the <form>
		//console.log(e);

		if (!description) return;

		const newItem = { description, quantity, packed: false, id: Date.now() };
		console.log('newItem->', newItem);

		//We write this to put the 2 fields, select+input, to their initial state.
		setDescription('');
		setQuantity(1);
	};

	return (
		<form
			className="add-form"
			onSubmit={handleSubmit}
		>
			<h3>What do you need for your 😍 trip?</h3>
			<select
				value={quantity}
				//? here the select is a string:
				//? onChange={(e) => {
				//? 	setQuantity(e.target.value);
				//? }}

				//? here the select value is a number:
				onChange={(e) => {
					setQuantity(Number(e.target.value));
				}}
			>
				{Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
					<option
						value={num}
						key={num}
					>
						{num}
					</option>
				))}
			</select>
			<input
				type="text"
				placeholder="Item..."
				value={description}
				onChange={(e) => {
					//console.log(e.target.value);
					setDescription(e.target.value);
				}}
			></input>
			<button>Add</button>
		</form>
	);
};
