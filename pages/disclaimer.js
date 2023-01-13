import React from 'react'
import { useRouter } from "next/router"
import SetHeaders from "../components/SetHeaders"
import { useSelector } from "react-redux"

function Disclaimer() {
  const { websiteName } = useSelector(st => st.websiteDetails)
  const router = useRouter();

  return (
    <>
      <SetHeaders
        title={`${websiteName} | Disclaimer`}
        description={`${websiteName} | Disclaimer Page`}
        url={`${router.pathname}`}
      />
      <h1 className='sectionHeaderTitle'>Disclaimer</h1>
      <div className="pageContainer">
        <div className="descriptionSectionContainer">
          <div className="descriptionContainer">
            <h1 className='descriptionHeading'><span>1.</span> Disclaimer and Limitation of Liability</h1>
            <p className='descriptionPara'>1.1 The Website is provided on an "AS IS" and "AS AVAILABLE" basis without any representation or endorsement made and without warranty of any kind whether express or implied, including but not limited to the implied warranties of satisfactory quality, fitness for a particular purpose, non-infringement, compatibility, security and accuracy.</p>

            <h1 className='descriptionHeading'><span>2.</span> Indemnity</h1>
            <p className='descriptionPara'>You agree to indemnify and hold <span>Website name</span> and softusvista Inc. harmless from and against all liabilities, legal fees, damages, losses, costs and other expenses in relation to any claims or actions brought against <span>Website name</span> arising out of any breach by you of these Terms and Conditions or other liabilities arising out of your use of this Website.</p>

            <h1 className='descriptionHeading'><span>3.</span> Content</h1>
            <p className='descriptionPara'>3.1 <span>Website name</span> cannot be held responsible for the content in any way.</p>
            <p className='descriptionPara'>3.2 We have utmost care in making sure the data we have collected is correct. However, we expect you to use this website only for reference, and please confirm from the bank directly before performing any transaction. Contact details for each bank/branch are provided in the same page where we list the IFSC Code.</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Disclaimer
