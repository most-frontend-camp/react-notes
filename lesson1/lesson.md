# Что нужно знать

* Как создавать и запускать проекты с помощью React
* Компоненты в React
* React хуки
* Уметь работать с различными событиями (events)
* Styling components
* Fetching Data
* Routing


# React

Он сделан и состоит из Javascript.

Он помогает
- optimized, structured code
- readability of code
- speed up the development

Поддерживается много паттерн
- MVC (Model View Controller)

### Идея React 

React:
1. Архитектура основано на компонентах
2. Высокая производельность 
3. Легко управлять состоянием то есть `state` - данные, которые могут меняться


### React Installation
Check the installation guide -> https://vitejs.dev/guide/

Or short
```bash
npm create vite@latest
```


```bash
cd first-react-app
npm install
npm run dev
```

### React Project Files

`vite.config.js
`The vite.config.js file is responsible for the configuration of our project. Here, you can set various options that affect how your application is built and run. You can also add plugins, define environment variables, and configure server options. The React template we installed with Vite comes with a React plugin pre-installed, and this is where we can change the default port number of our application.

`package.json
`The package.json file contains metadata about your Vite application, such as its name, version number, and any dependencies that it requires to run. In addition to this, the file also contains scripts that you can use to build, test, and run your application.

`package-lock.json
`The package-lock.json file is generated automatically when you run npm install to install the dependencies for your project. It contains a detailed record of all the packages that were installed, as well as their dependencies and version numbers. This ensures that if someone else downloads your application, they will have the same versions of all the dependencies as you do.

`index.html`
The index.html file is loaded first by the browser, and this is where the root div is populated with JavaScript. Our React components will be injected into this div.

`.gitignore`
The `.gitignore` file is used to specify which files and directories in a Git repository should be ignored or not tracked. It is essential to ignore the node_modules folder to avoid uploading unnecessary files to source control.

`src/`
The `src/` directory contains the source code for your application. It holds the React components written in JavaScript and the associated CSS files for styling. The assets directory stores images used within the application.

`public`
The `public` directory contains any static files, such as images, video

### React Project Architecture

Паттерны

Основные компоненты Flux
- View
- Actions
- Dispatcher
- Store

More about link (https://github.com/facebookarchive/flux)


