import React from 'react';
import styles from './Button.module.scss';

interface ButtonProps {
	children: React.ReactNode;
}

export const Button: React.FunctionComponent<ButtonProps> = ({ children }) => {
	return (
		<button className={styles.wrapper}>
			<h1>{children}</h1>
		</button>
	);
};
