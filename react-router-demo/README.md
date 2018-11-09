# What is router in react?
  Router is the url endpoint which is usually added after any base URL. For example, in the URL http://www.github.com/mainul35,  http://www.github.com is the base URL and /mainul35 is the routing or URL endpoint.

Routings are of 2 types, **server side routing** and **client side routing**. To know more about this, do some google.

React Router enables client side routing.

## What's new and what's gone?
#### Added:
1. react-router-dom (In my case, I am using npm)
    
    ```npm install react-router-dom```
2. webpack-dev-server
    
    ```npm install --save-dev webpack-dev-server```
3. In webpack.comfig.js, added the following lines.
    ```
    const path = require('path')
    module.exports = {
        ...,
        devtool: "cheap-module-eval-source-map",
        devServer: {
            contentBase: path.join(__dirname, 'public'),
            compress: true,
            historyApiFallback: true,
            port: 3000
        }
    }
    ```
    1. The devtool will enable compile time error finding.
    2. The devServer configuration configures dev server.
        > Note: ```historyApiFallback: true``` will enable the power of client side routing while in development mode.
#### Removed:
1. live-server
    > npm remove live-server
#### Changes
In package.json, we have the following changes.
1. Start script is now webpack-dev-server

    ```"start": "webpack-dev-server"```
2. Build script is only webpack.
    
    ```"build": "webpack"```
### Codes
We have codes only in ```index.js``` file.

1. We have created only 3 components, which are absolutely es6 functions.
    
    ```
    const dashboardComponent = () => (
        <div>
            <h3>This is dashboard page</h3>
        </div>
    )
    ```
    ```
    const loginPage = () => (
        <div>
            <h3>This is login page</h3>
        </div>
    )
    ```
    ```
    const notFoundPage = () => (
        <div>
            <h3>404: Not Found</h3>
            <Link to="/">Go Home</Link>
        </div>
    )
    ```
2. Declared ```routes``` which contains all routing logics.
    ```
    const routes = (
        <BrowserRouter>
            <Switch>
                <Route exact path='/' component={dashboardComponent}/>
                <Route exact path='/login' component={loginPage}/>
                <Route component={notFoundPage}/>
            </Switch>
        </BrowserRouter>
    )
    ```
    > Note: We must import ```BrowserRouter, Switch, Route, Link``` from react-router-dom package to import them.
    
3. Finally, we have rendered ```routes``` in the index.html page.
    
    ```ReactDOM.render(routes, document.getElementById('root'));```

To understand what is really happening, try following URLs.
1. ```http://127.0.0.1:3000```
 
     Since, '/' is mapped to dashboard, it will take you you to home page.
2. ```http://127.0.0.1:3000/login```
 
    Since, '/login' is mapped to login component, it will take you you to login page without any browser loading.
3. ```http://127.0.0.1:3000/home```
 
    Since, '/home' has no mapping, it will switch you to not found page.


> Note: I have tried to give a very basic overview of all these things. If you need detailed description, please do some google.