import React from 'react';
import { footerList1, footerList2, footerList3 } from '../../utils/constants';
import { FooterContainer, FooterItems, FooterRight, FooterWrapper } from './styles';

const List = ({items}:{items:string[]}) => (
  <FooterWrapper>
        {items.map((item) => (
          <FooterItems key={item}>
            {item}
          </FooterItems>
        ))}
      </FooterWrapper>
)

const Footer = () => {
  return (
    <FooterContainer>
      <List items={footerList1} />
      <List items={footerList2} />
     <List items={footerList3} />
     <FooterRight> 2022 Havestin</FooterRight>
    </FooterContainer>
  )
}

export default Footer