import React from 'react';
import './CreateMapModal.css'

const CreateMapModal = () => {
    return (
        <div>
            {/* The button to open modal */}
            <label htmlFor="create-map-modal" className="btn modal-button mb-3">Create Map modal</label>

            {/* Put this part before </body> tag */}
            <input type="checkbox" id="create-map-modal" className="modal-toggle" />
            <label htmlFor="create-map-modal" className="modal cursor-pointer">
                <div className="modal-box relative p-0 mx-5 w-full h-fit" for="">
                    <div className="create-map-modal-container">
                        <div className="title-content flex items-center">
                            <h4 className='mr-[22px]'>Title</h4>
                            <input type="text" className='w-4/6 title-input' value=' My First Map' />
                        </div>

                        <div className='flex items-center mt-[40px] mb-[22px] justify-between'>
                            <h4>Map Size</h4>
                            <div className='map-size flex items-center gap-[7px]'>
                                <div className="length-content flex items-center">
                                    <input className='w-[90px] text-center' type="text" value="128" />
                                    <h4 className='ml-[10px]'>length</h4>
                                </div>
                                <div className="length-content flex items-center">
                                    <input className='w-[90px] text-center' type="text" value="256" />
                                    <h4 className='ml-[10px]'>width</h4>
                                </div>
                            </div>
                        </div>

                        <h4 className='text-center' style={{color:"white"}}>Tile size cannot be changed after creation</h4>

                        <div className="title-length-content flex items-center justify-center mt-[20px]">
                            <h4 className='mr-[12px]'>Title Length</h4>
                            <input type="text" className="title-length w-[90px] text-center" value="8"/>
                        </div>

                        <div className='flex justify-center gap-[72px] items-center mt-[18px]'>
                            <button className='p-0 publish-btn'>Create</button>
                            <button className='cancel-btn '>Cancel</button>
                        </div>
                    </div>
                </div>
            </label>
        </div>
    );
};

export default CreateMapModal;