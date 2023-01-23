import React, { useState, useEffect, useCallback, useRef } from 'react'
import { useRouter } from 'next/router';
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBuildingColumns, faCaretDown, faFlag, faCity, faIndianRupeeSign, faArrowsRotate } from '@fortawesome/free-solid-svg-icons'
import { slugConverter } from '../utils/RoutingFormats'

function SelectIfscDetail({ fetchedDataFromServer }) {
  let { ifscFetchedDetails, searchIfscDetails, isError } = fetchedDataFromServer;
  const router = useRouter();
  const bankDetailNameWidth = useRef(50);
  const { bankNameSlug, stateNameSlug, districtNameSlug } = router.query;
  const { bankList, stateList, districtList, branchList } = ifscFetchedDetails;
  const { bank, state, district, branch } = searchIfscDetails;
  const [showBankOption, setShowBankOption] = useState(false);
  const [showStateOption, setShowStateOption] = useState(false);
  const [showDistrictOption, setShowDistrictOption] = useState(false);
  const [showBranchOption, setShowBranchOption] = useState(false);
  const [searchedValue, setSearchedValues] = useState({ bank: '', state: '', district: '', branch: '' });

  if (isError) {
    alert('Something went wrong.\nPlease try again.');
    router.push('/');
    return;
  }

  function navToBankOption() {
    router.push(`/`);
  }
  function navToStateOption() {
    router.push(`/bank/${bankNameSlug}`);
  }

  function navToDistrictOption() {
    router.push(`/bank/${bankNameSlug}/${stateNameSlug}`);
  }

  useEffect(() => {
    bankDetailNameWidth.current = document.querySelector('.bankDetailSelectContainer p').offsetWidth;
  }, [])

  return (
    <div id='bankDetailSearchContainer'>
      <h1>IFSC Code <span>Finder</span></h1>
      <div id='bankDetailFormContainer'>
        {/* Bank Section */}
        <div className='bankDetailSelectOuterContainer'>
          <div className={`bankDetailSelectContainer ${bank && 'successBorder'}`} onClick={() => setShowBankOption(!showBankOption)}>
            <FontAwesomeIcon icon={faBuildingColumns} className='bankDetailSelectIcon' />
            <p style={{ width: `${bankDetailNameWidth.current + 'px'}` }}>{bank || 'Select Bank'}</p>
            <FontAwesomeIcon icon={(bank) ? faArrowsRotate : faCaretDown} className={`bankDetailSelectDropDownIcon ${showBankOption && !bank && 'opened'} ${bank && 'refreshBtnColor'}`} onClick={() => navToBankOption()} />
          </div>
          {showBankOption && !bank && <div className="bankDetailOptionOuterContainer">
            <div className="bankDetailOptionSearchBoxContainer">
              <input type="text" className='bankDetailOptionSearchBox' value={searchedValue.bank} onChange={(e) => setSearchedValues({ ...searchedValue, bank: e.target.value })} placeholder='Search Bank Name' />
            </div>
            <div className="bankDetailOptionContainer">
              {searchedValue.bank ?
                bankList.filter((name) => name.toLowerCase().includes(searchedValue.bank.toLowerCase())).map((name, ind) => <Link href={`/bank/${slugConverter(name)}`} key={ind} className='bankDetailOptionSelector'>{`● ${name}`}</Link>) :
                bankList.map((name, ind) => <Link href={`/bank/${slugConverter(name)}`} key={ind} className='bankDetailOptionSelector'>{`● ${name}`}</Link>)
              }
            </div>
          </div>}
        </div>
        {/* State Section */}
        <div className='bankDetailSelectOuterContainer'>
          <div className={`bankDetailSelectContainer ${(!bank) && 'disabledField'} ${state && 'successBorder'}`} onClick={() => setShowStateOption(!showStateOption)}>
            <FontAwesomeIcon icon={faFlag} className={`bankDetailSelectIcon`} />
            <p style={{ width: `${bankDetailNameWidth.current + 'px'}` }}>{state || 'Select State'}</p>
            <FontAwesomeIcon icon={(state) ? faArrowsRotate : faCaretDown} className={`bankDetailSelectDropDownIcon $
            {(showStateOption && !state && bank) && 'opened'} ${state && 'refreshBtnColor'}`} onClick={() => navToStateOption()} />
          </div>
          {(showStateOption && !state && bank) && <div className="bankDetailOptionOuterContainer">
            <div className="bankDetailOptionSearchBoxContainer">
              <input type="text" className='bankDetailOptionSearchBox' value={searchedValue.state} onChange={(e) => setSearchedValues({ ...searchedValue, state: e.target.value })} placeholder='Search State Name' />
            </div>
            <div className="bankDetailOptionContainer">
              {searchedValue.state ?
                stateList.filter((name) => name.toLowerCase().includes(searchedValue.state.toLowerCase())).map((name, ind) => <Link href={`/bank/${bankNameSlug}/${slugConverter(name)}`} key={ind} className='bankDetailOptionSelector'>● {name}</Link>) :
                stateList.map((name, ind) => <Link href={`/bank/${bankNameSlug}/${slugConverter(name)}`} key={ind} className='bankDetailOptionSelector'>● {name}</Link>)}
            </div>
          </div>
          }
        </div>
        { /* District Section */}
        <div className='bankDetailSelectOuterContainer'>
          <div className={`bankDetailSelectContainer ${(!state) ? 'disabledField' : ''} ${district && 'successBorder'}`} onClick={() => setShowDistrictOption(!showDistrictOption)}>
            <FontAwesomeIcon icon={faCity} className={`bankDetailSelectIcon`} />
            <p style={{ width: `${bankDetailNameWidth.current + 'px'}` }}>{district || 'Select District'}</p>
            <FontAwesomeIcon icon={(district) ? faArrowsRotate : faCaretDown} className={`bankDetailSelectDropDownIcon ${(showDistrictOption && !district && state) && 'opened'} ${district && 'refreshBtnColor'}`} onClick={() => navToDistrictOption()} />
          </div>
          {(showDistrictOption && !district && state) && <div className="bankDetailOptionOuterContainer">
            <div className="bankDetailOptionSearchBoxContainer">
              <input type="text" className='bankDetailOptionSearchBox' value={searchedValue.district} onChange={(e) => setSearchedValues({ ...searchedValue, district: e.target.value })} placeholder='Search District Name' />
            </div>
            <div className="bankDetailOptionContainer">
              {searchedValue.district ?
                districtList.filter((name) => name.toLowerCase().includes(searchedValue.district.toLowerCase())).map((name, ind) => <Link href={`/bank/${bankNameSlug}/${stateNameSlug}/${slugConverter(name)}`} key={ind} className='bankDetailOptionSelector'>● {name}</Link>) :
                districtList.map((name, ind) => <Link href={`/bank/${bankNameSlug}/${stateNameSlug}/${slugConverter(name)}`} key={ind} className='bankDetailOptionSelector'>● {name}</Link>)}
            </div>
          </div>
          }
        </div>
        { /* Branch Section */}
        <div className='bankDetailSelectOuterContainer'>
          <div className={`bankDetailSelectContainer ${(!district) ? 'disabledField' : ''}`} onClick={() => setShowBranchOption(!showBranchOption)}>
            <FontAwesomeIcon icon={faIndianRupeeSign} className={`bankDetailSelectIcon`} />
            <p style={{ width: `${bankDetailNameWidth.current + 'px'}` }}>{branch || 'Select Branch'}</p>
            <FontAwesomeIcon icon={faCaretDown} className={`bankDetailSelectDropDownIcon ${showBranchOption && district && 'opened'}`} />
          </div>
          {showBranchOption && district && <div className="bankDetailOptionOuterContainer">
            <div className="bankDetailOptionSearchBoxContainer">
              <input type="text" className='bankDetailOptionSearchBox' value={searchedValue.branch} onChange={(e) => setSearchedValues({ ...searchedValue, branch: e.target.value })} placeholder='Search Branch Name' />
            </div>
            <div className="bankDetailOptionContainer">
              {searchedValue.branch ?
                branchList.filter((name) => name.toLowerCase().includes(searchedValue.branch.toLowerCase())).map((name, ind) => <Link href={`/bank/${bankNameSlug}/${stateNameSlug}/${districtNameSlug}/${slugConverter(name)}`} key={ind} className='bankDetailOptionSelector'>● {name}</Link>) :
                branchList.map((name, ind) => <Link href={`/bank/${bankNameSlug}/${stateNameSlug}/${districtNameSlug}/${slugConverter(name)}`} key={ind} className='bankDetailOptionSelector'>● {name}</Link>)}
            </div>
          </div>
          }
        </div>
      </div>
    </div>
  )
}


export default SelectIfscDetail