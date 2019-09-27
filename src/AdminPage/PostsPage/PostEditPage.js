import React, { useState, useEffect, useGlobal } from 'reactn';
import { withRouter } from 'react-router-dom';
import axios from 'axios';

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
		axios({
			method: 'GET',
			url: `http://localhost:5000/category`,
		}).then(res => {
			setCategoryOptions(res.data.data.items.map(item => {
				return { value: item.id, label: item.name }
			}));
		});
	}

	const mapAuthors = () => {
		axios({
			method: 'GET',
			url: `http://localhost:5000/user`,
		}).then(res => {
			setAuthorOptions(res.data.data.items.map(item => {
				return { value: item.id, label: item.fullname }
			}));
		});
	}

	useEffect(() => {
		if(props.method === 'PATCH')
		{
			axios({
				method: 'GET',
				url: `http://localhost:5000/post/id/${props.match.params.postId}`,
			}).then(res => {
				setTitle(res.data.data.title);
				setCategoryId(res.data.data.category.id);
				setAuthorId(res.data.data.author.id);
				setDate(res.data.data.date);
				setContent(res.data.data.content);
				setDescription(res.data.data.description);
			});
		}

		mapCategories();
		if(currentUser.roles.some(role => role.name === 'ADMIN'))
		{
			mapAuthors();
		}
	}, []);

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
