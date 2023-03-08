import React, { Fragment, useState } from "react";
import styles from "../style";
import Modal from "./Modal";

const Market = ({ marketData, loadingState }) => {
  const [showModal, setShowModal] = useState(false);
  const [nftData, setNftData] = useState({});

  return (
    <Fragment>
      <section
        id="clients"
        className={`${styles.paddingY} ${styles.flexCenter} flex-col relative `}
      >
        <div className="absolute z-[0] w-[60%] h-[60%] -right-[50%] rounded-full blue__gradient bottom-40" />

        <div className="flex justify-center items-center md:flex-row flex-col sm:mb-16 mb-3 relative z-[1]">
          <h2 className={styles.heading2}>Our OpenSea NFTS</h2>
          <br />
        </div>

        {loadingState ? (
          <div
            class="inline-block h-7 w-7 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] text-neutral-100 motion-reduce:animate-[spin_1.5s_linear_infinite]"
            role="status"
          >
            <span class="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
              Loading...
            </span>
          </div>
        ) : (
          <div className="flex flex-wrap justify-center w-full feedback-container relative z-[1]">
            {marketData?.map((data) => {
              return (
                <div
                  key={data.id}
                  className=" flex cursor-pointer justify-between flex-col px-10 py-12 rounded-[20px]  max-w-[370px] md:mr-10 sm:mr-5 mr-0 my-5 bg-slate-100"
                  onClick={() => {
                    setNftData(data);
                    setShowModal(true);
                  }}
                >
                  <h3 className={styles.paragraph}>{data.name}</h3>
                  <img
                    src={data.image_preview_url}
                    alt={data.name}
                    width={250}
                    height={250}
                  />
                </div>
              );
            })}
          </div>
        )}
      </section>
      <Modal
        isVisible={showModal}
        onClose={() => setShowModal(false)}
        moreData={nftData}
      />
    </Fragment>
  );
};

export default Market;
