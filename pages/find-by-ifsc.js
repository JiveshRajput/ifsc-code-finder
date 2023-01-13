import Image from 'next/image';
import { useRouter } from 'next/router'
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import SetHeaders from "../components/SetHeaders"
import SearchImg from '../assets/images/icons/search.png'
import styles from '../styles/FindByCodes.module.css'

function FindByIFSC() {
  const { websiteName } = useSelector(st => st.websiteDetails)
  const [ifscValue, setIfscValue] = useState('');
  const router = useRouter();

  function getIFSCData(e) {
    e.preventDefault();
    router.push(`/ifsc/${ifscValue.toLowerCase()}`);
    setIfscValue('');
  }

  return (
    <>
      <SetHeaders
        title={`${websiteName} | Find by IFSC Code`}
        description={`${websiteName} | Find by IFSC Code Page`}
        url={`${router.pathname}`}
      />
      <h1 className='sectionHeaderTitle'>Find by <span>IFSC</span></h1>
      <div className="pageContainer">
        <div className={`${styles.findByCodeContainer} shadowBoxContainer`}>
          <div id={`${styles.findByCodeImgContainer}`} className={`${styles.findByCodeSubContainer}`}>
            <Image src={SearchImg} alt="searching" />
          </div>
          <div id={styles.findByIfscCodeContainer} className={styles.findByCodeSubContainer}>
            <h1>Find Bank Details</h1>
            <p>Find your bank details by IFSC Code</p>
            <form onSubmit={getIFSCData} className={styles.findByCodeSearchForm} autoComplete="off">
              <input type="text" pattern="^[A-Za-z]{4}0[A-Za-z0-9]{6}$" onChange={(e) => setIfscValue(e.target.value)} value={ifscValue} placeholder='Search your IFSC code here' title="Enter correct IFSC Code." maxLength={11} required className={styles.findByCodeFormInputField} />
              <button type="submit" id={styles.findByCodeFormBtn} className={styles.findByCodeFormInputField}>Submit</button>
            </form>
          </div>
        </div>
        <section className='infoBox'>
          <h1 className='infoHeading'>What is <span>IFSC Code?</span></h1>
          <p>IFSC code is used by electronic payment system applications such as real-time gross settlement (RTGS), NEFT and Centralized Funds Management System (CFMS). This code is mandatory for fund transfers from one bank account to another. Every bank branch will have a unique code and no two branches (even of the same bank) will ever be the same.</p>
        </section>
        <section className='infoBox'>
          <h1 className='infoHeading'>Where to find <span>IFSC Code?</span></h1>
          <p>You can find the IFSC code on your chequebook, passbook. You can also find it on RBI’s official website. You can also directly call the bank branch and ask for the code. Many third-party websites are also providing IFSC code information.</p>
        </section>
      </div>
    </>
  )
}

export default FindByIFSC
