
import NavStyle from './nav.module.css'

import Link from 'next/link';
import { useState, useRef, useEffect } from 'react';
import styles from './nav.module.css';
import useWindowSize from '../../hooks/useWindowSize';
import { tags } from '../../lib/post-info'

// const tags = [
//   {
//     category: 'sex',
//     tags: ['sex1', 'sex2', 'sex3']
//   },
//   {
//     category: 'relationships',
//     tags: ['relationships1', 'relationships2', 'relationships3']
//   },
//   {
//       category: 'books',
//       tags: ['books1']
//   }
//
// ]

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

	const tagsArrayIndex = tags.findIndex(n => n.category === props.category);
	const arrayOfTags = tags[tagsArrayIndex].tags;

	const [width, height] = useWindowSize();
	const pages = tags[tagsArrayIndex].tags.map(x => {
			return ({
			path: `/${x}`,
			name: x,
		})
	}
	);


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
