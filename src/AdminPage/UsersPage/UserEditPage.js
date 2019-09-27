import React, { useState, useEffect, useGlobal } from 'reactn';
import { withRouter } from 'react-router-dom';
import axios from 'axios';

import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import SaveChangesButton from './SaveChangesButton';

import RoleToggleButton from './RoleToggleButton';

const UserEditPage = (props) => {

	const [currentUser] = useGlobal('currentUser');
	const [pageTitle, setPageTitle] = useGlobal('pageTitle');
	const isCurrentUserPage = (props.match.url === '/currentUser');

	const [fullname, setFullname] = useState('');
	const [email, setEmail] = useState('');
	const [description, setDescription] = useState('');
	const [password, setPassword] = useState('');
	const [confirmPassword, setConfirmPassword] = useState('');
	const [userId, setUserId] = useState(null);

	const [roles, setRoles] = useState([]);
	const handleRoleChange = (index) => {
		setRoles(roles.map((role, roleIndex) => {
			if(roleIndex === index)
			{
				return { ...role, selected: !role.selected };
			}
			return { ...role, selected: role.selected };
		}));
	}

	useEffect(() => { setPageTitle('Edit User'); }, []);

	useEffect(() => {
		if(props.method === 'PATCH')
		{
			axios({
				method: 'GET',
				url: `http://localhost:5000/user/${isCurrentUserPage ? currentUser.id : props.match.params.userId}`,
			}).then(res => {
				setFullname(res.data.data.fullname);
				setEmail(res.data.data.email);
				setDescription(res.data.data.description);
				setUserRoles(res.data.data.roles);
				setUserId(res.data.data.id);
			});
		}else if(props.method === 'POST')
		{
			setUserRoles([]);
		}
	}, []);

	const setUserRoles = (userRoles) =>
	{
		axios.get('http://localhost:5000/role').then(res => {
			let roles = res.data.data.items;
			setRoles(roles.map(role =>
			{
				for(var i = 0; i < userRoles.length; i++)
				{
					if(userRoles[i].role_id === role.id)
					{
						return { ...role, selected: true, userRoleId: userRoles[i].user_role_id }
					}
				}
				return { ...role, selected: false, userRoleId: null }
			}));
		});
	}

	return (
		<Grid container direction='column' spacing={4}>
			<Grid item xs md={4} lg={3} xl={2}>
				<TextField
					fullWidth
					value={fullname}
					onChange={(event) => setFullname(event.target.value)}
					label='Full name'
				/>
			</Grid>
			<Grid item xs md={4} lg={3} xl={2}>
				<TextField
					fullWidth
					value={email}
					onChange={(event) => setEmail(event.target.value)}
					label='E-mail'
				/>
			</Grid>
			<Grid item xs md={4} lg={4} xl={3}>
				<TextField
					fullWidth
					value={description}
					multiline
					rowsMax={5}
					onChange={(event) => setDescription(event.target.value)}
					label='About'
				/>
			</Grid>
			{ currentUser.roles.some(role => role.name === 'ADMIN') ?
				<Grid item container
						direction='column'
						spacing={1} xs>
					<Grid item>
						<Typography color='textSecondary'>
							Roles
						</Typography>
					</Grid>
					<Grid container item spacing={1}>
						{ roles.map((role, index) => (
							<Grid item>
								<RoleToggleButton
										selected={role.selected}
										handleRoleChange={() => handleRoleChange(index)}>
									{ role.name }
								</RoleToggleButton>
							</Grid>
						)) }
						<Grid item xs={12}>
							<Typography variant='caption' color='textSecondary'>
								Make sure you select at least one of the roles
							</Typography>
						</Grid>
					</Grid>
				</Grid> : null
			}
			<Grid item xs md={4} lg={3} xl={2}>
				<TextField
					fullWidth
					value={password}
					onChange={(event) => setPassword(event.target.value)}
					label='New password'
					type='password'
				/>
				<TextField
					fullWidth
					value={confirmPassword}
					onChange={(event) => setConfirmPassword(event.target.value)}
					label='Confirm new password'
					type='password'
					helperText='Leave theese two fields empty if you do not want to change your old password'
				/>
			</Grid>
			<Grid item>
				<SaveChangesButton
					method={props.method}
					fullname={fullname}
					description={description}
					password={password}
					confirmPassword={confirmPassword}
					email={email}
					roles={roles}
					userId={userId}
				/>
			</Grid>
		</Grid>
	);
}

export default withRouter(UserEditPage);
