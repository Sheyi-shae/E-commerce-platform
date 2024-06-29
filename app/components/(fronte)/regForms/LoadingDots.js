// src/LoadingDots.js
import React from 'react';
import { ThreeDots,Watch } from 'react-loader-spinner';

export default function LoadingDots ()  {
  return (
    <div className="loading-dots">
      <ThreeDots 
         height={'20'}
         width={'20'}
        radius="0.5"
        color="white" 
        ariaLabel="three-dots-loading"
        wrapperStyle={{}}
        wrapperClassName=""
        visible={true}
      />
    </div>
  );
};




