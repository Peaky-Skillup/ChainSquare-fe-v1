import { useContext, useEffect, useState } from 'react';

interface ILayoutProps {
	children?: React.ReactNode;
}

const Layout = ({ children }: ILayoutProps) => {
	return (
		<>
			<div
				id='wrapper'
				style={{
					display: 'flex',
					flexDirection: 'column',
					justifyContent: 'space-between',
				}}
			>
				{/* header */}
				{/* main */}
				{children}
				{/* footer */}
				{/* modal */}
				{/* <div className={style['header']}>
					<Header wide={wide} setWide={setWide} />
					<div className={style['header-line']}></div>
					<Sidebar wide={wide} setWide={setWide} />
				</div>
				<main className={style['main']}>
					<div className={style['main-container']}>{children}</div>
					<div
						className={wide && !isDesktop ? style['main-overlay'] : ''}
						onClick={() => setWide(false)}
					/>
				</main>
				<div className={style['footer']}>
					<Footer />
				</div>
				<ToastContainer
					theme='light'
					position={toast.POSITION.BOTTOM_LEFT}
					autoClose={2000}
				/> */}
			</div>
		</>
	);
};
export default Layout;
