import Head from 'next/head'
import { Component } from 'react';
import UsersPage from '../components/UsersPage';
import Layout from '../components/layout2';

export default function userpage() {
  return (
    <UsersPage/> 
  )
}
userpage.getLayout = function getLayout(page) {
  return (
    <Layout>
      {page}
    </Layout>
  )
}
