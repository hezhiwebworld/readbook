1. _ssl.c:645

>> 提示说ssl 证书不受信任的关系， 原因是打开了fiddler将，代理的证书，访问https 不受信任的关系

```js
  错误信息大概的意思是ssl 认证失败
```

2. 装饰器

```js
  def log():
  # print("装饰器内部封装的函数")
  def wrapper():
    print("装饰器内部封装的函数")
  return wrapper
  // 利用闭包来重写函数
  app = log()
  app()

```

```js
  // 这是不带参数的装饰器
  def log(func):
  # print("装饰器内部封装的函数")
  def wrapper():
    print("装饰器内部封装的函数")
    return func()
  return wrapper


  @log
  def app():
    print('被装饰器装饰函数的内部的代码逻辑')

  app()

```

4. python 同时遍历列表  值和索引
```js
   for index, temp_name in enumerate(img_name):
```


5. 函数签名 对比js的函数签名的不同

```js
  在其他语言中，命名参数这块必须要求事先创建函数签名，而将来的调用也必须与该签名一致。
  js没有这些条条框框，解析器不会验证命名参数，所以说js没有签名。
  譬如
  function sayHello () {    alert("Hello" + arguments[0] + ",  " +  arguments[1]);}
  sayHello ("baby", "how are you?");
  这个例子很明显了。命名参数为空，
  而我们照样可以按照两个参数的格式去调用该方法。所谓的参数类型，参数个数，参数位置，出入参数，
  js统统不关心，它所有的值都被放到arguments中了。需要返回值的话直接return，不用声明。

```