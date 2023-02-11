import { NextPage } from 'next';
import React from 'react'
import { BiCommentX } from 'react-icons/bi';
import { MdOutlineVideocamOff } from 'react-icons/md';
import { NoResultsContainer, NoResultsIconContainer, NoResultsText } from './styles';

interface Iprops {
  text: string;
}

const NoResults: NextPage<Iprops> = ({text}) => {
  return (
    <NoResultsContainer>
      <NoResultsIconContainer>
      {text ==='No comments yet.' ?
      <BiCommentX />: <MdOutlineVideocamOff />
      }
      </NoResultsIconContainer>
      <NoResultsText>{text}</NoResultsText>
    </NoResultsContainer>
  )
}

export default NoResults