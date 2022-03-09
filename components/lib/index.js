import Card from './card';
const components = {
  Card
}
const install = function(Vue){
  if(install.installed) return; //避免重复安装
  Object.keys(components).forEach(key => {
    Vue.component(components[key].name , components[key])
  })
}

const API = {
  install,
}

export default API;