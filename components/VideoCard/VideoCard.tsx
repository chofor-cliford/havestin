import React, { useRef, useState, useEffect } from 'react';
import { Video } from '../../types';
import {NextPage} from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { HiVolumeUp, HiVolumeOff } from 'react-icons/hi';
import {BsFillPlayFill, BsFillPauseFill} from 'react-icons/bs';
import { Icon, Username, UserName, UserProfileWrapper, Videos, VideoCardArrangement, VideoCardContainer, VideoCardWrapper, VideoPostContainer, VideoPostWrapper, PlayingContainer, Button } from './styles';


interface Iprops {
    post: Video;
}

const VideoCard = ({post}: Iprops) => {
  const [isHover, setIsHover] = useState(false);
  const [playing, setPlaying] = useState(false);
  const [isVideoMuted, setIsVideoMuted] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  

  useEffect(() => {
    if(videoRef?.current){
      videoRef.current.muted = isVideoMuted;
    }
  }, [isVideoMuted]);

  const onVideoPress = () =>{
    if(playing){
    videoRef?.current?.pause();
    setPlaying(false)
    }else{
      videoRef?.current?.play();
      setPlaying(true);
    }
  }

  
  return (
    <VideoCardContainer>
      <div>
        <VideoCardWrapper>
          <VideoCardArrangement>
            <Link href={`/profile/${post.postedBy._id}`} >            
              <Image src={post.postedBy.image} width={62} height={62} layout='responsive' style={{borderRadius: '50%'}} alt='profile-image' />
            </Link>
          </VideoCardArrangement>
          <div>
            <Link href={`/profile/${post.postedBy._id}`}>
              <UserProfileWrapper>
                <UserName>
                  {post.postedBy.userName} {``}
                    <Icon />
                </UserName>
                <Username>{post.postedBy.userName}</Username>            
              </UserProfileWrapper>
            </Link>
          </div> 
        </VideoCardWrapper>
      </div>
      <VideoPostContainer 
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
      >
        <VideoPostWrapper>
          <Link href={`/detail/${post._id}`}>
            <Videos src={post.video.asset.url} loop ref={videoRef} /> 
          </Link>
          {isHover && (
            <PlayingContainer>
              {playing ? (
                <Button onClick={onVideoPress}>
                <BsFillPauseFill style={{color: '#000', fontSize:'x-large'}} />
                 </Button >
              ):(
                <Button onClick={onVideoPress}>
                <BsFillPlayFill style={{color: '#000', fontSize:'x-large'}} />
                </Button >
              )}
               {isVideoMuted ? (
                <Button onClick ={() => setIsVideoMuted(false)}>
                <HiVolumeOff style={{color: '#000', fontSize:'x-large'}} />
                 </Button >
              ):(
                <Button onClick ={() => setIsVideoMuted(true)}>
                <HiVolumeUp style={{color: '#000', fontSize:'x-large'}} />
                </Button >
              )}
            </PlayingContainer>
          )}
                   
        </VideoPostWrapper>
        </VideoPostContainer>
    </VideoCardContainer>
  )
}

export default VideoCard;