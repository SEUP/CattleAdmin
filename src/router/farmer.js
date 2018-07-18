function view(name) {
  return function (resolve) {
    require(['@/components/' + name + '.vue'], resolve);
  }
}

export default {
  path: 'farmer',
  name: 'farmer',
  component: view('farmer/template'),
  children: [
    {
      path: '/',
      name: 'farmer-index',
      component: view('farmer/index')
    },
    {
      path: '/addfarmer',
      name: 'add-farmer',
      component: view('farmer/addFarmer')
    },
    {
      path: '/editfarmer',
      name: 'edit-farmer',
      component: view('farmer/editFarmer')
    }
  ]
}
