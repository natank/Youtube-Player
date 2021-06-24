import React from 'react';
import { Link } from 'react-router-dom';
import { SearchForm } from './SearchForm';
export function Nav() {
	return (
		<React.Fragment>
			<SearchForm />
			<Link to='/'>Home</Link>
		</React.Fragment>
	);
}
