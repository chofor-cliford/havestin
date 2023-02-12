import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import {AiOutlineLogout} from 'react-icons/ai';
import {BiSearch} from 'react-icons/bi';
import {IoMdAdd} from 'react-icons/io';
import logo from '../../asset/log10.png'
import { LoggedUserContainer, LogoutButton, NavContainer, NavInput, NavMenu, NavSearchButton, NavSearchContainer, UploadButton, UploadText } from './styles';
import {GoogleLogin, googleLogout} from '@react-oauth/google';
import { CreateOrGetUser } from '../../utils';
import useAuthStore from '../../store/authStore';


export const Navbar = () => {
  const [searchValue, setSearchValue] = useState('');
  const {userProfile, addUser, removeUser}:any = useAuthStore();
  const router = useRouter();

  const handleSearch = (e:React.FormEvent) => {
    e.preventDefault();

    if(searchValue){
      router.push(`/search/${searchValue}`)
    }
  }
  
  return (
    <NavContainer>
      <Link href="/">
        <NavMenu>
          <Image
            src={logo}
            height={50}
            width={160}
            alt="logo"
            style={{ cursor: "pointer", borderRadius: "2px" }}
          />
        </NavMenu>
      </Link>
      <NavSearchContainer onSubmit={handleSearch}>
          <NavInput
            type="text"
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
            placeholder="Search accounts and videos"
            required
          />
          <NavSearchButton onClick={handleSearch}>
            <BiSearch />
          </NavSearchButton>
      </NavSearchContainer>
      <>
        {userProfile ? (
          <LoggedUserContainer>
            <Link href="/upload/upload">
              <UploadButton>
                <IoMdAdd />
                <UploadText>Upload</UploadText>
              </UploadButton>
            </Link>
            {userProfile.image && (
              <Link href={`/profile/${userProfile._id}`}>
                <>
                  <Image
                    src={userProfile.image}
                    width={40}
                    height={40}
                    style={{ borderRadius: "50%", cursor: "pointer" }}
                    alt="profile-image"
                  />
                </>
              </Link>
            )}
            <LogoutButton
              type="button"
              onClick={() => {
                googleLogout();
                removeUser();
              }}
            >
              <AiOutlineLogout color="#ff0000" fontSize={31} cursor="pointer" />
            </LogoutButton>
          </LoggedUserContainer>
        ) : (
          <GoogleLogin
            onSuccess={(response) => CreateOrGetUser(response, addUser)}
            onError={() => console.log("Erro")}
          />
        )}
      </>
    </NavContainer>
  );
}
export default Navbar