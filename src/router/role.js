function view(name) {
  return function (resolve) {
    require(['@/components/' + name + '.vue'], resolve);
  }
}

export default {
  path: 'role',
  name: 'role',
  component: view('role/template'),
  children: [
    {
      path: 'index',
      name: 'role-index',
      component: view('role/index')
    },
  ]
}
