'use client'
import React from 'react';
import { ClipLoader } from 'react-spinners';
import styled from 'styled-components';

const PreloaderWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f0f2f5; 
`;

const PagePreloader = () => {
  return (
    <PreloaderWrapper>
      <ClipLoader color="green" size={100} />
    </PreloaderWrapper>
  );
};
export default PagePreloader;
