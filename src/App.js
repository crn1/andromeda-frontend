import React from 'react';

import { SnackbarProvider } from 'notistack';

import AppRoutes from './AppRoutes';

const App = props => (
	<SnackbarProvider maxSnack={3}>
		<AppRoutes />
	</SnackbarProvider>
);

export default App;
