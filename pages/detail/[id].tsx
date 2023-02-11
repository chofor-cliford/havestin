import React,{useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import Link from 'next/link';
import { GoVerified } from 'react-icons/go';
import { HiVolumeOff, HiVolumeUp } from 'react-icons/hi';
import axios from 'axios';
import { BASE_URL } from '../../utils';
import { Video } from '../../types';
import { DetailContainer, DetailVideo, DetailWrapper, PlayButton, PlayButtonContainer, CancleIcon, CancleIconContainer, VideoDetailContainer, VideoDetailWrapper, VideoMuteContainer, ImageDetailContainer, DetailRightContainer, DetailRightArrangement, DetailRightTextContainer, DetailRightWrapper, CaptionText, LikeContainer } from './styles';
import { BsFillPlayFill } from 'react-icons/bs';
import { Icon, Username, UserName, VideoCardWrapper } from '../../components/VideoCard/styles';
import useAuthStore from '../../store/authStore';
import LikeButton from '../../components/LikeButton/LikeButton';
import Comments from '../../components/Comments/Comments';

interface Iprops {
  postDetails: Video,
}

const Detail = ({postDetails}:Iprops) => {
  const [post, setPost] = useState(postDetails);
  const [playing, setPlaying] = useState(false);
  const [isVideoMuted, setIsVideoMuted] = useState(false);
  const [comment, setComment] = useState<string>('');
  const [isPostingComment, setIsPostingComment] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const router = useRouter();
  const {userProfile}:any = useAuthStore();

  const onVideoClick = () => {
    if(playing){
      videoRef?.current?.pause();
      setPlaying(false)
      }else{
        videoRef?.current?.play();
        setPlaying(true);
      }
  }

  useEffect(() => {
    if(post && videoRef?.current){
      videoRef.current.muted = isVideoMuted;
    }
  }, [post, isVideoMuted]);
  
  const handleLike = async (like:boolean) => {
    if(userProfile){
        const {data} = await axios.put(`${BASE_URL}/api/like`, {
            userId: userProfile._id,
            postId: post._id,
            like
        })
        setPost({...post, likes: data.likes});
    }
}
   const addComment = async (e:React.FormEvent) => {
     e.preventDefault();
  if(userProfile && comment){
    setIsPostingComment(true);

    const { data }:any = axios.put(`${BASE_URL}/api/post/${post._id}`, {
      userId: userProfile._id,
      comment
    });
    setPost({...post , comments: data?.comments})
    setComment('');
    setIsPostingComment(false);
  }
}
 
  if(!post) return null;

  return (
    <DetailContainer>
      <DetailWrapper>
        <CancleIconContainer>
        <ImageDetailContainer onClick={() => router.back()}>
        <CancleIcon />
        </ImageDetailContainer>
        </CancleIconContainer>
        <VideoDetailContainer>
          <VideoDetailWrapper>
            <DetailVideo src={post.video.asset.url} ref={videoRef} loop  onClick={onVideoClick}/>
          </VideoDetailWrapper>
          <PlayButtonContainer>
          {!playing && (
            <PlayButton  onClick={onVideoClick}>
            <BsFillPlayFill style={{fontSize: '70px', color: '#fff'}} />
            </PlayButton>
          )}
          </PlayButtonContainer>         
        </VideoDetailContainer>
        <VideoMuteContainer>
        {isVideoMuted ? (
                <PlayButton onClick ={() => setIsVideoMuted(false)}>
                <HiVolumeOff style={{color: '#fff', fontSize:'x-large'}} />
                 </PlayButton >
              ):(
                <PlayButton onClick ={() => setIsVideoMuted(true)}>
                <HiVolumeUp style={{color: '#fff', fontSize:'x-large'}} />
                </PlayButton >
              )}
        </VideoMuteContainer>
      </DetailWrapper>
      <DetailRightContainer>
      <DetailRightWrapper>
        <VideoCardWrapper>
          <DetailRightArrangement>
            <Link href='/' >            
              <Image src={post.postedBy.image} width={62} height={62} layout='responsive' style={{borderRadius: '50%'}} alt='profile-image' />
            </Link>
          </DetailRightArrangement>
          <div>
            <Link href='/'>
              <DetailRightTextContainer>
                <UserName>
                  {post.postedBy.userName} {``}
                    <Icon />
                </UserName>
                <Username>{post.postedBy.userName}</Username>            
              </DetailRightTextContainer>
            </Link>         
          </div> 
          </VideoCardWrapper>
          <CaptionText>{post.caption}</CaptionText>
          <LikeContainer>
            {userProfile && (
              <LikeButton 
              handleLike={() => handleLike(true)}
              handleDislike={() => handleLike(false)}
              likes={post.likes}
              />
            )}
            <Comments 
            comment={comment}
            comments={post.comments}
            setComment={setComment}
            addComment={addComment}
            isPostingComment={isPostingComment}
            />
            </LikeContainer>
        </DetailRightWrapper>
      </DetailRightContainer>
       </DetailContainer>
    
      
  )
}

export const getServerSideProps =async ({params: {id}}:{params: {id: string}}) => {
  const {data} = await axios.get(`${BASE_URL}/api/post/${id}`)
  return{
    props: {postDetails: data}
  }
}

export default Detail;