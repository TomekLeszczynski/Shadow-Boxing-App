This template should help get you started developing with Vue 3 in Vite.

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).

## Type Support for `.vue` Imports in TS

TypeScript cannot handle type information for `.vue` imports by default, so we replace the `tsc` CLI with `vue-tsc` for type checking. In editors, we need [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin) to make the TypeScript language service aware of `.vue` types.

If the standalone TypeScript plugin doesn't feel fast enough to you, Volar has also implemented a [Take Over Mode](https://github.com/johnsoncodehk/volar/discussions/471#discussioncomment-1361669) that is more performant. You can enable it by the following steps:

1. Disable the built-in TypeScript Extension
   1. Run `Extensions: Show Built-in Extensions` from VSCode's command palette
   2. Find `TypeScript and JavaScript Language Features`, right click and select `Disable (Workspace)`
2. Reload the VSCode window by running `Developer: Reload Window` from the command palette.

## Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Type-Check, Compile and Minify for Production

```sh
npm run build
```

### Run Unit Tests with [Vitest](https://vitest.dev/)

```sh
npm run test:unit
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```

# **Shadow Boxing Workout**

![Shadow Boxing Workout Home View](./readme_graphics/Shadow%20Boxing%20Workout%20Home%20View.jpg)

## General Info

XXX

### Consisted Functions:

- **The core - Shadow Boxing Workout:** Boxing training sessions divided into levels of difficulty;
- **Weight Monitor:** Recording weight measurements and displaying historical records in a chart format;
- **Blogs:** User blog section (_to be implemented in further stages of project development_);
- **E-commerce Store** Store offering clothing and accessories for combat sports enthusiasts (_to be implemented in further stages of project development_).

## Programming Goals And Assumptions

- **From Scratch to Deployment:** The project aims to build a comprehensive application from the ground up, considering author's level of knowledge and experience, based on the JavaScript framework - Vue.js, in combination with dedicated libraries and frameworks (Pinia, Vue Router, Vite, Vitest);
- **Efficient Styling:** Utilizing the Tailwind CSS framework for styling the application;
- **Integration with Firebase:** Utilizing the cloud platform for handling authentication and user data storage;
- **TypeScript**: Leveraging the TypeScript superset to improve code quality and maintain better control over data types in the created code;
- **Git Control:** Utilizing the Git system for version control and tracking changes in the project;
- **Unit Tests:** Performing unit tests to verify code correctness;
- **Responsive Design**: Adapting the appearance to various devices and screens;
- **Accessibility:** Considering accessibility for people with disabilities;
- **Clean Code:** Striving to ensure that the code is optimally written, clean, and readable for both oneself and other users.

## Build with:

- Vue.js,
- Pinia,
- Vue Router,
- Vite,
- Vitest,
- Firebase,
- Tailwind,
- Typescript,
- Vuelidate,
- Chart.js.

--

### Responsive Design

Responsive interfaces build with Tailwind CSS default breakpoints (https://tailwindcss.com/docs/responsive-design) with extra prefix added:

```
screens: {
        xs: '475px'
      },
```

![Responsiveness presended on different device screens](./readme_graphics/responsive_design.png)

### Users Accessibility Categories:

- **Full Access:** For registered users, the ability to get and post weight measurements and training results, make purchases, save favorite blogs, posts, or create content.
- **Limited Access:** For users without registration, no access to shadow boxing features, weight monitor, purchasing (only browsing), saving favorite blogs (only browsing), posts, or creating content.
- **Try As Guest:** A temporary "Try As Guest" access option has been created to allow interested users to shorten the authentication path and provide access to all functionalities - weight measurements, shadow boxing sessions, etc. The data won't be be stored in the database but only in local memory.

--

## Design Inspirations

### Webpages

<a href="https://aim.obys.agency/" target="_blank" rel="noopener"><img src="./readme_graphics/inspiration-aim-obys.jpg" alt="webiste-homepage-screenshot" width="250"></a>
<a href="https://memphis.it/en/" target="_blank" rel="noopener"><img src="./readme_graphics/inspiration-memphis-milano.jpg" alt="webiste-homepage-screenshot" width="250"></a>
<a href="https://www.eclipse.builders/" target="_blank" rel="noopener"><img src="./readme_graphics//inspiration-eclipse.jpg" alt="webiste-homepage-screenshot" width="250"></a>

### Web elements

- https://css-tricks.com/animating-with-clip-path/
