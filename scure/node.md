


防火防盗防猪队友：不安全的第三方依赖包
用了HTTPS也可能掉坑里
本地存储数据泄露
缺失静态资源完整性校验
参考资料
https://zhuanlan.zhihu.com/p/30649102

防火防盗防猪队友：不安全的第三方依赖包
用了HTTPS也可能掉坑里
本地存储数据泄露
缺乏静态资源完整性校验
https://zhuanlan.zhihu.com/p/30716861

## 跨站脚本攻击xss

### xss定义

> 恶意攻击者往Web页面里插入恶意Script代码，当用户浏览该页之时，嵌入其中Web里面的Script代码会被执行，从而达到恶意攻击用户的目的

1. 示例一

```js
    // 浏览器错误的将攻击者提供的用户输入数据当做JavaScript脚本给执行了。 
    // </div><script>alert('2222') </script><div></div>

    // html
    <input type="text" class="txt"> 
    <input type="button" value="点击搜索" class="btn">
    <div class="wrap"></div>
```

```js
    // script
    $(function() {
        $('.btn').on('click', function() {
            $('.wrap').html($('.txt').val())
        })
    })
    //  用户输入的东西需要转码 toString()
```

2. 示例二

> 从url取参数 或者从本地取参数 例如wkb  将参数显示在页面上

```js
    // img标签是自动触发而受到攻击的

    localhost:3000/?xss=<img src="null" onerror="alert(1)">

```

```js
    // p标签是引诱出发而受到攻击的的

    localhost:3000/?xss=<p onclick="alert(%点我%)">点我</p>

```

```js
    // 而iframe则是广告植入攻击的。
    localhost:3000/?xss=<iframe src="//baidu.com/t.html"></iframe>;

```

## 本地存储数据

1. 通常情况本地存储的数据， 我们取出来直接使用， 没有过滤，此时数据有可能被篡改， 注入一些脚本之类的，取出来直接使用的话，有可能被当做html来解析， 从而引发xss;


## iframe

1. 
```js
   如果说iframe只是有可能会给用户体验带来影响;

   iframe 域名过期， 被别人注册    ，利用iframe 安装木马、恶意勒索软件;

   iframe 最小权限 sandbox ； 只能访问静态资源   
```

3. 点击劫持： 诱导用户点击

```js
    // 利用一种层叠的关系
    
     这是一种欺骗性比较强，同时也需要用户高度参与才能完成的一种攻击。通常的攻击步骤是这样的：

    攻击者精心构造一个诱导用户点击的内容，比如Web页面小游戏
    将我们的页面放入到iframe当中
    利用z-index等CSS样式将这个iframe叠加到小游戏的垂直方向的正上方
    把iframe设置为100%透明度
    受害者访问到这个页面后，肉眼看到的是一个小游戏，如果受到诱导进行了点击的话，实际上点击到的却是iframe中的我们的页面
    点击劫持的危害在于，攻击利用了受害者的用户身份，在其不知情的情况下进行一些操作。如果只是迫使用户关注某个微博账号的话，看上去仿佛还可以承受，但是如果是删除某个重要文件记录，或者窃取敏感信息，那么造成的危害可就难以承受了。

```

4. 不要随便以来第三方依赖包

```js
    // 第三方的依赖包 也可能别劫持

```

5. 

```js
    解决这个安全问题的办法是使用HSTS（HTTP Strict Transport Security），
    它通过下面这个HTTP Header以及一个预加载的清单，来告知浏览器在和网站进行通信的时候强制性的使用HTTPS，
    而不是通过明文的HTTP进行通信：

```

6. ### 本地存储数据泄露

```js
    支持离线模式   :  会将大量的数据存在本地

```
