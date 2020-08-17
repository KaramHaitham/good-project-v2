# good-project
## live demo https://still-reaches-84281.herokuapp.com/
```
This is a Vue 2 project built with vuex for state managment and vue-router for routing.
Bundeled with webpack
Transpiled with babel for backwards compatibility and browser support for all javascript versions es5 and es6 and esNext
and Eslint for coding standards 

Project entry point is app.js, which then calles the router and displayes the home page found in src/view/home.vue
Inside the home page, the projectList.vue component is called which is the entry point of the programatical logice of the app.
It is found in src/components/ProjectList.vue

All functional components are found in src/components
All interface components are found in src/components/layout
All router related components are founf in src/views
All global state managment files are foun is src/store
 
 
```
## Clonning the good-project to your local machin
```
git clone git@github.com:KaramHaitham/good-project.git

cd good-project
```

### Project setup (getting node_modules)
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

### Run your unit tests
```
npm run test:unit
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
