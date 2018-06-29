import request from 'superagent'
import jsonp from 'superagent-jsonp'

const state = {
    skip: 0,
    novel: [],
    reality: [],
    travel: [],
    tb: [],
    test:[],
    bookTags: [
        {
            title: '不可饶恕的女人们',
            href: 'https://m.douban.com/doulist/35573',
            color: '#42BD56'
        },
        {
            title: '爱欲书',
            href: 'https://m.douban.com/doulist/38088147',
            color: '#FF4055'
        },
        {
            title: '他们还写侦探小说',
            href: 'https://m.douban.com/doulist/645579',
            color: '#4F9DED'
        },
        {
            line: true
        },
        {
            title: '人生识字始忧患',
            href: 'https://m.douban.com/doulist/192653',
            color: '#CC3344'
        },
        {
            title: '詩歌書店',
            href: 'https://m.douban.com/doulist/89925',
            color: '#FFAC2D'
        },
        {
            title: '尝试理解人类变化无常不可测心理相关小荐',
            href: 'https://m.douban.com/doulist/45361809',
            color: '#3BA94D'
        }
    ]
}

const mutations = {
    getBook (state, payload) {
        switch (payload.tag) {
            case 'novel':
                state.novel = payload.res
                break
            case 'reality':
                state.reality = payload.res
                break
            case 'travel':
                state.travel = payload.res
                break
            case 'tb':
                state.tb = payload.res
                break
            default:
                state.novel = payload.res
        }
    }
}




const actions = {
    /**
     * Getting books
     * q: 虚构类, 非虚构类, 旅行
     * count: 8
     */

    getBook ({ commit }) {

        request
            .get('https://s.taobao.com/api?_ksTS=1529894121230_224&ajax=true&m=customized&sourceId=tb.index&_input_charset=utf-8&bcoffset=-1&commend=all&suggest=history_1&source=suggest&search_type=item&ssid=s5-e&suggest_query=&spm=a21bo.2017.201856-taobao-item.2&q=%E8%A1%AC%E8%A1%AB%E7%94%B7&count=5')
            .use(jsonp)
            .end((err, res) => {
                if (!err) {
                //console.log(res.body['API.CustomizedApi'].itemlist);
                var arr = [];
                for(var t in res.body['API.CustomizedApi'].itemlist){
                    arr.push((res.body['API.CustomizedApi'].itemlist)[t]);
                }
                var arr2 = [];
                for (var i in arr){

                    arr2.push(arr[i]);
                }

                    var arr3 = [];
                    for (var h in arr2[0]){

                        arr3.push(arr[0][h]);
                    }

                console.log(arr3);


                    commit({
                        type: 'getBook',
                        tag: 'tb',
                        res: arr3
                    })
                }
            })

        request
            .get('https://api.douban.com/v2/book/search?q=虚构类&count=20')
            .use(jsonp)
            .end((err, res) => {
                if (!err) {

                    commit({
                        type: 'getBook',
                        tag: 'novel',
                        res: res.body.books
                    })
                }
            })

        request
            .get('http://www.testyii.com/index.php/reception/vue/jogin')
            .use(jsonp)
            .end((err, res) => {
                if (!err) {
                    //console.log(res);
                    commit({
                        type: 'getBook',
                        tag: 'test',
                        res: res.body
                    })
                }
            })

        request
            .get('http://www.testyii.com/index.php/reception/vue/login')
            .end((err, res) => {
                    //console.log(res);
            })
        request
            .get('https://api.douban.com/v2/book/search?q=非虚构类&count=8')
            .use(jsonp)
            .end((err, res) => {
                if (!err) {
                    //console.log(res);
                    commit({
                        type: 'getBook',
                        tag: 'reality',
                        res: res.body.books
                    })
                }
            })
        request
            .get('https://api.douban.com/v2/book/search?q=旅行&count=8')
            .use(jsonp)
            .end((err, res) => {
                if (!err) {
                   // console.log(res);
                    commit({
                        type: 'getBook',
                        tag: 'travel',
                        res: res.body.books
                    })
                }
            })
    }
}

export default {
    state,
    mutations,
    actions
}
