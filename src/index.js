import React, { setGlobal } from 'reactn';
import ReactDOM from 'react-dom';

import App from './App';
import * as serviceWorker from './serviceWorker';

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

setGlobal({
	currentUser: {
		authenticated: false,
	},
	pageTitle: 'Dashboard',
});

ReactDOM.render(<App />, document.getElementById('root'));
serviceWorker.unregister();
