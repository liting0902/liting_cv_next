import React from 'react'
import { motion } from 'framer-motion'
import styles from './cards.module.css'
import { MdWebAsset } from 'react-icons/md'
import { withTranslation } from 'next-i18next'
import { SiCss3, SiJavascript, SiHtml5, SiReact, SiRedux } from 'react-icons/si'

function Skills({ t }) {
  const skillList = [
    () => {
      return (
        <>
          <MdWebAsset />
        </>
      )
    },
  ]

  return (
    <React.Fragment>
      <motion.ul className={styles.divBox}>
        <div className={styles.divInfoText}>
          <span style={{ display: 'inline-block' }}> {t(`Technical Skills`)}</span>
        </div>
        <div
          style={{
            marginRight: '0.4rem',
            fontSize: '1.8rem',
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-around',
            padding: '1rem',
          }}
        >
          <SiJavascript /> <SiHtml5 /> <SiCss3 /> <SiReact />
          <SiRedux />
        </div>
      </motion.ul>
    </React.Fragment>
  )
}

export default withTranslation('cards')(Skills)
