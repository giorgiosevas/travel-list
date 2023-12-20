import { Logo } from './logo.js';
import { Form } from './form.js';
import { PackingList } from './packingList.js';
import { Stats } from './stats.js';

export default function App() {
	return (
		<div className="app">
			<Logo />
			<Form />
			<PackingList />
			<Stats />
		</div>
	);
}
