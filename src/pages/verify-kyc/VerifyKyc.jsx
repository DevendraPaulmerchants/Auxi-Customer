import React, { useState } from 'react';
import Button from '../../common/reUse/Button';
import { handlePANCardNumber } from '../../utils/helper';
import { IoClose } from 'react-icons/io5';

function VerifyKyc({ close }) {
    const [panNumber, setPanNumber] = useState('');
    const [validPANCardNumber, setValidPANCardNumber] = useState(true);
    const [panFile, setPanFile] = useState(null);

    // const handlePanNumberChange = (e) => setPanNumber(e.target.value);
    const handlePanFileChange = (e) => setPanFile(e.target.files[0]);

    const handleSubmit = (e) => {
        e.preventDefault();
        // Submit logic here
        if (panNumber) {
            alert(`PAN Number submitted: ${panNumber}`);
        } else if (panFile) {
            alert(`PAN Document uploaded: ${panFile.name}`);
        } else {
            alert('Please enter PAN number or upload PAN document.');
        }
    };

    return (
        <div className='fixed top-0 left-0 w-screen h-screen bg-[rgba(0,0,0,0.5)] flex items-center justify-center px-4 backdrop-blur-[1px]'>
            <div className="px-6 pb-4 pt-2 bg-white rounded shadow">
                <div className='flex justify-between items-center mb-4 text-[var(--primary-color)]'>
                    <h2 className="text-xl font-semibold">Verify Your PAN</h2>
                    <h2><IoClose owBack onClick={close} size={24} cursor='pointer' /></h2>
                </div>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label className="block mb-1 font-medium text-[var(--primary-color)]">Enter PAN Number</label>
                        <input className="w-full outline-none border border-sky-200 px-2 py-1 rounded"
                            type="text"
                            id='PAN'
                            value={panNumber}
                            onChange={(e)=>handlePANCardNumber(e, setPanNumber,setValidPANCardNumber)}
                            placeholder="Enter PAN Number"
                            maxLength={10}
                            disabled={!!panFile}
                        />
                        {!validPANCardNumber && panNumber.length > 0 && <p className="text-red-500 text-sm mt-1">Invalid PAN Number format.</p>}
                    </div>
                    <div className="mb-4 text-center font-semibold">OR</div>
                    <div className="mb-4">
                        <label className="block mb-1 font-medium text-[var(--primary-color)]">Upload PAN Document</label>
                        <input className="w-full outline-none border border-sky-200 px-2 py-1 rounded"
                            type="file"
                            accept=".pdf,.jpg,.jpeg,.png"
                            onChange={handlePanFileChange}
                            disabled={!!panNumber}
                        />
                    </div>
                    <Button type="submit">Submit</Button>
                </form>
            </div>
        </div>
    );
}
export default VerifyKyc;