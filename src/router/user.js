function view(name) {
  return function (resolve) {
    require(['@/components/admin/' + name + '.vue'], resolve);
  }
}


export default {
  path: 'user',
  name: 'user',
  component: view('user/template'),
  children: [
    {
      path: "index",
      name: 'user-index',
      component: view('user/index')
    },
    {
      path: "create",
      name: 'user-create',
      component: view('user/create')
    },
    {
      path : ':id/edit',
      name : 'user-edit',
      component : view('user/edit')
    },{
      path : ':id/profile/:username',
      name : 'user-userProfile',
      component : view('user/userProfile')
    },

  ]
}
