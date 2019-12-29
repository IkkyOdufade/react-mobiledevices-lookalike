import React from 'react';
import {body, paddingCont, iphoneBody66s7, dotiph66s7, dot1iph66s7, dot2iph66s7, iphoneDash67, dotbottIph66s7, dotellipseIph66s7} from  "../../config/style";
import styled from '@emotion/styled';


export default function IPhone66s7() {
  const MainBody = styled.div `
  ${body}
  `;
  
  const Padding = styled.div `
  ${paddingCont}
  `;
  
  const IPhoneBody66s7 = styled.div `
  ${iphoneBody66s7}
  `;
  const IPhoneDash67 = styled.div `
${iphoneDash67}
`;
  const IPhonedot66s7 = styled.div `
  ${dotiph66s7}
  `;
  const IPhonedot166s7 = styled.div `
  ${dot1iph66s7}
  `;
  
  const IPhonedot266s7 = styled.div `
  ${dot2iph66s7}
  `;
  const IPhonedotbot66s7 = styled.div `
  ${dotbottIph66s7}
  `;
  
  const IPhonedotell66s7 = styled.div `
  ${dotellipseIph66s7}
  `
  const handleClick = (e) => {
    e.preventDefault()
    console.log("Add whatever you need to add :)")
    
    } 
  ;
      return (
          <MainBody>
            <p>Meaning??</p>
            <Padding>
              <IPhoneBody66s7>
                <IPhoneDash67></IPhoneDash67>
                <IPhonedot66s7></IPhonedot66s7>
                <IPhonedot166s7></IPhonedot166s7>
                <IPhonedot266s7></IPhonedot266s7>
                <Content onClick={handleClick}>Click me !!</Content>
                <IPhonedotbot66s7></IPhonedotbot66s7>
                <IPhonedotell66s7></IPhonedotell66s7>
              </IPhoneBody66s7>
            </Padding>
          </MainBody>
      )
  };

