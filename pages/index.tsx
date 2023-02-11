import type { NextPage } from 'next';
import axios from 'axios';
import { Video } from '../types';
import { ServerContainer } from '../styles/globalstyles';
import VideoCard from '../components/VideoCard/VideoCard';
import NoResults from '../components/NoResults/NoResults';
import {BASE_URL} from '../utils';

interface Iprops {
  videos: Video[]
}

const Home = ({videos}:Iprops) => {
  console.log(videos)
  return (
    <ServerContainer>
     { videos.length ? (
      videos.map((video : Video) => (
        <VideoCard post={video} key={video._id} />
      ))):(
        <NoResults text='No Videos' />
      )}
    </ServerContainer>
  )
}

export const getServerSideProps = async ({query: {topic}}:{query: {topic: string}}) => {
  let response = null;
  if (topic) {
    response = await axios.get(`${BASE_URL}/api/discover/${topic}`);
  } else {
    response = await axios.get(`${BASE_URL}/api/post`);
  }
  
 
  return{
    props: {
      videos: response.data
    },
  }
}

export default Home
