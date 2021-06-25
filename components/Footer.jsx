import IconButton from '@material-ui/core/IconButton';
import EmailIcon from '@material-ui/icons/Email';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import React from 'react';
import styles from '../styles/Footer.module.css';

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.socials}>
        <a
          target='_blank'
          rel='noreferrer'
          href='https://github.com/JaySecurity'
        >
          <IconButton>
            <GitHubIcon />
          </IconButton>
        </a>
        <a
          target='_blank'
          rel='noreferrer'
          href='https://linkedin.com/in/jason-nicholls-on/'
        >
          <IconButton>
            <LinkedInIcon />
          </IconButton>
        </a>
        <a
          target='_blank'
          rel='noreferrer'
          href='mailto:jason@rockitfuelproductions.com'
        >
          <IconButton>
            <EmailIcon />
          </IconButton>
        </a>
      </div>
    </footer>
  );
}

export default Footer;
