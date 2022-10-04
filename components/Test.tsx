import React, { CSSProperties, FC, MouseEvent, ReactElement } from 'react';

export interface TestProps {
	className?: string;
	onClick?: (e: MouseEvent<HTMLButtonElement>) => void;
	children?: React.ReactNode;
}

export const Test: FC<TestProps> = ({ className, onClick, children }) => {
	return (
		<button
			className={className ? className + 'Button' : 'Button'}
			onClick={onClick}
			type='button'
		>
			{children}
		</button>
	);
};
