import React, { useState, useEffect, useGlobal } from 'reactn';
import { withRouter } from 'react-router-dom';

import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';

import SaveChangesButton from './SaveChangesButton';
import SearchSelect from '../TableTemplate/SearchSelect';
import DateTimePick from '../TableTemplate/DateTimePick';
import Editor from './Editor';

const PostEditPage = (props) => {

	const [currentUser] = useGlobal('currentUser');

	const [title, setTitle] = useState('');
	const [date, setDate] = useState('');
	const [content, setContent] = useState('');
	const [description, setDescription] = useState('');
	const [authorId, setAuthorId] = useState(null);
	const [categoryId, setCategoryId] = useState(null);

	const [authorOptions, setAuthorOptions] = useState([{ value: null, label: null }]);
	const [categoryOptions, setCategoryOptions] = useState([{ value: null, label: null }]);

	const mapCategories = () => {
		setCategoryOptions({ value: 1, label: 'Category 1' });
	}

	const mapAuthors = () => {
		setAuthorOptions({ value: 1, label: 'John Smith' });
	}

	return (
		<Grid container direction='column' spacing={2}>
			<Grid item xs lg={6} xl={4}>
				<TextField
					fullWidth
					value={title}
					onChange={(event) => setTitle(event.target.value)}
					label='Title'
				/>
			</Grid>

			<Grid container alignItems='flex-end' item spacing={2}>
					{ currentUser.roles.some(role => role.name === 'ADMIN') ?
							<Grid item xs={12} lg={4}>
								<SearchSelect
									itemId={authorId}
									setItemId={setAuthorId}
									options={authorOptions}
									label='Select an author...'
								/>
							</Grid> : null
					}
				<Grid item xs={12} lg={4}>
					<SearchSelect
						itemId={categoryId}
						setItemId={setCategoryId}
						options={categoryOptions}
						label='Select an category...'
					/>
				</Grid>
				<Grid item xs={12} lg={4}>
					<DateTimePick
						date={date}
						setDate={setDate}
					/>
				</Grid>
			</Grid>

			<Grid item xs lg={6} xl={5}>
				<TextField
					fullWidth
					value={description}
					multiline
					rowsMax={5}
					onChange={(event) => setDescription(event.target.value)}
					label='Description'
				/>
			</Grid>

			<Grid item xs>
				<Editor
					content={content}
					setContent={setContent}
				/>
			</Grid>

			<Grid item>
				<SaveChangesButton
					method={props.method}
					title={title}
					categoryId={categoryId}
					authorId={authorId}
					date={date}
					description={description}
					content={content}
				/>
			</Grid>
		</Grid>
	);
}

export default withRouter(PostEditPage);
