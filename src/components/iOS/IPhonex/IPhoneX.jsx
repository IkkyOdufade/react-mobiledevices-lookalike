import React from 'react';
import {body, paddingCont, iphoneBodyX, iphoneDash11, dotiph11, dotiph11i} from  "../../config/style";
import styled from '@emotion/styled';


export default function IPhoneX() {
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
  `;
  
  
  return (
    <MainBody>
      <p>All at once.</p>
          <Padding>
            <IPhoneBodyX>
              <IPhoneDash11></IPhoneDash11>
              <IPhonedot11i></IPhonedot11i>
              <IPhonedot11></IPhonedot11>
            </IPhoneBodyX>
          </Padding>
        </MainBody> 
  )
}



