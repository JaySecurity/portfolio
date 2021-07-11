/* eslint-disable @next/next/no-img-element */
import Head from 'next/head';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className='container'>
      <Head>
        <title>Jason Nicholls - Software Engineer</title>
        <meta name='description' content='Portfolio Website' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main className={styles.main}>
        <img
          className={styles.headshot}
          src='/images/headshot-600px.png'
          alt='Jason Headshot'
          // width={320}
          // height={320}
        />
        <div>
          <div className={styles.typing}>
            <h1>Jason Nicholls</h1>
            <h2>Full Stack Web Developer</h2>
          </div>
          <p className={styles.about}>
            My passion for coding began as a teen. Today I am an enthusiastic
            Software Engineer eager to contribute to team success through hard
            work, attention to detail and excellent organizational skills,
            motivated to learn, grow and excel as a Full Stack Developer.
          </p>
          <div className={styles.skills}>
            <h3>Skills:</h3>
            <h4>Proficient:</h4>
            <p>
              Javascript, Node.js, Express, React, HTML, CSS, Python, Django,
              MongoDB, SQL (MySql, Postgresql), SASS, Git, Linux, Rest
              API&apos;s
            </p>
            <h4>Familiar:</h4>
            <p>Redux, Material-UI, Materialize CSS, Bootstrap, JQuery, Jest </p>
          </div>
        </div>
      </main>
    </div>
  );
}
