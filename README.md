# ToyPage

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).


### ES Lint 핫 리로드 설정법
1. 파일 탐색기 열기
2. VS Code 설정 수정: `%AppData%/Roaming/Code/User/settings.json` 열기
3. 설정에 아래 두 항목 추가
```JSON
{ 
  "[typescript]": { 
    "editor.defaultFormatter": "esbenp.prettier-vscode", 
    "editor.formatOnSave": true 
  }, 
  "[vue]": { 
    "editor.defaultFormatter": "esbenp.prettier-vscode", 
    "editor.formatOnSave": true 
  } 
}
```
