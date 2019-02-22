import React from 'react';
import styled, { css } from 'styled-components';

// Refactor this component to use styled components and not classNames. 
// You can find the corresponding CSS in the CSS/index.css file

export const StyledTopBar = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: none;
  flex-direction: row;
  position: fixed;
  height: 44px;
  background-color: #333;
`;

export const StyledTopBarContainer = styled.div`
width: 100%;
  display: flex;
  justify-content: none;
  align-items: none;
  flex-direction: row;
  color: #fff;
  letter-spacing: 1px;
  padding: 0 10px;

@media (min-width: 1280px) {
  .top-bar .container {
    width: 1280px;
  }
}
${props => 
  props.text === 'container-left' && 
  css`        
  display: flex;
  justify-content: none;
  align-items: center;
  flex-direction: row;
  flex: 1;
  font-size: 11px;
  `}
  ${props => 
    props.text === 'container-center' && 
    css`        
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    flex: 3;
    font-size: 9px;
    `}
    ${props => 
      props.text === 'container-right' && 
      css`        
      display: flex;
      justify-content: flex-end;
      align-items: center;
      flex-direction: row;
      flex: 1;
      font-size: 11px;
      font-weight: bold;
      `}
`;

export const StyledLeftSpan = styled.span`
  cursor: pointer;
  margin-right: 25%;
  font-weight: bold;
`;
export const StyledCenterSpan = styled.span`
  cursor: pointer;
  margin-right: 5%;

  &:hover {
    text-decoration: underline;
  }
`;
export const StyledRightSpan = styled.span`
  cursor: pointer;
`



const TopBar = () => {
  return (
    <StyledTopBar>
      <StyledTopBarContainer >
        <StyledTopBarContainer text="container-left">
          <StyledLeftSpan>TOPICS</StyledLeftSpan><StyledLeftSpan>SEARCH</StyledLeftSpan>
        </StyledTopBarContainer>
        <StyledTopBarContainer text="container-center">
          <StyledCenterSpan>GENERAL</StyledCenterSpan><StyledCenterSpan>BROWNBAG</StyledCenterSpan><StyledCenterSpan>RANDOM</StyledCenterSpan><StyledCenterSpan>MUSIC</StyledCenterSpan><StyledCenterSpan>ANNOUNCEMENTS</StyledCenterSpan>
        </StyledTopBarContainer>
        <StyledTopBarContainer text="container-right">
          <StyledRightSpan>LOG IN</StyledRightSpan>
        </StyledTopBarContainer>
      </StyledTopBarContainer>
    </StyledTopBar>
  )
}

export default TopBar;