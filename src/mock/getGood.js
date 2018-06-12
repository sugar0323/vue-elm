import Mock from 'mockjs'
//const Mock = require('mockjs');
const produceData = {
    "status": true, 
    "data": [
        {
            "fTypeId": 1, 
            "name": "热销榜", 
            "foods": [
                {
                    "foodId": 1, 
                    "name": "皮蛋瘦肉粥", 
                    "price": 10, 
                    "description": "咸粥", 
                    "sellCount": 229, 
                    "rating": 100, 
                    "info": "一碗皮蛋瘦肉粥，总是我到粥店时的不二之选。香浓软滑，饱腹暖心，皮蛋的Q弹与瘦肉的滑嫩伴着粥香溢于满口，让人喝这样的一碗粥也觉得心满意足", 
                    "icon": "http://fuss10.elemecdn.com/c/cd/c12745ed8a5171e13b427dbc39401jpeg.jpeg?imageView2/1/w/114/h/114", 
                    "image": "http://fuss10.elemecdn.com/c/cd/c12745ed8a5171e13b427dbc39401jpeg.jpeg?imageView2/1/w/750/h/750", 
                    "fTypeId": 1
                }, 
                {
                    "foodId": 2, 
                    "name": "扁豆焖面", 
                    "price": 14, 
                    "description": "", 
                    "sellCount": 188, 
                    "rating": 96, 
                    "info": "", 
                    "icon": "http://fuss10.elemecdn.com/c/6b/29e3d29b0db63d36f7c500bca31d8jpeg.jpeg?imageView2/1/w/114/h/114", 
                    "image": "http://fuss10.elemecdn.com/c/6b/29e3d29b0db63d36f7c500bca31d8jpeg.jpeg?imageView2/1/w/750/h/750", 
                    "fTypeId": 1
                }, 
                {
                    "foodId": 3, 
                    "name": "葱花饼", 
                    "price": 10, 
                    "description": "", 
                    "sellCount": 124, 
                    "rating": 85, 
                    "info": "", 
                    "icon": "http://fuss10.elemecdn.com/f/28/a51e7b18751bcdf871648a23fd3b4jpeg.jpeg?imageView2/1/w/114/h/114", 
                    "image": "http://fuss10.elemecdn.com/f/28/a51e7b18751bcdf871648a23fd3b4jpeg.jpeg?imageView2/1/w/750/h/750", 
                    "fTypeId": 1
                }, 
                {
                    "foodId": 4, 
                    "name": "牛肉馅饼", 
                    "price": 14, 
                    "description": "", 
                    "sellCount": 114, 
                    "rating": 91, 
                    "info": "", 
                    "icon": "http://fuss10.elemecdn.com/d/b9/bcab0e8ad97758e65ae5a62b2664ejpeg.jpeg?imageView2/1/w/114/h/114", 
                    "image": "http://fuss10.elemecdn.com/d/b9/bcab0e8ad97758e65ae5a62b2664ejpeg.jpeg?imageView2/1/w/750/h/750", 
                    "fTypeId": 1
                }, 
                {
                    "foodId": 5, 
                    "name": "招牌猪肉白菜锅贴/10个", 
                    "price": 17, 
                    "description": "", 
                    "sellCount": 101, 
                    "rating": 78, 
                    "info": "", 
                    "icon": "http://fuss10.elemecdn.com/7/72/9a580c1462ca1e4d3c07e112bc035jpeg.jpeg?imageView2/1/w/114/h/114", 
                    "image": "http://fuss10.elemecdn.com/7/72/9a580c1462ca1e4d3c07e112bc035jpeg.jpeg?imageView2/1/w/750/h/750", 
                    "fTypeId": 1
                }, 
                {
                    "foodId": 6, 
                    "name": "南瓜粥", 
                    "price": 9, 
                    "description": "甜粥", 
                    "sellCount": 91, 
                    "rating": 100, 
                    "info": "", 
                    "icon": "http://fuss10.elemecdn.com/8/a6/453f65f16b1391942af11511b7a90jpeg.jpeg?imageView2/1/w/114/h/114", 
                    "image": "http://fuss10.elemecdn.com/8/a6/453f65f16b1391942af11511b7a90jpeg.jpeg?imageView2/1/w/750/h/750", 
                    "fTypeId": 1
                }, 
                {
                    "foodId": 7, 
                    "name": "红豆薏米美肤粥", 
                    "price": 12, 
                    "description": "甜粥", 
                    "sellCount": 86, 
                    "rating": 100, 
                    "info": "", 
                    "icon": "http://fuss10.elemecdn.com/d/22/260bd78ee6ac6051136c5447fe307jpeg.jpeg?imageView2/1/w/114/h/114", 
                    "image": "http://fuss10.elemecdn.com/d/22/260bd78ee6ac6051136c5447fe307jpeg.jpeg?imageView2/1/w/750/h/750", 
                    "fTypeId": 1
                }, 
                {
                    "foodId": 8, 
                    "name": "八宝酱菜", 
                    "price": 4, 
                    "description": "", 
                    "sellCount": 84, 
                    "rating": 100, 
                    "info": "", 
                    "icon": "http://fuss10.elemecdn.com/9/b5/469d8854f9a3a03797933fd01398bjpeg.jpeg?imageView2/1/w/114/h/114", 
                    "image": "http://fuss10.elemecdn.com/9/b5/469d8854f9a3a03797933fd01398bjpeg.jpeg?imageView2/1/w/750/h/750", 
                    "fTypeId": 1
                }, 
                {
                    "foodId": 9, 
                    "name": "红枣山药糙米粥", 
                    "price": 10, 
                    "description": "", 
                    "sellCount": 81, 
                    "rating": 91, 
                    "info": "", 
                    "icon": "http://fuss10.elemecdn.com/9/b5/469d8854f9a3a03797933fd01398bjpeg.jpeg?imageView2/1/w/114/h/114", 
                    "image": "http://fuss10.elemecdn.com/9/b5/469d8854f9a3a03797933fd01398bjpeg.jpeg?imageView2/1/w/750/h/750", 
                    "fTypeId": 1
                }, 
                {
                    "foodId": 10, 
                    "name": "糊塌子", 
                    "price": 10, 
                    "description": "", 
                    "sellCount": 80, 
                    "rating": 93, 
                    "info": " ", 
                    "icon": "http://fuss10.elemecdn.com/0/05/097a2a59fd2a2292d08067e16380cjpeg.jpeg?imageView2/1/w/114/h/114", 
                    "image": "http://fuss10.elemecdn.com/0/05/097a2a59fd2a2292d08067e16380cjpeg.jpeg?imageView2/1/w/750/h/750", 
                    "fTypeId": 1
                }
            ]
        }, 
        {
            "fTypeId": 2, 
            "name": "单人精彩套餐", 
            "foods": [
                {
                    "foodId": 11, 
                    "name": "红枣山药粥套餐", 
                    "price": 29, 
                    "description": "", 
                    "sellCount": 17, 
                    "rating": 93, 
                    "info": " ", 
                    "icon": "http://fuss10.elemecdn.com/6/72/cb844f0bb60c502c6d5c05e0bddf5jpeg.jpeg?imageView2/1/w/114/h/114", 
                    "image": "http://fuss10.elemecdn.com/6/72/cb844f0bb60c502c6d5c05e0bddf5jpeg.jpeg?imageView2/1/w/750/h/750", 
                    "fTypeId": 2
                }
            ]
        }, 
        {
            "fTypeId": 3, 
            "name": "冰爽饮品限时特惠", 
            "foods": [
                {
                    "foodId": 12, 
                    "name": "VC无限橙果汁", 
                    "price": 8, 
                    "description": "", 
                    "sellCount": 15, 
                    "rating": 100, 
                    "info": " ", 
                    "icon": "http://fuss10.elemecdn.com/e/c6/f348e811772016ae24e968238bcbfjpeg.jpeg?imageView2/1/w/114/h/114", 
                    "image": "http://fuss10.elemecdn.com/e/c6/f348e811772016ae24e968238bcbfjpeg.jpeg?imageView2/1/w/750/h/750", 
                    "fTypeId": 3
                }
            ]
        }, 
        {
            "fTypeId": 4, 
            "name": "精选热菜", 
            "foods": [
                {
                    "foodId": 13, 
                    "name": "娃娃菜炖豆腐", 
                    "price": 17, 
                    "description": "", 
                    "sellCount": 43, 
                    "rating": 92, 
                    "info": " ", 
                    "icon": "http://fuss10.elemecdn.com/d/2d/b1eb45b305635d9dd04ddf157165fjpeg.jpeg?imageView2/1/w/114/h/114", 
                    "image": "http://fuss10.elemecdn.com/d/2d/b1eb45b305635d9dd04ddf157165fjpeg.jpeg?imageView2/1/w/750/h/750", 
                    "fTypeId": 4
                }, 
                {
                    "foodId": 14, 
                    "name": "手撕包菜", 
                    "price": 16, 
                    "description": "", 
                    "sellCount": 29, 
                    "rating": 100, 
                    "info": " ", 
                    "icon": "http://fuss10.elemecdn.com/9/c6/f3bc84468820121112e79583c24efjpeg.jpeg?imageView2/1/w/114/h/114", 
                    "image": "http://fuss10.elemecdn.com/9/c6/f3bc84468820121112e79583c24efjpeg.jpeg?imageView2/1/w/750/h/750", 
                    "fTypeId": 4
                }, 
                {
                    "foodId": 15, 
                    "name": "香酥黄金鱼/3条", 
                    "price": 11, 
                    "description": "", 
                    "sellCount": 15, 
                    "rating": 100, 
                    "info": " ", 
                    "icon": "http://fuss10.elemecdn.com/4/e7/8277a6a2ea0a2e97710290499fc41jpeg.jpeg?imageView2/1/w/114/h/114", 
                    "image": "http://fuss10.elemecdn.com/4/e7/8277a6a2ea0a2e97710290499fc41jpeg.jpeg?imageView2/1/w/750/h/750", 
                    "fTypeId": 4
                }
            ]
        }, 
        {
            "fTypeId": 5, 
            "name": "爽口凉菜", 
            "foods": [
                {
                    "foodId": 16, 
                    "name": "八宝酱菜", 
                    "price": 4, 
                    "description": "", 
                    "sellCount": 84, 
                    "rating": 100, 
                    "info": " ", 
                    "icon": "http://fuss10.elemecdn.com/9/b5/469d8854f9a3a03797933fd01398bjpeg.jpeg?imageView2/1/w/114/h/114", 
                    "image": "http://fuss10.elemecdn.com/9/b5/469d8854f9a3a03797933fd01398bjpeg.jpeg?imageView2/1/w/750/h/750", 
                    "fTypeId": 5
                }, 
                {
                    "foodId": 17, 
                    "name": "拍黄瓜", 
                    "price": 9, 
                    "description": "", 
                    "sellCount": 28, 
                    "rating": 100, 
                    "info": " ", 
                    "icon": "http://fuss10.elemecdn.com/6/54/f654985b4e185f06eb07f8fa2b2e8jpeg.jpeg?imageView2/1/w/114/h/114", 
                    "image": "http://fuss10.elemecdn.com/6/54/f654985b4e185f06eb07f8fa2b2e8jpeg.jpeg?imageView2/1/w/750/h/750", 
                    "fTypeId": 5
                }
            ]
        }, 
        {
            "fTypeId": 6, 
            "name": "精选套餐", 
            "foods": [
                {
                    "foodId": 18, 
                    "name": "红豆薏米粥套餐", 
                    "price": 37, 
                    "description": "", 
                    "sellCount": 3, 
                    "rating": 100, 
                    "info": " ", 
                    "icon": "http://fuss10.elemecdn.com/f/49/27f26ed00c025b2200a9ccbb7e67ejpeg.jpeg?imageView2/1/w/114/h/114", 
                    "image": "http://fuss10.elemecdn.com/f/49/27f26ed00c025b2200a9ccbb7e67ejpeg.jpeg?imageView2/1/w/750/h/750", 
                    "fTypeId": 6
                }, 
                {
                    "foodId": 19, 
                    "name": "皮蛋瘦肉粥套餐", 
                    "price": 31, 
                    "description": "", 
                    "sellCount": 12, 
                    "rating": 100, 
                    "info": " ", 
                    "icon": "http://fuss10.elemecdn.com/8/96/f444a8087f0e940ef264617f9d98ajpeg.jpeg?imageView2/1/w/114/h/114", 
                    "image": "http://fuss10.elemecdn.com/8/96/f444a8087f0e940ef264617f9d98ajpeg.jpeg?imageView2/1/w/750/h/750", 
                    "fTypeId": 6
                }
            ]
        }, 
        {
            "fTypeId": 7, 
            "name": "果拼果汁", 
            "foods": [
                {
                    "foodId": 20, 
                    "name": "蜜瓜圣女萝莉杯", 
                    "price": 6, 
                    "description": "", 
                    "sellCount": 1, 
                    "rating": 100, 
                    "info": " ", 
                    "icon": "http://fuss10.elemecdn.com/b/5f/b3b04c259d5ec9fa52e1856ee50dajpeg.jpeg?imageView2/1/w/114/h/114", 
                    "image": "http://fuss10.elemecdn.com/b/5f/b3b04c259d5ec9fa52e1856ee50dajpeg.jpeg?imageView2/1/w/750/h/750", 
                    "fTypeId": 7
                }, 
                {
                    "foodId": 21, 
                    "name": "加多宝", 
                    "price": 6, 
                    "description": "", 
                    "sellCount": 7, 
                    "rating": 100, 
                    "info": " ", 
                    "icon": "http://fuss10.elemecdn.com/b/9f/5e6c99c593cf65229225c5661bcdejpeg.jpeg?imageView2/1/w/114/h/114", 
                    "image": "http://fuss10.elemecdn.com/b/9f/5e6c99c593cf65229225c5661bcdejpeg.jpeg?imageView2/1/w/750/h/750", 
                    "fTypeId": 7
                }, 
                {
                    "foodId": 22, 
                    "name": "VC无限橙果汁", 
                    "price": 8, 
                    "description": "", 
                    "sellCount": 15, 
                    "rating": 100, 
                    "info": " ", 
                    "icon": "http://fuss10.elemecdn.com/e/c6/f348e811772016ae24e968238bcbfjpeg.jpeg?imageView2/1/w/114/h/114", 
                    "image": "http://fuss10.elemecdn.com/e/c6/f348e811772016ae24e968238bcbfjpeg.jpeg?imageView2/1/w/750/h/750", 
                    "fTypeId": 7
                }
            ]
        }, 
        {
            "fTypeId": 8, 
            "name": "小吃主食", 
            "foods": [
                {
                    "foodId": 23, 
                    "name": "扁豆焖面", 
                    "price": 14, 
                    "description": "", 
                    "sellCount": 188, 
                    "rating": 96, 
                    "info": " ", 
                    "icon": "http://fuss10.elemecdn.com/c/6b/29e3d29b0db63d36f7c500bca31d8jpeg.jpeg?imageView2/1/w/114/h/114", 
                    "image": "http://fuss10.elemecdn.com/c/6b/29e3d29b0db63d36f7c500bca31d8jpeg.jpeg?imageView2/1/w/750/h/750", 
                    "fTypeId": 8
                }, 
                {
                    "foodId": 24, 
                    "name": "葱花饼", 
                    "price": 8, 
                    "description": "", 
                    "sellCount": 15, 
                    "rating": 100, 
                    "info": " ", 
                    "icon": "http://fuss10.elemecdn.com/f/28/a51e7b18751bcdf871648a23fd3b4jpeg.jpeg?imageView2/1/w/114/h/114", 
                    "image": "http://fuss10.elemecdn.com/f/28/a51e7b18751bcdf871648a23fd3b4jpeg.jpeg?imageView2/1/w/750/h/750", 
                    "fTypeId": 8
                }, 
                {
                    "foodId": 25, 
                    "name": "牛肉馅饼", 
                    "price": 14, 
                    "description": "", 
                    "sellCount": 114, 
                    "rating": 91, 
                    "info": " ", 
                    "icon": "http://fuss10.elemecdn.com/d/b9/bcab0e8ad97758e65ae5a62b2664ejpeg.jpeg?imageView2/1/w/114/h/114", 
                    "image": "http://fuss10.elemecdn.com/d/b9/bcab0e8ad97758e65ae5a62b2664ejpeg.jpeg?imageView2/1/w/750/h/750", 
                    "fTypeId": 8
                }, 
                {
                    "foodId": 26, 
                    "name": "招牌猪肉白菜锅贴/10个", 
                    "price": 17, 
                    "description": "", 
                    "sellCount": 101, 
                    "rating": 78, 
                    "info": " ", 
                    "icon": "http://fuss10.elemecdn.com/7/72/9a580c1462ca1e4d3c07e112bc035jpeg.jpeg?imageView2/1/w/114/h/114", 
                    "image": "http://fuss10.elemecdn.com/7/72/9a580c1462ca1e4d3c07e112bc035jpeg.jpeg?imageView2/1/w/750/h/750", 
                    "fTypeId": 8
                }, 
                {
                    "foodId": 27, 
                    "name": "糊塌子", 
                    "price": 10, 
                    "description": "", 
                    "sellCount": 80, 
                    "rating": 93, 
                    "info": " ", 
                    "icon": "http://fuss10.elemecdn.com/0/05/097a2a59fd2a2292d08067e16380cjpeg.jpeg?imageView2/1/w/114/h/114", 
                    "image": "http://fuss10.elemecdn.com/0/05/097a2a59fd2a2292d08067e16380cjpeg.jpeg?imageView2/1/w/750/h/750", 
                    "fTypeId": 8
                }
            ]
        }, 
        {
            "fTypeId": 9, 
            "name": "特色粥品", 
            "foods": [
                {
                    "foodId": 28, 
                    "name": "皮蛋瘦肉粥", 
                    "price": 10, 
                    "description": "", 
                    "sellCount": 229, 
                    "rating": 100, 
                    "info": " ", 
                    "icon": "http://fuss10.elemecdn.com/c/cd/c12745ed8a5171e13b427dbc39401jpeg.jpeg?imageView2/1/w/114/h/114", 
                    "image": "http://fuss10.elemecdn.com/c/cd/c12745ed8a5171e13b427dbc39401jpeg.jpeg?imageView2/1/w/750/h/750", 
                    "fTypeId": 9
                }, 
                {
                    "foodId": 29, 
                    "name": "南瓜粥", 
                    "price": 9, 
                    "description": "", 
                    "sellCount": 91, 
                    "rating": 100, 
                    "info": " ", 
                    "icon": "http://fuss10.elemecdn.com/8/a6/453f65f16b1391942af11511b7a90jpeg.jpeg?imageView2/1/w/114/h/114", 
                    "image": "http://fuss10.elemecdn.com/8/a6/453f65f16b1391942af11511b7a90jpeg.jpeg?imageView2/1/w/750/h/750", 
                    "fTypeId": 9
                }, 
                {
                    "foodId": 30, 
                    "name": "红豆薏米美肤粥", 
                    "price": 12, 
                    "description": "", 
                    "sellCount": 86, 
                    "rating": 100, 
                    "info": " ", 
                    "icon": "http://fuss10.elemecdn.com/d/22/260bd78ee6ac6051136c5447fe307jpeg.jpeg?imageView2/1/w/114/h/114", 
                    "image": "http://fuss10.elemecdn.com/d/22/260bd78ee6ac6051136c5447fe307jpeg.jpeg?imageView2/1/w/750/h/750", 
                    "fTypeId": 9
                }, 
                {
                    "foodId": 31, 
                    "name": "红枣山药糙米粥", 
                    "price": 10, 
                    "description": "", 
                    "sellCount": 81, 
                    "rating": 100, 
                    "info": " ", 
                    "icon": "http://fuss10.elemecdn.com/9/b5/469d8854f9a3a03797933fd01398bjpeg.jpeg?imageView2/1/w/114/h/114", 
                    "image": "http://fuss10.elemecdn.com/9/b5/469d8854f9a3a03797933fd01398bjpeg.jpeg?imageView2/1/w/750/h/750", 
                    "fTypeId": 9
                }, 
                {
                    "foodId": 32, 
                    "name": "鲜蔬菌菇粥", 
                    "price": 11, 
                    "description": "", 
                    "sellCount": 65, 
                    "rating": 100, 
                    "info": " ", 
                    "icon": "http://fuss10.elemecdn.com/e/a3/5317c68dd618929b6ac05804e429ajpeg.jpeg?imageView2/1/w/114/h/114", 
                    "image": "http://fuss10.elemecdn.com/e/a3/5317c68dd618929b6ac05804e429ajpeg.jpeg?imageView2/1/w/750/h/750", 
                    "fTypeId": 9
                }, 
                {
                    "foodId": 33, 
                    "name": "田园蔬菜粥", 
                    "price": 10, 
                    "description": "", 
                    "sellCount": 78, 
                    "rating": 100, 
                    "info": " ", 
                    "icon": "http://fuss10.elemecdn.com/a/94/7371083792c19df00e546b29e344cjpeg.jpeg?imageView2/1/w/114/h/114", 
                    "image": "http://fuss10.elemecdn.com/a/94/7371083792c19df00e546b29e344cjpeg.jpeg?imageView2/1/w/750/h/750", 
                    "fTypeId": 9
                }
            ]
        }
    ]
}


Mock.mock('/goods', produceData);