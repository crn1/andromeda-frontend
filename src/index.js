import React, { setGlobal } from 'reactn';
import ReactDOM from 'react-dom';
import axios from 'axios';

import App from './App';
import * as serviceWorker from './serviceWorker';

axios.defaults.withCredentials = true;

const greetingMessage =
`           _   _ _____  _____   ____  __  __ ______ _____
     /\\   | \\ | |  __ \\|  __ \\ / __ \\|  \\/  |  ____|  __ \\   /\\
    /  \\  |  \\| | |  | | |__) | |  | | \\  / | |__  | |  | | /  \\
   / /\\ \\ | . \` | |  | |  _  /| |  | | |\\/| |  __| | |  | |/ /\\ \\
  / ____ \\| |\\  | |__| | | \\ \\| |__| | |  | | |____| |__| / ____ \\
 /_/    \\_|_| \\_|_____/|_|  \\_\\\\____/|_|  |_|______|_____/_/    \\_\\

              A D M I N I S T R A T O R      P A N E L

              Made by Đorđe Gluvajić (github.com/crn1)

`;
console.log(greetingMessage);

axios({
	method: 'GET',
	url: 'http://localhost:5000/user/current',
}).then(res =>
{
	setGlobal({
		currentUser: res.data.data !== null ?
		{
			authenticated: true,
			id: res.data.data.id,
			fullname: res.data.data.fullname,
			email: res.data.data.email,
			description: res.data.data.description,
			roles: res.data.data.roles,
		} : {
			authenticated: false,
		},
		pageTitle: 'Dashboard',
	});
}).then(() => {
	ReactDOM.render(<App />, document.getElementById('root'));
	serviceWorker.unregister();
}).catch((error) => {
	ReactDOM.render(
		`Unable to connect to the server. Please try again later. (${error})`, document.getElementById('root'));
	serviceWorker.unregister();
});

