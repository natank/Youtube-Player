import React from 'react';
import { Link } from 'react-router-dom';
import { SearchForm } from './SearchForm';
export function Nav({ filter, setFilter }) {
	return (
		<React.Fragment>
			<SearchForm filter={filter} setFilter={setFilter} />
			<Link to='/'>Home</Link>
		</React.Fragment>
	);
}
