import React from 'react';
import logo from '../../logo.svg';
import styles from './App.module.scss';
import { Button } from '../../components';

function Index() {
	return (
		<div className={styles.app}>
			<header className={styles.header}>
				<h1>Themed overrides</h1>
				<div className={styles.themingWrapper}>
					<h2>Tier 1</h2>
					<p className={styles.tier1}>--colorPrimary</p>
				</div>
				<div className={styles.themingWrapper}>
					<h2>Tier 2</h2>
					<p className={styles.tier2}>--colorSceneNeutralSubdued</p>
				</div>
				<div className={styles.themingWrapper}>
					<h2>Tier 3</h2>
					<p className={styles.tier3}>--buttonPrimaryBackground</p>
				</div>
				<div className={styles.themingWrapper}>
					<h2>Stateful colors</h2>
					<p style={{ background: 'var(--colorSurfaceStatePrimary)' }}>--colorSurfaceStatePrimary</p>
					<p style={{ background: 'var(--colorSurfaceStatePrimaryHover)' }}>
						--colorSurfaceStatePrimaryHover
					</p>
					<p style={{ background: 'var(--colorSurfaceStatePrimaryFocus)' }}>
						--colorSurfaceStatePrimaryFocus
					</p>
					<p style={{ background: 'var(--colorSurfaceStatePrimaryPressed)' }}>
						--colorSurfaceStatePrimaryPressed
					</p>
				</div>
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
