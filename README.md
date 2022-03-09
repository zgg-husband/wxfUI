# wmr-ui-test 组件库

### 快速开始

#### 1、安装组件库
```bash
npm i wmr-ui-test
```
#### 2、引用组件库
```javascript
//全部引用
import "wmr-ui-test/dist/css/index.css";
import WUI from 'wmr-ui-test';
Vue.use(WUI)

//按需引入
import "wmr-ui-test/dist/css/index.css";
import Card from 'wmr-ui-test/dist/card.umd.js';
Vue.use(Card)
```