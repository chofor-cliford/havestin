import Image from 'next/image';
import Link from 'next/link';
import React, {useEffect} from 'react';
import { GoVerified } from 'react-icons/go';
import useAuthStore from '../../store/authStore';
import { IUser } from '../../types';
import { Accountname, AccountName, AccountsContainer, AccountsNameContainer, AccountsWrapper, SuggestedAccountsContainer, SuggestedAccountTitle } from './styles';


const SuggestedAccounts = () => {
  const {fetchAllUsers, allUsers }= useAuthStore();

  useEffect(() => {
    fetchAllUsers();
  }, [fetchAllUsers])
  
  return (
    <SuggestedAccountsContainer>
      <SuggestedAccountTitle>Suggested Accounts</SuggestedAccountTitle>
      <>
      {allUsers.slice(0, 6).map((user: IUser) => (
        <Link href={`/profile/${user._id}`} key={user._id}>
          <AccountsContainer>
            <AccountsWrapper>
              <Image 
              src={`${user.image}`} 
              layout='responsive' 
              alt='user profile' 
              width={32} 
              height={32} 
              style={{borderRadius:'50%'}} />
            </AccountsWrapper>
            <AccountsNameContainer>
              <AccountName>
                {user.userName.replace(' ','')}
                <GoVerified color='cornflowerblue' style={{marginLeft: '2px'}} />
                <Accountname>{user.userName}</Accountname>
              </AccountName>
            </AccountsNameContainer>
          </AccountsContainer>
        </Link>
      ))}
      </>
    </SuggestedAccountsContainer>
  )
}

export default SuggestedAccounts;
