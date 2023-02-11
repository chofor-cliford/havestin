import { useState, useEffect} from 'react';
import { GoogleOAuthProvider} from '@react-oauth/google';
import Homes from '../containers/Home/Home';
import { GlobalSytles } from '../styles/globalstyles';
import { AppProps } from 'next/app';

const MyApp = ({ Component, pageProps }:AppProps) => {

  const [isSSR, setIsSSR] = useState(true);
  useEffect(() => {  
      setIsSSR(false)
  }, []);

  if(isSSR) return null;

  return(
    <GoogleOAuthProvider clientId={`${process.env.NEXT_PUBLIC_GOOGLE_API}`}> 
    <GlobalSytles /> 
    <Homes Component={Component} pageProps={pageProps} />
    
  </GoogleOAuthProvider >
  )
}

export default MyApp
