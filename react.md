
1. setState(updater, [callback])

```js
    setState() 并不是总是立即更新组件的， 他可能会批量或者延迟到后面更新。
    在调用setState()之后

```

2.  取消ajax请求

```js
    需要注意的是, 如果组件在ajax请求完成之前被卸载了，浏览器的控制面板会看到警告
    你可以在追踪未完成的ajax请求并在 componentWillUnmount 生命周期方法内将他们取消
```

```js
   class Posts extends React.Component {
     constructor( props ) {
        super( props )
        this.state = {
          Posts: [ ]
        }
     }
    
     componentDidMount() {
       this.serverRequest = axios.get('/api')
          .then(posts => {
            this.setState({
              posts
            })
          })
     }

     componentWillUnmount() {
       this.serverRequest.abort()
     }

     render() {
       return <>
     }

   }

```

3. 

