import React from 'react'
import { useRouter } from 'next/router'
import { useSelector } from 'react-redux'
import MainHome from '../../../components/MainHome'
import SetHeaders from '../../../components/SetHeaders'
import { nameConverter } from '../../../utils/RoutingFormats';
import axiosFetchBankDataInstance from '../../../middlewares/axiosInstance/AxiosInstance';


function BankDetailRoute(fetchedDataFromServer) {
  const { websiteName } = useSelector(st => st.websiteDetails)
  const router = useRouter();
  const { bankNameSlug } = router.query;
  const bankname = nameConverter(bankNameSlug);

  return (
    <>
      <SetHeaders
        title={`${websiteName} | ${bankname} All branches full details`}
        description={`${websiteName} | ${bankname} All branches full details page`}
        url={`${router.pathname}`}
      />
      <MainHome fetchedDataFromServer={fetchedDataFromServer} />
      <div className="pageContainer">
        <div className="descriptionSectionContainer">
          <section className="descriptionContainer">
            <h1 className='descriptionHeading'>IFSC Code for <span>{bankname}</span></h1>
            <p className='descriptionPara'><span>{bankname}</span> IFSC code can be used by both the National Electronic Fund Transfer and Real Time Gross Settlement finance transfer systems. <span>{bankname}</span> NEFT, RTGS and IMPS codes are provided by RBI. NEFT transactions are settled in batches while RTGS transactions are settled individually. IMPS presents an instant 24X7, electronic fund transfer. IFSC Code is an 11 character code for identifying bank branches participating in online fund transfers. This code is unique for each branch. Please NOTE that not all branches of a bank provide net banking facility.</p>
          </section>
          <section className="descriptionContainer">
            <h1 className='descriptionHeading'>How to Find <span>{bankname}</span> IFSC Code?</h1>
            <p className='descriptionPara'>The table alongside provides the <span>{bankname}</span> IFSC code list. One can use this IFSC code finder to find IFSC Code for <span>{bankname}</span> for NEFT or RTGS or IMPS codes before using them. You can find IFSC codes for <span>{bankname}</span> branches in India. Narrow down your search for IFSC Codes either by selecting any particular state from the drop down list or by selecting the state in the table on the right side.</p>
          </section>
        </div>
      </div>
    </>
  )
}

export async function getServerSideProps(context) {
  const { bankNameSlug } = context.query;
  let bankValue = nameConverter(bankNameSlug);
  let ifscFetchedDetails = {
    bankList: [],
    stateList: [],
    districtList: [],
    branchList: []
  };
  let searchIfscDetails = {
    bank: '',
    state: '',
    district: '',
    branch: ''
  }
  let isError = false;
  try {
    if (bankNameSlug) {
      let res = await axiosFetchBankDataInstance({
        url: "api/bank-name/get-states",
        data: {
          BANK: bankValue
        }
      })
      ifscFetchedDetails.stateList = res.data.data;
      searchIfscDetails.bank = res.data.requestBody.BANK;
      console.log(res)
    }
  } catch (err) {
    console.log(`${err.message}\nNavigating to home page.`);
    isError = true;
  }
  return {
    props: { ifscFetchedDetails, searchIfscDetails, isError }
  }
}

export default BankDetailRoute
