import Head from 'next/head'
import { Component } from 'react';
import UsersPage from '../components/UsersPage';
import Accounts from '../components/accounts';
export default function userpage() {
  return (
    <Accounts>
      <UsersPage/> 
    </Accounts>
  )
}
