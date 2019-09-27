import React from 'react';

import Grid from '@material-ui/core/Grid';
import FormControl from '@material-ui/core/FormControl';
import FormHelperText from '@material-ui/core/FormHelperText';

import SearchBar from './SearchBar';
import OrderBy from './OrderBy';
import PerPage from './PerPage';
import Pagination from './Pagination';

const Filters = (props) => {

	return (
		<Grid container spacing={2}>
			<Grid item xs={12} md={5} xl={8}>
				<Pagination
					page={props.page}
					setPage={props.setPage}
					total={props.total}
					perPage={props.perPage}
				/>
			</Grid>
			<Grid item xs={6} md={2} xl={1}>
				<FormControl fullWidth>
					<OrderBy
						orderBy={props.orderBy}
						setOrderBy={props.setOrderBy}
					/>
					<FormHelperText>Order by</FormHelperText>
				</FormControl>
			</Grid>
			<Grid item xs={6} md={2} xl={1}>
				<FormControl fullWidth>
					<PerPage
						perPage={props.perPage}
						setPerPage={props.setPerPage}
					/>
					<FormHelperText>Items per page</FormHelperText>
				</FormControl>
			</Grid>
			<Grid item xs={12} md={3} xl={2}>
				<FormControl fullWidth>
					<SearchBar
						search={props.search}
						setSearch={props.setSearch} />
					<FormHelperText>Search</FormHelperText>
				</FormControl>
			</Grid>
		</Grid>
	);
}

export default Filters;
