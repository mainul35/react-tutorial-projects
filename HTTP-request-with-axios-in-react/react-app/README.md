# What is state?
> ```state``` simply denotes the current state of react component. If any component state changes, the virtual DOM updates the component with updated state and re-render only the updated component.
#### Example
1. In App.js constructor, we have declared a property, ```curTime``` of state object.
    ```
    constructor(){
        super()
        this.state = {
           curTime: ''
        }
    }
    ```
2. Now, in ```componentDidMount()``` we have update the time after each second (1000 ms).
    ```
    componentDidMount(){
        setInterval(function(){
            this.setState({
                curTime: new Date().toLocaleString()
            })
        }.bind(this), 1000);
    }
    ```
3. In DOM rendering section, the current time will be shown once it gets updated. So, the ```<h4>``` and only the ```<h4>``` will be updated once the state changes.
    ```
    <h4>{this.state.curTime}</h4>
    ```
# What is props?
> Props are property list of a react component. 

We know, each HTML element has their properties. Since react components are also used like html elements, they can also have properties, which are passed through props.
#### Example:
In ***App.js*** I have declared a simple component named ```Greeting``` that will greet a name passed by ```name``` property using ```props.name```.
##### Sample component:
```
const Greeting = (props)=> {
    return <h1>{props.name}</h1>;
}
```
##### Usage:
```
Welcome <Greeting name='Mainul'/>
```