var express = require("express")
var router = express.Router();

var desc = "华晨宇，1990年2月7日生于湖北十堰 ，中国男歌手，毕业于武汉音乐学院。2013年，参加湖南卫视《快乐男声》获年度总冠军出道。2014年1月，首登央视春晚舞台。同年4月，参加户外真人秀节目《花儿与少年》。9月6日-7日，在北京万事达中心连开两场“火星”演唱会，随后首张个人专辑《卡西莫多的礼物》发行，并凭此专辑获2015QQ音乐年度最佳内地男歌手及第十五届音乐风云榜年度最受欢迎男歌手等奖项."

router.get('/', function (req, res) {
    res.render('index.html', {
        name: '华晨宇',
        desc: desc
    })
})

router.get('/layout', function (req, res) {
    res.render('layout.html', {
        name: '华晨宇',
        desc: desc
    })
})


router.get('/login', function (req, res) {
    res.render('login.html')
})
router.get('/register', function (req, res) {
    res.render('register.html')
})

module.exports = router