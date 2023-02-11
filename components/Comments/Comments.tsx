import React, { useState, Dispatch, SetStateAction } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { GoVerified } from 'react-icons/go';
import useAuthStore from '../../store/authStore';
import NoResults from '../NoResults/NoResults';
import { AccountNames, AccountRight, CommentsContainer, CommentsWrapper, Form, Input, PostedCommentContainer, PostedCommentWrapper, PostingButton, UsersCommentContainer } from './styles';
import { IUser } from '../../types';
import { Accountname, AccountName, AccountsContainer, AccountsNameContainer, AccountsWrapper } from '../SuggestedAccounts/styles';

interface Iprops{
  isPostingComment: boolean;
  comment: string;
  setComment: Dispatch<SetStateAction<string>>;
  addComment: (e:React.FormEvent) => void;
  comments: IComment[];
}

interface IComment{
  comment: string;
  length?: number;
  _key: string;
  postedBy: {_ref?: string; _id?: string};
}

const Comments = ({comment, setComment, addComment, comments, isPostingComment}: Iprops) => {
  const {userProfile, allUsers}= useAuthStore();

 return (
    <CommentsContainer>
      <CommentsWrapper>
        {comments?.length > 0 ? (
          <>
          {comments.map((item:IComment, i) => (
            <>
            {allUsers.map((user: IUser) => (
              user._id === (item.postedBy._id || item.postedBy._ref) && (
                <PostedCommentContainer key={i}>
                  <Link href={`/profile/${user._id}`}>
                    <PostedCommentWrapper>
                      <AccountsContainer>
                        <AccountsWrapper>
                          <Image 
                          src={user.image} 
                          layout='responsive' 
                          alt='user profile' 
                          width={32} 
                          height={32} 
                          style={{borderRadius:'50%'}} />
                        </AccountsWrapper>
                        <AccountsNameContainer>
                        <AccountNames>
                          <AccountRight>
                          {user.userName.replace(' ','')}
                          <GoVerified color='cornflowerblue' style={{marginLeft: '2px'}} />
                          </AccountRight>
                          <Accountname>{user.userName}</Accountname>
                        </AccountNames>
                      </AccountsNameContainer>                            
               </AccountsContainer>     
                </PostedCommentWrapper>
                  </Link>
                  <div>{item.comment}</div>
                    </PostedCommentContainer>
              )
            ))}
            </>
          ))}
          </>
        ):(      
          <NoResults  text='No comments yet.'/>
        )}
      </CommentsWrapper>
      {userProfile && (
        <UsersCommentContainer>
          <Form onSubmit={addComment}>
            <Input value={comment} onChange={(e) => setComment(e.target.value)} placeholder='Add comments'/>
            <PostingButton onClick={addComment}>
            {isPostingComment? 'Commenting...': 'Comment'}
            </PostingButton>        
          </Form>        
        </UsersCommentContainer>
      )}
    </CommentsContainer>
  )
}

export default Comments;