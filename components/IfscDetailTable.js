import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck, faCircleXmark, faCopy } from "@fortawesome/free-solid-svg-icons";

function IfscDetailTable({ details }) {
    const { IFSC, MICR, BANK, BRANCH, ADDRESS, STATE, CITY, DISTRICT, CONTACT, IMPS, RTGS, UPI, NEFT } = details;
    const [copyValue, setCopyValue] = useState(<FontAwesomeIcon icon={faCopy} />)

    function copyIfsc() {
        let copyText = document.getElementById("ifscValueCopier");
        copyText.select();
        copyText.setSelectionRange(0, 99999);
        navigator.clipboard.writeText(copyText.value);
        setCopyValue('Copied !');
        setTimeout(() => {
            setCopyValue(<FontAwesomeIcon icon={faCopy} />);
        }, 1000);
    }

    return (
        <>
            <section className="infoTable shadowBoxContainer">
                <h1 className="infoTableHeading">{`${IFSC} Bank Details`}</h1>
                <div className="infoTableIfscDetailRow">
                    <div className="infoTableIfscCol ifscValueFieldCol">
                        <h2>IFSC Code:</h2>
                    </div>
                    <div className="infoTableIfscCol ifscValueDataCol">
                        <h2>{IFSC || 'No Data Available'}</h2>
                        <input type="text" id="ifscValueCopier" value={IFSC || 'Copy when value is showing'} readOnly />
                        <button onClick={copyIfsc}>{copyValue}</button>
                    </div>
                </div>
                <div className="infoTableCellValueShowBoxRow">
                    <div className={`cellDataContainer ${NEFT ? 'bgGreen' : 'bgRed'}`}>
                        <FontAwesomeIcon icon={NEFT ? faCircleCheck : faCircleXmark} className='cellDataIcon' />
                        <span>NEFT</span>
                    </div>
                    <div className={`cellDataContainer ${IMPS ? 'bgGreen' : 'bgRed'}`}>
                        <FontAwesomeIcon icon={IMPS ? faCircleCheck : faCircleXmark} className='cellDataIcon' />
                        <span>IMPS</span>
                    </div>
                    <div className={`cellDataContainer ${RTGS ? 'bgGreen' : 'bgRed'}`}>
                        <FontAwesomeIcon icon={RTGS ? faCircleCheck : faCircleXmark} className='cellDataIcon' />
                        <span>RTGS</span>
                    </div>
                    <div className={`cellDataContainer ${UPI ? 'bgGreen' : 'bgRed'}`}>
                        <FontAwesomeIcon icon={UPI ? faCircleCheck : faCircleXmark} className='cellDataIcon' />
                        <span>UPI</span>
                    </div>
                </div>
                <div className='infoTableRow'>
                    <div className='infoTableCol fieldNameCol'>Bank:</div>
                    <div className='infoTableCol dataCol'>{BANK || 'No Data Available'}</div>
                </div>
                <div className='infoTableRow'>
                    <div className='infoTableCol fieldNameCol'>Branch:</div>
                    <div className='infoTableCol dataCol'>{BRANCH || 'No Data Available'}</div>
                </div>
                <div className='infoTableRow'>
                    <div className='infoTableCol fieldNameCol'>IFSC Code:</div>
                    <div className='infoTableCol dataCol'>{IFSC || 'No Data Available'}</div>
                </div>
                <div className='infoTableRow'>
                    <div className='infoTableCol fieldNameCol'>MICR Code:</div>
                    <div className='infoTableCol dataCol'>{MICR || 'No Data Available'}</div>
                </div>
                <div className='infoTableRow'>
                    <div className='infoTableCol fieldNameCol'>Contact:</div>
                    <div className='infoTableCol dataCol'>{CONTACT || 'No Data Available'}</div>
                </div>
                <div className='infoTableRow'>
                    <div className='infoTableCol fieldNameCol'>Address:</div>
                    <div className='infoTableCol dataCol'>{ADDRESS || 'No Data Available'}</div>
                </div>
                <div className='infoTableRow'>
                    <div className='infoTableCol fieldNameCol'>City:</div>
                    <div className='infoTableCol dataCol'>{CITY || 'No Data Available'}</div>
                </div>
                <div className='infoTableRow'>
                    <div className='infoTableCol fieldNameCol'>District:</div>
                    <div className='infoTableCol dataCol'>{DISTRICT || 'No Data Available'}</div>
                </div>
                <div className='infoTableRow'>
                    <div className='infoTableCol fieldNameCol'>State:</div>
                    <div className='infoTableCol dataCol'>{STATE || 'No Data Available'}</div>
                </div>
            </section>
        </>
    )
}

export default IfscDetailTable
