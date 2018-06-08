function view(name) {
  return function (resolve) {
    require(['@/components/' + name + '.vue'], resolve);
  }
}

export default {
  path: 'farmOwner',
  name: 'farmOwner',
  component: view('farmOwner/template'),
  children: [
    {
      path: 'index',
      name: 'farmOwner-index',
      component: view('farmOwner/index')
    }, {
      path: 'edit',
      name: 'farmOwner-edit',
      component: view('farmOwner/edit')
    },
    {
      path: 'part7',
      name: 'farmOwner-part7',
      component: view('farmOwner/part7')
    },
  ]
}
