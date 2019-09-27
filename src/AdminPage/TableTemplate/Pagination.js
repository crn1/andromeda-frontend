import React from 'react';

import Pagination from 'material-ui-flat-pagination';

const SearchBar = ({perPage, page, total, setPage}) => (
	<Pagination
		limit={perPage ? perPage : 10}
		offset={(perPage && page) ?
			(page - 1) * perPage : 0}
		total={total ? total : 0}
		onClick={(e, offset) => setPage(offset / perPage + 1)}
	/>
)

export default SearchBar;
