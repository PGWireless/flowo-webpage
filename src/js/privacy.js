import { get } from 'jquery';
import '../style/common.css'
import '../style/privacy.css'

var privacyDataCH = [
    {
        subTitle : "隐私政策（摘要）",
        content: [
            {
                text: "最近发布、更新及生效日期：2022年7月1日。"
            },
            {
                text: "我们非常重视您的隐私和个人信息保护，您在使用Blurrr时，我们可能会收集和使用您的相关信息，请您再开始使用前，仔细阅读、充分理解并同意接受本隐私政策的全部内容，特别是我们以粗体标识的条款。本隐私政策的摘要主要向您说明：我们在必要范围内收集和使用您的个人信息类型和业务场景，以及我们处理您个人信息的基本规则。如果您想了解我们可能收集和使用您个人信息的全部场景，已经我们处理您个人信息的全部规则，请您查阅附文中的《隐私政策》全文。"
            },
        ]
    },
    {
        subTitle: "一、我们如何收集和使用您的个人信息",
        content: [
            {
                text: "1、注册账户。当您注册Blurrr账号时，您需要提供手机号码（用于实名认证）或Apple ID用以创建账号。"
            },
            {
                text: "2、制作视频。为了您可以使用本产品和服务制作视频，我们可能需要收集您的唯一设备识别码(IDFA）,用于确定使用设备。"
            },
            {
                text: "3、产品内购。当您购买Blurrr的付费服务（如果汁、VIP会员）后，我们会收集相应的订单信息，内容包括IP地址、唯一设备识别码（IDFA）、订单号、交易时间、商品类型、商品金额、本地语言。"
            },
            {
                text: "4、安全保障。为排查产品故障、保障您的账户及交易安全，我们会依法根据网络运行安全需要收集和处理您的可变设备标识(IDFA、MAC地址)、基本设备信息、基本硬件信息、操作系统及软件版本信息、设备状态、系统语言及时区、网络状态、崩溃日志、使用/点击记录，并将使用您的权限进行存储，我们也会将前述信息用于预防各类非法使用或侵害合法权益的行为。"
            },
            {
                text: "5、产品业务功能所手机使用您的信息逐项列举，请查阅<a href='https://blurrr.saladvideo.com/informationCollection.html?lang=zh-Hans'>《个人信息收集与使用清单》</a>。实现相关业务功能可能开启您的设备访问权限的逐项列举，请查阅<a href='https://blurrr.saladvideo.com/thirdPartySharing.html?lang=zh-Hans'>《系统权限申请与使用清单》</a>。"
            }
        ]
    },
    {
        subTitle: "二、我们如何共享您的个人信息",
        content: [
            {
                text: "请您理解，我们无法单独向您提供全部的服务，需要其他服务提供商为您一起提供服务，因此，我们需要向必要的第三方共享或委托处理的方式提供您的部分个人信息。您可以通过<a href='https://blurrr.saladvideo.com/thirdPartySharing.html?lang=zh-Hans'>《个人信息第三方共享清单》</a>查看第三方SDK手机和使用您个人信息的情况。"
            }
        ]
    },
    {
        subTitle: "三、您如何管理您的个人信息",
        content: [
            {
                text: "您可以通过多种方式管理您的个人信息，例如访问、更正您的个人资料，以及注销您的账户。但也请您理解，我们可能会因为履行法律规定义务的原因无法完全满足您的请求。"
            }
        ]
    },
    {
        subTitle: "四、如何联系我们",
        content: [
            {
                text: "若您对本隐私政策或与您个人信息相关的事宜有任何问题、意见或建议，可以通过发送邮件至scdgzx@vip.qq.com、邮寄挂号信至22 SIN MING LANE #06-76 MIDVIEW CITY Singapore。我们将在15日内回复，若您对我们的回复不满意，您还可以通过向被告所在地人民法院提起民事诉讼的方式寻求解决方案。"
            },
            {
                text: "以下为Blurrr的《隐私政策》全文。"
            }
        ]
    },
    {
        subTitle: "隐私政策",
        content: [
            {
                text: "最近发布、更新及生效日期：2022年7月1日。"
            },
            {
                text: "本政策将帮助您了解在使用Blurrr的过程中可能涉及的以下内容： "
            },
            {
                text: "1、我们如何收集和使用您的个人信息"
            },
            {
                text: "2、我们如何使用 Cookie 和同类技术"
            },
            {
                text: "3、我们如何共享、转让、公开披露您的个人信息 "
            },
            {
                text: "4、我们如何保护您的个人信息"
            },
            {
                text: "5、您的权利 "
            },
            {
                text: "6、我们如何处理未成年人的个人信息 "
            },
            {
                text: "7、个人信息的存储 "
            },
            {
                text: "8、适用法律及管辖"
            },
            {
                text: "9、本政策如何更新 "
            },
            {
                text: "10、如何联系我们"
            },
            {
                text: "Blurrr深知个人信息对您的重要性，并会尽全力保护您的个人信息安全可靠。我们致力于维持您对我们的信任，恪守以下原则，保护您的个人信息：权责一致原则、目的明确原则、选择同意原则、最少够用原则、确保安全原则、主体参与原则、公开透明原则等。同时，Blurrr承诺，我们将按业界成熟的安全标准，采取相应的安全保护措施来保护您的个人信息。"
            },
            {
                text: "请在使用我们的产品（或服务）前，仔细阅读并了解本《隐私政策》，特别是我们以粗体标识的条款。"
            }
        ]
    },
    {
        subTitle: "一、我们如何收集和使用您的个人信息",
        content: [
            {
                text: "个人信息是指以电子或者其他方式记录的能够单独或者与其他信息结合识别特定自然人身份或者反映特定自然人活动情况的各种信息。 "
            },
            {
                text: "Blurrr仅会出于本政策所述的以下目的，收集和使用您的个人信息："
            },
            {
                text: "（一）业务功能一：注册账户"
            },
            {
                text: "当您注册Blurrr时，您需要提供手机号码（用于实名认证）或Apple ID。收集这些信息是为了帮助您完成账号注册，以便使用Blurrr的全部功能。若您不提供以上信息，您将无法生成预设扫描、分享助力、使用内购或RSMB和补帧功能，但不影响您使用其他基础功能。"
            },
            {
                text: "（二）业务功能二：制作视频。"
            },
            {
                text: "1、为了您可以使用本产品和服务制作视频，我们可能需要收集您的唯一设备识别码（IDFA）,用于确定使用设备。"
            },
            {
                text: "2、同时，可能需要您开通以下权限："
            },
            {
                text: "（1）相册权限，用于读取和存储照片和视频"
            },
            {
                text: "（2）蜂窝数据权限，用于连接到移动网络以便下载、使用视频素材和特效"
            },
            {
                text: "（三）业务功能三：产品内购功能"
            },
            {
                text: "当您购买Blurrr的付费服务（如果汁、VIP等）后，我们会收集相应的订单信息，包括IP地址、唯一设备识别码（IDFA）、订单号、交易时间、商品类型、商品金额、本地语言。"
            },
            {
                text: "（四）业务功能四：客户服务。当您向我们提起投诉、进行咨询或申诉时，为了方便与您联系或帮助您解决问题，我们可能需要您提供姓名、手机号码、电子邮件及其他有效的联系方式等个人信息。 如您拒绝提供上述信息，我们可能无法向您及时反馈相关处理结果。"
            },
            {
                text: "（五）业务功能五：安全保障。排查产品故障、保障您的账户及交易安全，我们会依法根据网络运行安全需要收集和处理您的可变设备标识(IDFA、MAC地址)、基本设备信息、基本硬件信息、操作系统及软件版本信息、设备状态、系统语言及时区、网络状态、崩溃日志、使用/点击记录，并将使用您的权限进行存储，我们也会将前述信息用于预防各类非法使用或侵害合法权益的行为。"
            },
            {
                text: "（六）业务功能六：接收产品、服务、营销或调查问卷信息。为更好地让您了解Blurrr的产品和相关服务，我们可能会向您的手机推送我们的产品、服务、营销信息或向您进行相关的问卷调查。"
            },
            {
                text: "（七）以下为征得个人信息主体授权同意的例外情形:"
            },
            {
                text: "1、与个人信息控制者履行法律法规规定的义务相关的;"
            },
            {
                text: "2、与国家安全、国防安全直接相关的; "
            },
            {
                text: "3、与公共安全、公共卫生、重大公共利益直接相关的;"
            },
            {
                text: "4、与刑事侦查、起诉、审判和判决执行等直接相关的;"
            },
            {
                text: "5、出于维护个人信息主体或其他个人的生命、财产等重大合法权 益但又很难得到本人授权同意的；"
            },
            {
                text: "6、所涉及的个人信息是个人信息主体自行向社会公众公开的;"
            },
            {
                text: "7、根据个人信息主体要求签订和履行合同所必需的。"
            }
        ]
    },
    {
        subTitle: "二、我们如何使用 Cookie 和同类技术 ",
        content: [
            {
                text: "（一）Cookie "
            },
            {
                text: "为确保网站正常运转，我们会在您的计算机或移动设备上存储名为 Cookie 的小数据文件。Cookie 通常包含标识符、站点名称以及一些号码和字符。借助于 Cookie，网站能够存储您的偏好数据。 我们不会将 Cookie 用于本政策所述目的之外的任何用途。您可根据自己的偏好管理或删除 Cookie。有关详情，请参见 AboutCookies.org。您可以清除计算机上保存的所有 Cookie，大部分网络浏览器都设有阻止Cookie的功能，您可以通过浏览器设置选项清除计算机上保存的所有Cookie。"
            },
            {
                text: "（二）网站信标和像素标签 "
            },
            {
                text: "除Cookie外，我们还会在网站上使用网站信标和像素标签等其他同类技术。例如，我们向您发送的电子邮件可能含有链接至我们网站内容的点击URL。如果您点击该链接，我们则会跟踪此次点击，帮助我们了解您的产品或服务偏好并改善客户服务。网站信标通常是一种嵌入到网站或电子邮件中的透明图像。借助于电子邮件中的像素标签，我们能够获知电子邮件是否被打开。如果您不希望自己的活动以这种方式被追踪，则可以随时从我们的寄信名单中退订。"
            }
        ]
    },
    {
        subTitle: "三、我们如何共享、转让、公开披露您的个人信息 ",
        content: [
            {
                text: "（一）共享 "
            },
            {
                text: "我们不会与成都品果科技有限公司以外的任何公司、组织和个人分享您的个人信息，但以下情况除外： "
            },
            {
                text: "1、在获取明确同意的情况下共享：获得您的明确同意后，我们会与其他方共享您的个人信息。"
            },
            {
                text: "2、我们可能会根据法律法规规定、诉讼争议需要或按政府主管部门或司法机关依法提出的强制性要求，对外共享您的个人信息。 "
            },
            {
                text: "3、在法律要求或允许的范围内，为了保护品果及其用户或社会公众利益、财产或安全免遭损害而有必要提供您的个人信息给第三方。"
            },
            {
                text: "4、与我们的关联公司共享：您的个人信息可能会与成都品果科技有限公司的关联公司共享。我们只会共享必要的个人信息，且受本隐私政策中所声明目的的约束。关联公司如要改变个人信息的处理目的，将再次征求您的授权同意。"
            },
            {
                text: "我们的关联公司包括：北京品果科技有限公司、成都棱晶科技有限公司。 "
            },
            {
                text: "5、与授权合作伙伴共享：仅为实现本政策中声明的目的，我们的某些服务将由授权合作伙伴提供。我们可能会与合作伙伴共享您的某些个人信息，以保障为您提供的服务得以完成，并为您提供更好的客户服务和用户体验。我们仅会出于合法、正当、必要、特定、明确的目的共享您的个人信息，并且只会共享提供服务所必要的个人信息。我们的合作伙伴无权将共享的个人信息用于任何其他用途。 "
            },
            {
                text: "目前，我们的授权合作伙伴包括以下两种类型： "
            },
            {
                text: "1）广告类合作伙伴。他们主要是帮助我们统计和评估广告的展示效果和产品的数据分析，以便我们优化服务使您获得更好的体验。我们会向这些合作伙伴提供的个人信息可能包括IP地址、设备信息（设备型号、操作系统、唯一设备识别码、接入网络方式、类型和状态、语言及时区）。 "
            },
            {
                text: "2）当您注册或使用手机号登录时，我们需要将您的手机号码共享给【创蓝短信推送平台】（由上海创蓝云智信息科技股份有限公司提供）以向您提供【短信推送】服务。创蓝会给您发送短信验证码，当您收到短信验证码时，我们会自动读取您的该条短信息并将其中的验证码同步至我们注册或登录界面中，您可以直接点击验证码完成填写。我们不会读读取您的其他短信内容。"
            },
            {
                text: "3）技术支持类合作伙伴。为了完成相应的功能，我们会接入第三方的SDK来获得技术支持，比如帮助我们统计了解产品用户分布和数据分析，我们可能会向此类合作伙伴提供以下个人信息。Blurrr在不同时期可能会选择使用其中部分合作方或变更合作方，故清单内的合作伙伴可能会进行调整。"
            },
            {
                text: "<div class='table'><table><tbody><tr><td>第三方SDK名称</td><td>第三方公司名称</td><td>使用场景描述</td><td>共享的个人信息类型</td><td>隐私政策</td></tr><tr><td>Fabric</td><td>Fabric</td><td>用于崩溃日志收集</td><td>唯一设备识别码、地理位置信息</td><td><a href='https://www.fabfile.org/'>Fabric协议</a></td></tr><tr><td>GrowingIO</td><td>北京易数科技有限公司</td><td>用于数据统计及分析</td><td>软件使用和点击记录、唯一设备识别码、地理位置信息、应用安装列表</td><td><a href='https://docs.growingio.com/v3/developer-manual/sdkintegrated/compliance/'>GrowingIO隐私协议</a></td></tr><tr><td>Bugly</td><td>深圳市腾讯计算机系统有限公司</td><td>用于崩溃日志收集</td><td>崩溃日志、唯一设备识别码</td><td><a href='https://privacy.qq.com/document/preview/fc748b3d96224fdb825ea79e132c1a56'>Bugly隐私协议</a></td></tr><tr><td>Firebase</td><td>Google</td><td>用于数据统计及分析</td><td>软件使用和点击记录、唯一设备识别码、地理位置信息</td><td><a href='https://policies.google.cn/privacy'>Firebase隐私协议</a></td></tr><tr><td>AppsFlyerFramework</td><td>AppsFlyer Ltd.</td><td>用于数据统计及分析</td><td>软件使用和点击记录、唯一设备识别码、地理位置信息、应用安装列表</td><td><a href='https://www.appsflyer.com/legal/privacy-policy/'>AppFlyer隐私协议</a></td></tr><tr><td>分享SDK（微博、QQ、微信）</td><td>深圳市腾讯计算机系统有限公司<br/>北京新浪互联信息有限公司</td><td>用于用户自主将拍摄结果分享于第三方平台</td><td>设备MAC地址、唯一设备识别码</td><td><a href='https://open.weibo.com/wiki/%E5%BC%80%E5%8F%91%E8%80%85%E5%8D%8F%E8%AE%AE'>微博分享使用协议</a><br/><a href='https://wikinew.open.qq.com/#/home'>QQ分享使用协议</a><br/><a href='https://open.weixin.qq.com/cgi-bin/frame?t=news/protocol_developer_tmpl'>微信分享使用协议</a><br/></td></tr><tr><td>分享SDK（Facebook）</td><td>FaceBook</td><td>用于用户自主将拍摄结果分享于第三方平台</td><td>设备MAC地址、唯一设备识别码</td><td><a href='https://www.facebook.com/about/privacy'>Facebook隐私协议</a></td></tr></tbody></table></div>"
            },
            {
                text: "（二）转让"
            },
            {
                text: "我们不会将您的个人信息转让给任何公司、组织和个人，但以下情况除外："
            },
            {
                text: "1、在获取明确同意的情况下转让：获得您的明确同意后，我们会向其他方转让您的个人信息；"
            },
            {
                text: "2、在涉及合并、收购或破产清算时，如涉及到个人信息转让，我们会在要求新的持有您个人信息的公司、组织继续受此隐私政策的约束，否则我们将要求该公司、组织重新向您征求授权同意。 "
            },
            {
                text: "（三）公开披露 "
            },
            {
                text: "我们仅会在以下情况下，公开披露您的个人信息："
            },
            {
                text: "1、获得您明确同意后； "
            },
            {
                text: "2、基于法律的披露：在法律、法律程序、诉讼或政府主管部门强制性要求的情况下，我们可能会公开披露您的个人信息。 "
            },
            {
                text: "（四）例外"
            },
            {
                text: "根据相关法律法规的规定，在以下情形中，我们可以在不征得您的授权同意的情况下收集、共享、转让或公开披露您的个人信息。"
            },
            {
                text: "1、与国家安全、国防安全等国家利益直接相关的；"
            },
            {
                text: "2、与公共安全、公共卫生、公众知情等重大公共利益直接相关的；"
            },
            {
                text: "3、与犯罪侦查、起诉、审判和判决执行等直接相关的；"
            },
            {
                text: "4、出于维护您或其他个人的生命、财产、声誉等重大合法权益但又很难得到本人同意的；"
            },
            {
                text: "5、根据您要求签订和履行合同所必需的；"
            },
            {
                text: "6、用于维护所提供的产品或服务的安全稳定运行所必需的，例如发现、处置产品或服务的故障；"
            },
            {
                text: "7、出于公共利益开展统计或学术研究所必要，且其对外提供学术研究或描述的结果时，对结果中所包含的个人信息进行去标识化处理的；"
            },
            {
                text: "8、从合法公开披露的信息中收集到的个人信息的，如合法的新闻报道、政府信息公开等渠道；"
            },
            {
                text: "9、法律法规规定的其他情形。"
            }
        ]
    },
    {
        subTitle: "四、我们如何保护您的个人信息",
        content: [
            {
                text: "（一）我们已使用符合业界标准的安全防护措施保护您提供的个人信息，防止数据遭到未经授权访问、公开披露、使用、修改、损坏或丢失。我们会采取一切合理可行的措施，保护您的个人信息。例如，在您的浏览器与“服务”之间交换数据（如信用卡信息）时受 SSL 加密保护；我们对产品提供的配套Web服务提供HTTPS 安全访问方式；我们会使用受信赖的保护机制防止数据遭到恶意攻击；我们会部署访问控制机制，确保只有授权人员才可访问个人信息；以及我们会举办安全和隐私保护培训课程，加强员工对于保护个人信息重要性的认识。 "
            },
            {
                text: "（二）互联网并非绝对安全的环境，而且电子邮件、即时通讯、及与其他Blurrr用户的交流方式并未加密，我们强烈建议您不要通过此类方式发送个人信息。请使用复杂密码，协助我们保证您的账号安全。"
            },
            {
                text: "（三）互联网环境并非百分之百安全，我们将尽力确保或担保您发送给我们的任何信息的安全性。"
            },
            {
                text: "（四）在不幸发生个人信息安全事件后，我们将按照法律法规的要求，及时向您告知：安全事件的基本情况和可能的影响、我们已采取或将要采取的处置措施、您可自主防范和降低风险的建议、对您的补救措施等。我们将及时将事件相关情况以邮件、电话、推送通知等方式告知您，难以逐一告知个人信息主体时，我们会采取合理、有效的方式发布公告。 同时，我们还将按照监管部门要求，主动上报个人信息安全事件的处置情况。 "
            }
        ]
    },
    {
        subTitle: "五、您的权利",
        content: [
            {
                text: "按照中国相关的法律、法规、标准，以及其他国家、地区的通行做法，我们保障您对自己的个人信息行使以下权利："
            },
            {
                text: "（一）访问您的个人信息"
            },
            {
                text: "您有权访问您的个人信息，法律法规规定的例外情况除外。如果您想行使数据访问权，可以通过以下方式自行访问："
            },
            {
                text: "个人中心——如果您希望访问或编辑您的账户中的个人资料信息、添加安全信息或注销您的账户等，您可以通过访问【Blurrr】-【个人中心】执行此类操作。"
            },
            {
                text: "（二）删除您的个人信息 "
            },
            {
                text: "1、一般而言，我们只会在法律法规规定或必需且最短的时间内保存您的个人信息。若您需要行使您的删除权，可以随时向我们提出申请，我们将在15日内删除您的个人信息，法律法规另有规定的除外。"
            },
            {
                text: "在以下情形中，您可以通过本政策第十条的联系方式向我们提出删除个人信息的请求： "
            },
            {
                text: "（1）如果我们处理个人信息的行为违反法律法规； "
            },
            {
                text: "（2）如果我们处理个人信息的行为违反了与您的约定； "
            },
            {
                text: "（3）法律法规等规定等其他情形。"
            },
            {
                text: "2、若我们决定响应您的删除请求，我们还将同时通知从我们获得您的个人信息的实体，要求其及时删除，除非法律法规另有规定，或这些实体获得您的独立授权。 当您从我们的服务中删除信息后，我们可能不会立即备份系统中删除相应的信息，但会在备份更新时删除这些信息。 "
            },
            {
                text: "（三）撤回您的授权"
            },
            {
                text: "如您想更改相关权限的授权（例如：相册），您可以通过您的硬件设备进行修改， iOS系统可以通过【设置】-【Blurrr】的路径/Android系统可以通过【设置】-【应用程序】-【应用管理】-【Blurrr】-【权限】的路径进行更改。您也可以通过注销账号的方式，永久撤回所有授权。"
            },
            {
                text: "但请您理解并同意，当您撤回某些授权时，将导致与之相关的产品功能不可用，我们无法继续为您提供撤回同意或授权所对应的特定功能和/或服务，并且您撤回授权的决定不会影响此前基于您的授权而开展的个人信息处理。"
            },
            {
                text: "（四）个人信息主体注销账户 "
            },
            {
                text: "您随时可注销此前注册的账户，您可以通过以下方式自行操作："
            },
            {
                text: "在【Blurrr】-【首页】-【个人中心】-【账号注销】中进行账号注销。"
            },
            {
                text: "在注销账户之后，我们将停止为您提供产品或服务，并依据您的要求，在15日内删除您的个人信息，法律法规另有规定的除外。"
            },
            {
                text: "（五）个人信息主体获取个人信息副本"
            },
            {
                text: "如您需要您的个人信息的副本，您可以通过本《隐私政策》文末提供的方式联系我们，在核实您的身份后，我们将向您提供您在我们的服务中的个人信息副本（包括基本资料、账户信息），但法律法规另有规定的或本政策另有约定的除外。"
            },
            {
                text: "（六）约束信息系统自动决策"
            },
            {
                text: "在某些业务功能中，我们可能仅依据信息系统、算法等在内的非人工自动决策机制作出决定。如果这些决定显著影响您的合法权益，您有权要求我们做出解释，我们也将提供适当的救济方式。"
            },
            {
                text: "（七）响应您的上述请求"
            },
            {
                text: "1、为保障安全，您可能需要提供书面请求，或以其他方式证明您的身份。我们可能会先要求您验证自己的身份，然后再处理您的请求。 我们将在15日内做出答复。"
            },
            {
                text: "2、对于您合理的请求，我们原则上不收取费用，但对多次重复、超出合理限度的请求，我们将视情收取一定成本费用。对于那些无端重复、需要过多技术手段（例如，需要开发新系统或从根本上改变现行惯例）、给他人合法权益带来风险或者非常不切实际（例如，涉及备份磁带上存放的信息）的请求，我们可能会予以拒绝。 "
            },
            {
                text: "3、在以下情形中，按照法律法规要求，我们将无法响应您的请求： "
            },
            {
                text: "（1）与国家安全、国防安全直接相关的； "
            },
            {
                text: "（2）与公共安全、公共卫生、重大公共利益直接相关的；"
            },
            {
                text: "（3）与刑事侦查、起诉、审判和判决执行等直接相关的；"
            },
            {
                text: "（4）与个人信息控制者履行法律法规规定的义务相关的；"
            },
            {
                text: "（5）有充分证据表明您存在主观恶意或滥用权利的；"
            },
            {
                text: "（6）响应您的请求将导致您或其他个人、组织的合法权益受到严重损害的。"
            },
            {
                text: "（7）涉及商业秘密的。"
            }
        ]
    },
    {
        subTitle: "六、我们如何处理未成年人的个人信息",
        content: [
            {
                text: "（一）我们的产品、网站和服务主要面向成人。如果没有父母或监护人的同意，未成年人不得创建自己的用户账户。 如果您为14周岁以下的未成年人，在使用我们的产品和/或服务前，请您务必在监护人的陪同下阅读本政策，并确保已征得您的监护人明确同意后，再使用我们的服务并向我们提供您的个人信息。"
            },
            {
                text: "（二）对于经父母同意而收集未成年人个人信息的情况，我们只会在受到法律允许、父母或监护人明确同意或者保护未成年人所必要的情况下使用或公开披露此信息。"
            },
            {
                text: "（三） 如果您的监护人不同意您按照本政策使用我们的服务或向我们提供个人信息，请您立即终止使用我们的服务并及时通知我们。 "
            }
        ]
    },
    {
        subTitle: "七、个人信息的存储",
        content: [
            {
                text: "存储地点：我们会按照法律法规的规定，将在中华人民共和国境内收集的个人信息，存储在中华人民共和国境内。"
            },
            {
                text: "存储期限：我们承诺将使您的个人信息存储时间始终处于法律要求或实现产品功能和服务所需的必要且最短的期限内，例如，您的账号信息在您未进行撤回、删除或注销之前，我们会持续存储。对于超出期限的个人信息，我们会立即删除或做匿名化处理，但您行使删除权、注销账号或法律另有规定的除外。"
            }
        ]
    },
    {
        subTitle: "八、适用法律及管辖",
        content: [
            {
                text: "本隐私政策适用中华人民共和国大陆地区法律。本隐私政策项下争议，由被告住所地法院管辖。"
            }
        ]
    },
    {
        subTitle: "九、本政策如何更新",
        content: [
            {
                text: "（一）我们的隐私政策可能变更或修订。未经您明确同意，我们不会削减您按照本隐私政策所应享有的权利。我们会在本页面上发布对本政策所做的任何变更。 对于重大变更，我们会以弹窗形式告知您并再次征得您的同意"
            },
            {
                text: "（二）本政策所指的重大变更包括但不限于："
            },
            {
                text: "1、我们处理个人信息的目的、处理的个人信息类型、个人信息的使用方式等发生变化；"
            },
            {
                text: "2、您参与个人信息处理方面的权利及其行使方式发生重大变化；"
            },
            {
                text: "3、个人信息安全影响评估报告表明存在高风险时。"
            }
        ]
    },
    {
        subTitle: "十、如何联系我们 ",
        content: [
            {
                text: "我公司为在新加坡境内成立的【TBPS INTERNATIONAL TECHNOLOGY PTE. LTD. 】，注册地址22 SIN MING LANE #06-76 MIDVIEW CITY Singapore。"
            },
            {
                text: "如果您对本政策或服务内容有任何疑问、意见、建议或进行申诉，我们专门为您提供了多种反馈通道，方便您与我们取得联系："
            },
            {
                text: "邮件投诉通道：为更好地保护您的权益，我们设立了scdgzx@vip.qq.com的邮箱，您可以通过该邮箱与我们取得联系；"
            },
            {
                text: "个人信息保护团队：您可发送邮件至scdgzx@vip.qq.com，也可以挂号信方式寄送至：22 SIN MING LANE #06-76 MIDVIEW CITY Singapore，收件人：Blurrr个人信息保护团队。"
            },
            {
                text: "我们将在收到您的问题后15日内向您反馈处理结果。如果您对我们的回复不满意，您还可以通过向被告所在地有管辖权的法院提起民事诉讼的方式寻求解决方案。"
            }
        ]
    },
]

var privacyDataEN = [
    {
        subTitle: "Privacy Policy (Summary)",
        content: [
            {
                text: "Last published, updated and effective date: July 1, 2022."
            },
            {
                text: "We take your privacy and personal information very seriously, and we may collect and use your information when you use Blurrr. Please carefully read, fully understand, and agree to all of this Privacy Policy, especially our terms in bold, before you begin using it."
            },
            {
                text: "The summary of this Privacy Policy mainly explains to you: to the extent necessary, we collect and use your personal information types and business scenarios, as well as our basic rules for handling your personal information. If you want to know all the circumstances in which we may collect and use your personal Information, and all our rules for handling your personal Information, please refer to the attached Privacy Policy."
            }
        ]
    },
    {
        subTitle: "1. How do we collect and use your personal Information",
        content: [
            {
                text: "1-1. Set up an account. When you register a Blurrr account, you will need to provide your mobile phone number (for real-name authentication) or Apple ID to create the account."
            },
            {
                text: "1-2. Make videos. In order for you to make videos using this product and service, we may need to collect your unique device Identification number (IDFA) for determining the device to use."
            },
            {
                text: "1-3. In-product purchase. When you purchase a paid Blurrr service such as juice or VIP membership, we collect order information including IP address, unique device Identifier (IDFA), order number, transaction time, item type, item amount, and local language."
            },
            {
                text: "1-4. Security guarantee. For the product breakdown and protect your account and transaction security, we will be in accordance with the law according to the safe operation of network need to collect and handle your variable device identifier (IDFA, MAC address), basic equipment information, basic information, operating system, hardware and software version information, equipment status, the collapse of the system language area in time, network status, log, use/click on the record, We will use your permission to store the information, and we will also use the aforementioned information to prevent all kinds of illegal use or infringement of legitimate rights and interests."
            },
            {
                text: "5、Please refer to the list item by item of your information about the mobile phone used by the product business functions<a href='https://blurrr.saladvideo.com/informationCollection.html?lang=en'>《Personal information collection and use list》</a>。For details about the device access rights that may be enabled for you to implement related service functions, see<a href='https://blurrr.saladvideo.com/systemPermissions.html?lang=en'>《List of system permission application and usage》</a>。"
            },
            {
                text: "How do we share your personal information"
            },
            {
                text: "Please understand that we cannot provide all the services to you independently, and other service providers need to provide services for you together. Therefore, we need to provide some of your personal information to the necessary third party sharing or entrusted processing. You can use the <a href='https://blurrr.saladvideo.com/thirdPartySharing.html?lang=en'>《List of personal information shared by third parties》</a> View third-party SDK phones and the use of your personal information."
            },
            {
                text: "How do you manage your personal information"
            },
            {
                text: "You can manage your personal information in a variety of ways, such as accessing, correcting your personal information, and deactivating your account. However, please understand that we may not be able to fully meet your request due to our legal obligations."
            },
            {
                text: "How to contact us"
            },
            {
                text: "If you have any questions, comments or suggestions regarding this Privacy Policy or matters relating to your personal information, you can send an email to scdgzx@vip.qq.com or send a registered letter to 22 SIN MING LANE #06-76 MIDVIEW CITY Singapore."
            },
            {
                text: "We will reply you within 15 days. If you are not satisfied with our reply, you can also seek a solution by filing a civil lawsuit to the people's Court where the defendant is located."
            },
            {
                text: "Below is the full text of Blurrr's Privacy Policy."
            }
        ]
    },
    {
        subTitle: "Privacy policy",
        content: [
            {
                text: "Last published, updated and effective date: July 1, 2022."
            },
            {
                text: "This policy will help you understand what may be involved in using Blurrr:"
            },
            {
                text: "1. How do we collect and use your personal Information"
            },
            {
                text: "2. How do we use cookies and similar technologies"
            },
            {
                text: "3. How do we share, transfer and publicly disclose your personal Information"
            },
            {
                text: "4. How do we protect your personal Information"
            },
            {
                text: "5. Your rights"
            },
            {
                text: "6. How do we deal with minors' personal information"
            },
            {
                text: "7. Storage of personal information"
            },
            {
                text: "8. Governing law and jurisdiction"
            },
            {
                text: "9. How to update this policy"
            },
            {
                text: "10. How can I contact us"
            },
            {
                text: "Blurrr understands how important your personal information is to you and does its best to keep your personal information safe and secure. We are committed to maintaining your trust and protecting your personal information by adhering to the following principles: the principle of consistency of rights and responsibilities, the principle of clear purpose, the principle of opt-in consent, the principle of minimum sufficient, the principle of ensuring security, the principle of subject participation, the principle of openness and transparency, etc.At the same time, Blurrr promises that we will protect your personal information in accordance with established industry security standards."
            },
            {
                text: "Please read and understand this Privacy Policy carefully before using our products (or services), especially our terms in bold."
            },
            {
                text: "1. How do we collect and use your personal Information"
            },
            {
                text: "Personal information refers to all kinds of information recorded electronically or in other ways that can independently or in combination with other information identify the identity of a particular natural person or reflect the activities of a particular natural person."
            },
            {
                text: "Blurrr will collect and use your personal Information only for the purposes described in this Policy:"
            },
            {
                text: "(I) (I) Business function I: register an account"
            },
            {
                text: "When you sign up for Blurrr, you need to provide your mobile phone number (for real-name authentication) or Apple ID. This information is collected to help you complete your account registration to use the full features of Blurrr. If you do not provide the above information, you will not be able to generate preset scans, share assists, use in-app purchase or RSMB and frame complement functions, but without prejudice to your use of other basic functions."
            },
            {
                text: "(2) Business function 2: video production."
            },
            {
                text: "1. In order for you to make videos using the Products and services, we may need to collect your unique Device Identification number (IDFA) for determining the device to use."
            },
            {
                text: "2. At the same time, you may need to open the following permissions:"
            },
            {
                text: "(1) Album permission for reading and storing photos and videos"
            },
            {
                text: "(2) Cellular data access, which is used to connect to the mobile network for downloading and using video materials and special effects"
            },
            {
                text: "(3) Business function 3: product internal purchase function"
            },
            {
                text: "When you purchase Blurrr's paid services (such as juice, VIP, etc.), we collect order information including IP address, unique device Identifier (IDFA), order number, transaction time, item type, item value, and local language."
            },
            {
                text: "(4) Business function four: customer service.When you file a complaint, consult or appeal to us, we may require you to provide your name, mobile phone number, email and other valid contact information in order to contact you or help you solve the problem. If you refuse to provide the above information, we may not be able to feedback the relevant processing results to you in a timely manner."
            },
            {
                text: "(5) Business Function five: security guarantee.The product breakdown and protect your account and transaction security, we will according to the safe operation of network in accordance with the need to collect and handle your variable device identifier (IDFA, MAC address), basic equipment information, basic information, operating system, hardware and software version information, equipment status, the collapse of the system language area in time, network status, log, use/click on the record, We will use your permission to store the information, and we will also use the aforementioned information to prevent all kinds of illegal use or infringement of legitimate rights and interests."
            },
            {
                text: "(6) Business function 6: receiving product, service, marketing or questionnaire information.To better inform you about Blurrr's products and related services, we may push our products, services, marketing information to your mobile phone or send you relevant surveys."
            },
            {
                text: "(7) The following are exceptions to obtaining authorization and consent from the subject of personal information:"
            },
            {
                text: "1. It is related to the performance of the obligations prescribed by laws and regulations by the personal information controller;"
            },
            {
                text: "2. Those directly related to national security and national defense security;"
            },
            {
                text: "3. Those directly related to public security, public health or major public interests;"
            },
            {
                text: "4. Those directly related to criminal investigation, prosecution, trial and execution of judgment;"
            },
            {
                text: "5. Having regard to safeguarding the life, property and other important legitimate rights of the subject of personal information or other individuals, but it is difficult to obtain authorization and consent of the subject;"
            },
            {
                text: "6. The personal information involved is disclosed to the public by the subject of personal information;"
            },
            {
                text: "7. Necessary for signing and performing the contract according to the requirements of the subject of personal information."
            },
            {
                text: "How do we use cookies and similar technologies"
            },
            {
                text: "(a) a Cookie"
            },
            {
                text: "To ensure the normal operation of the website, we store a small data file called Cookie on your computer or mobile device. Cookies typically contain identifiers, site names, and some numbers and characters. With cookies, websites can store data about your preferences."
            },
            {
                text: "We do not use cookies for any purpose other than those stated in this Policy. You can manage or delete cookies according to your preference. For details, see AboutCookies.org.You can clear all cookies saved on your computer. Most web browsers have Cookie blocking functions. You can clear all cookies saved on your computer through browser Settings."
            },
            {
                text: "(2) Website beacons and pixel labels"
            },
            {
                text: "In addition to cookies, we also use other similar technologies like web beacons and pixel tags on our websites. For example, we may send you an email containing a click URL that links to content on our website. If you click on this link, we will track this click to help us understand your product or service preferences and improve customer service. A web beacon is usually a transparent image embedded in a web site or email. With the help of the pixel labels in the E-mail, we can tell whether the E-mail is open or not. If you do not wish your activities to be tracked in this way, you can always unsubscribe from our mailing list."
            },
            {
                text: "Iii. How do we share, transfer and publicly disclose your personal Information"
            },
            {
                text: "(1) Sharing"
            },
            {
                text: "We will not share your personal information with any company, organization or individual other than Chengdu Pinguo Technology Co., LTD., except for the following circumstances:"
            },
            {
                text: "1. Sharing with express Consent: After obtaining your express consent, we will share your personal information with other parties."
            },
            {
                text: "2. We may share your personal information according to laws and regulations, litigation disputes, or mandatory requirements of competent government departments or judicial authorities."
            },
            {
                text: "3. Within the scope required or permitted by law, it is necessary to provide your personal information to a third party in order to protect the interests, property or safety of Pingguo and its users or the public from damage."
            },
            {
                text: "4. Sharing with our Affiliated Companies: Your personal information may be shared with affiliated companies of Chengdu Pinguo Technology Co., LTD. We will only share necessary personal information and are bound by the purposes stated in this Privacy Policy. If the affiliated company wants to change the purpose of processing personal information, it will seek your authorization and consent again."
            },
            {
                text: "Our affiliated companies include: Beijing Pinguo Technology Co., LTD., Chengdu Prism Technology Co., LTD."
            },
            {
                text: "5. Sharing with Authorized Partners: Some of our services will be provided by authorized partners only for the purposes stated in this Policy. We may share some of your personal information with our partners to ensure the completion of the services provided to you and to provide you with better customer service and user experience. We will only share your personal information for lawful, legitimate, necessary, specific and explicit purposes and will only share such personal information as is necessary to provide the services. Our partners do not have the right to use the shared personal information for any other purpose."
            },
            {
                text: "Currently, our licensing partners include the following two types:"
            },
            {
                text: "1) Advertising partners. They mainly help us to statistics and evaluate the display effect of advertising and product data analysis, so that we can optimize the service for you to get a better experience. The personal information we will provide to these partners may include IP address, device information (device model, operating system, unique device identifier, network access mode, type and status, language and timely area)."
            },
            {
                text: "2) When you register or log in with your mobile phone number, we need to share your mobile phone number with [Blue SMS Push Platform] (provided by Shanghai Blue Cloud Information Technology Co., LTD.) to provide [SMS push] service to you. Blue will send you the SMS verification code. When you receive the SMS verification code, we will automatically read your short message and synchronize the verification code to our registration or login interface. You can directly click the verification code to complete the filling. We will not read your other messages."
            },
            {
                text: "3) Technical support partners. In order to complete the corresponding functions, we will access the SDK of a third party to obtain technical support, such as helping us to understand the product user distribution and data analysis statistically. We may provide the following personal information to such partners.Blurrr may choose to use some of these partners or change partners from time to time, and the list of partners may be adjusted."
            },
            {
                text: "<div class='table'><table><tbody><tr><td>Third-party SDK Name</td><td>Name of third Party Company</td><td>Usage Scenario description</td><td>Type of personal information to share</td><td>Privacy policy</td></tr><tr><td>Fabric</td><td>Fabric</td><td>Used for crash log collection</td><td>Unique device identification code and geographic location information</td><td><a href='https://www.fabfile.org/'>Fabric</a></td></tr><tr><td>GrowingIO</td><td>Beijing Yishu Technology Co.,LTD</td><td>Used for data statistics and analysis</td><td>Software usage and click history,unique device identifier,geolocation information,application installation column</td><td><a href='https://docs.growingio.com/v3/developer-manual/sdkintegrated/compliance/'>GrowingIO</a></td></tr><tr><td>Bugly</td><td>Shenzhen Tencent Computer department</td><td>Used for crash log collection</td><td>Crash log,unique device identifier</td><td><a href='https://privacy.qq.com/document/preview/fc748b3d96224fdb825ea79e132c1a56'>Bugly</a></td></tr><tr><td>Firebase</td><td>Google</td><td>Used for data statistics and analysis</td><td>Records of software use and clicks,unique device identifiers,and geolocation information</td><td><a href='https://policies.google.cn/privacy'>Firebase</a></td></tr><tr><td>AppsFlyerFramework</td><td>AppsFlyer Ltd.</td><td>Used for data statistics and analysis</td><td>Software usage and click history,unique device identifier,geo-location information,list of applications installed</td><td><a href='https://www.appsflyer.com/legal/privacy-policy/'>AppFlyer</a></td></tr><tr><td>share SDK</td><td>Shenzhen Tencent Computer department</td><td>For users to independently share the shooting results on a third-party platform</td><td>Device MAC address and unique device identifier</td><td><a href='https://open.weibo.com/wiki/%E5%BC%80%E5%8F%91%E8%80%85%E5%8D%8F%E8%AE%AE'>Weibo</a><br/><a href='https://wikinew.open.qq.com/#/home'>QQ</a><br/><a href='https://open.weixin.qq.com/cgi-bin/frame?t=news/protocol_developer_tmpl'>Wechat</a><br/></td></tr><tr><td>Share SDK</td><td>FaceBook</td><td>For users to independently share the shooting results on a third-party platform</td><td>Device MAC address and unique device identifier</td><td><a href='https://www.facebook.com/about/privacy'>Facebook</a></td></tr></tbody></table></div>"
            },
            {
                text: "(2) Transfer"
            },
            {
                text: "We will not transfer your personal information to any company, organization or individual except for the following circumstances:"
            },
            {
                text: "1. Transfer with express consent: After obtaining your express consent, we will transfer your personal information to other parties;"
            },
            {
                text: "2. In the case of merger, acquisition or bankruptcy liquidation, if the transfer of personal information is involved, we will require the new company or organization that holds your personal information to continue to be bound by this privacy policy; otherwise, we will require the company or organization to ask you for authorization again."
            },
            {
                text: "(3) Public disclosure"
            },
            {
                text: "We will only publicly disclose your personal information under the following circumstances:"
            },
            {
                text: "1. After obtaining your explicit consent;"
            },
            {
                text: "2. Disclosure based on law: We may publicly disclose your personal information when required by laws, legal procedures, lawsuits or government authorities."
            },
            {
                text: "(4) exceptions"
            },
            {
                text: "In accordance with relevant laws and regulations, we may collect, share, transfer or publicly disclose your personal information without your authorized consent under the following circumstances."
            },
            {
                text: "1. Those directly related to national security, national defense security and other national interests;"
            },
            {
                text: "2. Those directly related to major public interests such as public safety, public health and public information;"
            },
            {
                text: "(3) those directly related to criminal investigation, prosecution, trial and execution of judgment;"
            },
            {
                text: "4. For the protection of your life, property, reputation and other important legal rights and interests of you or other individuals, but it is difficult to obtain the consent of yourself;"
            },
            {
                text: "5. Necessary for signing and performing the contract as required by you;"
            },
            {
                text: "6. Necessary for maintaining the safe and stable operation of the provided products or services, such as finding and disposing of faults of the products or services;"
            },
            {
                text: "7. When it is necessary to carry out statistical or academic research for the public interest, and it provides the results of academic research or description to the public, it de-labels the personal information contained in the results;"
            },
            {
                text: "8. Personal information collected from legally publicly disclosed information, such as legal news reports, government information disclosure and other channels;"
            },
            {
                text: "9. Other circumstances stipulated by laws and regulations."
            },
            {
                text: "Iv. How do we protect your personal Information"
            },
            {
                text: "(I) We have used industry-standard security measures to protect the personal information you provide and prevent unauthorized access, public disclosure, use, modification, damage or loss of data. We will take all reasonably practicable steps to protect your personal information. For example, data (such as credit card information) exchanged between your browser and the Service is protected by SSL encryption; We provide HTTPS secure access to the supporting Web services provided by our products. We will use trusted protection mechanisms to protect our data from malicious attacks; We will deploy access control mechanisms to ensure that only authorized personnel have access to personal information;And we will conduct security and privacy protection training courses to enhance staff's awareness of the importance of protecting personal information."
            },
            {
                text: "(b) The Internet is not an entirely secure environment and we strongly recommend that you do not send personal information through email, im, and other communications with Blurrr users that are not encrypted. Please use a complex password to help us keep your account secure."
            },
            {
                text: "(c) The Internet environment is not 100% secure and we will do our best to ensure or guarantee the security of any information you send us."
            },
            {
                text: "(iv) After the unfortunate occurrence of personal information security incidents, we will, in accordance with the requirements of laws and regulations, timely inform you of the basic situation and possible impact of security incidents, the disposal measures we have taken or will take, you can independently prevent and reduce the risk of suggestions, remedial measures for you, etc. We will timely inform you of the information related to the event by email, phone, push notification, etc. If it is difficult to inform the subject of personal information one by one, we will take a reasonable and effective way to release the announcement. At the same time, we will also take the initiative to report the disposal of personal information security incidents in accordance with the requirements of regulatory authorities."
            },
            {
                text: "V. Your rights"
            },
            {
                text: "In accordance with relevant laws, regulations and standards of China, as well as common practices of other countries and regions, we guarantee that you can exercise the following rights to your personal information:"
            },
            {
                text: "(I) Access to your personal information"
            },
            {
                text: "You have the right to access your personal information except for the exceptions provided by laws and regulations. If you want to exercise data access, you can access the data yourself in the following ways:"
            },
            {
                text: "Personal Center -- If you wish to access or edit personal information in your account, add security information, or unregister your account, you can do so by visiting [Blurrr] - [Personal Center]."
            },
            {
                text: "(2) Delete your personal information"
            },
            {
                text: "1. Generally speaking, we will only store your personal information for the shortest time as required by laws and regulations or as necessary. If you need to exercise your right to delete, you can apply to us at any time, and we will delete your personal information within 15 days, except as otherwise stipulated by laws and regulations."
            },
            {
                text: "Under the following circumstances, you may request us to delete your personal information through the contact information provided in Article 10 of this Policy:"
            },
            {
                text: "(1) If we deal with personal information in violation of laws and regulations;"
            },
            {
                text: "(2) If our processing of personal information violates our agreement with you;"
            },
            {
                text: "(3) Other circumstances stipulated by laws and regulations."
            },
            {
                text: "2. If we decide to respond to your deletion request, we will also notify the entities that have obtained your personal information from us to delete it in a timely manner, unless otherwise provided by laws and regulations, or these entities have obtained your independent authorization. When you delete information from our services, we may not delete the corresponding information from the backup system immediately, but will delete the information when the backup is updated."
            },
            {
                text: "(iii) Withdraw your authorization"
            },
            {
                text: "If you want to change the permissions (such as photo albums), you can do so on your hardware device. For iOS, you can change the permissions through the Settings - [Blurrr] path. For Android, you can change the permissions through the Settings - [Applications] - [Application Management] - [Blurrr] - [Permissions] path.You can also permanently revoke all entitlements by logging out of your account."
            },
            {
                text: "However, you understand and agree that the withdrawal of certain authorizations by you will result in the unavailability of product functions related thereto, that we cannot continue to provide you with certain functions and/or services corresponding to the withdrawal of consent or authorization, and that your decision to withdraw authorization will not affect the processing of personal information previously carried out based on your authorization."
            },
            {
                text: "(4) The personal information subject cancels the account"
            },
            {
                text: "You can cancel your previously registered account at any time. You can do this by yourself in the following ways:"
            },
            {
                text: "Unregister your account in [Blurrr] - [Home] - [Personal Center] - [Account Logout]."
            },
            {
                text: "After you cancel your account, we will stop providing products or services to you and delete your personal information within 15 days upon your request, except as otherwise provided by laws and regulations."
            },
            {
                text: "(5) The subject of personal information obtains a copy of personal information"
            },
            {
                text: "If you need copies of your personal information, you can through our 'privacy policy' at the end of the article provides the way to contact us, after the verification of your identity, we will provide you with you a copy of the personal information in our services, including basic information, account information), but it is otherwise provided for in laws and regulations or except otherwise agreed by the policy."
            },
            {
                text: "(6) Restrict the automatic decision-making of the information system"
            },
            {
                text: "In some business functions, we may only make decisions based on non-manual automatic decision mechanisms such as information systems, algorithms, etc. If these decisions significantly affect your legal rights and interests, you have the right to seek an explanation from us and we will provide appropriate remedies."
            },
            {
                text: "(vii) Respond to your above request"
            },
            {
                text: "1. For security purposes, you may need to provide a written request or otherwise prove your identity. We may ask you to verify your identity before processing your request. We will make a reply within 15 days."
            },
            {
                text: "2, for your reasonable request, we do not charge in principle, but for repeated requests, beyond the reasonable limit, we will charge a certain cost according to the situation. We may refuse requests that are unwarranted, require excessive technical means (for example, the development of new systems or fundamental changes in existing practices), pose a risk to the legal rights of others, or are highly impractical (for example, involving information stored on backup tapes)."
            },
            {
                text: "3. Under the following circumstances, in accordance with laws and regulations, we will not be able to respond to your request:"
            },
            {
                text: "(1) those directly related to national security and national defense security;"
            },
            {
                text: "(2) those directly related to public security, public health or major public interests;"
            },
            {
                text: "(3) those directly related to criminal investigation, prosecution, trial and execution of judgment;"
            },
            {
                text: "(4) it is related to the performance of the obligations prescribed by laws and regulations by the personal information controller;"
            },
            {
                text: "(5) There is sufficient evidence that you have subjective malice or abuse of rights;"
            },
            {
                text: "(6) Responding to your request will cause serious damage to the legitimate rights and interests of you or other individuals or organizations."
            },
            {
                text: "(7) Those involving commercial secrets."
            },
            {
                text: "Six, how do we deal with minors' personal information"
            },
            {
                text: "(I) Our products, websites and services are primarily aimed at adults. Minors are not allowed to create their own user accounts without the consent of a parent or guardian. If you are under the age of 14, please read this policy with your guardian before using our products and/or services, and ensure that you have obtained the explicit consent of your guardian before using our services and providing us with your personal information."
            },
            {
                text: "(II) In the case of collecting personal information of minors with parental consent, we will only use or publicly disclose such information to the extent permitted by law, expressly agreed by parents or guardians, or necessary for the protection of minors."
            },
            {
                text: "(III) If your guardian disagrees with your use of our services or provision of personal information to us in accordance with this Policy, please terminate your use of our services immediately and notify us in a timely manner."
            },
            {
                text: "Storage of personal information"
            },
            {
                text: "Storage Location: We will store the personal information collected within the Territory of the People's Republic of China in accordance with the provisions of laws and regulations."
            },
            {
                text: "Storage period: We promise to keep your personal information within the shortest and necessary period required by law or to realize product functions and services. For example, we will continue to store your account information before you withdraw, delete or cancel it. We will immediately delete or anonymize the personal information that exceeds the deadline, unless you exercise the right to delete, cancel your account or otherwise stipulated by law."
            },
            {
                text: "Viii. Governing law and jurisdiction"
            },
            {
                text: "This Privacy Policy is governed by the laws of the People's Republic of China. Disputes under this Privacy Policy shall be under the jurisdiction of the court where the defendant lives."
            },
            {
                text: "Ix. How to update this policy"
            },
            {
                text: "(I) Our Privacy Policy is subject to change or revision. We will not reduce your rights under this Privacy Policy without your express consent. We will post any changes to this policy on this page. For major changes, we will inform you in the form of popover and obtain your consent again."
            },
            {
                text: "(II) Major changes referred to in this Policy include but are not limited to:"
            },
            {
                text: "1. The purpose of processing personal information, the type of personal information processed and the way of using personal information change;"
            },
            {
                text: "2. Your rights to participate in personal information processing and the way to exercise them have changed significantly;"
            },
            {
                text: "3, personal information security impact assessment report indicates that there is a high risk."
            },
            {
                text: "How to contact us"
            },
            {
                text: "Our company is [TBPS INTERNATIONAL TECHNOLOGY PTE. LTD.] established in Singapore, registered address 22 SIN MING LANE #06-76 MIDVIEW CITY Singapore."
            },
            {
                text: "If you have any questions, comments, suggestions or appeals about this policy or service content, we provide a variety of feedback channels for you to get in touch with us:"
            },
            {
                text: "Mail complaint channel: in order to better protect your rights and interests, we set up scdgzx@vip.qq.com mailbox, you can contact us through the mailbox;"
            },
            {
                text: "Personal Information Protection Team: You can send an email to scdgzx@vip.qq.com or registered mail to 22 SIN MING LANE #06-76 MIDVIEW CITY Singapore, to: Blurrr Personal Information Protection Team."
            },
            {
                text: "We will feedback the processing result to you within 15 days after receiving your question. If you are not satisfied with our response, you can also seek a resolution by filing a civil suit in a court of competent jurisdiction where the defendant is located."
            }
        ]
    },
    {
        subTitle: "",
        content: [
            {
                text: ""
            },
            {
                text: ""
            },
            {
                text: ""
            },
            {
                text: ""
            },
            {
                text: ""
            },
        ]
    },
    {
        subTitle: "",
        content: [
            {
                text: ""
            },
            {
                text: ""
            },
            {
                text: ""
            },
            {
                text: ""
            },
            {
                text: ""
            },
        ]
    },
    {
        subTitle: "",
        content: [
            {
                text: ""
            },
            {
                text: ""
            },
            {
                text: ""
            },
            {
                text: ""
            },
            {
                text: ""
            },
        ]
    },
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
        createTemeplate(privacyDataCH)
        document.title = "隐私政策"
    break;
    case "zh-Hant":
        createTemeplate(privacyDataCH)
        document.title = "隐私政策"
    break;
    case "en":
        createTemeplate(privacyDataEN)
        document.title = "Privacy policy"
    break;
    default:
        createTemeplate(privacyDataEN)
        document.title = "Privacy policy"
    break;
}

//  创建模板
function createTemeplate(template) {
    for (let i = 0; i < template.length; i++) {
        const templateItem = template[i]
        $(".content-lists-box").append(
            `
                <div class="content-list-box">
                <div class="sub-title">${templateItem.subTitle}</div>
                    <div class="content-text-box"></div>
                </div>
            `
        )
        for (let j = 0; j < templateItem.content.length; j++) {
            const textItem = templateItem.content[j]
            $(".content-text-box").eq(i).append(
                `
                    <div class="content-text">${textItem.text}</div>
                `
            )
        }
    }
}