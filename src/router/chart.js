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
      path: 'range-farmowner/:label/:type/:min/:max/:step/:withNull/:nullText',
      name: 'chart-range-farmowner',
      component: view('charts/farmownerRangeChart')
    },{
      path: 'budget/:label/:type',
      name: 'chart-budget',
      component: view('charts/budgetChart')
    },{
      path: 'groupJoin/:label/:type',
      name: 'chart-groupJoin',
      component: view('charts/groupJoinChart')
    },{
      path: 'cattle/:label',
      name: 'chart-cattle',
      component: view('charts/cattleChart')
    },{
      path: 'double/:label/:type',
      name: 'chart-double',
      component: view('charts/doubleChart')
    },{
      path: 'multiChoice/:label/:type',
      name: 'chart-multiChoice',
      component: view('charts/multiChoiceChart')
    },
  ]
}
