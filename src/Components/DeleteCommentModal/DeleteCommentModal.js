import React from 'react';
import closeIcon from '../../Images/image 26.png'


const DeleteCommentModal = () => {
    return (
        <div>
            {/* The button to open modal */}
            <label htmlFor="delete-account-modal" className="btn modal-button">Delete Account modal</label>

            {/* Put this part before </body> tag */}
            <input type="checkbox" id="delete-account-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative p-0">
                    <label htmlFor="delete-account-modal" className=" btn-sm btn-circle absolute right-2 top-2"><img className='cursor-pointer' src={closeIcon} alt="" /></label>
                    <div className="delete-account-modal-container">
                        <div className=' sure-info-content '>
                            <h4 className='text-center'>Are You Sure?</h4>
                            <p className='text-center'> Are you sure you want to delete this comment? This action cannot be undone.</p>
                        </div>

                        <div className=' mx-auto flex justify-center items-center'>
                            <div className="input-content ">
                                <h6 className=' mt-[10px] mb-[6px]'>Verify Your Username</h6>
                                <input type="text" className='w-[250px] ' />
                            </div>
                        </div>
                        <div className=' mx-auto flex justify-center items-center'>
                            <div className="input-content ">
                                <h6 className=' mt-[10px] mb-[6px]'>Verify Your Password</h6>
                                <input type="text" className='w-[250px] ' />
                            </div>
                        </div>


                        <div className="sure-btn flex justify-between mt-[21px]">
                            <button className='delete-button mr-[10px]'>Delete Account</button>
                            <button className='cancel-btn'>Cancel</button>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default DeleteCommentModal;