import Head from 'next/head'
import { Component } from 'react';
import UsersPage from '../components/UsersPage';

export default function userpage() {
  userpage.Layout = "L2";

  return (
    <UsersPage/> 
  )
}
