import React from 'react'
import { HomeContainer, HomeContainers, HomeContent, HomeWrapper } from './styles'
import Sidebar from '../../components/Sidebar/Sidebar'
import  Navbar  from '../../components/Navbar/Navbar'


const Homes = ({ Component, pageProps }:any) => {
  return (
    <HomeContainers>
    <Navbar/>
    <HomeContainer>
        <HomeWrapper>
            <Sidebar/>
        </HomeWrapper>
        <HomeContent>
             <Component {...pageProps} />
        </HomeContent>
    </HomeContainer>
    </HomeContainers>
  )
}

export default Homes