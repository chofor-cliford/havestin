import axios from 'axios';
import React, {useState, useEffect} from 'react';
import { MdFavorite } from 'react-icons/md';
import useAuthStore from '../../store/authStore';
import { BASE_URL } from '../../utils';
import { AlreadyLiked, LikeButtonContainer, LikeButtonWrapper, LikeText, NotAlreadyLiked } from './styles';

interface Iprops {
    handleLike: () => void;
    handleDislike: () => void;
    likes: any[];
    };

const LikeButton = ({handleLike, handleDislike, likes}:Iprops) => {
    const [alreadyLiked, setAlreadyLiked] = useState(false);
    const {userProfile}: any =useAuthStore(); 
    
  const filterLikes = likes?.filter((item) => item._ref === userProfile?._id);

useEffect(() => {
  if(filterLikes?.length > 0){
    setAlreadyLiked(true)
  }else{
    setAlreadyLiked(false);
  }
}, [filterLikes, likes])


  return (
    <LikeButtonContainer>
        <LikeButtonWrapper>
            {alreadyLiked ? (
                <AlreadyLiked onClick={handleDislike}>
                    <MdFavorite style={{fontSize: 'x-large'}} />
                </AlreadyLiked>
            ):(
                <NotAlreadyLiked onClick={handleLike}>
                    <MdFavorite style={{fontSize: 'x-large'}} />
                </NotAlreadyLiked>
            )}
            <LikeText>{likes?.length | 0}</LikeText>
        </LikeButtonWrapper>
    </LikeButtonContainer>
  )
}

export default LikeButton;