//声明一个模块module 

module "point" {
    //建立一个基础类
    export class Point {
        constructor (x, y) {
            public x = x;
            public y = y;
        }
    }
}