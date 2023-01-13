import React, { useState } from 'react';
import Image from 'next/image';
import { useRouter } from "next/router"
import SetHeaders from "../components/SetHeaders"
import { useSelector, useDispatch } from 'react-redux';
import { setLoadingState } from '../middlewares/reduxStore/ToggleStateSlice'
import contactUs from '../assets/images/icons/contactUs.png'
import axiosFetchBankDataInstance from '../middlewares/axiosInstance/AxiosInstance';
import styles from '../styles/Contact.module.css'

function Contact() {
  const { websiteName } = useSelector(st => st.websiteDetails)
  const router = useRouter();
  const dispatch = useDispatch();
  const [formDetail, setFormDetail] = useState({ userName: '', userMail: '', userMessage: '' })

  function submitForm(e) {
    e.preventDefault();
    dispatch(setLoadingState(true));
    axiosFetchBankDataInstance({
      url: "api/sendEmailToAdmin",
      data: {
        Name: formDetail.userName,
        Email: formDetail.userMail,
        Message: formDetail.userMessage
      },
    }).then((res) => {
      setFormDetail({ userName: '', userMail: '', userMessage: '' })
      alert(res.data.status);
      console.log(res.data);
    }).catch((err) => {
      alert(err.message);
    }).finally(() => {
      dispatch(setLoadingState(false));
    });
  }

  return (
    <>
      <SetHeaders
        title={`${websiteName} | Contact us`}
        description={`${websiteName} | Contact us Page`}
        url={`${router.pathname}`}
      />
      <div className='sectionContainer'>
        <h1 className='sectionHeaderTitle'>contact <span>us</span></h1>
        <div className="pageContainer">
          <div className={`${styles.contactFormContainer} shadowBoxContainer`}>
            <div className={`${styles.contactFormLeftSide} ${styles.contactFormDirectChilds}`}>
              <Image src={contactUs} alt="contact us" />
            </div>
            <div className={`${styles.contactFormRightSide} ${styles.contactFormDirectChilds}`}>
              <h1>Get In Touch</h1>
              <p>How can we help you? Get any query.</p>
              <form onSubmit={submitForm} method="post" className={`${styles.contactUsForm}`} autoComplete="off">
                <input value={formDetail.userName} type="text" required className="contactFormField" placeholder='Enter your name' onChange={(e) => setFormDetail({ ...formDetail, userName: e.target.value })} />
                <input value={formDetail.userMail} type='email' required className="contactFormField" placeholder='Enter your email' onChange={(e) => setFormDetail({ ...formDetail, userMail: e.target.value })} />
                <textarea value={formDetail.userMessage} className="contactFormField" required placeholder='Enter message' onChange={(e) => setFormDetail({ ...formDetail, userMessage: e.target.value })}></textarea>
                <input type="submit" value="Submit" />
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Contact
