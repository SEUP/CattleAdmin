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
    },{
      path: 'normal/:label/:type',
      name: 'chart-normal',
      component: view('charts/normalChart')
    },{
      path: 'range-farmowner/:label/:type',
      name: 'chart-range-farmowner',
      component: view('charts/farmownerRangeChart')
    },
  ]
}
