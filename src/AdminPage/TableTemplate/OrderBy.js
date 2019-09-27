import React from 'react';

import Select from '@material-ui/core/Select';
import Input from '@material-ui/core/Input';
import MenuItem from '@material-ui/core/MenuItem';

const SearchBar = (props) => (
	<Select
		disabled
		value={props.orderBy}
		onChange={(event) => props.setOrderBy(event.target.value)}
		input={<Input name='orderby' id='orderby-label-placeholder' />}
		name='orderby'
	>
		<MenuItem value={'name'}>Name</MenuItem>
		<MenuItem value={'email'}>Email</MenuItem>
		<MenuItem value={'fullname'}>About</MenuItem>
	</Select>
);

export default SearchBar;
