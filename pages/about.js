import Image from 'next/image'
import { useRouter } from "next/router"
import { useSelector } from "react-redux"
import SetHeaders from "../components/SetHeaders"
import targetImg from '../assets/images/icons/targetIcon.png'
import missionImg from '../assets/images/icons/mission.png'
import styles from '../styles/About.module.css'

function About() {
  const { websiteName } = useSelector(st => st.websiteDetails)
  const router = useRouter();
  return (
    <>
      <SetHeaders
        title={`${websiteName} | About us`}
        description={`${websiteName} | About us Page`}
        url={`${router.pathname}`}
      />
      <h1 className='sectionHeaderTitle'>About <span>us</span></h1>
      {/* what is ifsc section */}
      <div className="pageContainer">
        <div className='infoBox'>
          <h1 className='infoHeading'>What is <span>IFSC Code?</span></h1>
          <p>IFSC code is used by electronic payment system applications such as real-time gross settlement (RTGS), NEFT and Centralized Funds Management System (CFMS). This code is mandatory for fund transfers from one bank account to another. Every bank branch will have a unique code and no two branches (even of the same bank) will ever be the same.</p>
        </div>
      </div>
      {/* branches data show section */}
      <div className={styles.aboutFullWidthPageContainer}>
        <div className='pageContainer'>
          <h1 className='infoHeading'>Data <span>Available</span></h1>
          <div id={styles.bankDataInfoSection}>
            <div className={styles.bankDataInfoContainer}>
              <h2>165<span>+</span></h2>
              <p>Banks</p>
            </div>
            <div className={styles.bankDataInfoContainer}>
              <h2>29<span>+</span></h2>
              <p>States</p>
            </div>
            <div className={styles.bankDataInfoContainer}>
              <h2>645<span>+</span></h2>
              <p>Districts</p>
            </div>
            <div className={styles.bankDataInfoContainer}>
              <h2>162993<span>+</span></h2>
              <p>Branches</p>
            </div>
          </div>
        </div>
      </div>
      {/* who we are section */}
      <div className='pageContainer'>
        <div id='whoWeAreSection' className={styles.detailSectionContainer}>
          <div id='whoWeAreLeftContainer' className={styles.detailSectionLeftContainer}>
            <Image src={targetImg} alt="targetImage" height={180} />
          </div>
          <div id='whoWeAreRightContainer' className={styles.detailRightSectionContainer}>
            <h1 className='headingStyle'>Our Goal</h1>
            <p>{`It gives us great pleasure to present to you <website name>! A place where you can very easily find IFSC (India Financial System Code) code. The websites currently lists around 1 lac bank branches of around 150 banks in India.`}</p>
          </div>
        </div>
        {/* our mission section */}
        <div id='ourMissionSection' className={styles.detailSectionContainer}>
          <div id={styles.ourMissionSectionLeftContainer} className={styles.detailSectionLeftContainer}>
            <Image src={missionImg} alt="Mission Image" height={180} />
          </div>
          <div id={styles.ourMissionSectionRightContainer} className={styles.detailRightSectionContainer}>
            <h1 className='headingStyle'>Our Mission<span></span></h1>
            <p>{`It gives us great pleasure to present to you <website name>! A place where you can very easily find IFSC (India Financial System Code) code. The websites currently lists around 1 lac bank branches of around 150 banks in India.`}</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default About