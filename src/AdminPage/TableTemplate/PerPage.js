import React from 'react';
import { withRouter } from 'react-router-dom';

import Select from '@material-ui/core/Select';
import Input from '@material-ui/core/Input';
import MenuItem from '@material-ui/core/MenuItem';

const PerPage = (props) => (
	<Select
		value={props.perPage}
		onChange={(event) => props.setPerPage(event.target.value)}
		input={<Input name='perpage' id='perpage-label-placeholder' />}
		name='perpage'
	>
		<MenuItem value={10}>10</MenuItem>
		<MenuItem value={20}>20</MenuItem>
		<MenuItem value={30}>30</MenuItem>
	</Select>
);

export default withRouter(PerPage);
