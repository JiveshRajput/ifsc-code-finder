import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import logo from '../assets/images/logo.png'
import styles from '../styles/Footer.module.css'

function Footer() {
  const currYear = new Date().getFullYear();
  return (
    <>
      <footer id={styles.footer}>
        <div id={styles.footerTopContainer}>
          <div className={styles.footerContainer} id={styles.footerContainer1}>
            <Image src={logo} alt="logo" width={100} />
          </div>
          <div className={styles.footerContainer} id={styles.footerContainer2}>
            <h1>IFSC Code Finder</h1>
            <p>Find IFSC, MICR Codes, Address, All Bank Branches in India, for NEFT, RTGS, IMPS, UPI.</p>
          </div>
          <div className={styles.footerContainer} id={styles.footerContainer3}>
            <h1>Check</h1>
            <ul>
              <li><Link href='/'>Home</Link></li>
              <li><Link href='/about'>About</Link></li>
              <li><Link href='/contact'>Contact Us</Link></li>
            </ul >
          </div >
          <div className={styles.footerContainer} id={styles.footerContainer4}>
            <h1>Search By</h1>
            <ul>
              <li><Link href='/'>Bank Info</Link></li>
              <li><Link href='/find-by-ifsc'>IFSC Info</Link></li>
              <li><Link href='/find-by-micr'>MICR Info</Link></li>
            </ul>
          </div>
        </div>
        <div id={styles.footerBottomContainer}>
        {`IFSC Code Finder @ ${currYear} | All Rights Reserved | `}<span><Link href='/terms-of-uses'>Terms of use</Link></span> | <span><Link href='/disclaimer'>Disclaimer</Link></span>
        </div>
      </footer >
    </>
  )
}

export default Footer
