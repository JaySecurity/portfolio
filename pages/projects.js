/* eslint-disable react/jsx-no-target-blank */
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import GitHubIcon from '@material-ui/icons/GitHub';
import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleOutline';
import Head from 'next/head';
import styles from '../styles/Projects.module.css';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    overflow: 'visible',
    display: 'flex',
    margin: '2.5rem',
    alignItems: 'center',
    width: 900,
    height: 400,
    padding: '1rem',
  },
});

export default function Projects() {
  const classes = useStyles();
  return (
    <div className='container'>
      <Head>
        <title>Jason Nicholls - Projects</title>
        <meta name='description' content='Portfolio Website' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main className={styles.main}>
        <div className={styles.card}>
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
        </div>

        <div className={styles.card}>
          <div className={styles.image}>
            <CardMedia
              className={styles.screenshot}
              image='/images/screenshots/audiophile-lg.png'
              title='Audiophile'
            />
          </div>
          <CardContent>
            <h2>Audiophile</h2>
            <p className='description'>
              Keep an online catalogue of your album collection with Audiophile!
            </p>
            <h4 className='card-title'>Technologies Used</h4>
            <ul className='tech-list'>
              <li>Django</li>
              <li>Postgresql</li>
              <li>Materialize CSS</li>
              <li>Javascript</li>
              <li>theAudioBD API</li>
              <li>Songkick API</li>
            </ul>
            <div className='buttons'>
              <a
                href='https://github.com/JaySecurity/MusicCatalogue'
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
              <a href='https://audiophile2021.herokuapp.com' target='_blank'>
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
        </div>

        <div className={styles.card}>
          <div className={styles.image}>
            <CardMedia
              className={styles.screenshot}
              image='/images/screenshots/myLocalScene-lg.png'
              title='MyLocalScene'
            />
          </div>
          <CardContent>
            <h2>MyLocalScene</h2>
            <p className='description'>
              A Place for artists and venues to promote their upcoming events.
            </p>
            <h4 className='card-title'>Technologies Used</h4>
            <ul className='tech-list'>
              <li>Node / Express</li>
              <li>MongoDB / Mongoose</li>
              <li>Sass</li>
              <li>EJS</li>
            </ul>
            <div className='buttons'>
              <a
                href='https://github.com/JaySecurity/myLocalScene'
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
              <a href='https://mylocalscene.herokuapp.com/' target='_blank'>
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
        </div>

        <div className={styles.card}>
          <div className={styles.image}>
            <CardMedia
              className={styles.screenshot}
              image='/images/screenshots/wheel-lg.png'
              title='Wheel Of Fortune'
            />
          </div>
          <CardContent>
            <h2>Wheel of Fortune</h2>
            <p className='description'>
              A 2 Player Wheel of Fortune type game.
            </p>
            <h4 className='card-title'>Technologies Used</h4>
            <ul className='tech-list'>
              <li>HTML</li>
              <li>CSS</li>
              <li>Javascript</li>
            </ul>
            <div className='buttons'>
              <a
                href='https://github.com/JaySecurity/Wheel-of-Fortune'
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
              <a
                href='https://jaysecurity.github.io/Wheel-of-Fortune/'
                target='_blank'
              >
                <Button
                  variant='contained'
                  className={styles.button}
                  startIcon={<PlayCircleOutlineIcon />}
                >
                  Live On Github Pages
                </Button>
              </a>
            </div>
          </CardContent>
        </div>
      </main>
    </div>
  );
}
