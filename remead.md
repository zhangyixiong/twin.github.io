      {
            "name": "scene_001", // 场景名字
            "show": true, // 是否展示 (目前没做)
            "spirits": [  // 精灵
                {// 第一个精灵
                    "name": "div",  // dom元素标签
                    "cssProperties": { // 该div样式 (所有css样式)
                        "width": "86px",
                        "height": "86px",
                        "overflow": "hidden"
                    },
                    "handler": [ // 该div所有方法
                        {
                            "eventName": "click", // 事件类型
                            "handlerType": "changeScene", // 触发事件
                            "handlerValue": "scene_002" // 触发事件后参数
                        }
                    ],
                    "canvasStyle": { // 精灵在场景中的样式
                        "position": {
                            "x": 0,
                            "y": 0,
                            "z": 1
                        }
                    },
                    "children": [ // dom内嵌套dom
                        {
                            "name": "img", // dom元素标签
                            "cssProperties": { // dom元素所有css
                                "src": "spirit/qianjin.png",
                                "animation": "qianjin 2s steps(24) infinite",
                                "-webkit-user-drag": "none",
                                "position": "absolute",
                                "top": "0",
                                "left": "0"
                            },
                            "keyframes": [ // dom元素动画(如果前面有动画效果)
                                {
                                    "name": "qianjin",
                                    "0%": {
                                        "top": "0"
                                    },
                                    "100%": {
                                        "top": "-2064px"
                                    }
                                }
                            ]
                        }
                    ]
                }
            ]
        },