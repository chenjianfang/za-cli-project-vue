## Introduction
@za-cli/project-vue 生成vue项目的文件目录和构建依赖

## Installation
```
npm install -g -f @za-cli/project-vue
```

## Usage
入口页面为src/pages，项目配置为 build.config.json文件
```
// 开发构建
npx za-dev-vue --page=index

// 生产构建单个页面
npx za-prod-vue --page=index

// 生产构建多个页面
npx za-build-vue --page=index,self --sourcemap=1

// 输出构建配置
npx za-eject-vue

```
build.config.json文件相关配置说明：
```
{
    "sourcemapName": "zhenaicom.template", // sourcemap需要命名项目名，比如注册页命名为zhenaicom.m.register
    "alias": {}, // 别名
    "entryPage": "index.js", // src/pages的入口文件名
    "outputPath": "dist", // 打包输出文件夹
    "eslintSwitch": false, // eslint检查开关，新项目建议都开启
    "eslintignore": [ // eslint忽略的文件
        "dist"
    ],
    "copyStatic": [ // 拷贝静态目录
        {
            "from": "",
            "to": ""
        }
    ],
    "dev": { // 开发环境配置
        "host": "localhost",
        "port": "8080",
        "proxyTable": {
        },
        "devtool": "source-map",
        "publicPath": "/"
    },
    "build": { // 生产环境配置
        "devtool": "nosources-source-map",
        "publicPath": "/"
    }
}
```
