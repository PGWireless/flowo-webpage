import "../style/informationCollection.css"

var dataCH = [
    {
        title: "个人信息收集与使用清单",
        trList: [
            {
                tdList: [
                    {
                        text: "功能/服务名称"
                    },
                    {
                        text: "收集的个人信息"
                    },
                    {
                        text: "使用场景/目的"
                    }
                ]
            },
            {
                tdList: [
                    {
                        text: "注册"
                    },
                    {
                        text: "手机号码或Apple ID"
                    },
                    {
                        text: "实名认证、创建账号"
                    }
                ]
            },
            {
                tdList: [
                    {
                        text: "制作视频"
                    },
                    {
                        text: "唯一设备识别码（IDFA）"
                    },
                    {
                        text: "确定使用设备"
                    }
                ]
            },
            {
                tdList: [
                    {
                        text: "产品内购"
                    },
                    {
                        text: "订单信息（IP地址、唯一设备识别码（IDFA）、订单号、交易时间、商品类型、商品金额、本地语言）"
                    },
                    {
                        text: "产品内购"
                    }
                ]
            },
            {
                tdList: [
                    {
                        text: "客户服务"
                    },
                    {
                        text: "姓名、手机号码、邮箱及其他有效联系方式"
                    },
                    {
                        text: "收到投诉、咨询或申诉后反馈处理结果"
                    }
                ]
            },
            {
                tdList: [
                    {
                        text: "安全保障"
                    },
                    {
                        text: "可变设备标识(IDFA、MAC地址)、基本设备信息、基本硬件信息、操作系统及软件版本信息、设备状态、系统语言及时区、网络状态、崩溃日志、使用/点击记录"
                    },
                    {
                        text: "保障您的帐号安全、排查产品故障"
                    }
                ]
            },
        ]
    }
]

var dataEN = [
    {
        title: "Personal information collection and use list",
        trList: [
            {
                tdList: [
                    {
                        text: "Function/service name"
                    },
                    {
                        text: "Personal information collected"
                    },
                    {
                        text: "Usage Scenario/Purpose"
                    }
                ]
            },
            {
                tdList: [
                    {
                        text: "registered"
                    },
                    {
                        text: "Phone number or Apple ID"
                    },
                    {
                        text: "Real-name authentication and account creation"
                    }
                ]
            },
            {
                tdList: [
                    {
                        text: "Making video"
                    },
                    {
                        text: "Unique Equipment Identification Number (IDFA)"
                    },
                    {
                        text: "Confirm the use of equipment"
                    }
                ]
            },
            {
                tdList: [
                    {
                        text: "Within the product purchase"
                    },
                    {
                        text: "Order information (IP address, UNIQUE device Identifier (IDFA), Order number, transaction time, type of product, amount of product, local language)"
                    },
                    {
                        text: "Within the product purchase"
                    }
                ]
            },
            {
                tdList: [
                    {
                        text: "Customer service"
                    },
                    {
                        text: "Name, mobile phone number, email address and other valid contact information"
                    },
                    {
                        text: "Feedback on handling results after receiving complaints, inquiries or complaints"
                    }
                ]
            },
            {
                tdList: [
                    {
                        text: "security"
                    },
                    {
                        text: "Variable device ID (IDFA, MAC address), basic device information, basic hardware information, operating system and software version information, device status, system language timely zone, network status, crash log, use/click record"
                    },
                    {
                        text: "Protect your account security and troubleshoot product failures"
                    }
                ]
            }
        ]
    }
]

//  获取地址URL的参数
function getQueryVariable(variable)
{
       var query = window.location.search.substring(1);
       var vars = query.split("&");
       for (var i=0;i<vars.length;i++) {
               var pair = vars[i].split("=");
               if(pair[0] == variable){return pair[1];}
       }
       return(false);
}

let lang = getQueryVariable("lang")

switch (lang) {
    case "zh-Hans":
        createTemeplate(dataCH)
        document.title = "个人信息收集与使用清单 - Blurrr"
    break;
    case "en":
        createTemeplate(dataEN)
        document.title = "Personal information collection and use list - Blurrr"
    break;
    default:
    break;
}

function createTemeplate(template) {
    for (let i = 0; i < template.length; i++) {
        const templateItem = template[i]
        $(".cover").append(
            `
                <div class="title">${templateItem.title}</div>
                <div class="table">
                    <table>
                        
                    </table>
                </div>
            `
        )
        for (let j = 0; j < templateItem.trList.length; j++) {
            $("table").append(
                `
                    <tr class="tr${j}"></tr>
                `
            )
            for (let n = 0; n < templateItem.trList[j].tdList.length; n++) {
                $(".tr" + j).append(
                    `
                        <td ${ n == templateItem.trList[j].tdList.length - 1 ? "colspan=3" : ""}>${templateItem.trList[j].tdList[n].text}</td>
                    `
                )
            }
        }
    }
}