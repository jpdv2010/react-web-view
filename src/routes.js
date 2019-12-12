import React from 'react';
const Register = React.lazy(() => import('./view/user/Register'));
const Users = React.lazy(() => import('./view/user/Users'));
const Groups = React.lazy(() => import('./view/group/Groups'));
const User = React.lazy(() => import('./view/user/User'));
const Cities = React.lazy(() => import('./view/city/Cities'));

// https://github.com/ReactTraining/react-router/tree/master/packages/react-router-config
const routes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/register', name: 'Dashboard', component: Register },
  { path: '/groups', name: 'Groups', component: Groups },
  { path: '/users', exact: true, name: "Users", component: Users},
  { path: '/users/:id', exact: true, name: 'Detalhes do Usuário', component: User },
  { path: '/city', name: 'Cidades', component: Cities }
];

export default routes;
