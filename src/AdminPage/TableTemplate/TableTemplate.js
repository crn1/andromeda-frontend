import React from 'react';

import SearchItemsEngine from './SearchItemsEngine';


const TableTemplate = ({ target, ItemTable }) => {
	return (
		<SearchItemsEngine
			target={target}
			ItemTable={ItemTable}
		/>
	);
}

export default TableTemplate;
