import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';

import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import IconButton from '@material-ui/core/IconButton';

import SearchIcon from '@material-ui/icons/Search';

const SearchBar = (props) => {

	const [value, setValue] = useState(props.search);

	const handleKeyPress = (event) => {
		if(event.key === 'Enter')
		{
			props.setSearch(value);
		}
	}

	return (
		<TextField
			type='text'
			value={value}
			onChange={(event) => setValue(event.target.value)}
			onKeyPress={(event) => handleKeyPress(event)}
			InputProps={{
				endAdornment: (
					<InputAdornment position='end'>
						<IconButton onClick={() => props.setSearch(value)}>
							<SearchIcon />
						</IconButton>
					</InputAdornment>
				),
			}}
		/>
	);
}

export default withRouter(SearchBar);
