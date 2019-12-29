import React from 'react';
import styled from "@emotion/styled";
import {samsngphoneBody, dot2sam105g, dot1sam105g, dotsam105g,cameraSams10p5g ,blackspacetop, blackspacebottom5g, paddingCont, body} from '../../config/style';


export default function Samsungs105G() {
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
  ${dot1sam105g}
  ` 
  const Dot2 = styled.div `
  ${dot2sam105g}
  ` 
  const Dot = styled.div `
  ${dotsam105g}
  ` 
  const Camera = styled.div `
  ${cameraSams10p5g}

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
        <p>Broke:(</p>
        <Padding>
          <Smartphone>
            <Blackspacetop></Blackspacetop>
            <Camera>
            <Dot></Dot>
            <Dot2></Dot2>
            <Dot1></Dot1>
            </Camera>
            <Content onClick={handleClick}>Click me !!</Content>
            <Blackspacebottom></Blackspacebottom>
          </Smartphone>
        </Padding>
      </MainBody> 
    )
};

