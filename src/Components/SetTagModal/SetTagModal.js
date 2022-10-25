import React from 'react';
import './SetTagModal.css'
import searchicon from '../../Images/magnifying-glass-solid.svg'


const SetTagModal = () => {
    return (
        <div>
            <label for="set-tag-modal" class="btn modal-button mb-3">Set Tag Modal</label>
            <input type="checkbox" id="set-tag-modal" class="modal-toggle" />
            <label for="set-tag-modal" class="modal cursor-pointer">
                <div class="modal-box relative p-0 m-0 w-full h-fit" for="">
                    <div className="set-tag-modal-container">
                        <div className="set-tag-modal">
                            <h4 className='mb-[20px] text-center'>Tags</h4>

                            <div className="tag-input-content p-[30px] ">
                                <div className="tag-input-box flex w-full">
                                    <img className='search-icon' src={searchicon} alt="" />
                                    <input type="text" className='w-full' />

                                </div>
                                <div className='pt-[20px]  md:flex justify-between items-center' >
                                    <button className='tag-btn'>dungeon</button>
                                    <button className='tag-btn m-[10px]'>island</button>
                                    <button className='tag-btn'>water</button>
                                </div>
                            </div>
                            <button className="set-tag-btn block mx-auto">Set tags</button>
                        </div>
                    </div>
                </div>
            </label>
        </div>
    );
};

export default SetTagModal;