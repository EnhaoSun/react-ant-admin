(this["webpackJsonpreact-ant-admin"]=this["webpackJsonpreact-ant-admin"]||[]).push([[7],{102:function(e,t,n){"use strict";n.d(t,"a",(function(){return r})),n.d(t,"d",(function(){return a})),n.d(t,"e",(function(){return c})),n.d(t,"b",(function(){return i})),n.d(t,"f",(function(){return u})),n.d(t,"c",(function(){return o}));var r="ADDOPENTMENU",a="SET_OPENKEY",c="SET_SELECTKEY",i="FILTER_OPENKEY",u="SET_USERMENU",o="SETCURRENTPATH"},118:function(e,t,n){"use strict";n.d(t,"b",(function(){return r})),n.d(t,"c",(function(){return a})),n.d(t,"d",(function(){return c})),n.d(t,"a",(function(){return i}));var r="SINGLECOLUMN",a="TWO_COLUMN",c="TWO_FLANKS",i="FULLSCREEN"},171:function(e,t,n){"use strict";n(549);var r=n(147),a=n.n(r),c=(n(176),n(66)),i=n.n(c),u=n(529),o=n.n(u),s=n(38),d=n(40),A=n(530),f=n.n(A),l={200:"\u670d\u52a1\u5668\u6210\u529f\u8fd4\u56de\u8bf7\u6c42\u7684\u6570\u636e\u3002",201:"\u65b0\u5efa\u6216\u4fee\u6539\u6570\u636e\u6210\u529f\u3002",202:"\u4e00\u4e2a\u8bf7\u6c42\u5df2\u7ecf\u8fdb\u5165\u540e\u53f0\u6392\u961f\uff08\u5f02\u6b65\u4efb\u52a1\uff09\u3002",204:"\u5220\u9664\u6570\u636e\u6210\u529f\u3002",400:"\u53d1\u51fa\u7684\u8bf7\u6c42\u6709\u9519\u8bef\uff0c\u670d\u52a1\u5668\u6ca1\u6709\u8fdb\u884c\u65b0\u5efa\u6216\u4fee\u6539\u6570\u636e\u7684\u64cd\u4f5c\u3002",401:"\u7528\u6237\u6ca1\u6709\u6743\u9650\uff08\u4ee4\u724c\u3001\u7528\u6237\u540d\u3001\u5bc6\u7801\u9519\u8bef\uff09\u3002",403:"\u7528\u6237\u5f97\u5230\u6388\u6743\uff0c\u4f46\u662f\u8bbf\u95ee\u662f\u88ab\u7981\u6b62\u7684\u3002",404:"\u53d1\u51fa\u7684\u8bf7\u6c42\u9488\u5bf9\u7684\u662f\u4e0d\u5b58\u5728\u7684\u8bb0\u5f55\uff0c\u670d\u52a1\u5668\u6ca1\u6709\u8fdb\u884c\u64cd\u4f5c\u3002",406:"\u8bf7\u6c42\u7684\u683c\u5f0f\u4e0d\u53ef\u5f97\u3002",410:"\u8bf7\u6c42\u7684\u8d44\u6e90\u88ab\u6c38\u4e45\u5220\u9664\uff0c\u4e14\u4e0d\u4f1a\u518d\u5f97\u5230\u7684\u3002",422:"\u5f53\u521b\u5efa\u4e00\u4e2a\u5bf9\u8c61\u65f6\uff0c\u53d1\u751f\u4e00\u4e2a\u9a8c\u8bc1\u9519\u8bef\u3002",500:"\u670d\u52a1\u5668\u53d1\u751f\u9519\u8bef\uff0c\u8bf7\u68c0\u67e5\u670d\u52a1\u5668\u3002",502:"\u7f51\u5173\u9519\u8bef\u3002",503:"\u670d\u52a1\u4e0d\u53ef\u7528\uff0c\u670d\u52a1\u5668\u6682\u65f6\u8fc7\u8f7d\u6216\u7ef4\u62a4\u3002",504:"\u7f51\u5173\u8d85\u65f6\u3002"},O={baseURL:"https://z3web.cn/api/react-ant-admin",timeout:15e3,withCredentials:!1,maxRedirects:3,headers:{"Content-Type":" application/json;charset=UTF-8"}},b=o.a.create(O);b.interceptors.request.use((function(e){var t=Object(s.k)();return t&&(e.headers.authorization=t),e}),(function(e){return Promise.reject(e)})),b.interceptors.response.use((function(e){if(e.data){var t=e.data,n=t.msg;1===t.status&&i.a.error(n)}return e&&e.data}),(function(e){var t=e.response,n=e.message;if(t&&t.status){var r=l[t.status]||t.statusText,c=t.status,i=t.config;a.a.error({message:"\u8bf7\u6c42\u9519\u8bef ".concat(c,": ").concat(i.url),description:r}),401!==t.status&&403!==t.status||(Object(s.a)([d.e,d.d,d.c]),setTimeout((function(){window.location.reload()}),1e3))}else if(!t){var u="Network Error"===n?"\u7f51\u7edc\u9519\u8bef\uff0c\u8bf7\u68c0\u67e5\u5ba2\u6237\u7aef\u662f\u5426\u5b58\u5728\u7f51\u7edc\u6545\u969c\u6216\u670d\u52a1\u7aef\u65e0\u6cd5\u54cd\u5e94":"\u5ba2\u6237\u7aef\u51fa\u73b0\u9519\u8bef";Object(s.a)(["token"]),a.a.error({description:u,message:"\u72b6\u6001\u5f02\u5e38"})}return Promise.reject(e)}));var j=b.get;b.get=function(e,t){for(var n=f.a.stringify(t,{addQueryPrefix:!0}),r=arguments.length,a=new Array(r>2?r-2:0),c=2;c<r;c++)a[c-2]=arguments[c];return j.apply(void 0,[e+n].concat(a))},t.a=b},183:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var r,a=n(38),c=n(262);function i(){if(r)return r;var e=new Promise((function(e){var t=Object(a.g)();if(t)return e(t);Object(c.j)().then((function(t){t&&(Object(a.n)(t),e(t))})).catch((function(t){e([])}))}));return r=e,e.finally((function(){return r=null})),e}},252:function(e,t,n){"use strict";n.d(t,"b",(function(){return r})),n.d(t,"a",(function(){return a}));var r="SET_USERINFO",a="CLEAR_USERINFO"},257:function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var r=n(3),a=n(34),c=n(768),i=n(27),u=["type"],o=Object(c.a)({scriptUrl:"/react-ant-admin/iconfont.js"});function s(e){var t=e.type,n=Object(a.a)(e,u);return t?Object(i.jsx)(o,Object(r.a)({type:t},n)):null}},262:function(e,t,n){"use strict";n.d(t,"j",(function(){return M})),n.d(t,"s",(function(){return L})),n.d(t,"a",(function(){return V})),n.d(t,"b",(function(){return H})),n.d(t,"m",(function(){return Z})),n.d(t,"n",(function(){return J})),n.d(t,"e",(function(){return Y})),n.d(t,"k",(function(){return W})),n.d(t,"f",(function(){return q})),n.d(t,"r",(function(){return X})),n.d(t,"q",(function(){return z})),n.d(t,"p",(function(){return G})),n.d(t,"d",(function(){return $})),n.d(t,"o",(function(){return ee})),n.d(t,"h",(function(){return te})),n.d(t,"g",(function(){return ne})),n.d(t,"c",(function(){return re})),n.d(t,"l",(function(){return F})),n.d(t,"i",(function(){return ae})),n.d(t,"t",(function(){return ce}));var r,a,c,i,u,o,s,d,A,f,l,O,b,j,p,m,y,g,E=n(171),h=n(3),k=(n(176),n(66)),v=n.n(k),P=n(2),_=n(527),T=n.n(_),K=n(38),R={},w=[{user_id:1,username:"\u5f20\u540c\u5b66",account:"admin",type_id:"\u8d85\u7ea7\u7ba1\u7406\u5458",t_id:1},{user_id:2,username:"\u738b\u4e94",account:"user",type_id:"\u7528\u6237",t_id:2},{user_id:4,username:"\u674e\u56db",account:"qq123456",type_id:"\u6e38\u5ba2",t_id:3},{user_id:5,username:"\u8def\u8fc7\u7684\u8001\u9f20",account:"jake",type_id:"\u4f4e\u6743\u6e38\u5ba2",t_id:4},{user_id:6,username:"\u7ad9\u957f",account:"superAdmin",type_id:"\u8d85\u7ea7\u7ba1\u7406\u5458",t_id:1}],B=[(r={menu_id:9},Object(P.a)(r,"title","\u5217\u8868\u9875"),Object(P.a)(r,"path","/list"),Object(P.a)(r,"key","list"),Object(P.a)(r,"parentKey",""),Object(P.a)(r,"icon","icon_list"),Object(P.a)(r,"keepAlive","false"),Object(P.a)(r,"order",1),r),(a={menu_id:10},Object(P.a)(a,"title","\u5361\u7247\u5217\u8868"),Object(P.a)(a,"path","/card"),Object(P.a)(a,"key","listCard"),Object(P.a)(a,"parentKey","list"),Object(P.a)(a,"icon",""),Object(P.a)(a,"keepAlive","false"),Object(P.a)(a,"order",5485),a),(c={menu_id:11},Object(P.a)(c,"title","\u67e5\u8be2\u5217\u8868"),Object(P.a)(c,"path","/search"),Object(P.a)(c,"key","listSearch"),Object(P.a)(c,"parentKey","list"),Object(P.a)(c,"icon",""),Object(P.a)(c,"keepAlive","false"),Object(P.a)(c,"order",9588),c),(i={menu_id:7},Object(P.a)(i,"title","\u8868\u5355\u9875"),Object(P.a)(i,"path","/form"),Object(P.a)(i,"key","from"),Object(P.a)(i,"parentKey",""),Object(P.a)(i,"icon","icon_form"),Object(P.a)(i,"keepAlive","false"),Object(P.a)(i,"order",3),i),(u={menu_id:6},Object(P.a)(u,"title","\u57fa\u7840\u8868\u5355"),Object(P.a)(u,"path","/index"),Object(P.a)(u,"key","formIndex"),Object(P.a)(u,"parentKey","from"),Object(P.a)(u,"icon",""),Object(P.a)(u,"keepAlive","false"),Object(P.a)(u,"order",9654),u),(o={menu_id:1},Object(P.a)(o,"title","\u8be6\u60c5\u9875"),Object(P.a)(o,"path","/details"),Object(P.a)(o,"key","details"),Object(P.a)(o,"parentKey",""),Object(P.a)(o,"icon","icon_edit"),Object(P.a)(o,"keepAlive","false"),Object(P.a)(o,"order",3),o),(s={menu_id:2},Object(P.a)(s,"title","\u4e2a\u4eba\u4e2d\u5fc3"),Object(P.a)(s,"path","/person"),Object(P.a)(s,"key","detailsPerson"),Object(P.a)(s,"parentKey","details"),Object(P.a)(s,"icon","icon_infopersonal"),Object(P.a)(s,"keepAlive","false"),Object(P.a)(s,"order",9998),s),(d={menu_id:16},Object(P.a)(d,"title","\u7ed3\u679c\u9875"),Object(P.a)(d,"path","/result"),Object(P.a)(d,"key","result"),Object(P.a)(d,"parentKey",""),Object(P.a)(d,"icon","icon_voiceprint"),Object(P.a)(d,"keepAlive","false"),Object(P.a)(d,"order",4),d),(A={menu_id:3},Object(P.a)(A,"title","403"),Object(P.a)(A,"path","/403"),Object(P.a)(A,"key","error403"),Object(P.a)(A,"parentKey","result"),Object(P.a)(A,"icon","icon_locking"),Object(P.a)(A,"keepAlive","false"),Object(P.a)(A,"order",0),A),(f={menu_id:4},Object(P.a)(f,"title","404"),Object(P.a)(f,"path","/404"),Object(P.a)(f,"key","error404"),Object(P.a)(f,"parentKey","result"),Object(P.a)(f,"icon","icon_close"),Object(P.a)(f,"keepAlive","false"),Object(P.a)(f,"order",1),f),(l={menu_id:5},Object(P.a)(l,"title","500"),Object(P.a)(l,"path","/500"),Object(P.a)(l,"key","error500"),Object(P.a)(l,"parentKey","result"),Object(P.a)(l,"icon","icon_privacy_closed"),Object(P.a)(l,"keepAlive","false"),Object(P.a)(l,"order",4568),l),(O={menu_id:17},Object(P.a)(O,"title","\u7edf\u8ba1"),Object(P.a)(O,"path","/statistics"),Object(P.a)(O,"key","statistics"),Object(P.a)(O,"parentKey",""),Object(P.a)(O,"icon","icon_MTR"),Object(P.a)(O,"keepAlive","true"),Object(P.a)(O,"order",5),O),(b={menu_id:18},Object(P.a)(b,"title","\u8bbf\u5ba2\u7edf\u8ba1"),Object(P.a)(b,"path","/visitor"),Object(P.a)(b,"key","visitor"),Object(P.a)(b,"parentKey","statistics"),Object(P.a)(b,"icon","icon_addresslist"),Object(P.a)(b,"keepAlive","true"),Object(P.a)(b,"order",1),b),(j={menu_id:12},Object(P.a)(j,"title","\u6743\u9650\u7ba1\u7406"),Object(P.a)(j,"path","/power"),Object(P.a)(j,"key","power"),Object(P.a)(j,"parentKey",""),Object(P.a)(j,"icon","icon_set"),Object(P.a)(j,"keepAlive","false"),Object(P.a)(j,"order",9),j),(p={menu_id:14},Object(P.a)(p,"title","\u6743\u9650\u7c7b\u522b"),Object(P.a)(p,"path","/type"),Object(P.a)(p,"key","powerType"),Object(P.a)(p,"parentKey","power"),Object(P.a)(p,"icon","icon_safety"),Object(P.a)(p,"keepAlive","true"),Object(P.a)(p,"order",12),p),(m={menu_id:13},Object(P.a)(m,"title","\u83dc\u5355\u7ba1\u7406"),Object(P.a)(m,"path","/menu"),Object(P.a)(m,"key","powerMenu"),Object(P.a)(m,"parentKey","power"),Object(P.a)(m,"icon","icon_menu"),Object(P.a)(m,"keepAlive","true"),Object(P.a)(m,"order",1475),m),(y={menu_id:15},Object(P.a)(y,"title","\u7528\u6237\u7ba1\u7406"),Object(P.a)(y,"path","/user"),Object(P.a)(y,"key","powerUser"),Object(P.a)(y,"parentKey","power"),Object(P.a)(y,"icon","icon_infopersonal"),Object(P.a)(y,"keepAlive","true"),Object(P.a)(y,"order",1593),y),(g={menu_id:8},Object(P.a)(g,"title","\u56fe\u6807\u5e93"),Object(P.a)(g,"path","/icons"),Object(P.a)(g,"key","icons"),Object(P.a)(g,"parentKey",""),Object(P.a)(g,"icon","icon_pen"),Object(P.a)(g,"keepAlive","true"),Object(P.a)(g,"order",10),g)],Q=[{type_id:1,name:"\u8d85\u7ea7\u7ba1\u7406\u5458",menu_id:"2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,1"},{type_id:2,name:"\u7528\u6237",menu_id:"1,9,10,11,2,7,6,17,18,16,3,4,5,8"},{type_id:3,name:"\u6e38\u5ba2",menu_id:"9,1,10,11,2,7,6,17,18,12"},{type_id:4,name:"\u4f4e\u6743\u6e38\u5ba2",menu_id:"9,10"}],x={status:0,data:Q,mapKey:[{title:"\u6743\u9650id",dataIndex:"type_id",key:"type_id"},{title:"\u6743\u9650\u7b80\u79f0",dataIndex:"name",key:"name"},{title:"\u663e\u793a\u83dc\u5355\u5217\u8868id",dataIndex:"menu_id",key:"menu_id"}],menu:Object(K.b)(B)},C={msg:"\u767b\u5f55\u6210\u529f",status:0,data:null},I=[{m_id:1,name:"\u7b2c\u4e00\u6761\u6d88\u606f",description:"\u6211\u521b\u5efa\u7684\u7b2c\u4e00\u5929\u6d88\u606f",creator:"\u8d85\u7ea7\u7ba1\u7406\u5458",add_time:"2021-04-20 17:01:09"},{m_id:2,name:"RegExp",description:"RegExp \u5bf9\u8c61\u8868\u793a\u6b63\u5219\u8868\u8fbe\u5f0f,\u5b83\u662f\u5bf9\u5b57\u7b26\u4e32\u6267\u884c\u6a21\u5f0f\u5339\u914d\u7684\u5f3a\u5927\u5de5\u5177\u3002 ",creator:"\u8d85\u7ea7\u7ba1\u7406\u5458",add_time:"2021-04-20 17:48:42"},{m_id:3,name:"Ant Design",description:"antd \u662f\u57fa\u4e8e Ant Design \u8bbe\u8ba1\u4f53\u7cfb\u7684 React UI \u7ec4\u4ef6\u5e93\uff0c\u4e3b\u8981\u7528\u4e8e\u7814\u53d1\u4f01\u4e1a\u7ea7\u4e2d\u540e\u53f0\u4ea7\u54c1\u3002",creator:"\u8d85\u7ea7\u7ba1\u7406\u5458",add_time:"2021-04-20 17:46:44"},{m_id:4,name:"react-ant-admin",description:"\u6b64\u6846\u67b6\u4f7f\u7528\u4e0e\u4e8c\u6b21\u5f00\u53d1\uff0c\u524d\u7aef\u6846\u67b6\u4f7f\u7528react\uff0cUI\u6846\u67b6\u4f7f\u7528ant-design\uff0c\u5168\u5c40\u6570\u636e\u72b6\u6001\u7ba1\u7406\u4f7f\u7528redux\uff0cajax\u4f7f\u7528\u5e93\u4e3aaxios\u3002\u7528\u4e8e\u5feb\u901f\u642d\u5efa\u4e2d\u540e\u53f0\u9875\u9762\u3002",creator:"\u8d85\u7ea7\u7ba1\u7406\u5458",add_time:"2021-04-20 17:28:45"}],S={status:0,data:{mapKey:[{title:"\u6d88\u606fid",dataIndex:"m_id",key:"m_id"},{title:"\u6d88\u606f\u540d\u79f0",dataIndex:"name",key:"name"},{title:"\u6d88\u606f\u63cf\u8ff0\u8bcd",dataIndex:"description",key:"description"},{title:"\u521b\u5efa\u4eba",dataIndex:"creator",key:"creator"},{title:"\u521b\u5efa\u65f6\u95f4",dataIndex:"add_time",key:"add_time"}],list:I,total:4},msg:""},U={"/getmenu":B,"/getpower":x,"/login":C,"/addmenu":{msg:"\u6dfb\u52a0\u6210\u529f,\u83dc\u5355\u680f\u9700\u8981\u5173\u95ed\u9875\u9762\u91cd\u65b0\u6253\u5f00\u5373\u53ef\u751f\u6548\uff01",status:0},"/addmessage":{msg:"\u6dfb\u52a0\u6210\u529f",status:0},"/getmessage":S,"/delmenu":{msg:"\u64cd\u4f5c\u6210\u529f",status:0},"/getmenuinfo":{status:0},"/editmenuinfo":{status:0,msg:"\u4fee\u6539\u6210\u529f\uff01"},"/getvisitordata":{status:1,msg:"\u6682\u65e0"}};var N={get:function(e){return new Promise((function(t,n){setTimeout((function(){if("/getmenu"!==e)t(U[e]);else{var n=R.t_id;if(n){var r,a=null===(r=Q.find((function(e){return e.type_id===n})))||void 0===r?void 0:r.menu_id;a=a?a.split(",").map(Number):[];var c=B.filter((function(e){return a.includes(e.menu_id)}));console.log(c),U[e]=c}t(U[e])}}),500)})).then((function(e){return e||(v.a.error("\u63a5\u53e3\u6682\u672a\u914d\u7f6e"),Promise.reject("\u63a5\u53e3\u6682\u672a\u914d\u7f6e"))}))},post:function(e,t){return new Promise((function(n,r){setTimeout((function(){switch(e){case"/login":var r=w.find((function(e){return e.account===t.account}));return r?(U[e].data=r,R=r,n(U[e])):void v.a.error("\u672a\u627e\u5230\u8d26\u53f7");case"/addmenu":return B.push(Object(h.a)(Object(h.a)({},t),{},{menu_id:Math.random()})),n(U[e]);case"/addmessage":return I.push(Object(h.a)(Object(h.a)({},t),{},{m_id:Math.random(),creator:C.data.username,add_time:T()().format("YYYY-MM-DD HH:mm:ss")})),S.data.total=I.length,n(U[e]);case"/delmenu":var a=B.filter((function(e){return e.key!==t.key}));return B=a.filter((function(e){return e.parentKey!==t.key})),n(U[e]);case"/getmenuinfo":return U[e].data=B.find((function(e){return e.key===t.key})),n(U[e]);case"/editmenuinfo":return B=B.map((function(e){return e.key===t.key?Object(h.a)(Object(h.a)({},e),t):e})),n(U[e]);case"/getmessage":var c=[].concat(I);return t.name&&(c=c.filter((function(e){return e.name.includes(t.name)}))),t.description&&(c=c.filter((function(e){return e.description.includes(t.description)}))),U[e].data.list=c,S.data.total=c.length,n(U[e]);default:n({status:1,msg:"\u6682\u65e0"})}}),100)})).then((function(e){return 0===e.status?e:(v.a.error("\u63a5\u53e3\u6682\u672a\u914d\u7f6e"),Promise.reject("\u63a5\u53e3\u6682\u672a\u914d\u7f6e"))}))}},D="1"===Object({NODE_ENV:"production",PUBLIC_URL:"/react-ant-admin",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,varColors:[{title:"\u4fa7\u8fb9\u680f\u9009\u4e2d\u80cc\u666f\u8272",key:"@layout-aside-activeBg",value:"#e6f7ff"},{title:"\u6d4b\u8bd5\u989c\u8272",key:"@test",value:"red"}],showColorSet:!0,REACT_APP_API_BASEURL:"https://z3web.cn/api/react-ant-admin",REACT_APP_ROUTERBASE:"/",REACT_APP_ROUTER_ISHASH:"1"}).REACT_APP_MOCK?N:E.a,M=function(){return D.get("/getmenu")},F=function(){return D.get("/getmenulist")},L=function(e){return D.post("/login",e)},V=function(e){return D.post("/addmenu",e)},H=function(e){return D.post("/addmessage",e)},Z=function(e){return D.get("/getmessage",e)},J=function(){return D.get("/getpower")},Y=function(e){return D.post("/delmenu",e)},W=function(e){return D.get("/getmenuinfo",e)},q=function(e){return D.post("/editmenuinfo",e)},X=function(e){return D.get("/getiplist",e)},z=function(){return D.get("/getvisitordata")},G=function(e){return D.get("/getuserlist",e)},$=function(e){return D.post("/adduserinfo",e)},ee=function(e){return D.get("/getuserinfo",e)},te=function(e){return D.post("/edituserinfo",e)},ne=function(e){return D.post("/edittype",e)},re=function(e){return D.post("/addtype",e)},ae=function(e){return D.post("/getfeedback",e)},ce=function(e){return D.post("/reply",e)}},38:function(e,t,n){"use strict";n.d(t,"b",(function(){return y})),n.d(t,"d",(function(){return f})),n.d(t,"j",(function(){return O})),n.d(t,"p",(function(){return b})),n.d(t,"h",(function(){return j})),n.d(t,"i",(function(){return p})),n.d(t,"l",(function(){return m})),n.d(t,"g",(function(){return g})),n.d(t,"n",(function(){return E})),n.d(t,"o",(function(){return h})),n.d(t,"k",(function(){return k})),n.d(t,"e",(function(){return v})),n.d(t,"r",(function(){return _})),n.d(t,"m",(function(){return T})),n.d(t,"t",(function(){return K})),n.d(t,"f",(function(){return R})),n.d(t,"s",(function(){return w})),n.d(t,"a",(function(){return B})),n.d(t,"c",(function(){return Q})),n.d(t,"q",(function(){return x}));var r=n(39),a=n(2),c=n(3),i=n(34),u=n(119),o=n(10),s=n(74),d=n(183),A=n(40);function f(){return l.apply(this,arguments)}function l(){return(l=Object(s.a)(Object(r.a)().mark((function e(){var t,n,a;return Object(r.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=[],n=[],a=[],e.next=3,Object(d.a)();case 3:return e.sent.some((function(e){var r=e.children;return!(!r||!r.length)&&(t=[e.key],n=[r[0].key],a=[r[0]],!0)})),e.abrupt("return",{openKeys:t,selectKey:n,openedMenu:a});case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function O(){return v(!1,A.e)}function b(e){_(!0,A.e,e),_(!1,A.e,e)}function j(){return v(!0,A.e)}function p(e,t){var n=[],r=e.find((function(e){return e.key===t})),a=r?r.parentKey:r;if(a){var c=p(e,a);n.push.apply(n,Object(o.a)(c)),n.push(String(a))}return n}function m(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",n=[];return e.forEach((function(e){var r="children",a=e[r],c=Object(i.a)(e,[r].map(u.a));if(c.parentPath=t,a){var s=m(a,t+e.path);n.push.apply(n,Object(o.a)(s))}n.push(c)})),n}function y(e){var t=e.map((function(e){return Object(c.a)({},e)})),n={},r=[];return t.forEach((function(e){var t=e.key,c=e.parentKey;n[t]?(e.children=n[t].children,n[t]=e):n[t]=e,c?n[c]?n[c]&&!n[c].children?n[c].children=[e]:n[c].children.push(e):n[c]=Object(a.a)({},"children",[e]):r.push(e)})),r}function g(){return v(!1,A.c)}function E(e){_(!1,A.c,e)}function h(e){_(!0,A.d,e)}function k(){return v(!0,A.d)}function v(e,t){return JSON.parse(P(e).getItem(t)||"null")}function P(e){return e?window.localStorage:window.sessionStorage}function _(e,t,n){P(e).setItem(t,JSON.stringify(n||null))}function T(e,t){P(e).removeItem(t)}function K(e){e.stopPropagation()}function R(){return v(!0,A.b)}function w(e){_(!0,A.b,e)}function B(e){e.forEach((function(e){T(!0,e),T(!1,e)}))}function Q(){return v(!0,A.a)}function x(e){return _(!0,A.a,e)}},40:function(e,t,n){"use strict";n.d(t,"e",(function(){return r})),n.d(t,"d",(function(){return a})),n.d(t,"c",(function(){return c})),n.d(t,"a",(function(){return i})),n.d(t,"b",(function(){return u}));var r="USER_INFO",a="REACT_ADMIN_TOKEN",c="MENU",i="COMPONENTS_VISIBEL",u="LAYOUT_MODE"},752:function(e,t){},758:function(e,t,n){},766:function(e,t,n){"use strict";n.r(t);n(184),n(195),n(196),n(197),n(198),n(199),n(200),n(201),n(202),n(203),n(204),n(205),n(206),n(207),n(208),n(294),n(296),n(297),n(298),n(299),n(300),n(302),n(212),n(305),n(306),n(112),n(310),n(311),n(313),n(314),n(315),n(316),n(317),n(318),n(321),n(322),n(323),n(324),n(325),n(328),n(329),n(330),n(331),n(332),n(220),n(221),n(334),n(336),n(337),n(338),n(339),n(340),n(341),n(342),n(343),n(344),n(345),n(346),n(347),n(348),n(349),n(350),n(224),n(351),n(352),n(354),n(355),n(356),n(357),n(358),n(359),n(360),n(361),n(363),n(365),n(366),n(368),n(369),n(370),n(371),n(372),n(374),n(375),n(376),n(377),n(378),n(379),n(380),n(382),n(383),n(384),n(385),n(386),n(387),n(388),n(389),n(390),n(162),n(391),n(392),n(393),n(394),n(400),n(401),n(402),n(403),n(404),n(405),n(407),n(408),n(409),n(410),n(411),n(412),n(413),n(414),n(415),n(231),n(419),n(421),n(232),n(422),n(423),n(424),n(425),n(141),n(426),n(427),n(430),n(431),n(432),n(433),n(434),n(435),n(436),n(437),n(438),n(440),n(442),n(443),n(444),n(445),n(446),n(447),n(448),n(449),n(450),n(451),n(452),n(453),n(454),n(455),n(459),n(460),n(461),n(462),n(463),n(464),n(465),n(466),n(467),n(468),n(469),n(470),n(471),n(472),n(473),n(474),n(475),n(476),n(477),n(478),n(479),n(480),n(481),n(482),n(483),n(484),n(485),n(486),n(487),n(488),n(489),n(490),n(491),n(492),n(494);var r=n(0),a=n(56),c=n.n(a),i=n(90),u=n(250),o=n(3),s=n(10),d=n(102),A={openedMenu:[],openMenuKey:[],selectMenuKey:[],menuList:[],currentPath:""};var f=n(252),l=n(38),O=Object(l.j)()||null;var b=n(118),j=Object(l.f)()||b.c;var p=n(2),m=Object(l.c)()||{footer:!0,topMenu:!0};var y=Object(u.c)({menu:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:A,t=arguments.length>1?arguments[1]:void 0,n=t.key,r=t.type,a=t.menuItem,c=t.keys,i=t.list,u=t.path;switch(r){case d.a:if(!e.openedMenu.find((function(e){return e.path===a.path}))){var f=Object(s.a)(e.openedMenu);return f.push(a),Object(o.a)(Object(o.a)({},e),{},{openedMenu:f})}return e;case d.d:var l=e.openMenuKey,O=c.every((function(e,t){return e===l[t]})),b=c.length===l.length&&O;return b?e:Object(o.a)(Object(o.a)({},e),{},{openMenuKey:c});case d.e:return e.selectMenuKey[0]===c[0]?e:Object(o.a)(Object(o.a)({},e),{},{selectMenuKey:c});case d.b:var j=e.openedMenu.filter((function(e){return!n.includes(e.path)}));return e.openedMenu.length===j.length?e:Object(o.a)(Object(o.a)({},e),{},{openedMenu:j});case d.f:return Object(o.a)(Object(o.a)({},e),{},{menuList:i});case d.c:return Object(o.a)(Object(o.a)({},e),{},{currentPath:u});default:return e}},user:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:O,t=arguments.length>1?arguments[1]:void 0,n=t.type,r=t.info;switch(n){case f.b:return r;case f.a:return null;default:return e}},layout:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:j,t=arguments.length>1?arguments[1]:void 0,n=t.type,r=t.mode;return"change"===n?e=r:e},componentsVisible:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:m,t=arguments.length>1?arguments[1]:void 0,n=t.type,r=t.key,a=t.val;return"set"===n?Object(o.a)(Object(o.a)({},e),{},Object(p.a)({},r,a)):e}}),g=Object(u.e)(y,!1),E=n(240),h=(n(540),n(266)),k=n.n(h),v=(n(532),n(253)),P=n.n(v),_=(n(538),n(180)),T=n.n(_),K=(n(534),n(145)),R=n.n(K),w=(n(176),n(66)),B=n.n(w),Q=n(12),x=n(257),C=(n(758),n(772)),I=n(773),S=n(27),U=[{img:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAA0JCgsKCA0LCgsODg0PEyAVExISEyccHhcgLikxMC4pLSwzOko+MzZGNywtQFdBRkxOUlNSMj5aYVpQYEpRUk//2wBDAQ4ODhMREyYVFSZPNS01T09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0//wAARCAAoADIDASIAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwDpaK1/Ji/55p+VHkxf880/KuT6s+53fWl2MiitfyYv+eaflR5MX/PNPyo+rPuH1pdjIorX8mL/AJ5p+VHkxf8APNPyo+rPuH1pdjIorX8mL/nmn5UUfVn3D60uw+iiiuw4AooooAKKKKACiiigAooooAKKKKACiiigAooooA//2Q==",mode:b.b,alt:"\u5355\u5217\u5e03\u5c40"},{img:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAA0JCgsKCA0LCgsODg0PEyAVExISEyccHhcgLikxMC4pLSwzOko+MzZGNywtQFdBRkxOUlNSMj5aYVpQYEpRUk//2wBDAQ4ODhMREyYVFSZPNS01T09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0//wAARCAAoADIDASIAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwDpaK4X7fe/8/lx/wB/G/xrsvBzNc6TK9wWlcTkbnO4gbV4yfqaipl06ceZs1pZnCpLlSLFFa/kxf8APNPyo8mL/nmn5Vz/AFZ9zp+tLsZFFa/kxf8APNPyo8mL/nmn5UfVn3D60uxkUVr+TF/zzT8qKPqz7h9aXY8mrufA/wDyB5v+vg/+grXDV3Pgf/kDzf8AXwf/AEFa97FfAfNYP+IdHRRRXmnrBRRRQAUUUUAeR13Pgf8A5A83/Xwf/QVoor0sV8B5OD/iHR0UUV5p6wUUUUAFFFFAH//Z",mode:b.c,alt:"\u4e24\u5217\u5e03\u5c40"},{img:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAA0JCgsKCA0LCgsODg0PEyAVExISEyccHhcgLikxMC4pLSwzOko+MzZGNywtQFdBRkxOUlNSMj5aYVpQYEpRUk//2wBDAQ4ODhMREyYVFSZPNS01T09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0//wAARCAAoADIDASIAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwDErqPDH/IOk/67H/0EVy1dv4KRG0iYsisftB6j/ZWvQx8OelY8zLp8la5aorX8mL/nnH+VHkxf884/yrxPqr7n0H1tdjIorX8mL/nnH+VHkxf884/yo+qvuH1tdjIorX8mL/nnH+VFH1V9w+trseT13Pgn/kDzf9fB/wDQVrhq7nwT/wAgeb/r4P8A6Cte/ivgPmsH/EOiooorzD1wooooAKKKKAPJK7nwT/yB5v8Ar4P/AKCtFFenivgPIwf8Q6KiiivMPXCiiigAooooA//Z",mode:b.d,alt:"\u4e24\u4fa7\u5e03\u5c40"}],N=[{l:"\u663e\u793a",v:!0},{l:"\u9690\u85cf",v:!1}];function D(){var e=Object(r.useState)(!1),t=Object(Q.a)(e,2),n=t[0],a=t[1],c=Object(C.b)(),i=Object(I.b)(),u=Object(I.a)().stateChangeLayout,o=Object(C.a)().stateSetVisible,s=Object(r.useCallback)((function(){return a(!0)}),[]),d=Object(r.useCallback)((function(){return a(!1)}),[]),A=Object(r.useMemo)((function(){return function(e){return function(t){var n=t.target.value;o(e,n)}}}),[o]),f=Object(r.useCallback)((function(){Object(l.s)(i),Object(l.q)(c),B.a.success("\u5e03\u5c40\u4fdd\u5b58\u672c\u5730\u6210\u529f\uff01")}),[i,c]),O=Object(r.useCallback)((function(e){u(e),B.a.success("\u5e03\u5c40\u8bbe\u7f6e\u6210\u529f\uff01")}),[u]);return Object(S.jsxs)("div",{className:"layoutset-container",children:[Object(S.jsx)(x.a,{type:"icon_setting",onClick:s}),Object(S.jsxs)(k.a,{className:"layoutset-drawer",title:"\u8bbe\u7f6e\u5e03\u5c40",placement:"right",closable:!1,onClose:d,width:300,open:n,children:[Object(S.jsx)("h2",{className:"title",children:"\u9009\u62e9\u5e03\u5c40"}),Object(S.jsx)(R.a,{justify:"space-around",children:U.map((function(e){return Object(S.jsx)("div",{onClick:function(){return O(e.mode)},className:e.mode===i?"col active":"col",children:Object(S.jsx)("img",{src:e.img,alt:e.alt})},e.mode)}))}),Object(S.jsx)("h2",{className:"title",children:"\u7ec4\u4ef6\u663e\u793a"}),Object.keys(c).map((function(e){return Object(S.jsxs)(R.a,{className:"visibel-list",children:["footer"===e?"\u5e95\u90e8\uff1a":"\u9876\u90e8\u5207\u6362\u5bfc\u822a\uff1a",Object(S.jsx)(T.a.Group,{onChange:A(e),value:c[e],children:N.map((function(e){return Object(S.jsx)(T.a,{value:e.v,children:e.l},e.l)}))})]},e)})),Object(S.jsx)(R.a,{className:"save",justify:"center",children:Object(S.jsx)(P.a,{type:"primary",onClick:f,children:"\u4fdd\u5b58\u6b64\u5e03\u5c40"})})]})]})}var M=Object(E.a)((function(){return Promise.all([n.e(5),n.e(10),n.e(19)]).then(n.bind(null,1559))}));function F(){var e=Object(E.a)((function(){return Promise.all([n.e(5),n.e(11),n.e(22)]).then(n.bind(null,1567))}));return Object(S.jsx)(e,{})}var L=function(){return Object(S.jsxs)(i.a,{store:g,children:[Object(S.jsx)(M,{}),Object(S.jsx)(F,{}),Object(S.jsx)(D,{})]})};n(616),n(664);c.a.render(Object(S.jsx)(L,{}),document.getElementById("root"))},772:function(e,t,n){"use strict";n.d(t,"b",(function(){return i})),n.d(t,"a",(function(){return u}));var r=n(0),a=n(90),c=function(e){return e.componentsVisible},i=function(){return Object(a.d)(c)};function u(){var e=Object(a.c)();return{stateSetVisible:Object(r.useCallback)((function(t,n){return e(function(e,t){return{type:"set",key:e,val:t}}(t,n))}),[e])}}},773:function(e,t,n){"use strict";n.d(t,"b",(function(){return i})),n.d(t,"a",(function(){return u}));var r=n(0),a=n(90),c=function(e){return e.layout},i=function(){return Object(a.d)(c)};function u(){var e=Object(a.c)();return{stateChangeLayout:Object(r.useCallback)((function(t){return e(function(e){return{type:"change",mode:e}}(t))}),[e])}}}},[[766,8,9]]]);