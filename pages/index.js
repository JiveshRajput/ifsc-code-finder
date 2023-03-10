import { useRouter } from "next/router"
import { useSelector } from "react-redux"
import SetHeaders from "../components/SetHeaders"
import MainHome from "../components/MainHome"

function Home(fetchedDataFromServer) {
  const { websiteName } = useSelector(st => st.websiteDetails)
  const router = useRouter();
  return (
    <>
      <SetHeaders
        title={`${websiteName} | Find IFSC, MICR Codes, Address, All Bank Branches in India, for NEFT, RTGS, UPI, IMPS`}
        description={`${websiteName} | Description`}
        url={`${router.pathname}`}
      />
      <MainHome fetchedDataFromServer={fetchedDataFromServer} />
    </>
  )
}
export async function getServerSideProps(context) {
  // const { bankNameSlug, stateNameSlug, districtNameSlug } = context.query;
  let ifscFetchedDetails = {
    bankList: [
      'Abhyudaya Co-Operative Bank',
      'Airtel Payments Bank',
      'Akola Janata Commercial Co-Operative Bank',
      'Allahabad Bank',
      'Almora Urban Co-Operative Bank',
      'Andhra Bank',
      'Andhra Pragathi Grameena Bank',
      'Apna Sahakari Bank',
      'Australia And New Zealand Banking Group',
      'Au Small Finance Bank',
      'Axis Bank',
      'Bandhan Bank',
      'Bank Of America',
      'Bank Of Bahrein And Kuwait',
      'Bank Of Baroda',
      'Bank Of Ceylon',
      'Bank Of India',
      'Bank Of Maharashtra',
      'Bank Of Nova Scotia',
      'Barclays Bank',
      'Bassein Catholic Co-Operative Bank',
      'Bhagyalakshmi Mahila Sahakari Bank',
      'Bnp Paribas Bank',
      'Calicut Co-Operative Urban Bank',
      'Canara Bank',
      'Capital Small Finance Bank',
      'Catholic Syrian Bank',
      'Central Bank Of India',
      'Chinatrust Commercial Bank',
      'Citi Bank',
      'Citizen Credit Co-Operative Bank',
      'City Union Bank',
      'Corporation Bank',
      'Credit Suisse Ag',
      'Dcb Bank',
      'Dena Bank',
      'Deutsche Bank',
      'Dhanlaxmi Bank',
      'Dombivli Nagari Sahakari Bank',
      'Emirates Nbd Bank',
      'Equitas Small Finance Bank',
      'Export Import Bank Of India',
      'Federal Bank',
      "Fino Payments Bank",
      'Firstrand Bank',
      'Goa State Co-Operative Bank',
      'Gopinath Patil Parsik Janata Sahakari Bank',
      'Gurgaon Central Co-Operative Bank',
      'Haryana State Co-Operative Apex Bank',
      'Hassan District Co-Operative Central Bank',
      'HDFC Bank',
      "Hongkong & Shanghai Banking Corporation",
      'Icici Bank',
      'Idbi',
      'Idfc First Bank',
      'India Post Payments Bank',
      'Indian Bank',
      'Indian Overseas Bank',
      'Indusind Bank',
      'Industrial And Commercial Bank Of China',
      'Industrial Bank Of Korea',
      'Industrial Co-Operative Bank',
      'Jalgaon District Central Co-Operative Bank Jalgaon',
      'Jalgaon Peoples Co-Operative Bank',
      'Jammu And Kashmir Bank',
      'Jana Small Finance Bank',
      'Janakalyan Sahakari Bank',
      'Janalaxmi Co-Operative Bank',
      'Janaseva Sahakari Bank, Pune',
      'Janata Co-Operative Bank',
      'Janatha Seva Co-Operative Bank',
      'Jansewa Urban Co-Operative Bank',
      'Jio Payments Bank',
      'JP Morgan Chase Bank NA',
      'Kallappanna Awade Ichalkaranji Janata Sahakari Bank',
      'Karnataka Bank',
      'Karnataka Vikas Grameena Bank',
      'Karur Vysya Bank',
      'Kerala Gramin Bank',
      'Kerala State Co-Operative Bank',
      'Kotak Mahindra Bank',
      'Kurmanchal Nagar Sahakari Bank',
      'Laxmi Vilas Bank',
      'LIC Employees Co-Operative Bank',
      'Mahanagar Co-Operative Bank',
      'Mahanagar Co-Operative Urban Bank',
      'Maharashtra Gramin Bank',
      'Maharashtra State Co-Operative Bank',
      'Mahesh Sahakari Bank Pune',
      'Mashreq Bank',
      'Meghalaya Co-Operative Apex Bank',
      'Mehsana Urban Co-Operative Bank',
      'Mizoram Co-Operative Apex Bank',
      'Mizuho Bank',
      'Model Co-Operative Bank',
      'MUFG Bank',
      'Mumbai District Central Co-Operative Bank',
      'Municipal Co-Operative Bank',
      'Muslim Co-Operative Bank',
      'Nagrik Sahakari Bank',
      'Nainital Bank',
      'National Bank For Agriculture And Development',
      'Nagaland State Co-Operative Bank',
      'Nagar Sahakari Bank',
      'Nagpur Nagarik Sahakari Bank',
      'Nainital District Co-Operative Bank',
      'National Bank Of Abu Dhabi Pjsc',
      'National Co-Operative Bank',
      'Navnirman Co-Operative Bank',
      'New India Co-Operative Bank',
      'Nkgsb Co-Operative Bank',
      'North East Small Finance Bank',
      'Nsdl Payments Bank',
      'Nutan Nagarik Sahakari Bank',
      'Odisha State Co-Operative Bank',
      'Oriental Bank Of Commerce',
      'Pandharpur Urban Co-Operative Bank',
      'Pavana Sahakari Bank',
      'Paytm Payments Bank',
      'Pondicherry State Co-Operative Bank',
      'Pragati Sahakari Bank',
      'Prathama Up Gramin Bank',
      'Prime Co-Operative Bank',
      'Pune Urban Co-Operative Bank',
      'Punjab & Sind Bank',
      'Punjab Gramin Bank',
      'Punjab National Bank',
      'Punjab State Co-Operative Bank',
      'Pusad Urban Co-Operative Bank',
      'Qatar National Bank',
      'Rabobank International',
      'Rajarambapu Sahakari Bank',
      'Rajarshi Shahu Sahakari Bank',
      'Rajasthan State Co-Operative Bank',
      'Rajgurunagar Sahakari Bank',
      'Rajkot Nagarik Sahakari Bank',
      'Reserve Bank Of India',
      'Rajasthan Urban Co-Operative Bank',
      'Rajdhani Nagar Sahakari Bank',
      'Rajkot Commercial Co-Operative Bank',
      'Rajkot Peoples Co-Operative Bank',
      'Rajnandgaon District Central Co-Operative Bank',
      'Rbl Bank',
      'Royal Bank Of Scotland N.v.',
      'S S L S A Kurundwad Urban Bank',
      'S.A.S Nagar Central Co-Operative Bank',
      'Sahebrao Deshmukh Co-Operative Bank',
      'Samarth Sahakari Bank',
      'Sant Sopankaka Sahakari Bank',
      'Saraspur Nagrik Co-Operative Bank',
      'Saraswat Co-Operative Bank',
      'Satara Sahakari Bank',
      'Sber Bank',
      'Sbm Bank',
      'Shillong Co-Operative Urban Bank',
      'Shimla Urban Co-Operative Bank',
      'Shinhan Bank',
      'Shivalik Small Finance Bank',
      'Shri Chhatrapati Rajashri Shahu Urban Co-Operative Bank',
      'Sikkim State Co-Operative Bank',
      'Societe Generale',
      'Solapur District Central Co-Operative Bank',
      'South Indian Bank',
      'Standard Chartered Bank',
      'State Bank Of India',
      'Suco Souharda Sahakari Bank',
      'Sumitomo Mitsui Banking Corporation',
      "Surat People's Co-Operative Bank",
      'Surat National Co-Operative Bank',
      'Syndicate Bank',
      'Suryoday Small Finance Bank',
      'Sutex Co-Operative Bank',
      'Tamilnad Mercantile Bank',
      'Telangana State Co-Operative Apex Bank',
      'Textile Traders Co-Operative Bank',
      'The Malad Sahakari Bank',
      'The Union Co-Operative Bank Mahinagar',
      'The Vijay Co-Operative Bank',
      'Thrissur District Co-Operative Bank',
      'Tjsb Sahakari Bank',
      "Tumkur Grain Merchant's Co-Operative Bank",
      'Uco Bank',
      'Union Bank Of India',
      'United Bank Of India',
      'United Overseas Bank',
      'Union Co-Operative Bank',
      'Uttarakhand State Co-Operative Bank',
      'Vasai Vikas Sahakari Bank',
      'Vijaya Bank',
      'West Bengal State Co-Operative Bank',
      'Woori Bank',
      'Yes Bank',
      'Zoroastrian Co-Operative Bank',
      'Zila Sahakari Bank Ghaziabad'
    ],
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
  } catch (err) {
    console.log(`${err.message}\nNavigating to home page.`);
    isError = true;
  }
  return {
    props: { ifscFetchedDetails, searchIfscDetails, isError }
  }
}

export default Home

