import React from "react";

const Modal = ({ isVisible, onClose, moreData }) => {
  if (!isVisible) return null;

  const handleClose = (e) => {
    if (e.target.id === "wrapper") onClose();
  };

  return (
    <div
      className="fixed z-10 inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center"
      onClick={handleClose}
      id="wrapper"
    >
      <div className="w-[900px] flex flex-col md:m-0 m-2">
        <button
          className="text-white text-xl place-self-end"
          onClick={() => onClose()}
        >
          X
        </button>
        <div className="bg-white p-2 rounded">
          <div className="flex md:flex-row flex-col justify-between items-center ">
            <div className="h-full w-full pr-5 ">
              <img
                className="h-58 w-50 border-solid border-4 border-indigo-600"
                src={moreData?.image_url}
                alt="NFT"
              />
            </div>
            <div className="divide-y">
              <h3 className="text-xl font-semibold text-gray-900 mb-50">
                Name - {moreData.name}
              </h3>
              <h3 className="text-xl font-semibold text-gray-900 mb-50">
                Address - {moreData.asset_contract.address}
              </h3>
              <h3 className="text-xl font-semibold text-indigo mb-50">
                Creator - {moreData?.creator?.user?.username}
              </h3>
              <h3 className="text-xl font-semibold text-gray-900 mb-50">
                Description - {moreData?.description}
              </h3>
              <button className="px-6 py-3 mt-30 text-blue-100 no-underline bg-indigo-500 rounded hover:bg-indigo-600 hover:text-indigo-200">
                <a href={moreData?.permalink} target="_blank" rel="noreferrer">
                  Buy on OpenSea
                </a>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
