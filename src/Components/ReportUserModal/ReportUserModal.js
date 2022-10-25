import React from 'react';
import './ReportUserModal.css'

const ReportUserModal = () => {
    return (
        <div>
            {/* The button to open modal */}
            <label htmlFor="report-user-modal-open" className="btn modal-button mb-3">report-user-modal-open</label>

            {/* Put this part before </body> tag */}
            <input type="checkbox" id="report-user-modal-open" className="modal-toggle" />
            <label htmlFor="report-user-modal-open" className="modal cursor-pointer">
                <label className="modal-box relative p-0 m-0 w-full h-fit" for="">
                    <div className="report-user-modal-container">
                        <h4 className='text-center mb-[20px]'>Report “FishLover96”</h4>
                        <div className="report-content">
                            <div className=" flex items-center gap-6 mb-[30px]">
                                <input type="checkbox" name="" className='checkbox ' id="" />
                                <h6 >Inappropriate Name</h6>
                            </div>
                            <div className=" flex items-center gap-6 mb-[30px]">
                                <input type="checkbox" name="" className='checkbox ' id="" />
                                <h6 >Inappropriate comments</h6>
                            </div>
                            <div className=" flex items-center gap-6 mb-[30px]">
                                <input type="checkbox" name="" className='checkbox ' id="" />
                                <h6 >Inappropriate content</h6>
                            </div>
                            <div className=" flex items-center gap-6 mb-[30px]">
                                <input type="checkbox" name="" className='checkbox ' id="" />
                                <h6 >Threats/Hate speech</h6>
                            </div>

                            <h6>other</h6>
                        <input type="text" className='w-full py-[9px] report-input' />
                        </div>

                        <button className="report-btn block mx-auto mt-[20px]">Report</button>


                    </div>
                </label>
            </label>
        </div>
    );
};

export default ReportUserModal;