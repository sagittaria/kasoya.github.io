(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-19f2"],{"2P+N":function(t,e,n){"use strict";var i=n("DyKT");n.n(i).a},"3UD+":function(t,e){t.exports=function(t){if(!t.webpackPolyfill){var e=Object.create(t);e.children||(e.children=[]),Object.defineProperty(e,"loaded",{enumerable:!0,get:function(){return e.l}}),Object.defineProperty(e,"id",{enumerable:!0,get:function(){return e.i}}),Object.defineProperty(e,"exports",{enumerable:!0}),e.webpackPolyfill=1}return e}},"7/cP":function(t,e,n){},DyKT:function(t,e,n){},KieM:function(t,e,n){"use strict";(function(t){var e=n("EJiy"),i=n.n(e);!function(e,n){"object"===i()(t)&&"object"===i()(t.exports)?t.exports=e.document?n(e,!0):function(t){if(!t.document)throw new Error("Geetest requires a window with a document");return n(t)}:n(e)}("undefined"!=typeof window?window:void 0,function(t,e){if(void 0===t)throw new Error("Geetest requires browser environment");var n=t.document,o=t.Math,a=n.getElementsByTagName("head")[0];function s(t){this._obj=t}function r(t){var e=this;new s(t)._each(function(t,n){e[t]=n})}s.prototype={_each:function(t){var e=this._obj;for(var n in e)e.hasOwnProperty(n)&&t(n,e[n]);return this}},r.prototype={api_server:"api.geetest.com",protocol:"http://",type_path:"/gettype.php",fallback_config:{slide:{static_servers:["static.geetest.com","dn-staticdown.qbox.me"],type:"slide",slide:"/static/js/geetest.0.0.0.js"},fullpage:{static_servers:["static.geetest.com","dn-staticdown.qbox.me"],type:"fullpage",fullpage:"/static/js/fullpage.0.0.0.js"}},_get_fallback_config:function(){return c(this.type)?this.fallback_config[this.type]:this.new_captcha?this.fallback_config.fullpage:this.fallback_config.slide},_extend:function(t){var e=this;new s(t)._each(function(t,n){e[t]=n})}};var c=function(t){return"string"==typeof t},l=function(t){return"function"==typeof t},u={},p={},d=function(t,e,n,i){e=function(t){return t.replace(/^https?:\/\/|\/$/g,"")}(e);var o=function(t){return 0!==(t=t.replace(/\/+/g,"/")).indexOf("/")&&(t="/"+t),t}(n)+function(t){if(!t)return"";var e="?";return new s(t)._each(function(t,n){(c(n)||function(t){return"number"==typeof t}(n)||function(t){return"boolean"==typeof t}(n))&&(e=e+encodeURIComponent(t)+"="+encodeURIComponent(n)+"&")}),"?"===e&&(e=""),e.replace(/&$/,"")}(i);return e&&(o=t+e+o),o},f=function(t,e,i,o,s){!function r(c){!function(t,e){var i=n.createElement("script");i.charset="UTF-8",i.async=!0,i.onerror=function(){e(!0)};var o=!1;i.onload=i.onreadystatechange=function(){o||i.readyState&&"loaded"!==i.readyState&&"complete"!==i.readyState||(o=!0,setTimeout(function(){e(!1)},0))},i.src=t,a.appendChild(i)}(d(t,e[c],i,o),function(t){t?c>=e.length-1?s(!0):r(c+1):s(!1)})}(0)},g=function(e,n,a,s){if(function(t){return"object"===(void 0===t?"undefined":i()(t))&&null!==t}(a.getLib))return a._extend(a.getLib),void s(a);if(a.offline)s(a._get_fallback_config());else{var r="geetest_"+(parseInt(1e4*o.random())+(new Date).valueOf());t[r]=function(e){"success"===e.status?s(e.data):e.status?s(a._get_fallback_config()):s(e),t[r]=void 0;try{delete t[r]}catch(t){}},f(a.protocol,e,n,{gt:a.gt,callback:r},function(t){t&&s(a._get_fallback_config())})}},h=function(t,e){var n={networkError:"网络错误"};if("function"!=typeof e.onError)throw new Error(n[t]);e.onError(n[t])};t.Geetest&&(p.slide="loaded");var v=function(e,n){var i=new r(e);e.https?i.protocol="https://":e.protocol||(i.protocol=t.location.protocol+"//"),g([i.api_server||i.apiserver],i.type_path,i,function(e){var o=e.type,a=function(){i._extend(e),n(new t.Geetest(i))};u[o]=u[o]||[];var s=p[o]||"init";"init"===s?(p[o]="loading",u[o].push(a),f(i.protocol,e.static_servers||e.domains,e[o]||e.path,null,function(t){if(t)p[o]="fail",h("networkError",i);else{p[o]="loaded";for(var e=u[o],n=0,a=e.length;n<a;n+=1){var s=e[n];l(s)&&s()}u[o]=[]}})):"loaded"===s?a():"fail"===s?h("networkError",i):"loading"===s&&u[o].push(a)})};return t.initGeetest=v,v})}).call(this,n("3UD+")(t))},V27w:function(t,e,n){"use strict";var i=n("7/cP");n.n(i).a},c11S:function(t,e,n){"use strict";var i=n("gTgX");n.n(i).a},gTgX:function(t,e,n){},ntYl:function(t,e,n){"use strict";n.r(e);n("KieM");var i=n("ETGp"),o={name:"SocialSignin",methods:{wechatHandleClick:function(t){alert("ok")},tencentHandleClick:function(t){alert("ok")}}},a=(n("V27w"),n("KHd+")),s=Object(a.a)(o,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"social-signup-container"},[n("div",{staticClass:"sign-btn",on:{click:function(e){t.wechatHandleClick("wechat")}}},[n("span",{staticClass:"wx-svg-container"},[n("svg-icon",{staticClass:"icon",attrs:{"icon-class":"wechat"}})],1),t._v(" 微信\n  ")]),t._v(" "),n("div",{staticClass:"sign-btn",on:{click:function(e){t.tencentHandleClick("tencent")}}},[n("span",{staticClass:"qq-svg-container"},[n("svg-icon",{staticClass:"icon",attrs:{"icon-class":"qq"}})],1),t._v(" QQ\n  ")])])},[],!1,null,"20f71181",null);s.options.__file="socialsignin.vue";var r=s.exports,c=n("t3Un");var l={name:"Login",components:{LangSelect:i.a,SocialSign:r},data:function(){return{loginForm:{username:"admin",password:"1111111"},loginRules:{username:[{required:!0,trigger:"blur",validator:function(t,e,n){n()}}],password:[{required:!0,trigger:"blur",validator:function(t,e,n){e.length<6?n(new Error("The password can not be less than 6 digits")):n()}}]},passwordType:"password",loading:!1,showDialog:!1,redirect:void 0,captchaObj:null}},watch:{$route:{handler:function(t){this.redirect=t.query&&t.query.redirect},immediate:!0}},created:function(){},mounted:function(){this.initCaptcha()},destroyed:function(){},methods:{initCaptcha:function(){var t=this;Object(c.a)({url:"/stack/operator/getCaptcha?t="+(new Date).getTime(),method:"get"}).then(function(e){initGeetest({gt:e.data.gt,challenge:e.data.challenge,offline:!e.data.success,new_captcha:!0,width:"100%"},function(e){e.appendTo("#captcha-wrapper"),e.onReady(function(){document.querySelector("#captcha-is-loading").style.display="none"}),t.captchaObj=e})})},showPwd:function(){"password"===this.passwordType?this.passwordType="":this.passwordType="password"},handleLogin:function(){var t=this,e=this.captchaObj.getValidate();if(!e)return this.$message.warning("请完成验证");this.loginForm.geetest_challenge=e.geetest_challenge,this.loginForm.geetest_validate=e.geetest_validate,this.loginForm.geetest_seccode=e.geetest_seccode,this.$refs.loginForm.validate(function(e){if(!e)return console.log("error submit!!"),!1;t.loading=!0,t.$store.dispatch("LoginByUsername",t.loginForm).then(function(){t.loading=!1,t.$router.push({path:t.redirect||"/"})}).catch(function(){t.captchaObj.reset(),t.loading=!1})})},afterQRScan:function(){}}},u=(n("c11S"),n("2P+N"),Object(a.a)(l,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"login-container"},[n("el-form",{ref:"loginForm",staticClass:"login-form",attrs:{model:t.loginForm,rules:t.loginRules,"auto-complete":"on","label-position":"left"}},[n("div",{staticClass:"title-container"},[n("h3",{staticClass:"title"},[t._v(t._s(t.$t("login.title")))]),t._v(" "),n("lang-select",{staticClass:"set-language"})],1),t._v(" "),n("el-form-item",{attrs:{prop:"username"}},[n("span",{staticClass:"svg-container"},[n("svg-icon",{attrs:{"icon-class":"user"}})],1),t._v(" "),n("el-input",{attrs:{placeholder:t.$t("login.username"),name:"username",type:"text","auto-complete":"on"},model:{value:t.loginForm.username,callback:function(e){t.$set(t.loginForm,"username",e)},expression:"loginForm.username"}})],1),t._v(" "),n("el-form-item",{attrs:{prop:"password"}},[n("span",{staticClass:"svg-container"},[n("svg-icon",{attrs:{"icon-class":"password"}})],1),t._v(" "),n("el-input",{attrs:{type:t.passwordType,placeholder:t.$t("login.password"),name:"password","auto-complete":"on"},nativeOn:{keyup:function(e){return"button"in e||!t._k(e.keyCode,"enter",13,e.key,"Enter")?t.handleLogin(e):null}},model:{value:t.loginForm.password,callback:function(e){t.$set(t.loginForm,"password",e)},expression:"loginForm.password"}}),t._v(" "),n("span",{staticClass:"show-pwd",on:{click:t.showPwd}},[n("svg-icon",{attrs:{"icon-class":"eye"}})],1)],1),t._v(" "),n("el-form-item",[n("div",{attrs:{id:"captcha-wrapper"}},[n("div",{staticStyle:{"padding-left":"15px"},attrs:{id:"captcha-is-loading"}},[t._v("Loading please wait...")])])]),t._v(" "),n("el-button",{staticStyle:{width:"100%","margin-bottom":"30px"},attrs:{loading:t.loading,type:"primary"},nativeOn:{click:function(e){return e.preventDefault(),t.handleLogin(e)}}},[t._v(t._s(t.$t("login.logIn")))]),t._v(" "),n("div",{staticClass:"tips"},[n("span",[t._v(t._s(t.$t("login.username"))+" : admin")]),t._v(" "),n("span",[t._v(t._s(t.$t("login.password"))+" : "+t._s(t.$t("login.any")))])]),t._v(" "),n("div",{staticClass:"tips"},[n("span",{staticStyle:{"margin-right":"18px"}},[t._v(t._s(t.$t("login.username"))+" : editor")]),t._v(" "),n("span",[t._v(t._s(t.$t("login.password"))+" : "+t._s(t.$t("login.any")))])]),t._v(" "),n("el-button",{staticClass:"thirdparty-button",attrs:{type:"primary"},on:{click:function(e){t.showDialog=!0}}},[t._v(t._s(t.$t("login.thirdparty")))])],1),t._v(" "),n("el-dialog",{attrs:{title:t.$t("login.thirdparty"),visible:t.showDialog,"append-to-body":""},on:{"update:visible":function(e){t.showDialog=e}}},[t._v("\n    "+t._s(t.$t("login.thirdpartyTips"))+"\n    "),n("br"),t._v(" "),n("br"),t._v(" "),n("br"),t._v(" "),n("social-sign")],1)],1)},[],!1,null,"00be4e43",null));u.options.__file="index.vue";e.default=u.exports}}]);