import Link from "next/link";
import Typed from "react-typed"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleChevronRight } from "@fortawesome/free-solid-svg-icons";
import SelectIfscDetail from "./SelectIfscDetail";
import styles from '../styles/Home.module.css';

function MainHome({ fetchedDataFromServer }) {
    const textLines = [`IFSC`, `MICR`, `Banks`];
    return (
        <>
            <div className={`${styles.homeContainer} ${styles.homeFullWithContainer}`}>
                <div className={`${styles.homeSubContainer} ${styles.homeLeftSideContainer}`}>
                    <h1 id={styles.homeHeading}>Find&nbsp;
                        <span id={styles.homeHeadingAutoType}>
                            <Typed strings={textLines} typeSpeed={100} backSpeed={50} startDelay={100} backDelay={1000} loop />
                        </span>
                    </h1>
                    <p id={styles.homeSubHeading}>Find IFSC, MICR Codes, Address, All Bank Branches in India, for NEFT, RTGS, IMPS, UPI.</p>
                    <Link href='/find-by-ifsc' className="btnWithIcon" id={styles.homeBannerBtn}>
                        <span>Search IFSC</span>
                        <FontAwesomeIcon icon={faCircleChevronRight} />
                    </Link>
                </div>
                <div className={`${styles.homeSubContainer} ${styles.homeRightSideContainer}`}>
                    <SelectIfscDetail fetchedDataFromServer={fetchedDataFromServer} />
                </div>
            </div>

        </>
    )
}

export default MainHome

