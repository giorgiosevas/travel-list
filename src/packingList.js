//Generic Imports
import React, { useState } from 'react';
//Project Imports
//CSS imports
import './index.css';

const initialItems = [
	{ id: 1, description: 'Passports', quantity: 2, packed: false },
	{ id: 2, description: 'Charger', quantity: 1, packed: true },
	{ id: 3, description: 'Socks', quantity: 12, packed: false }
];

const Item = ({ item }) => {
	return (
		<li>
			<span style={item.packed ? { textDecoration: 'line-through' } : {}}>
				{item.quantity}
				&nbsp;
				{item.description}
			</span>
			<button>❌</button>
		</li>
	);
};

export const PackingList = () => {
	return (
		<div className="list">
			<ul>
				{initialItems.map((item) => (
					<Item
						key={item.id}
						item={item}
					/>
				))}
			</ul>
		</div>
	);
};
