import React from 'react';
import ReactDOM from 'react-dom';
import './example.less';
import GithubUsers from './components/GithubUsers';
ReactDOM.render(
	<div>
		<GithubUsers label="GitHub users (Async with fetch.js)" />
			</div>,
	document.getElementById('example')
);
