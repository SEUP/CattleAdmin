function view(name) {
  return function (resolve) {
    require(['@/components/admin/' + name + '.vue'], resolve);
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
      path: '/create',
      name: 'create-farmer',
      component: view('farmer/create')
    },
    {
      path: '/:id/edit',
      name: 'edit-farmer',
      component: view('farmer/edit')
    },
    {
      path: 'report',
      name: 'admin/farmer/report',
      component: view('FarmerReport/index')
    },

  ]
}
