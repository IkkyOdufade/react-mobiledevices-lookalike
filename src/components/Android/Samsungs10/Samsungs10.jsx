import React, {useState} from 'react';
import styled from "@emotion/styled";
import {samsngphoneBody, mainbtton, dotsam10,blackspacetop, blackspacebottom, cameraSams10, paddingCont, body} from '../../config/style';


export default function Samsungs10({content}) {
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
console.log("It works!!")

}

   return (
      <MainBody>
        <p>Yo!</p>
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