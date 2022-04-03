import Head from 'next/head'
import { Component } from 'react';
import Users from '../components/Users';
import Layout from '../components/layout2';

export default function userpage() {
  return (
    <Users/> 
  )
}
userpage.getLayout = function getLayout(page) {
  return (
    <Layout>
      {page}
    </Layout>
  )
}
