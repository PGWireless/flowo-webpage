import "../style/thanks.css"

var thankDataCH = [
    {
        titleText: `Blurrr要特别感谢一些重要的朋友们，<br />
        他们在我的诞生过程中提供了非比寻常的帮助。`,
        smText: '以上排列不分前后顺序',
        bigText: '祝你创作愉快!',
        userList: [
            {
                href: "https://b23.tv/1liACA",
                image: require("../assets/cftdq.png"),
                userName: "吃饭团的渠"
            },
            {
                href: "https://b23.tv/GSuSH2I",
                image: require("../assets/aq.png"),
                userName: "Aqiu来叻"
            },
            {
                href: "https://b23.tv/oAuRaHu",
                image: require("../assets/jys.png"),
                userName: "玖钥桑"
            },
            {
                href: "https://b23.tv/dVC9N6F",
                image: require("../assets/mr.png"),
                userName: "墨染"
            },
            {
                href: "https://v.douyin.com/Rxbb2uA/",
                image: require("../assets/fr.png"),
                userName: "夫人"
            },
            {
                href: "https://space.bilibili.com/5901729",
                image: require("../assets/bphdygg.png"),
                userName: "不怕黑的荧光怪"
            },
            {
                href: "https://v.douyin.com/RCP7Psq/",
                image: require("../assets/cz.png"),
                userName: "成长.🎨「高中版」"
            },
            {
                href: "https://www.instagram.com/zneptun/?hl=en",
                image: require("../assets/zneptun.png"),
                userName: "Zneptun"
            },
            {
                href: "https://www.instagram.com/retuurn.ae/?hl=en",
                image: require("../assets/Retuurn.png"),
                userName: "Retuurn"
            },
            {
                href: "https://instagram.com/neschayy?utm_medium=copy_link",
                image: require("../assets/neschayy.png"),
                userName: "neschayy"
            },
            {
                href: "https://www.instagram.com/fyqzai_/",
                image: require("../assets/fyqzai.png"),
                userName: "fyqzai_"
            },
            {
                href: "https://www.instagram.com/salehcanvas/",
                image: require("../assets/salehcanvas.png"),
                userName: "salehcanvas"
            }
        ]
    }
]

var thankDataEN = [
    {
        titleText: `Blurrr would like to especially thank <br />
                    some important friends,They provided <br />
                    extraordinary help during my birth.`,
        smText: 'The above rankings are in no particular order',
        bigText: 'Happy creation',
        userList:[
            {
                href: "https://www.instagram.com/retuurn.ae/?hl=en",
                image: require("../assets/Retuurn.png"),
                userName: "Retuurn"
            },
            {
                href: "https://www.instagram.com/zneptun/?hl=en",
                image: require("../assets/zneptun.png"),
                userName: "Zneptun"
            },
            {
                href: "https://www.instagram.com/fyqzai_/",
                image: require("../assets/fyqzai.png"),
                userName: "fyqzai_"
            },
            {
                href: "https://instagram.com/neschayy?utm_medium=copy_link",
                image: require("../assets/neschayy.png"),
                userName: "neschayy"
            },
            {
                href: "https://www.instagram.com/salehcanvas/",
                image: require("../assets/salehcanvas.png"),
                userName: "salehcanvas"
            },
            {
                href: "https://v.douyin.com/RCP7Psq/",
                image: require("../assets/cz.png"),
                userName: "成长.🎨「高中版」"
            },
            {
                href: "https://v.douyin.com/Rxbb2uA/",
                image: require("../assets/fr.png"),
                userName: "夫人"
            },
            {
                href: "https://space.bilibili.com/5901729",
                image: require("../assets/bphdygg.png"),
                userName: "不怕黑的荧光怪"
            },
            {
                href: "https://b23.tv/1liACA",
                image: require("../assets/cftdq.png"),
                userName: "吃饭团的渠"
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
        createTemeplate(thankDataCH)
        document.title = "特别鸣谢"
    break;
    case "en":
        createTemeplate(thankDataEN)
        document.title = "Special Thanks"
    break;
    default:
    break;
}

//  创建模板
function createTemeplate(template) {
    for (let i = 0; i < template.length; i++) {
        const templateItem = template[i]
        $(".cover").append(
            `
            <div class="img-box">
                <img src=${require("../assets/thank.png")} alt="">
            </div>

            <div class="content-box">

                <div class="icon-box">
                    <img src=${require("../assets/logo-icon.png")} alt="">
                </div>

                <div class="text-box">
                    ${templateItem.titleText}
                </div>

                <div class="href-box">

                </div>
            </div>

            <div class="bottom-box">
                <img src=${require("../assets/left-icon.png")} alt="" class="left-icon">
                <div class="sm-text">*${templateItem.smText}</div>
                <div class="big-text">${templateItem.bigText}</div>
                <img src=${require("../assets/right-icon.png")} alt="" class="right-icon">
            </div>
            `
        )
        for (let j = 0; j < templateItem.userList.length; j++) {
            const userItem = templateItem.userList[j]
            $(".href-box").eq(i).append(
                `
                <a href="${userItem.href}">
                    <div class="href-list">
                        <div class="href-image">
                            <img src=${userItem.image} alt="">
                        </div>
                        <div class="href-text">${userItem.userName}</div>
                    </div>
                </a>
                `
            )
        }
    }
}