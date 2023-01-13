import { useRouter } from "next/router"
import SetHeaders from "../components/SetHeaders"
import { useSelector } from "react-redux"


function TermCondition() {
  const { websiteName } = useSelector(st => st.websiteDetails)
  const router = useRouter();  
  return (
    <>
      <SetHeaders
        title={`${websiteName} | Terms of Uses`}
        description={`${websiteName} | Terms of Uses Page`}
        url={`${router.pathname}`}
      />
      <h1 className='sectionHeaderTitle'>Terms & <span>Conditions</span></h1>
      <div className="pageContainer">
        <div className="descriptionSectionContainer">
          <div className="descriptionContainer">
            <h1 className='descriptionHeading'><span>1.</span> Acceptance of Terms</h1>
            <p className='descriptionPara'>Your access to and use of <span>website name</span> is subject exclusively to these Terms and Conditions. You will not use the Website for any purpose that is unlawful or prohibited by these Terms and Conditions. By using the Website you are fully accepting the terms, conditions and disclaimers contained in this notice. If you do not accept these Terms and Conditions you must immediately stop using the Website.</p>
            <h1 className='descriptionHeading'><span>2.</span> Advice</h1>
            <p className='descriptionPara'>
              2.1 The contents of the Website do not constitute advice and should not be relied upon in making or refraining from making, any decision.
            </p>
            <p className='descriptionPara'>
              2.2 We have utmost care in making sure the data we have collected is correct. However, we expect you to use this website only for reference, and please confirm from the bank directly before performing any transaction. Contact details for each bank/branch are provided in the same page where we list the IFSC Code.
            </p>
            <h1 className='descriptionHeading'><span>3.</span> Changes to website</h1>
            <p className='descriptionPara'><span>Website name</span> reserves the right to:</p>
            <p className='descriptionPara'>3.1 change or remove (temporarily or permanently) the Website or any part of it without notice and you confirm that <span>Website name</span> shall not be liable to you for any such change or removal.</p>
            <p className='descriptionPara'>3.2 change these Terms and Conditions at any time, and your continued use of the Website following any changes shall be deemed to be your acceptance of such change.</p>
            <h1 className='descriptionHeading'><span>4.</span> Links to third party websites</h1>
            <p className='descriptionPara'><span>Website name</span> may include links to third party websites that are controlled and maintained by others. Any link to other websites is not an endorsement of such websites and you acknowledge and agree that we are not responsible for the content or availability of any such sites.</p>
            <h1 className='descriptionHeading'><span>5.</span> Copyright</h1>
            <p className='descriptionPara'>5.1 All product and brand names used in the website are trademarks, registered trademarks, or trade names of their respective holders. <span>Website name</span> is not associated with any product or vendor mentioned in this website.</p>
            <p className='descriptionPara'>5.2 In accessing the Website you agree that you will access the content solely for your personal, non-commercial use. None of the content may be downloaded, copied, reproduced, transmitted, stored, sold or distributed without the prior written consent of the copyright holder.</p>
            <p className='descriptionPara'>5.3 The Website is not responsible for any errors or issues whatsoever with the content contributed by the users of the website. Any views or opinions expressed by the contributers and solely theirs and the Website cannot be hold responsible for it.</p>
            <h1 className='descriptionHeading'><span>6.</span> Severance</h1>
            <p className='descriptionPara'>If any of these Terms and Conditions should be determined to be invalid, illegal or unenforceable for any reason by any court of competent jurisdiction then such Term or Condition shall be severed and the remaining Terms and Conditions shall survive and remain in full force and effect and continue to be binding and enforceable.</p>
            <h1 className='descriptionHeading'><span>7.</span> Legal</h1>
            <p className='descriptionPara'>All legal matters subject to Punjab Jurisdiction at Chandigarh, Punjab, India.</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default TermCondition
