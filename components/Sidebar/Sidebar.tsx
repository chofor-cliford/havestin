import React, { useState } from 'react';
import { NextPage } from 'next';
import { useRouter } from 'next/router';
import {AiFillHome, AiOutlineMenu} from 'react-icons/ai';
import {ImCancelCircle } from 'react-icons/im';
import { MobileContainer, MobileParagraph, MobileSpan, SidebarContainers, SideContainer, SideLinks, SideWrapper } from './styles';
import Link from 'next/link';
import Discover from '../Discover/Discover';
import  SuggestedAccount  from '../SuggestedAccounts/SuggestedAccounts';
import Footer from '../Footer/Footer';

const Sidebar = () => {
  const [showSidebar, setShowSidebar] = useState(true);
   const router = useRouter();
  return (
    <SidebarContainers>
     <SideContainer onClick={() => setShowSidebar((pre) => !pre)}>
      {showSidebar? <ImCancelCircle /> : <AiOutlineMenu />}
     </SideContainer>
     {showSidebar && (
      <MobileContainer>
        <SideWrapper>
        <Link href= '/' >
          <SideLinks>
          <MobileParagraph>
            <AiFillHome />
          </MobileParagraph> 
          <MobileSpan>For you</MobileSpan>  
          </SideLinks>       
        </Link>
        <Discover />
        <SuggestedAccount/>
        <Footer/>
        </SideWrapper>
      </MobileContainer>
     )}
    </SidebarContainers>
  )
}

export default Sidebar