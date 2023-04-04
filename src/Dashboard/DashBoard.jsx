import React from 'react';
import SideBar from '../Layout/Sidebar/SideBar';
import styled from 'styled-components';
import Main from '../Layout/Main/Main';

const DashboardWrapper = styled.div`
  /* padding: 7px; */
  background-color: #ebe6eb;
  height: 100vh;
  width: 100vw;
`;

const DashBoard = () => {
  return (
    <DashboardWrapper>
      <SideBar />
      <Main/>
    </DashboardWrapper>
  );
};

export default DashBoard;
