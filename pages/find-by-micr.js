import { useRouter } from 'next/router'
import Image from 'next/image'
import { useState } from 'react';
import { useSelector } from 'react-redux';
import SetHeaders from "../components/SetHeaders"
import SearchImg from '../assets/images/icons/search2.png'
import styles from '../styles/FindByCodes.module.css'

function FindByMICR() {
    const { websiteName } = useSelector(st => st.websiteDetails)
    const [micrValue, setMicrValue] = useState();
    const router = useRouter();

    function getMICRData(e) {
        e.preventDefault();
        router.push(`/micr/${micrValue}`);
        setMicrValue('');
    }

    return (
        <>
            <SetHeaders
                title={`${websiteName} | Find by MICR Code`}
                description={`${websiteName} | Find by MICR Code Page`}
                url={`${router.pathname}`}
            />
            <h1 className='sectionHeaderTitle'>Find by <span>MICR</span></h1>
            <div className="pageContainer">
                <div className={`${styles.findByCodeContainer} shadowBoxContainer`}>
                    <div id={styles.findByCodeImgContainer} className={styles.findByCodeSubContainer}>
                        <Image src={SearchImg} alt="searching" />
                    </div>
                    <div id={styles.findByIfscCodeContainer} className={styles.findByCodeSubContainer}>
                        <h1>Find Bank Details</h1>
                        <p>Find your bank details by MICR Code</p>
                        <form onSubmit={getMICRData} className={styles.findByCodeSearchForm} autoComplete="off">
                            <input type="text" placeholder='Search your MICR code here' className={styles.findByCodeFormInputField} pattern="^[0-9]{9}$" onChange={(e) => setMicrValue(e.target.value)} value={micrValue} title="Enter correct IFSC Code." maxLength={9} required />
                            <button type="submit" id={styles.findByCodeFormBtn} className={styles.findByCodeFormInputField}>Submit</button>
                        </form>
                    </div>
                </div>
                <section className='infoBox'>
                    <h1 className='infoHeading'>What is <span>MICR Code?</span></h1>
                    <p>MICR code is a code printed on cheques using MICR (Magnetic Ink Character Recognition technology). This enables identification of the cheques and which in turns means faster processing. An MICR code is a 9-digit code that uniquely identifies the bank and branch participating in an Electronic Clearing System (ECS).</p>
                </section>
                <section className='infoBox'>
                    <h1 className='infoHeading'>Where to find <span>MICR Code?</span></h1>
                    <p>You can find the IFSC code on your chequebook, passbook. You can also find it on RBI’s official website. You can also directly call the bank branch and ask for the code. Many third-party websites are also providing MICR code information.</p>
                </section>
            </div>
        </>
    )
}

export default FindByMICR
