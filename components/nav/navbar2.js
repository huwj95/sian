
import NavStyle from './nav.module.css'

import Link from 'next/link';
import { useState } from 'react';
import styles from './nav.module.css';
import useWindowSize from '../../hooks/useWindowSize';
import Submenu from './submenu'

export default function Nav() {
	const [width, height] = useWindowSize();
	const pages = [
		{
			path: '/whateva',
			name: 'subcat1',
		},
		{
			name: 'subcat2',
      path: 'subcat2'
		},
		{
			path: '/mypage',
			name: 'subcat3',
		},
	];

	const [isOpen, setIsOpen] = useState(false);

	const navStyle = {
    display: isOpen? 'inherit' : 'none',
    background: 'red'
	};

	return (
		<div className={styles.nav}>

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
      <div className={styles.menuitem}>
        <div className={styles.container}>
          <a href="./#"><h2>Home</h2></a>
        </div>
      </div>

      <div className={styles.menuitem}>
        <div className={styles.container}>
          <a href='./about'><h2>About</h2></a>
        </div>
      </div>

      <div className={styles.menuitem}>
        <Submenu name="Sex" className={styles.submenu} category="sex"/>
      </div>

      <div className={styles.menuitem}>
        <Submenu name="Relationships" className={styles.submenu} category="relationships" />
      </div>

      <div className={styles.menuitem}>
        <div className={styles.container}>
          <a href='./book-club'><h2>Book Club</h2></a>
        </div>
      </div>

      <div className={styles.menuitem}>
        <div className={styles.container}>
          <a href='./archive'><h2>Archive</h2></a>
        </div>
      </div>
		</div>
	);
}
