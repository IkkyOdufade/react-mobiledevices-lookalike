import React from 'react';
import {body, paddingCont, mainbtton,iphoneBody11, iphoneDash11, dotiph11, dotiph11i} from  "../../config/style";
import styled from '@emotion/styled';

export default function IPhone11({content}) {
  const MainBody = styled.div `
${body}
`;

const Padding = styled.div `
${paddingCont}
`;
const IphoneBody11 = styled.div `
${iphoneBody11}
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
  
  } 
;
    return (
        <MainBody>
          <p>You are not..</p>
          <Padding>
            <IphoneBody11>
              <IPhoneDash11></IPhoneDash11>
              <IPhonedot11i></IPhonedot11i>
              <IPhonedot11></IPhonedot11>
{              content ? content :<Content onClick={handleClick}>Click me !!</Content>
}            </IphoneBody11>
          </Padding>
        </MainBody>
    )
}
