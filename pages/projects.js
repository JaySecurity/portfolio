import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import GitHubIcon from '@material-ui/icons/GitHub';
import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleOutline';
import Head from 'next/head';
import styles from '../styles/Projects.module.css';

export default function Projects() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Jason Nicholls - Projects</title>
        <meta name='description' content='Portfolio Website' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main className={styles.main}>
        <Card className={styles.card}>
          <div className={styles.image}>
            <CardMedia
              className={styles.screenshot}
              image='/images/screenshots/palmPatrol.jpg'
              title='Palm Patrol'
            />
          </div>
          <CardContent>
            <h2>Palm Patrol</h2>
            <p className='description'>
              Neighborhood Watch in the palm of your hand
            </p>
            <h4 className='card-title'>Technologies Used</h4>
            <ul className='tech-list'>
              <li>MongoDB</li>
              <li>Express</li>
              <li>React</li>
              <li>Node.js</li>
              <li>Material-UI</li>
              <li>React-Leaflet</li>
              <li>Open Street Maps</li>
            </ul>
            <div className='buttons'>
              <a
                href='https://github.com/JaySecurity/palm-patrol'
                target='_blank'
              >
                <Button
                  variant='contained'
                  className={styles.button}
                  startIcon={<GitHubIcon />}
                >
                  Code
                </Button>
              </a>
              <a href='https://palmpatrol.herokuapp.com' target='_blank'>
                <Button
                  variant='contained'
                  className={styles.button}
                  startIcon={<PlayCircleOutlineIcon />}
                >
                  Live On Heroku
                </Button>
              </a>
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  );
}
