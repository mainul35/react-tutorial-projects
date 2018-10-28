#React Bismillah guideline
1. Download the project
2. Assuming, you have node installed in your pc.
3. Start terminal, point to the downloaded project directory, where ***package.json*** resides, run ```npm install```. This will download necessary packages for you.
4. Run ```npm run start``` to run the project. The project will be running at port 3000.
5. If you want to watch changes and build automatically, run ```npm run build```. Now any change to any JS file will be built runtime.

##What is webpack for?
> Webpack bundles all css, js, svg and other resource file into one bundle to ease development.
##How does it work?
React version 4 comes with some pre-configurations of webpack. Yet, it can be overriden by defining own configuration in ***webpack.config.js*** file. Let's see the configurations defined here.
1. entry: The entrypoint where the compilation should start. In this application, the entrypoint is ***src/index.js*** file.
2. output: The path to ***bundle.js*** file.
3. We have used loaders for js, css and svg files. The configurations for these loaders are in ```rules``` array.
    
    
   i. JS Loader configuration:
   ```
    {
      loader: 'babel-loader',
      test: /\.js$/,
      exclude: /node_modules/
    }
   ```
   ii. SVG loader configuration:
      
  > It is using ```babel-loader```.
      
```
  {
      test: /\.svg$/,
      use: [
        {
          loader: "babel-loader"
        },
        {
          loader: "react-svg-loader",
          options: {
            jsx: true // true outputs JSX tags
          }
        }
      ]
  }
``` 
   iii. CSS Loader:
```
   {
       test: /\.css$/,
       use: [ 'style-loader', 'css-loader' ]
   }
```

##What is Babel?
>Babel is a transpile which works to transpile ES6 code to ES5, so that browsers can understand.
##Babel configurations:
Transpilation related configurations are defined in ***.babelrc*** file.
```
{
    "presets": ["@babel/preset-env", "@babel/preset-react"]
}
```
1. ```@babel/preset-env``` transpiles ES6 codes down to ES5 code.
2. ```@babel/preset-react``` transpiles JSX code to plain js.