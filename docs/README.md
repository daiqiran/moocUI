# 快速开始

#### 安装组件库

```bash
npm i mooc-ui-dqr3
```

#### 引用组件库
> 在main.js 中引用组件库

```javascript
//全部引入
import 'mooc-ui-dqr3/dist/css/index.css';
import MUI from 'mooc-ui-dqr3';
Vue.use(MUI);

//按需引用
import 'mooc-ui-dqr3/dist/css/demo.css';
import { Demo } from 'mooc-ui-dqr3';
Vue.use(Demo);
```