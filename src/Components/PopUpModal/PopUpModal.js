import React from 'react';
import './PopUpModal.css'
import personIcon from '../../Images/SAMPLE ICON IMAGE.png'
import arrowDropDown from '../../Images/arrow_drop_down_circle.png'
import PersonRemove from '../../Images/person_remove.png'
import personAdd from '../../Images/person_add.png'


const PopUpModal = () => {
    return (
        <div>
            <label for="pop-uo-modal" class="btn modal-button mb-3">PopUpModal</label>
            <input type="checkbox" id="pop-uo-modal" class="modal-toggle" />
            <label for="pop-uo-modal" class="modal cursor-pointer">
                <div class="modal-box relative p-0 m-0 w-full h-fit" for="">
                    <div className='pop-up-modal-container flex justify-center items-center'>
                        <div className='popup-modal '>
                            <div className='status mb-[14px]'>
                                <h4>Status:</h4>
                                <button className='private-btn'>Private</button>
                                <button className='publish-btn'>Publish</button>
                            </div>
                            <div className='url mb-[14px]'>
                                <h4>URL:</h4>
                                <input className='input-url w-2/3' type="text" value="https://www.url.com/ma.." />
                                <button className='copy-btn'>Copy</button>
                            </div>
                            <button className="collaborators-btn w-full mb-[14px]">Collaborators</button>


                            <div className='user-container'>
                                <div className="owner">
                                    <img className='user-icon' src={personIcon} alt="" />
                                    <h6 className="user-name ml-[8px]">
                                        John Doe
                                    </h6>
                                    <h6 className='ml-auto'>Owner</h6>
                                </div>



                                <div className="user">
                                    <img className='user-icon' src={personIcon} alt="" />
                                    <h6 className="user-name ml-[8px]">
                                        KayyOh
                                    </h6>
                                    <div className='ml-auto user-right'>
                                        <h6>Editor</h6>
                                        <img className='mx-[9px]' src={arrowDropDown} alt="" />
                                        <img src={PersonRemove} alt="" />
                                    </div>
                                </div>
                                <div className="user">
                                    <img className='user-icon' src={personIcon} alt="" />
                                    <h6 className="user-name ml-[8px]">
                                        ElevenZ
                                    </h6>
                                    <div className='ml-auto user-right'>
                                        <h6>Editor</h6>
                                        <img className='mx-[9px]' src={arrowDropDown} alt="" />
                                        <img src={PersonRemove} alt="" />
                                    </div>
                                </div>
                            </div>

                            <div className='user-add-container mt-[14px]'>
                                <input className='input-user w-3/4' type="text" placeholder='Add People by Username' />
                                <img className='user-add-icon' src={personAdd} alt="" />
                            </div>


                            <button className='done-btn block mx-auto mt-[41px]' >Done</button>
                        </div>
                    </div>
                </div>
            </label>
        </div>
    );
};

export default PopUpModal;