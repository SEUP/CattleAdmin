function view(name) {
  return function (resolve) {
    require(['@/components/' + name + '.vue'], resolve);
  }
}

export default {
  path: 'chart',
  name: 'chart',
  component: view('charts/template'),
  children: [
    {
      path: 'pie/:label/:type',
      name: 'chart-pie',
      component: view('charts/pieChart')
    },
  ]
}
