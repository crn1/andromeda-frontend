import React, { useState, useEffect, createElement } from 'react';
import { withRouter } from 'react-router-dom';

import qs from 'query-string';
import axios from 'axios';

import Grid from '@material-ui/core/Grid';

import Filters from './Filters';

const SearchItemsEngine = (props) => {

	const [search, setSearch] = useState(qs.parse(props.location.search).search);
	const [perPage, setPerPage] = useState(qs.parse(props.location.search).limit);
	const [orderBy, setOrderBy] = useState(qs.parse(props.location.search).order_by);
	const [page, setPage] = useState(qs.parse(props.location.search).page);
	const [tags, setTags] = useState(qs.stringify({
		search: search,
		limit: perPage,
		order_by: orderBy,
		page: page,
	}));

	const getData = () => {
		axios({
			method: 'GET',
			url: `http://localhost:5000/${props.target}?${tags}`,
		}).then(res => {
			setData(res.data.data.items);
			setTotal(res.data.data.total_prefiltered);
		});
	}
	const [data, setData] = useState([]);
	const [total, setTotal] = useState(0);

	useEffect(() => {
		setTags(qs.stringify({
			search: search,
			limit: perPage,
			order_by: orderBy,
			page: page,
		}));
	}, [search, perPage, orderBy, page]);

	useEffect(() => {
		props.history.push({
			search: tags,
		});
		getData();
	}, [tags]);

	useEffect(() => {
		if(data && page)
		{
			if(data.length == 0 && page > 1)
			{
				setPage(page - 1);
			}
		}
	}, [data])

	return (
		<Grid container
				spacing={2}
		>
			<Grid item xs={12}>
				<Filters
					search={search}
					setSearch={setSearch}

					perPage={perPage}
					setPerPage={setPerPage}

					orderBy={orderBy}
					setOrderBy={setOrderBy}

					page={page}
					setPage={setPage}

					total={total}
				/>
			</Grid>
			<Grid item xs={12}>
				{ createElement(props.ItemTable, {data: data, setData: setData}) }
			</Grid>
		</Grid>
	);
}

export default withRouter(SearchItemsEngine);
