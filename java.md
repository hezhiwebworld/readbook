1. 单例模式

```js
   只要将构造方法私有化， 就可以控制实例化对象的产生

```

2. 内部类的唯一好处就是可以方便的访问外部类中的私有属性

3. 子类复写父类的方法， 不能缩小访问权限

4. java 对象的多态性分为向上转型（ 自动 ） 和向下转型（ 强制 ）


5. java程序每次运行至少启动几个线程


6. 类型安全

```js
    通过指导使用泛型定义的变量的类型限制，编译器可以更有效地提高java程序的类型安全

```

7. 消除源代码中的许多强制类型转换

```js
    消除代码中的许多强制类型转换，这使得代码更加刻度，并且减少出错机会，所有的强制转换都是自动和隐士的
```

8. 提高性能


9. 实现一个类，将所有的数据域都设置为私有的

10. 

```js
    在一下两种情况使用静态方法
     
    1、 一个方法不需要访问对象状态，其所需参数都是通过显示参数提供例如： Math类
    2、 一个方法只需要访问类的静态域
```

11. java程序设计语言总是采用按值调用，也就是说，方法得到的是所有参数值的一个拷贝，方法不能修改传递给它的任何参数的变量内容


12. 
```js
    public static double max(double... values) {
        // 最小值
        double largest = Double.NEGATIVE_INFINITY;

        for(double v:values){
            if(v > largest){
                largest = v;
            }
        }
    }

```

13.  枚举类型的用法

> 定义常量

```js
    public enum Color {
        RED, GREEN, BLANK
    }

    以前定义常量就是

    public static final ...

```

> switch

```js
    emum Signal {
        GREEN, YELLOW, RED      
    }

    public class TrafficLight {
        Signal color = Signal.RED;
        public void change() {
            switch (color) {
                case RED:
                    color = Signal.GREEN;
                    break;
                case YELLOW:
                    color = Signal.RED;
                    break;
                case GREEN:
                    color = Signal.YELLOW;
                    break;
            }
        }
    }
```

14.  在catch块中

```js
    catch (Exception e) {
        // 打印错误信息
        e.printStackTrace();
    }

```

15. 泛型的概念

```js
    // 泛型的接口
    public interface Comparable<T> {
        int compareTo<T other>;
    }

```

16. 接口

将接口看成是没有实例域的抽象类

提供实例域 和方法实现的任务 应该是由实现接口的那个类来完成

```js
	为了让类实现一个接口, 通常需要下面两个步骤：
	1, 将类声明为实现给定的接口   关键字：implements
	2.  对接口中的所有方法进行定义

```

17. 引入一个时间类

```js
    日期类 当引入的两个包都有日期类的时候
    
    实例化的时候， 加上完整的报名即可

    java.util.Date.deadline = new java.util.Date();
    java.sql.Date today = new java.sql.Date();
    
```









