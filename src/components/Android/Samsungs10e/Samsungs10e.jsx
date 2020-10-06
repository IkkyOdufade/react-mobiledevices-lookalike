import React, {useState} from 'react';
import styled from "@emotion/styled";
import {samsngphoneBody, blackspacetop, mainbtton, blackspacebottom, dotsam10, cameraSams10, paddingCont, body} from '../../config/style';

export default function Samsungs10e({content}) {
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
  
  const Dot = styled.div `
  ${dotsam10}
  ` 
  const Camera = styled.div `
  ${cameraSams10}

  ` 
  const Blackspacebottom = styled.div `
  ${blackspacebottom}
  `

  const Content = styled.button `
  ${mainbtton}
  `

  const handleClick = (e) => {
    e.preventDefault()
    console.log("Add whatever you need to add :)")
    
    }




 
   return (
      <MainBody>
        <p>Mine</p>
        <Padding>
          <Smartphone>
            <Blackspacetop></Blackspacetop>
            <Camera>
            <Dot></Dot>
            </Camera>
            {content ? content : <Content onClick={handleClick}>Click me!</Content>}
            <Blackspacebottom></Blackspacebottom>
          </Smartphone>
        </Padding>
      </MainBody> 
    )
};
