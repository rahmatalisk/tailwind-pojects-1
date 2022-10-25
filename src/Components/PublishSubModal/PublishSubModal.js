import React from 'react';
import './PublishSubModal.css'

const PublishSubModal = () => {
    return (
        <div>
            {/* The button to open modal */}
            <label htmlFor="publish-sub-modal" className="btn modal-button mb-3">Publish Sub modal</label>

            {/* Put this part before </body> tag */}
            <input type="checkbox" id="publish-sub-modal" className="modal-toggle" />
            <label htmlFor="publish-sub-modal" className="modal cursor-pointer">
                <div className="modal-box relative w-[300px] p-0 m-0" for="">
                    <div className="publish-sub-modal-container">
                        <h4 className='text-center'>Are You Sure You Want to Publish?</h4>
                        <p className='text-center'>Note: Once You Publish, You Can’t Set the Visibility to Private.</p>
                        <div className='flex justify-between items-center mt-[18px]'>
                            <button className='p-0 publish-btn'>Publish</button>
                            <button className='cancel-btn '>Cancel</button>
                        </div>
                    </div>
                </div>
            </label>
        </div>
    );
};

export default PublishSubModal;