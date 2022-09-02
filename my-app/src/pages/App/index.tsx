import React from 'react';
import logo from '../../logo.svg';
import styles from './App.module.scss';
import { Button } from '../../components';

function Index() {
	return (
		<div className={styles.app}>
			<header className={styles.header}>
				<h1>Add stuff</h1>
				<img className={styles.logo} src={logo} alt="logo" />
				<p>
					Edit <code>src/App.tsx</code> and save to reload.
				</p>
				<a className={styles.link} href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
					Learn React
				</a>
				<Button>My Button</Button>
			</header>
		</div>
	);
}

export default Index;
