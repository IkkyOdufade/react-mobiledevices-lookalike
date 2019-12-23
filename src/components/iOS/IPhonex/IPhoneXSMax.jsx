import React from 'react';
import {body, paddingCont, iphoneBodyXS, iphoneDash11, dotiph11, dotiph11i} from  "../../config/style";
import styled from '@emotion/styled';


export default function IPhoneXSMax() {
  const MainBody = styled.div `
  ${body}
  `;
  
  const Padding = styled.div `
  ${paddingCont}
  `;
  
  const IPhoneBodyXS = styled.div `
  ${iphoneBodyXS}
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
         <p>Celebrate.</p>
      <Padding>
        <IPhoneBodyXS>
          <IPhoneDash11></IPhoneDash11>
          <IPhonedot11i></IPhonedot11i>
          <IPhonedot11></IPhonedot11>
        </IPhoneBodyXS>
      </Padding>
    </MainBody>  
    )
}

