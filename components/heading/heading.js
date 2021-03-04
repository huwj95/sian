import Head from 'next/head'
import Layout, { siteTitle } from '../layout/layout'
import HeadingStyle from './heading.module.css'

export default function Heading() {
  return (
    <div className={HeadingStyle.headingContainer}>
      <header className={HeadingStyle.heading}>
          <h1>F U C K I N G  // F E E L I N G S</h1>
          <p>sex and relationships and stuff</p>
      </header>
    </div>
  )
}
