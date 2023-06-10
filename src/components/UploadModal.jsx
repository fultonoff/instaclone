import React from "react";
import { modalState } from "../../atom/modalAtom";
import { useRecoilState } from "recoil";
import Modal from "react-modal";

const UploadModal = () => {
  const [open, setOpen] = useRecoilState(modalState);
  return <div>
    {open && (
    <Modal isOpen={open} onRequestClose={()=> setOpen(false)} className='md:max-w-lg w-[90%] h-[300px] absolute top-56 left-1/2 -translate-x-1/2 bg-white  border-2 rounded-md shadow-md'>


    <div className="flex flex-col items-center justify-center h-full">

    <h1>Modale</h1>
    </div>




    </Modal>)}
    </div>;
};

export default UploadModal;
