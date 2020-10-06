import React from 'react';
import {body,mainbtton, paddingCont, iphoneBodyX, iphoneDash11, dotiph11, dotiph11i} from  "../../config/style";
import styled from '@emotion/styled';


export default function IPhoneX({content}) {
  const MainBody = styled.div `
  ${body}
  `;
  
  const Padding = styled.div `
  ${paddingCont}
  `;
  
  const IPhoneBodyX = styled.div `
  ${iphoneBodyX}
  `;
  const IPhoneDash11 = styled.div `
  ${iphoneDash11}
  `;
  const IPhonedot11 = styled.div `
  ${dotiph11}
  `;
  const IPhonedot11i = styled.div `
  ${dotiph11i}
  `
  const Content = styled.button `
  ${mainbtton}
  `
  
  const handleClick = (e) => {
    e.preventDefault()
    console.log("Add whatever you need to add :)")
    
    } ;
  
  
  return (
    <MainBody>
      <p>All at once.</p>
          <Padding>
            <IPhoneBodyX>
              <IPhoneDash11></IPhoneDash11>
              <IPhonedot11i></IPhonedot11i>
              <IPhonedot11></IPhonedot11>
              {content?content :  <Content  onClick={e=>{
                handleClick()
              }}>Click me !!</Content>}
            </IPhoneBodyX>
          </Padding>
        </MainBody> 
  )
}



