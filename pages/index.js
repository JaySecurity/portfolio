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
            My passion for coding began as a teen. Creating inspired solutions
            was exciting. Working in the tire industry I used my skills to
            create an inventory tracker and automation tools that simplified
            some of my day-to-day tasks. My role as a service coordinator
            allowed me to develop exceptional organizational, communication, and
            problem solving skills that will be very beneficial to a career in
            software development.
          </p>
        </div>
      </main>
    </div>
  );
}
