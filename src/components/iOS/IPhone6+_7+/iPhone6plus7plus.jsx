import React from 'react';
import { body, paddingCont, mainbtton, iphoneBody67, iphoneDash67, dotiph67, dot1iph67, dot2iph67, dotbottIph67, dotellipseIph67 } from "../../config/style";
import styled from '@emotion/styled';
export default function IPhone6plus7plus({ content }) {
  const MainBody = styled.div`
${body}
`;

  const Padding = styled.div`
${paddingCont}
`;

  const IPhoneBody67 = styled.div`
${iphoneBody67}
`;

  const IPhoneDash67 = styled.div`
${iphoneDash67}
`;

  const IPhonedot67 = styled.div`
${dotiph67}
`;
  const IPhonedot167 = styled.div`
${dot1iph67}
`;

  const IPhonedot267 = styled.div`
${dot2iph67}
`;

  const IPhonedotbot67 = styled.div`
${dotbottIph67}
`;

  const IPhonedotell67 = styled.div`
${dotellipseIph67}
`


  const Content = styled.button`
${mainbtton}
`




  const handleClick = (e) => {
    e.preventDefault()
    console.log("Add whatever you need to add :)")

  }



    ;
  return (
    <MainBody>
      <p>I'm here!!</p>
      <Padding>
        <IPhoneBody67>
          <IPhonedot67></IPhonedot67>
          <IPhoneDash67></IPhoneDash67>
          <IPhonedot167></IPhonedot167>
          <IPhonedot267></IPhonedot267>
          {content ? content : <Content onClick={handleClick}>Click me !!</Content>
          }                <IPhonedotbot67></IPhonedotbot67>
          <IPhonedotell67></IPhonedotell67>
        </IPhoneBody67>
      </Padding>
    </MainBody>
  )
}

