# albelli-code-challenge
Albelli's Senior Frontend Developer Code Challenge

## Definitions/Variables
Since the app requirement is to be able to convert from Inches to Pixels and vice versa, I am using the standard print industry quality of 300PPI(Pixels Per Inch) for this conversion, but you can change that and also change canvas size from app/js/variables.ts.

So given that the canvas size should be 15" x 10" (You can change it from app/js/variables.ts), it would be 4500px * 3000px in our app which we'll style to be smaller to be nice in a mobile/desktop screen.

Also everywhere in our app when we need to convert from pixels to inches or vice versa we'll use printPixelPerInchQuality variable from app/js/variables.ts (default: 300PPI) as our conversion unit. Like when we want to generate JSON file in inches and when we want to import a JSON file in inches and convert it to pixels.

## Installation

Since I wanted to use **React** with **Typescript** to showcase my skills and also wanted to maintain the app structure Albelli suggests in the app requirement, I initialized a webpack project with Albelli structure and build up on that.

### Steps
1. Make sure you have Yarn installed: https://yarnpkg.com/getting-started/install
2. Clone/download the repository
3. ```cd``` to project directory
4. ```yarn install```
5. ```yarn start``` to run devServer
6. You can run all tests with ```yarn test --all```
7. You can build the app for production with ```yarn build``` it will generate the files in dist folder


## Tech Stack

- **React** as the frontend library with **Typescript**
- React's **Context API** to manage App State
- **React Testing Library** and **Jest** for testing
- **ESLint** and **Prettier** for code formatting and Linting
- **Webpack** as the module bundler and **babel** as the typescript compiler
- **Sass** for styling with **BEM** methodology
- **Yarn** for the package manager
