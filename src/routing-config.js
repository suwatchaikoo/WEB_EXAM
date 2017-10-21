import React from 'react'
import { Redirect } from 'react-router'
import { Input,Calculater,Output,Home2 } from './Components'
import fakeAuth from './Auth'
const routes = [
  {
    'path':'/',
    'component': Input,
    'exact': true
  },
  {
    'path':'/level1/:value',
    'component': Output,
  },
  {
    'path':'/Home2',
     'component': Home2
  },
//   {
//     'path':'/Blocking',
//     'component': Blocking
//   },
//   {
//     'path':'/Miss',
//     'component': Miss
//   },
//   {
//     'path':'/QueryParams',
//     'component': QueryParams
//   },
//   {
//     'path':'/Recursive',
//     'component': Recursive
//   },
//   {
//     'path':'/login',
//     'component': Login
//   },
//   {
//         'path':'/homework',
//         'component': Homework
//   },
//   {
//     'path':'/Protected',
//     'component': () => (fakeAuth.isAuthenticated ? (<ProtectedPage />) : (<Redirect to={{pathname: '/login',state: { from: '/Protected'}
//     }}/>))
//   }
];

export default routes;
