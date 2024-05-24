'use client'

import siteMetadata from '@/data/siteMetadata'
import { ModeToggle } from './mode-toggle'
import styles from './styles.module.css'
import { FaGithub, FaTwitter, FaYoutube } from 'react-icons/fa'
import { memo } from 'react'

const author = 'zykson'

const FooterImpl = () => {
  const { twitter, github, youtube } = siteMetadata.link

  return (
    <footer className={styles.footer}>
      <div className={styles.copyright}>© 2022 zyk</div>
      <div className={styles.settings}>
        <ModeToggle />
      </div>
      <div className={styles.social}>
        {twitter && (
          <a
            className={styles.twitter}
            href={`https://twitter.com/${twitter}`}
            title={`Twitter @${twitter}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTwitter />
          </a>
        )}
        {github && (
          <a
            className={styles.github}
            href={`https://github.com/${github}`}
            title={`GitHub @${github}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub />
          </a>
        )}
        {youtube && (
          <a
            className={styles.youtube}
            href={`https://www.youtube.com/${youtube}`}
            title={`YouTube ${author}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaYoutube />
          </a>
        )}
      </div>
    </footer>
  )
}

export const Footer = memo(FooterImpl)
