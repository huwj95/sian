
import NavStyle from './nav.module.css'

import Link from 'next/link';
import { useState, useRef, useEffect } from 'react';
import styles from './nav.module.css';
import useWindowSize from '../../hooks/useWindowSize';
import tags from '../../lib/post-info'



export default function Submenu(props) {

	const buttonRef = useRef(null);

	const [isOpen, setIsOpen] = useState(false);

		// useEffect(() => {
		// 	let timeoutID = 0;
		// 	const onMouseLeave = () => {
		// 		// inherit some higher state from nav
		// 		// check if no other menu is open run this:
		// 		timeoutID = setTimeout(() => {
		// 			setIsOpen(false);
		// 			// setHigherNavState(false);
		// 		}, 300);
		// 		// else run the function immediately:
		// 		// setIsOpen(false);
		// 		// setHigherNavState(false);
		// 	};
		//
		// 	const onMouseEnter = () => {
		// 		setIsOpen(true);
		// 		// setHigherNavState(true);
		// 		clearTimeout(timeoutID);
		// 	};
		//
		// 	buttonRef.current.addEventListener('mouseleave', onMouseLeave);
		// 	buttonRef.current.addEventListener('mouseenter', onMouseEnter);
		//
		// 	return () => {
		// 		buttonRef.current.removeEventListener('mouseleave', onMouseLeave);
		// 		buttonRef.current.removeEventListener('mouseenter', onMouseEnter);
		// 	};
		// }, [isOpen, buttonRef]);

	const [width, height] = useWindowSize();
	const pages = [
		{
			path: '/whateva',
			name: 'subcat1',
		},
		{
			path: '/subcat2',
			name: 'subcat2'
		},
		{
			path: '/mypage',
			name: 'subcat3',
		},
	];

	const navStyle = {
    display: isOpen? 'inherit' : 'none',
    transitionDelay: !isOpen? '5s' : 0
	};

	return (
		<>

      {/*<button
        className={styles.button}
         onClick={() => {
         	setIsOpen((prevState) => !prevState);
         }}
        onMouseEnter={() => {
          setIsOpen(true);
        }}
        onMouseLeave={() => {
          setIsOpen(false);
        }}
      >
      i am a button
      </button>
      <div style={{navStyle}}>
      i am a div
      </div>
			*/}
      <div
				className={styles.button}
				 onClick={() => {
				 	setIsOpen((prevState) => !prevState);
				 }}
				onMouseEnter={() => {
					setIsOpen(true);
				}}
        onMouseLeave={() => {
          setIsOpen(false)
          ;}}

			>
				<h2>{props.name}</h2>
        <nav className={styles.submenu}>

          <ul
            style={navStyle}


            >
            <a href='#'><h2>All</h2></a>
  					{pages.map((page) => {
  						return (
  							<li key={page.path}>
  								<Link href={page.path}>
  									<a><h2>{page.name}</h2></a>
  								</Link>
  							</li>
  						);
  					})}
  				</ul>
  			</nav>
			</div>





		</>
	);
}
