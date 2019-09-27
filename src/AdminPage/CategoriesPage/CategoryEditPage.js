import React, { useState, useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import axios from 'axios';

import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';

import SaveChangesButton from './SaveChangesButton';

const UserEditPage = (props) => {

	const [name, setName] = useState('');

	useEffect(() => {
		if(props.method === 'PATCH')
		{
			axios({
				method: 'GET',
				url: `http://localhost:5000/category/${props.match.params.categoryId}`,
			}).then(res => {
				setName(res.data.data.name);
			});
		}
	}, []);

	return (
		<Grid container direction='column' spacing={4}>
			<Grid item xs md={4} lg={3} xl={2}>
				<TextField
					fullWidth
					value={name}
					onChange={(event) => setName(event.target.value)}
					label='Name'
				/>
			</Grid>
			<Grid item>
				<SaveChangesButton
					method={props.method}
					name={name}
				/>
			</Grid>
		</Grid>
	);
}

export default withRouter(UserEditPage);
