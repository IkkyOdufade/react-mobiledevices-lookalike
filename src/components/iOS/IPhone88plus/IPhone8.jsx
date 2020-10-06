import React from 'react';
import {body, paddingCont, mainbtton,iphoneBody8, iphoneDash67, dotiph8, dot1iph8, dot2iph8,  dotbottIph8} from  "../../config/style";
import styled from '@emotion/styled';


export default function IPhone8({content}) {
  const MainBody = styled.div `
  ${body}
  `;
  
  const Padding = styled.div `
  ${paddingCont}
  `;
  
  const IPhoneBody8 = styled.div `
  ${iphoneBody8}
  `;
  const IPhoneDash67 = styled.div `
  ${iphoneDash67}
  `;
  const IPhonedot8 = styled.div `
  ${dotiph8}
  `;
  const IPhonedot18 = styled.div `
  ${dot1iph8}
  `;
  
  const IPhonedot28 = styled.div `
  ${dot2iph8}
  `;
  
  const IPhonedotbot8 = styled.div `
  ${dotbottIph8}
  `

  const Content = styled.button `
  ${mainbtton}
  `
  const handleClick = (e) => {
    e.preventDefault()
    console.log("Add whatever you need to add :)")
    
    } 
  
  ;
  
    return (
      <MainBody>
        <p>You are not..</p>
      <Padding>
        <IPhoneBody8>
          <IPhoneDash67></IPhoneDash67>
          <IPhonedot8></IPhonedot8>
          <IPhonedot28></IPhonedot28>
{          content? content :<Content onClick={handleClick}>Click me !!</Content>
}          <IPhonedot18></IPhonedot18>
          <IPhonedotbot8></IPhonedotbot8>
        </IPhoneBody8>
      </Padding>
    </MainBody>
  
    )
}

