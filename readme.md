# 介绍

1. 先`npm install`安装依赖
2. 再可选：
   - `npm run build`来打包
   - `npm run deploy`来部署，内含打包动作了
   - `npm run dev`来在build前本地测试效果，实际是"webpack serve --mode development --hot --open"
     - --hot是热更新实时追踪代码变化来刷新浏览器
     - --open是自动打开浏览器和网址
     - --mode development这模式更方便测试，阅读，构建

项目的pages和conponents分开了做目录，让结构更加清晰
