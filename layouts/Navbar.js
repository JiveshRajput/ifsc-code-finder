import { useState } from 'react';
import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from 'next/router';
import { useSelector, useDispatch } from 'react-redux'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faXmark, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { setNavToggle } from '../middlewares/reduxStore/ToggleStateSlice'
import iconLogo from '../assets/images/logo.png'
import styles from '../styles/Navbar.module.css'

function Navbar() {
    const NavToggleVal = useSelector(state => state.toggleState.navToggle);
    const [ifscValue, setIfscValue] = useState();
    const dispatch = useDispatch();
    const router = useRouter();

    function toggleNavValue() {
        dispatch(setNavToggle(!NavToggleVal));
    }

    function getIFSCData(e) {
        e.preventDefault();
        router.push(`/ifsc/${ifscValue}`);
        setIfscValue('');
    }

    return (
        <>
            <header className={styles.header}>
                <Link href="/" id={styles.mainLogoContainer}>
                    <Image src={iconLogo} alt="logo" id={styles.mainLogo} height={45} />
                </Link>
                <nav className={`${(NavToggleVal) && styles.show} ${styles.btnSection}`}>
                    <ul className={styles.navbar}>
                        <li><Link href="/" onClick={toggleNavValue}>Home</Link></li>
                        <li><Link href="/about" onClick={toggleNavValue}>About</Link></li>
                        <li><Link href="/contact" onClick={toggleNavValue}>Contact Us</Link></li>
                        <li><Link href="/find-by-ifsc" onClick={toggleNavValue}>Find by IFSC</Link></li>
                        <li><Link href="/find-by-micr" onClick={toggleNavValue}>Find by MICR</Link></li>
                    </ul>
                </nav>
                <form onSubmit={getIFSCData} method='get' className={styles.ifscSearchBoxContainer} autoComplete="off">
                    <input pattern="^[A-Za-z]{4}0[A-Za-z0-9]{6}$" type="text" name="ifscInput" onChange={(e) => setIfscValue(e.target.value)} value={ifscValue} id={styles.ifscSearchBox} placeholder='Search Any IFSC Code' title="Enter correct IFSC Code." maxLength={11} required />
                    <button type='submit' id={styles.ifscSearchBtn} >
                        <FontAwesomeIcon icon={faMagnifyingGlass} /><span>s</span>
                    </button>
                </form>
                <div className={styles.headerIconStyle} id={styles.menuIcon}>
                    <FontAwesomeIcon icon={NavToggleVal ? faXmark : faBars} onClick={toggleNavValue} />
                </div>
            </header>
        </>
    )
}

export default Navbar
