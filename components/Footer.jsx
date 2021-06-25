import IconButton from '@material-ui/core/IconButton';
import EmailIcon from '@material-ui/icons/Email';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import React from 'react';
import styles from '../styles/Footer.module.css';

function Footer() {
  return (
    <footer className={styles.footer}>
      <a target='_blank' href='https://github.com/JaySecurity'>
        <IconButton>
          <GitHubIcon />
        </IconButton>
      </a>
      <a target='_blank' href='https://linkedin.com/in/jason-nicholls-on/'>
        <IconButton>
          <LinkedInIcon />
        </IconButton>
      </a>
      <a target='_blank' href='mailto:jason@rockitfuelproductions.com'>
        <IconButton>
          <EmailIcon />
        </IconButton>
      </a>
    </footer>
  );
}

export default Footer;
