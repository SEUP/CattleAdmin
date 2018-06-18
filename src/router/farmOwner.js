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
      path: ':id/editFarmOwner',
      name: 'farmOwner-editFarmOwner',
      component: view('farmOwner/questionnaire/editFarmOwner')
    },
    {
      path: '/addFarmOwner',
      name: 'farmOwner-addFarmOwner',
      component: view('farmOwner/questionnaire/addFarmOwner')
    },
  ]
}
