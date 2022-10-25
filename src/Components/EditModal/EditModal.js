import React from 'react';

const EditModal = () => {
    return (
        <div>
            {/* The button to open modal */}
            <label htmlFor="edit-modal" className="btn modal-button mb-3">Edit modal</label>

            {/* Put this part before </body> tag */}
            <input type="checkbox" id="edit-modal" className="modal-toggle" />
            <label htmlFor="edit-modal" className="modal cursor-pointer">
                <div className="modal-box relative w-[300px] p-0 m-0" for="">
                    <div className="publish-sub-modal-container">
                        <h4 className='text-center'>Request to be an editor?</h4>
                        <div className='flex justify-between items-center mt-[18px]'>
                            <button className='p-0 publish-btn'>Accept</button>
                            <button className='cancel-btn '>Cancel</button>
                        </div>
                    </div>
                </div>
            </label>
        </div>
    );
};

export default EditModal;