import React from 'react';
import {body, paddingCont, mainbtton,iphoneBody11ProMax, iphoneDash11, dotiph11, dotiph11i} from  "../../config/style";
import styled from '@emotion/styled';


export default function IPhone11ProMax({content}) {
  const MainBody = styled.div `
  ${body}
  `;
  
  const Padding = styled.div `
  ${paddingCont}
  `;
  const IphoneBody11ProMax = styled.div `
  ${iphoneBody11ProMax}
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
    
    };
    
    return (
      <MainBody>
        <p>Alone..</p>
      <Padding>
        <IphoneBody11ProMax>
          <IPhoneDash11></IPhoneDash11>
          <IPhonedot11i></IPhonedot11i>
          <IPhonedot11></IPhonedot11>
{content? content:          <Content onClick={handleClick}>Click me !!</Content>
}        </IphoneBody11ProMax>
      </Padding>
    </MainBody> 
    )
}
