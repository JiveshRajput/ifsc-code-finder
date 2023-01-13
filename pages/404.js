import Link from 'next/link'
import Image from 'next/image'
import { useSelector } from "react-redux"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleChevronRight } from "@fortawesome/free-solid-svg-icons";
import SetHeaders from "../components/SetHeaders"
import PageNotFoundImg from '../assets/images/icons/pageNotFound.png'
import styles from '../styles/PageNotFound.module.css'

function PageNotFound() {
    const { websiteName } = useSelector(st => st.websiteDetails)
    return (
        <>
            <SetHeaders
                title={`${websiteName} | Page Not Found`}
                description={`${websiteName} | Page Not Found Page`}
                url={`/404`}
            />
            <div className="pageContainer">
                <div className={styles.pageNotFoundContainer}>
                    <Image src={PageNotFoundImg} alt="404 Error" className={styles.pageNotFoundImg} />
                    <h1>Nothing is here</h1>
                    <p>May be the page you are looking for is not found or never existed.</p>
                    <Link href='/' id={styles.pageNotFoundBtn} className="btnWithIcon" >
                        <span>Go to Home</span>
                        <FontAwesomeIcon icon={faCircleChevronRight} />
                    </Link>
                </div>
            </div>
        </>
    )
}

export default PageNotFound
