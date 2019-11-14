import React from 'react';
const Register = React.lazy(() => import('./view/user/Register'));
const Users = React.lazy(() => import('./view/user/Users'));
const Groups = React.lazy(() => import('./view/group/Groups'));

// https://github.com/ReactTraining/react-router/tree/master/packages/react-router-config
const routes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/register', name: 'Dashboard', component: Register },
  { path: '/groups', name: 'Groups', component: Groups },
  { path: '/users', name: "Users", component: Users}
];

export default routes;
