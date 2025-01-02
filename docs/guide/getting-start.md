# 快速开始

简单描述如何获取及使用DMHPJ's UI

## 📦 如何获取

- ⚙️ 通过 NPM 安装

  ```
  npm install dmhpj-ui
  ```
  
## 🔨 如何使用

- 🌍 全局导入

  ```ts
  //main.ts
  import "dmhpj-ui/dist/style.css"
  import dmhpjUI from "dmhpj-ui";
  ...
  createApp(App).use(dmhpjUI).mount("#app");
  ```

- 🎨 局部引用

  ```vue
  //希望引入的页面
  import { dmCard, dmTable, dmTableColumn } from "dmhpj-ui";
  
  <template>
    <dm-card>
      <dm-table :data="data">
        <dm-table-column prop="name" label="姓名"></dm-table-column>
        <dm-table-column prop="age" label="年龄"></dm-table-column>
      </dm-table>
    </dm-card>
  </template>
  ```