import React from 'react';
import {body, paddingCont, iphoneBody11Pro, iphoneDash11, dotiph11, dotiph11i} from  "../../config/style";
import styled from '@emotion/styled';

export default function IPhone11Pro() {
  const MainBody = styled.div `
${body}
`;

const Padding = styled.div `
${paddingCont}
`;
const IphoneBody11Pro = styled.div `
${iphoneBody11Pro}
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

const handleClick = (e) => {
  e.preventDefault()
  console.log("Add whatever you need to add :)")
  
  } ;
    return (
        <MainBody>
          <p>Stay away..</p>
          <Padding>
            <IphoneBody11Pro>
              <IPhoneDash11></IPhoneDash11>
              <IPhonedot11i></IPhonedot11i>
              <IPhonedot11></IPhonedot11>
              <Content onClick={handleClick}>Click me !!</Content> 
            </IphoneBody11Pro>
          </Padding>
        </MainBody>
    )
}

