import React from 'react';
import './Login.css';
import { useState } from 'react';

import SearchButton from '../../components/SearchButton/SearchButton';
import { useAuth } from '../../hooks/useAuth';
import { useNavigate } from 'react-router-dom';

const Login = () => {
	const navigate = useNavigate();
	const [username, setUsername] = useState<string>('');
	const [password, setPassword] = useState<string>('');
	const { login } = useAuth();

	const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();

		const authenticated = await login(username, password);
		if (authenticated) {
			navigate('/admin');
		} else {
			alert('שם משתמש או סיסמה לא נכונים');
		}
	};

	return (
		<div className='login-container'>
			<form className='hidden-form bradius' onSubmit={handleSubmit}>
				<h3
					className='mini-title'
					style={{ padding: '0', margin: '0', textAlign: 'center' }}
				>
					התחבר
				</h3>
				<input
					className='form-input'
					placeholder='שם משתמש'
					type='text'
					value={username}
					onChange={(e) => setUsername(e.target.value)}
					required
				/>
				<input
					className='form-input'
					placeholder='סיסמה'
					type='password'
					value={password}
					onChange={(e) => setPassword(e.target.value)}
					required
				/>
				<SearchButton text='התחבר' icon='' type='submit' />
			</form>
		</div>
	);
};

export default Login;
