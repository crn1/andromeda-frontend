import React from 'react';

import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import MomentUtils from '@date-io/moment';
import { DateTimePicker } from '@material-ui/pickers';

const DateTimePick = (props) => {
	return (
		<MuiPickersUtilsProvider utils={MomentUtils}>
			 <DateTimePicker
					fullWidth
					autoOk
					disableFuture
					hideTabs
					showTodayButton
					value={props.date}
					onChange={props.setDate}
					ampm={false}
					format='DD.MM.YYYY. HH:mm'
					invalidDateMessage=''
				/>
		</MuiPickersUtilsProvider>
	);
}

export default DateTimePick;
