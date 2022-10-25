import React from 'react';
import closeIcon from '../../Images/image 26.png'
import './DeleteAccountModal.css'

const DeleteAccountModal = () => {
    return (
        <div>
            {/* The button to open modal */}
            <label htmlFor="delete-comment-modal" className="btn modal-button mb-3">Delete Comment modal</label>

            {/* Put this part before </body> tag */}
            <input type="checkbox" id="delete-comment-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative p-0">
                    <label htmlFor="delete-comment-modal" className=" btn-sm btn-circle absolute right-2 top-2"><img className='cursor-pointer' src={closeIcon} alt="" /></label>
                    <div className="delete-account-modal-container">
                        <div className=' sure-info-content '>
                            <h4 className='text-center'>Are You Sure?</h4>
                            <p className='text-center'> Are you sure you want to delete your account? This action cannot be undone</p>
                        </div>

                       
                        <div className="sure-btn flex justify-between mt-[21px]">
                            <button className='delete-button mr-[10px]'>Delete Comment</button>
                            <button className='cancel-btn'>Cancel</button>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default DeleteAccountModal;