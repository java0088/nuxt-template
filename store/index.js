import routeList from '../static/data/router'
console.log()
export const state = () => ({
  userInfo: {username:'黄万通'},
  theme: {
    navBg: '#03152A',
    navItemBg: '#30c7b4',
    navTextColor:'#fff'
  },
  routeList:routeList,
  isCollapse: false, // 是否展开 menu
  openRouteList:[], // 当前打开的路由
  currentRoute:{},
  currentPath:'/',
  currentLine: []
})

export const mutations = {
  M_UPDATE_ROUTELIST(state,payload) {
    state.routeList = payload
  },
  M_UPDATE_IS_COLLAPSE(state) {
    state.isCollapse = !state.isCollapse
  },
  M_UPDATE_CURRENT_ROUTE(state,path) {
    console.log(path)
    let current
    let currentLine = []
    for (let i = 0; i < state.routeList.length;i++) {
      let item = state.routeList[i]
      if(item.children.length > 0) {
        current = item.children.find(item2=>item2.path === path)
        if(current) {
          currentLine.push(item.title,current.title)
          break
        }
      } else {
        current = item
      }
    }
    state.currentPath = path
    state.currentRoute = current
    state.currentLine = currentLine
    let c = state.openRouteList.some(item=>item.path === path)
    if(!c) {
      console.log('啦啦啦啦',current)
      state.openRouteList.push(current)
    }
  },
  M_DELETE_OPEN_ROUTE_LIST(state,path) {
    state.openRouteList = state.openRouteList.filter(item=>item.path !== path)
  }
}
