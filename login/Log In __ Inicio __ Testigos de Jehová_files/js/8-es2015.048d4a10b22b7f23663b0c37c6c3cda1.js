(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{GtYj:function(e,t,r){"use strict";r.r(t),r.d(t,"PublicModule",function(){return E});var a=r("ofXK"),s=r("tyNb"),n=r("3Pt+"),i=r("l7P3"),o=r("9jGm"),c=r("sYmb"),m=r("gnMq"),u=r("HJNQ");class l{constructor(){this.type="[App] Get Stored Username"}}class p{constructor(e){this.username=e,this.type="[App] Get Stored Username Success"}}class g{constructor(e){this.username=e,this.type="[App] Set Stored Username"}}class d{constructor(e,t){this.username=e,this.queryParams=t,this.type="[App] Redirect Legacy Login"}}class b{constructor(e){this.queryParams=e,this.type="[App] Redirect Create Account"}}class h{constructor(e){this.queryParams=e,this.type="[App] Redirect Forgot Username"}}class f{constructor(e,t){this.username=e,this.queryParams=t,this.type="[App] Redirect Login"}}const v={};function y(e=v,t){switch(t.type){case"[App] Get Stored Username Success":return Object.assign(Object.assign({},e),{storedUsername:t.username});default:return e}}var w=r("lJxs"),_=r("vkgz"),N=r("zp1y"),W=r("AytR"),X=r("vgGo"),U=r("CyHt"),L=r("YZbJ");const O=Object(i.p)("public"),M=Object(i.r)(O,e=>e.storedUsername),j=Object(i.r)(M,L.d,(e,t)=>{let r=null;return null!=t&&(r=t.login_hint),r||e});var S=r("fXoL"),I=r("Q35M");let C=(()=>{class e{constructor(e,t,r,a,s,n){this.actions$=e,this.window=t,this.store=r,this.translate=a,this.languageService=s,this.locationStrategy=n,this.getUserNameFromLocalStorage$=Object(o.d)(()=>this.actions$.pipe(Object(o.e)("[App] Get Stored Username"),Object(w.a)(()=>{const e=this.window.getStorageValue("storedUsername");return new p(e)}))),this.setUserNameToLocalStorage$=Object(o.d)(()=>this.actions$.pipe(Object(o.e)("[App] Set Stored Username"),Object(_.a)(e=>{e.username?this.window.setStorageValue("storedUsername",e.username):this.window.removeStorageValue("storedUsername")})),{dispatch:!1}),this.redirectLegacyLogin$=Object(o.d)(()=>this.actions$.pipe(Object(o.e)("[App] Redirect Legacy Login"),Object(N.a)(this.store.pipe(Object(i.v)(X.c))),Object(_.a)(([e,t])=>{const r=null!=e.queryParams&&e.queryParams.app||"my.jw.org",a=Object.assign(Object.assign({},e.queryParams),{app:r,login_hint:e.username,langCode:this.getCurrentMepsLanguageCode()}),s=U.a.serialize(a,"?");this.window.navigate(`${t}LOGIN1${s}`)})),{dispatch:!1}),this.redirectCreateAccount$=Object(o.d)(()=>this.actions$.pipe(Object(o.e)("[App] Redirect Create Account"),Object(N.a)(this.store.pipe(Object(i.v)(X.c))),Object(_.a)(([e,t])=>{const r=U.a.serialize(e.queryParams,"?"),a=this.getCurrentMepsLanguageCode();this.window.navigate(`${t}${a}_USERSIGNUP1${r}`)})),{dispatch:!1}),this.redirectForgotUsername$=Object(o.d)(()=>this.actions$.pipe(Object(o.e)("[App] Redirect Forgot Username"),Object(N.a)(this.store.pipe(Object(i.v)(X.c))),Object(_.a)(([e,t])=>{const r=U.a.serialize(e.queryParams,"?"),a=this.getCurrentMepsLanguageCode();this.window.navigate(`${t}${a}_USERLOGINHELP1${r}`)})),{dispatch:!1}),this.redirectLogin$=Object(o.d)(()=>this.actions$.pipe(Object(o.e)("[App] Redirect Login"),Object(_.a)(e=>{const t=Object.assign(Object.assign({},e.queryParams),{login_hint:e.username,locale_code:this.getCurrentLocaleCode(),langCode:this.getCurrentMepsLanguageCode()}),r=U.a.serialize(t,"?");let a="";0!==W.a.apiBaseUrl.indexOf("http")&&(a=document.location.origin+this.locationStrategy.getBaseHref()),this.window.navigate(`${a}${W.a.apiBaseUrl}login${r}`)})),{dispatch:!1})}getCurrentLocaleCode(){const e=this.languageService.getLanguageData(this.translate.currentLanguage);return e&&e.symbol?e.symbol:"en"}getCurrentMepsLanguageCode(){const e=this.languageService.getLanguageData(this.translate.currentLanguage);return e&&e.langcode?e.langcode:"E"}}return e.\u0275fac=function(t){return new(t||e)(S.bc(o.a),S.bc(I.g),S.bc(i.i),S.bc(m.W),S.bc(m.u),S.bc(a.k))},e.\u0275prov=S.Nb({token:e,factory:e.\u0275fac}),e})(),A=(()=>{class e{constructor(e){this.store=e}canActivate(e,t){return this.store.dispatch(new l),!0}}return e.\u0275fac=function(t){return new(t||e)(S.bc(i.i))},e.\u0275prov=S.Nb({token:e,factory:e.\u0275fac,providedIn:"root"}),e})(),q=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=S.Lb({type:e,selectors:[["app-apps-logo"]],decls:7,vars:0,consts:[["xmlns","http://www.w3.org/2000/svg","viewBox","0 0 67 50",1,"apps-logo"],["id","logo-block","d","M0 0h50v50H0z",1,"apps-logo__theme"],["id","logo-label","d","M14.19 25.67a4.2 4.2 0 0 0 3.58-1.5 6.36 6.36 0 0 0 1.15-4V8.29H16.7v11.93a4.25 4.25 0 0 1-.7 2.54 2.27 2.27 0 0 1-2 .94 4.09 4.09 0 0 1-1.74-.38 7.87 7.87 0 0 1-1.62-1l-.95 1.75a9 9 0 0 0 1.91 1.15 6.2 6.2 0 0 0 2.54.46M25 25.5h1.9l4.06-12.87 3.63 12.87h1.93l4.19-17.21h-2.29s-2.73 12.42-2.91 13.07L31.9 8.94H30l-3.79 12.42-2.76-13.07h-2.39zM19.75 33.13a5.79 5.79 0 0 0-1-1.88A4.68 4.68 0 0 0 17.12 30a4.75 4.75 0 0 0-2-.43A4.84 4.84 0 0 0 13 30a4.62 4.62 0 0 0-1.6 1.21 5.44 5.44 0 0 0-1 1.9 7.71 7.71 0 0 0-.4 2.51 8.68 8.68 0 0 0 .33 2.47 5.66 5.66 0 0 0 1 1.91 4.54 4.54 0 0 0 1.59 1.25 4.93 4.93 0 0 0 2.16.45 4.8 4.8 0 0 0 2.11-.45A4.63 4.63 0 0 0 18.76 40a5.89 5.89 0 0 0 1-1.93 8.4 8.4 0 0 0 .35-2.48 7.94 7.94 0 0 0-.36-2.46zm-1.22 4.51a5.17 5.17 0 0 1-.77 1.58 3.72 3.72 0 0 1-1.18 1 3.2 3.2 0 0 1-1.5.37 3.15 3.15 0 0 1-1.53-.38 3.72 3.72 0 0 1-1.2-1 5.16 5.16 0 0 1-.76-1.58 7.53 7.53 0 0 1 0-4 4.58 4.58 0 0 1 .76-1.55 3.65 3.65 0 0 1 1.19-1 3.29 3.29 0 0 1 3.07 0 3.55 3.55 0 0 1 1.18 1 5.21 5.21 0 0 1 .76 1.55 7.3 7.3 0 0 1 0 4zM27.19 36.42l.21-.05a4.13 4.13 0 0 0 1.05-.37 3 3 0 0 0 .85-.65 2.91 2.91 0 0 0 .57-.93 3.25 3.25 0 0 0 .21-1.2 3.32 3.32 0 0 0-.33-1.53 3 3 0 0 0-.87-1.05A3.93 3.93 0 0 0 27.6 30a5.54 5.54 0 0 0-1.53-.21h-3.84V41.5h1.25v-4.89h2.37l3.08 4.89h1.52zm-3.71-.89v-4.65H26a3 3 0 0 1 2 .62 2.13 2.13 0 0 1 .78 1.75 2 2 0 0 1-.78 1.69 3.41 3.41 0 0 1-2.11.59zM38.06 41.55a5.44 5.44 0 0 0 1-.32 4.34 4.34 0 0 0 .83-.45q.33-.24.6-.48v-5h-4v1.06h2.81v3.42a4.06 4.06 0 0 1-.9.55 3.33 3.33 0 0 1-1.42.29 3.53 3.53 0 0 1-1.58-.37 3.83 3.83 0 0 1-1.26-1 4.83 4.83 0 0 1-.83-1.56 6.62 6.62 0 0 1-.29-2 6.48 6.48 0 0 1 .29-2 5.31 5.31 0 0 1 .82-1.57 3.89 3.89 0 0 1 1.23-1 3.26 3.26 0 0 1 1.51-.36 3.63 3.63 0 0 1 1.66.36 7.38 7.38 0 0 1 1.17.77l.74-1a5.87 5.87 0 0 0-1.59-.89 5.55 5.55 0 0 0-2-.34 4.92 4.92 0 0 0-3.77 1.71A6.07 6.07 0 0 0 32 33.24a7.07 7.07 0 0 0-.39 2.38 7.86 7.86 0 0 0 .37 2.5A5.64 5.64 0 0 0 33 40a4.84 4.84 0 0 0 1.67 1.22 5.46 5.46 0 0 0 2.17.43 4.91 4.91 0 0 0 1.22-.1zM7.38 39.75h1.75v1.75H7.38z",1,"apps-logo__logo"],["id","logo-mark--mobile"],["d","M63.56 39.36a5.53 5.53 0 0 0-2.93-2.93 5.54 5.54 0 0 0-4.28 0 5.55 5.55 0 0 0-2.92 2.93 5.57 5.57 0 0 0 0 4.29 5.57 5.57 0 0 0 1.18 1.75 5.67 5.67 0 0 0 1.74 1.17 5.54 5.54 0 0 0 4.28 0 5.71 5.71 0 0 0 1.75-1.17 5.57 5.57 0 0 0 1.18-1.75 5.45 5.45 0 0 0 0-4.29zm-.71 4a4.85 4.85 0 0 1-2.52 2.52 4.72 4.72 0 0 1-1.84.37 4.67 4.67 0 0 1-1.83-.37 4.94 4.94 0 0 1-1.49-1 4.86 4.86 0 0 1-1-1.5 4.74 4.74 0 0 1 0-3.67 4.79 4.79 0 0 1 1-1.51 4.94 4.94 0 0 1 1.49-1 4.67 4.67 0 0 1 1.83-.37 4.72 4.72 0 0 1 1.84.37 4.86 4.86 0 0 1 1.5 1 4.79 4.79 0 0 1 1 1.51 4.74 4.74 0 0 1 0 3.67z",1,"apps-logo__trademark"],["d","M59.53 42.09a1.86 1.86 0 0 0 .82-.55 1.62 1.62 0 0 0 .35-1.09 1.54 1.54 0 0 0-.19-.79 1.64 1.64 0 0 0-.51-.56 2 2 0 0 0-.69-.32 3.18 3.18 0 0 0-.82-.11h-2.1v5.7h1.12v-2.11h.86l1.66 2.11h1.36zm-.3-1.09a1.47 1.47 0 0 1-.81.2h-.89v-1.5h.93a1.37 1.37 0 0 1 .77.19.64.64 0 0 1 .28.56.62.62 0 0 1-.28.55z",1,"apps-logo__trademark"]],template:function(e,t){1&e&&(S.gc(),S.Xb(0,"svg",0),S.Xb(1,"g"),S.Sb(2,"path",1),S.Sb(3,"path",2),S.Xb(4,"g",3),S.Sb(5,"path",4),S.Sb(6,"path",5),S.Wb(),S.Wb(),S.Wb())},encapsulation:2,changeDetection:0}),e})(),D=(()=>{class e{constructor(){}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=S.Lb({type:e,selectors:[["app-userdeleted-notification"]],decls:4,vars:3,consts:[["type","error",3,"typeLabel"],["ptrnTranslate","",1,"notification__text-block"]],template:function(e,t){1&e&&(S.Xb(0,"ptrn-notification",0),S.ic(1,"ptrnTranslate"),S.Xb(2,"p",1),S.Ic(3,"Home_HdgUserDeleted"),S.Wb(),S.Wb()),2&e&&S.oc("typeLabel",S.jc(1,1,"Home_TxtError"))},directives:[m.y,m.U],pipes:[m.V],encapsulation:2,changeDetection:0}),e})(),P=(()=>{class e{constructor(){}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=S.Lb({type:e,selectors:[["app-loggedout-notification"]],decls:3,vars:0,consts:[["typeLabel","'Ptrn_ImgAltTxtSuccess' | ptrnTranslate","type","success"],["ptrnTranslate","",1,"notification__text-block"]],template:function(e,t){1&e&&(S.Xb(0,"ptrn-notification",0),S.Xb(1,"p",1),S.Ic(2,"Home_HdgLoggedOut"),S.Wb(),S.Wb())},directives:[m.y,m.U],encapsulation:2,changeDetection:0}),e})(),H=(()=>{class e{constructor(){this.isSpacer=!1}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=S.Lb({type:e,selectors:[["app-private-device-only-message"]],inputs:{isSpacer:"isSpacer"},decls:5,vars:2,consts:[[1,"field-messages"],[1,"field-messages__message","margin-bottom-0"],["cssClass","text-break-word padding-bottom-0","type","note"]],template:function(e,t){1&e&&(S.Xb(0,"div",0),S.Xb(1,"div",1),S.Xb(2,"ptrn-message",2),S.Xb(3,"ptrn-translate"),S.Ic(4,"Home_TxtOnlySelectOnPrivateDevice"),S.Wb(),S.Wb(),S.Wb(),S.Wb()),2&e&&S.Jb("private-device-only-message-spacer",t.isSpacer)},directives:[m.x,m.U],encapsulation:2,changeDetection:0}),e})();const k=["userNameInput"];function x(e,t){1&e&&(S.Xb(0,"div",28),S.Sb(1,"app-userdeleted-notification"),S.Wb())}function T(e,t){1&e&&(S.Xb(0,"div",28),S.Sb(1,"app-loggedout-notification"),S.Wb())}function $(e,t){1&e&&S.Sb(0,"app-private-device-only-message")}function F(e,t){1&e&&S.Sb(0,"app-private-device-only-message",29),2&e&&S.oc("isSpacer",!0)}const R=function(e){return[e]};let z=(()=>{class e{constructor(e){this.fb=e,this.login=new S.n,this.createAccount=new S.n,this.forgotUsername=new S.n,this.isBusy=!1,this.userNameDomainValidator=e=>{let t=!1;const r=e.value;if(null==r)return null;const a=this.parseDomainName(r);return null!==a&&-1===this.federatedDomains.indexOf(a)&&(t=!0),t?{userNameDomainValidator:e.value}:null}}ngOnInit(){this.createForm()}ngAfterViewInit(){null!=this.userNameInput&&this.userNameInput.nativeElement.focus()}get domainName(){var e;return this.parseDomainName(null===(e=this.userNameForm.get("userName"))||void 0===e?void 0:e.value)}get rememberMeSelected(){var e;return null===(e=this.userNameForm.get("rememberMe"))||void 0===e?void 0:e.value}onLogin(){this.isBusy=!0;const e=this.userNameForm.get("userName");if(e)if(e.valid){const e=this.userNameForm.value;this.login.emit({userName:this.sanitizeUserName(e.userName),rememberMe:e.rememberMe})}else this.isBusy=!1}onCreateAccount(e){e.preventDefault(),this.createAccount.emit()}onUsernameKeyUp(e){"Enter"!==e.key&&"Shift"!==e.key&&this.userNameForm.get("userName")}onForgotUsername(e){e.preventDefault(),this.forgotUsername.emit()}sanitizeUserName(e){return e.replace(/[\s#,+"\\<>;]/g,"")}createForm(){this.userNameForm=this.fb.group({userName:[this.username,[n.x.required,this.userNameDomainValidator]],rememberMe:[null!=this.username&&this.username===this.storageUsername]})}parseDomainName(e){if(null==e||""===e.trim())return null;const t=e.indexOf("@")+1;return 0===t?null:e.slice(t).trim()}}return e.\u0275fac=function(t){return new(t||e)(S.Rb(n.f))},e.\u0275cmp=S.Lb({type:e,selectors:[["app-username-form"]],viewQuery:function(e,t){if(1&e&&S.Nc(k,1),2&e){let e;S.xc(e=S.fc())&&(t.userNameInput=e.first)}},inputs:{username:"username",storageUsername:"storageUsername",federatedDomains:"federatedDomains",showUserDeletedMessage:"showUserDeletedMessage",showLoggedOutMessage:"showLoggedOutMessage"},outputs:{login:"login",createAccount:"createAccount",forgotUsername:"forgotUsername"},decls:44,vars:12,consts:[[1,"page-content","grid","grid--full","grid--main-center","grid--cross-center","grid--no-bleed"],[1,"login-container"],["class","login-notification",4,"ngIf"],[1,"login-block","grid","grid--collapse","grid--nowrap@medium-up","card"],[1,"grid__item","grid__item--shrink","login-graphic","login-graphic--1"],[1,"login-form","grid__item"],[1,"padding-2"],[1,"grid","grid--cross-center"],[1,"grid__item","grid__item--shrink","padding-right-0","hide@small","hide@medium"],["ptrnTranslate","",1,"grid__item","login-header"],[1,"form","form--gutter","margin-top-1","container--small",3,"formGroup"],["for","userName","ptrnTranslate","",1,"field__label"],["spellcheck","false","formControlName","userName","type","email",1,"field__input","field__input--grow",3,"keyup"],["userNameInput",""],["name","required"],["name","userNameDomainValidator"],[3,"params"],[1,"field"],[1,"field__selection","margin-bottom-0"],["type","checkbox","formControlName","rememberMe","id","rememberMe","name","rememberMe",1,"field__checkbox"],["for","rememberMe","ptrnTranslate","",1,"field__checkbox-label"],[4,"ngIf"],["isPrimary","true",3,"isBusy","busyText","action"],[1,"grid","margin-top-1"],[1,"grid__item"],[1,"text-small"],["href","#","ptrnTranslate","",3,"click"],[3,"isSpacer",4,"ngIf"],[1,"login-notification"],[3,"isSpacer"]],template:function(e,t){1&e&&(S.Xb(0,"section",0),S.Xb(1,"div",1),S.Gc(2,x,2,0,"div",2),S.Gc(3,T,2,0,"div",2),S.Xb(4,"div",3),S.Sb(5,"div",4),S.Xb(6,"div",5),S.Xb(7,"article",6),S.Xb(8,"header",7),S.Xb(9,"div",8),S.Sb(10,"app-apps-logo"),S.Wb(),S.Xb(11,"h2",9),S.Ic(12,"Home_BtnLogIn"),S.Wb(),S.Wb(),S.Xb(13,"form",10),S.Xb(14,"ptrn-field"),S.Xb(15,"label",11),S.Ic(16,"Home_LblEnterUserName"),S.Wb(),S.Xb(17,"input",12,13),S.ec("keyup",function(e){return t.onUsernameKeyUp(e)}),S.Wb(),S.Xb(19,"ptrn-field-error",14),S.Xb(20,"ptrn-translate"),S.Ic(21,"Home_MsgRequired"),S.Wb(),S.Wb(),S.Xb(22,"ptrn-field-error",15),S.Xb(23,"ptrn-translate",16),S.Ic(24,"Home_MsgDomainNotSupportedName"),S.Wb(),S.Wb(),S.Wb(),S.Xb(25,"div",17),S.Xb(26,"div",18),S.Sb(27,"input",19),S.Xb(28,"label",20),S.Ic(29,"Home_LblRememberMe"),S.Wb(),S.Wb(),S.Gc(30,$,1,0,"app-private-device-only-message",21),S.Wb(),S.Xb(31,"ptrn-button",22),S.ec("action",function(){return t.onLogin()}),S.ic(32,"ptrnTranslate"),S.Xb(33,"ptrn-translate"),S.Ic(34,"Home_BtnNext"),S.Wb(),S.Wb(),S.Xb(35,"div",23),S.Xb(36,"div",24),S.Xb(37,"p",25),S.Xb(38,"a",26),S.ec("click",function(e){return t.onCreateAccount(e)}),S.Ic(39,"Home_LnkCreateNewAccount"),S.Wb(),S.Ic(40,"\xa0| "),S.Xb(41,"a",26),S.ec("click",function(e){return t.onForgotUsername(e)}),S.Ic(42,"Home_LnkForgotUserName"),S.Wb(),S.Wb(),S.Wb(),S.Wb(),S.Wb(),S.Gc(43,F,1,1,"app-private-device-only-message",27),S.Wb(),S.Wb(),S.Wb(),S.Wb(),S.Wb()),2&e&&(S.Cb(2),S.oc("ngIf",t.showUserDeletedMessage),S.Cb(1),S.oc("ngIf",t.showLoggedOutMessage),S.Cb(10),S.oc("formGroup",t.userNameForm),S.Cb(10),S.oc("params",S.tc(10,R,t.domainName)),S.Cb(7),S.oc("ngIf",t.rememberMeSelected),S.Cb(1),S.pc("busyText",S.jc(32,8,"Home_BtnNextBusy")),S.oc("isBusy",t.isBusy),S.Cb(12),S.oc("ngIf",!t.rememberMeSelected))},directives:[a.o,q,m.U,n.y,n.r,m.q,m.j,n.j,m.m,n.d,n.q,n.h,m.n,n.b,m.h,D,P,H],pipes:[m.V],encapsulation:2,changeDetection:0}),e})(),G=(()=>{class e{constructor(e,t,r){this.store=e,this.route=t,this.router=r,this.queryParams=this.route.snapshot.queryParams,this.showUserDeletedMessage="1"===this.route.snapshot.queryParamMap.get("ud"),this.showLoggedOutMessage="logout"===this.route.snapshot.queryParamMap.get("from"),this.federatedDomains$=this.store.pipe(Object(i.v)(X.d)),this.username$=this.store.pipe(Object(i.v)(j)),this.storageUsername$=this.store.pipe(Object(i.v)(M))}ngOnInit(){this.showUserDeletedMessage&&(this.showLoggedOutMessage=!1,this.router.navigate([],{relativeTo:this.route,queryParams:{from:null,ud:null},queryParamsHandling:"merge"})),this.showLoggedOutMessage&&this.router.navigate([],{relativeTo:this.route,queryParams:{from:null,ud:null},queryParamsHandling:"merge"})}login(e){const{userName:t,rememberMe:r}=e;r&&this.store.dispatch(new g(t)),-1===t.indexOf("@")?this.store.dispatch(new d(t,this.queryParams)):this.store.dispatch(new f(t,this.queryParams))}createAccount(){this.store.dispatch(new b(this.queryParams))}forgotUsername(){this.store.dispatch(new h(this.queryParams))}}return e.\u0275fac=function(t){return new(t||e)(S.Rb(i.i),S.Rb(s.a),S.Rb(s.i))},e.\u0275cmp=S.Lb({type:e,selectors:[["app-username"]],decls:4,vars:11,consts:[[3,"username","storageUsername","federatedDomains","showUserDeletedMessage","showLoggedOutMessage","login","createAccount","forgotUsername"]],template:function(e,t){1&e&&(S.Xb(0,"app-username-form",0),S.ec("login",function(e){return t.login(e)})("createAccount",function(){return t.createAccount()})("forgotUsername",function(){return t.forgotUsername()}),S.ic(1,"async"),S.ic(2,"async"),S.ic(3,"async"),S.Wb()),2&e&&S.oc("username",S.jc(1,5,t.username$))("storageUsername",S.jc(2,7,t.storageUsername$))("federatedDomains",S.jc(3,9,t.federatedDomains$))("showUserDeletedMessage",t.showUserDeletedMessage)("showLoggedOutMessage",t.showLoggedOutMessage)},directives:[z],pipes:[a.b],encapsulation:2,changeDetection:0}),e})(),B=(()=>{class e{constructor(e){this.fb=e,this.login=new S.n,this.createForm()}onLogin(){this.login.emit(Object.assign({},this.userNameForm.value))}createForm(){this.userNameForm=this.fb.group({rememberMe:new n.g("",[n.x.required])})}}return e.\u0275fac=function(t){return new(t||e)(S.Rb(n.f))},e.\u0275cmp=S.Lb({type:e,selectors:[["app-username-landing"]],inputs:{username:"username",displayName:"displayName"},outputs:{login:"login"},decls:33,vars:7,consts:[[1,"page-content","grid","grid--full","grid--no-bleed","grid--main-center","grid--cross-center"],[1,"login-container"],[1,"login-block","grid","grid--collapse","grid--shrink","card"],[1,"grid__item","grid__item--shrink","login-graphic","login-graphic--8"],[1,"login-form","grid__item"],[1,"padding-2"],[1,"grid","grid--cross-center","margin-bottom-1"],[1,"grid__item"],["ptrnTranslate","",1,"text-x-large"],["ptrnTranslate","",1,"margin-bottom-05",3,"param"],["ptrnTranslate","",1,"margin-bottom-1"],[1,"email","text-break-word@small","margin-bottom-1"],[1,"form","form--gutter","margin-top-1","container--small",3,"formGroup"],[3,"label"],["formControlName","rememberMe",3,"isInline"],["value","Yes"],["value","No"],["name","required"],["isPrimary","true",3,"action"]],template:function(e,t){1&e&&(S.Xb(0,"section",0),S.Xb(1,"div",1),S.Xb(2,"div",2),S.Sb(3,"div",3),S.Xb(4,"div",4),S.Xb(5,"article",5),S.Xb(6,"div",6),S.Xb(7,"header",7),S.Xb(8,"h2",8),S.Ic(9,"Home_TxtUsernameUpdate"),S.Wb(),S.Wb(),S.Wb(),S.Xb(10,"p",9),S.Ic(11,"Home_TxtWelcomeName"),S.Wb(),S.Xb(12,"p",10),S.Ic(13,"Home_TxtUsernameUpdated"),S.Wb(),S.Xb(14,"pre",11),S.Xb(15,"strong"),S.Ic(16),S.Wb(),S.Wb(),S.Xb(17,"form",12),S.Xb(18,"ptrn-field",13),S.ic(19,"ptrnTranslate"),S.Xb(20,"ptrn-radio-group",14),S.Xb(21,"ptrn-radio-item",15),S.Xb(22,"ptrn-translate"),S.Ic(23,"Home_TxtYes"),S.Wb(),S.Wb(),S.Xb(24,"ptrn-radio-item",16),S.Xb(25,"ptrn-translate"),S.Ic(26,"Home_TxtNo"),S.Wb(),S.Wb(),S.Wb(),S.Xb(27,"ptrn-field-error",17),S.Xb(28,"ptrn-translate"),S.Ic(29,"Home_MsgRequired"),S.Wb(),S.Wb(),S.Wb(),S.Xb(30,"ptrn-button",18),S.ec("action",function(){return t.onLogin()}),S.Xb(31,"ptrn-translate"),S.Ic(32,"Home_BtnLogInAgain"),S.Wb(),S.Wb(),S.Wb(),S.Wb(),S.Wb(),S.Wb(),S.Wb(),S.Wb()),2&e&&(S.Cb(10),S.oc("param",t.displayName),S.Cb(6),S.Jc(t.username),S.Cb(1),S.oc("formGroup",t.userNameForm),S.Cb(1),S.pc("label",S.jc(19,5,"Home_TxtRememberUsername")),S.Cb(2),S.oc("isInline",!0))},directives:[m.U,n.y,n.r,m.q,m.j,n.j,m.m,m.G,n.q,n.h,m.H,m.n,m.h],pipes:[m.V],encapsulation:2,changeDetection:0}),e})();const V=[{path:"updated",component:(()=>{class e{constructor(e,t){this.store=e,this.route=t,this.queryParams=this.route.snapshot.queryParams,this.userName=this.queryParams.login_hint,this.displayName=this.queryParams.displayName}login(e){const{rememberMe:t}=e;this.store.dispatch(new g("Yes"===t?this.userName:"")),this.store.dispatch(new X.a(this.route.snapshot.params.languageSymbol,this.queryParams))}}return e.\u0275fac=function(t){return new(t||e)(S.Rb(i.i),S.Rb(s.a))},e.\u0275cmp=S.Lb({type:e,selectors:[["app-username-updated"]],decls:1,vars:2,consts:[[3,"username","displayName","login"]],template:function(e,t){1&e&&(S.Xb(0,"app-username-landing",0),S.ec("login",function(e){return t.login(e)}),S.Wb()),2&e&&S.oc("username",t.userName)("displayName",t.displayName)},directives:[B],encapsulation:2,changeDetection:0}),e})(),data:{pageTitle:"Log In"}},{path:"",component:G,canActivate:[A],data:{pageTitle:"Log In"}},{path:"**",redirectTo:""}];let E=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=S.Pb({type:e}),e.\u0275inj=S.Ob({imports:[[a.c,s.l.forChild(V),i.k.forFeature("public",y),o.c.forFeature([C]),c.c,m.C,m.B,n.u,u.a]]}),e})()}}]);