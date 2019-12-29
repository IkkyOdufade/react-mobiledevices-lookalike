import React from 'react';
import styled from "@emotion/styled";
import {samsngphoneBody, dot1sam10p, dotsam10p, blackspacetop, blackspacebottom5g,cameraSams10p, paddingCont, body} from '../../config/style';

export default function Samsungs10plus() {
  const MainBody = styled.div `
  ${body}
  `
  const Padding = styled.div `
  ${paddingCont}
  `
 
  const Smartphone = styled.div `
  ${samsngphoneBody}
  `
  
  const Blackspacetop = styled.div `
  ${blackspacetop}
  `
  const Dot1 = styled.div `
  ${dot1sam10p}
  ` 
  const Dot = styled.div `
  ${dotsam10p}
  ` 
  const Camera = styled.div `
  ${cameraSams10p}

  ` 
  const Blackspacebottom = styled.div `
  ${blackspacebottom5g}
  `
  const handleClick = (e) => {
    e.preventDefault()
    console.log("Add whatever you need to add :)")
    
    } 
   return (
      <MainBody>
        <p>Looking down</p>
        <Padding>
          <Smartphone>
            <Blackspacetop></Blackspacetop>
            <Camera>
            <Dot></Dot>
            <Dot1></Dot1>
            </Camera>
            <Content onClick={handleClick}>Click me !!</Content>
            <Blackspacebottom></Blackspacebottom>
          </Smartphone>
        </Padding>
      </MainBody> 
    )
};