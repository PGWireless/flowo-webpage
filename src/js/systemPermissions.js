import "../style/systemPermissions.css"

var dataCH = [
    {
        title: "系统权限申请与使用清单",
        trList: [
            {
                tdList: [
                    {
                        text: "权限名称"
                    },
                    {
                        text: "业务场景"
                    },
                    {
                        text: "使用目的"
                    }
                ]
            },
            {
                tdList: [
                    {
                        text: "相册权限"
                    },
                    {
                        text: "制作视频"
                    },
                    {
                        text: "读取和存储照片和视频"
                    }
                ]
            },
            {
                tdList: [
                    {
                        text: "蜂窝数据权限"
                    },
                    {
                        text: "制作视频"
                    },
                    {
                        text: "连接到移动网络以便下载、使用视频素材和特效"
                    }
                ]
            }
        ]
    }
]

var dataEN = [
    {
        title: "List of system permission application and usage",
        trList: [
            {
                tdList: [
                    {
                        text: "Permission to name"
                    },
                    {
                        text: "The business scenario"
                    },
                    {
                        text: "purpose"
                    }
                ]
            },
            {
                tdList: [
                    {
                        text: "Photo album permissions"
                    },
                    {
                        text: "Making video"
                    },
                    {
                        text: "Read and store photos and videos"
                    }
                ]
            },
            {
                tdList: [
                    {
                        text: "Cellular data access"
                    },
                    {
                        text: "Making video"
                    },
                    {
                        text: "Connect to the mobile network for downloading and using video footage and special effects"
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
        document.title = "系统权限申请与使用清单 - Blurrr"
    break;
    case "zh-Hant":
        createTemeplate(dataCH)
        document.title = "系统权限申请与使用清单 - Blurrr"
    break;
    case "en":
        createTemeplate(dataEN)
        document.title = "System Permission Request and Usage List - Blurrr"
    break;
    default:
        createTemeplate(dataEN)
        document.title = "System Permission Request and Usage List - Blurrr"
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