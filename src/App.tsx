import { useState, useEffect, ChangeEvent } from 'react';
import './App.css';
import CardList from './components/CardList/CardList';
import SearchBox from './components/SearchBox/SearchBox';
import { getData } from './utils/data.utils';

export type Monster = {
	id: string;
	name: string;
	email: string;
};

function App() {
	const [searchField, setSearchField] = useState('');
	const [monsters, setMonsters] = useState<Monster[]>([]);
	const [filteredMonsters, setFilterMonsters] = useState(monsters);

	useEffect(() => {
		const fetchUsers = async () => {
			const users = await getData<Monster[]>(
				'https://jsonplaceholder.typicode.com/users'
			);
			setMonsters(users);
		};
		fetchUsers();
	}, []);

	useEffect(() => {
		const newFilteredMonsters = monsters.filter(monster => {
			return monster.name.toLocaleLowerCase().includes(searchField);
		});

		setFilterMonsters(newFilteredMonsters);
	}, [monsters, searchField]);

	const onSearchChange = (event: ChangeEvent<HTMLInputElement>): void => {
		const searchFieldString = event.target.value.toLocaleLowerCase();
		setSearchField(searchFieldString);
	};

	return (
		<>
			<div className="App">
				<h1 className="app-title">Monsters Rolodex</h1>
				<SearchBox className="monsters-search-box" onChangeHandler={onSearchChange} placeholder="search monsters" />
				<CardList monsters={filteredMonsters} />
			</div>
			<a
				className="app-title"
				href="https://www.linkedin.com/in/piyush-gaurav-94794b145/"
				target="_blank"
				title="LinkedIn profile in new tab"
			>
				<h6 className="app-title">Piyush Gaurav</h6>
			</a>
		</>
	);
}

export default App;
