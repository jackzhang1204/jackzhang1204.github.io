(function(a){a.SewisePlayerSkin={version:"1.0.0"};a.SewisePlayer=a.SewisePlayer||{}})(window);(function(a){a.SewisePlayer.IVodPlayer=a.SewisePlayer.IVodPlayer||{play:function(){},pause:function(){},stop:function(){},seek:function(){},changeClarity:function(){},setVolume:function(){},toPlay:function(){},duration:function(){},playTime:function(){},type:function(){},showTextTip:function(){},hideTextTip:function(){},muted:function(){}}})(window);(function(a){a.SewisePlayerSkin.IVodSkin=a.SewisePlayerSkin.IVodSkin||{player:function(){},started:function(){},paused:function(){},stopped:function(){},seeking:function(){},buffering:function(){},bufferProgress:function(){},loadedProgress:function(){},loadedOpen:function(){},loadedComplete:function(){},programTitle:function(){},duration:function(){},playTime:function(){},startTime:function(){},loadSpeed:function(){},initialClarity:function(){},lang:function(){},logo:function(){},timeUpdate:function(){},
volume:function(){},clarityButton:function(){},timeDisplay:function(){},controlBarDisplay:function(){},topBarDisplay:function(){},customStrings:function(){},fullScreen:function(){},noramlScreen:function(){},initialAds:function(){}}})(window);(function(){SewisePlayerSkin.Utils={stringer:{time2FigFill:function(a){var b,a=Math.floor(a);10>a?b="0"+a:b=""+a;return b},secondsToHMS:function(a){if(!(0>a)){var b=this.time2FigFill(Math.floor(a/3600)),d=this.time2FigFill(a/60%60),a=this.time2FigFill(a%60);return b+":"+d+":"+a}},secondsToMS:function(a){if(!(0>a)){var b=this.time2FigFill(a/60),a=this.time2FigFill(a%60);return b+":"+a}},dateToTimeString:function(a){var b;b=a?a:new Date;var a=b.getFullYear(),d=b.getMonth()+1,f=b.getDate(),i=this.time2FigFill(b.getHours()),
h=this.time2FigFill(b.getMinutes());b=this.time2FigFill(b.getSeconds());return a+"-"+d+"-"+f+" "+i+":"+h+":"+b},dateToTimeStr14:function(a){var b=a.getFullYear(),d=this.time2FigFill(a.getMonth()+1),f=this.time2FigFill(a.getDate()),i=this.time2FigFill(a.getHours()),h=this.time2FigFill(a.getMinutes()),a=this.time2FigFill(a.getSeconds());return b+d+f+i+h+a},dateToStrHMS:function(a){var b=this.time2FigFill(a.getHours()),d=this.time2FigFill(a.getMinutes()),a=this.time2FigFill(a.getSeconds());return b+
":"+d+":"+a},dateToYMD:function(a){var b=a.getFullYear(),d=this.time2FigFill(a.getMonth()+1),a=this.time2FigFill(a.getUTCDate());return b+"-"+d+"-"+a},hmsToDate:function(a){var a=a.split(":"),b=new Date;b.setHours(a[0]?a[0]:0,a[1]?a[1]:0,a[2]?a[2]:0);return b}},language:{zh_cn:{stop:"\u505c\u6b62\u64ad\u653e",pause:"\u6682\u505c",play:"\u64ad\u653e",fullScreen:"\u5168\u5c4f",normalScreen:"\u6062\u590d",soundOn:"\u6253\u5f00\u58f0\u97f3",soundOff:"\u5173\u95ed\u58f0\u97f3",clarity:"\u6e05\u6670\u5ea6",
titleTip:"\u6b63\u5728\u64ad\u653e\uff1a",claritySetting:"\u6e05\u6670\u5ea6\u8bbe\u7f6e",clarityOk:"\u786e\u5b9a",clarityCancel:"\u53d6\u6d88",backToLive:"\u56de\u5230\u76f4\u64ad",loading:"\u7f13\u51b2",subtitles:"\u5b57\u5e55","default":"\u9ed8\u8ba4"},en_us:{stop:"Stop",pause:"Pause",play:"Play",fullScreen:"Full Screen",normalScreen:"Normal Screen",soundOn:"Sound On",soundOff:"Sound Off",clarity:"Clarity",titleTip:"Playing: ",claritySetting:"Definition Setting",clarityOk:"OK",clarityCancel:"Cancel",
backToLive:"Back To Live",loading:"Loading",subtitles:"Subtitles","default":"Default"},lang:{},init:function(a){switch(a){case "en_US":this.lang=this.en_us;break;case "zh_CN":this.lang=this.zh_cn;break;default:this.lang=this.zh_cn}},getString:function(a){return this.lang[a]}}}})();(function(a){SewisePlayerSkin.BannersAds=function(b,d){function f(){z=SewisePlayerSkin.Utils.stringer.dateToYMD(new Date);k=d[z]||d["0000-00-00"];g=0;if(void 0!=k)A=k.length}function i(){for(var a=(new Date).getTime(),b=0;b<A;b++){var s=SewisePlayerSkin.Utils.stringer.hmsToDate(k[b].time).getTime();if(b<A-1){var d=SewisePlayerSkin.Utils.stringer.hmsToDate(k[b+1].time).getTime();if(a>s&&a<d){g=b;j(g);break}}else if(a>s){g=b;j(g);break}}}function h(){var a=(new Date).getTime();if(g<A-1){var b=SewisePlayerSkin.Utils.stringer.hmsToDate(k[g+
1].time).getTime();a>b&&(g++,j(g))}else SewisePlayerSkin.Utils.stringer.dateToYMD(new Date)!=z&&(f(),i())}function j(a){p=k[a].ads[0].picurl;q=k[a].ads[1].picurl;""==p&&""==q||(""==p&&""!=q?p=q:""!=p&&""==q&&(q=p),B.attr("src",p),s.attr("src",q))}var c=a(' <div style="position:absolute; display:table; width:100%; height:100%;"><div style="display:table-cell; text-align:left; vertical-align:middle;"><img style="pointer-events:auto; cursor:pointer; width: auto; height: auto;"></div></div> ');c.appendTo(b);
var B=c.find("img"),c=a(' <div style="position:absolute; display:table; width:100%; height:100%;"><div style="display:table-cell; text-align:right; vertical-align:middle;"><img style="pointer-events:auto; cursor:pointer; width: auto; height: auto;"></div></div> ');c.appendTo(b);var s=c.find("img"),p,q,z,k,g,A;f();void 0!=k&&(1==A&&""==k[0].time?j(0):(i(),setInterval(h,1E4)),B.click(function(a){a.originalEvent.stopPropagation();a=k[g].ads[0].link_url;window.openAdsLink&&"function"==typeof window.openAdsLink?
window.openAdsLink(a):window.open(a,"_blank")}),s.click(function(a){a.originalEvent.stopPropagation();a=k[g].ads[1].link_url;window.openAdsLink&&"function"==typeof window.openAdsLink?window.openAdsLink(a):window.open(a,"_blank")}))}})(window.jQuery);(function(a){SewisePlayerSkin.AdsContainer=function(b,d){var f=b.$container,i=b.$sewisePlayerUi,h=d.banners;if(h){var j=a("<div class='sewise-player-ads-banner'></div>");j.css({position:"absolute",width:"100%",height:"100%",left:"0px",top:"0px",overflow:"hidden","pointer-events":"none"});j.appendTo(f);i.css("z-index",1);SewisePlayerSkin.BannersAds(j,h)}}})(window.jQuery);(function(a){SewisePlayerSkin.ElementObject=function(){this.$sewisePlayerUi=a(".sewise-player-ui");this.$container=this.$sewisePlayerUi.parent();this.$video=this.$container.find("video").get(0);this.$controlbar=this.$sewisePlayerUi.find(".controlbar");this.$playBtn=this.$sewisePlayerUi.find(".controlbar-btns-play");this.$pauseBtn=this.$sewisePlayerUi.find(".controlbar-btns-pause");this.$stopBtn=this.$sewisePlayerUi.find(".controlbar-btns-stop");this.$fullscreenBtn=this.$sewisePlayerUi.find(".controlbar-btns-fullscreen");
this.$normalscreenBtn=this.$sewisePlayerUi.find(".controlbar-btns-normalscreen");this.$soundopenBtn=this.$sewisePlayerUi.find(".controlbar-btns-soundopen");this.$soundcloseBtn=this.$sewisePlayerUi.find(".controlbar-btns-soundclose");this.$volumelineVolume=this.$sewisePlayerUi.find(".controlbar-volumeline-volume");this.$volumelineDragger=this.$sewisePlayerUi.find(".controlbar-volumeline-dragger");this.$volumelinePoint=this.$sewisePlayerUi.find(".controlbar-volumeline-point");this.$playtime=this.$sewisePlayerUi.find(".controlbar-playtime");
this.$controlBarProgress=this.$sewisePlayerUi.find(".controlbar-progress");this.$progressPlayedLine=this.$sewisePlayerUi.find(".controlbar-progress-playedline");this.$progressPlayedPoint=this.$sewisePlayerUi.find(".controlbar-progress-playpoint");this.$progressLoadedLine=this.$sewisePlayerUi.find(".controlbar-progress-loadedline");this.$progressSeekLine=this.$sewisePlayerUi.find(".controlbar-progress-seekline");this.$logo=this.$sewisePlayerUi.find(".logo");this.$logoIcon=this.$sewisePlayerUi.find(".logo-icon");
this.$topbar=this.$sewisePlayerUi.find(".topbar");this.$programTip=this.$sewisePlayerUi.find(".topbar-program-tip");this.$programTitle=this.$sewisePlayerUi.find(".topbar-program-title");this.$topbarClock=this.$sewisePlayerUi.find(".topbar-clock");this.$buffer=this.$sewisePlayerUi.find(".buffer");this.$bufferTip=this.$sewisePlayerUi.find(".buffer-text-tip");this.$bigPlayBtn=this.$sewisePlayerUi.find(".big-play-btn");this.defStageWidth=this.$container.width();this.defStageHeight=this.$container.height();
this.defLeftValue=parseInt(this.$container.css("left"));this.defTopValue=parseInt(this.$container.css("top"));this.defOffsetX=this.$container.get(0).getBoundingClientRect().left;this.defOffsetY=this.$container.get(0).getBoundingClientRect().top;this.defOverflow=a("body").css("overflow")}})(window.jQuery);(function(a){SewisePlayerSkin.ElementLayout=function(b){function d(){null!=document.fullscreenElement||null!=document.msFullscreenElement||null!=document.mozFullScreenElement||null!=document.webkitFullscreenElement?j.fullScreen():j.normalScreen()}var f=b.$container,i=b.$controlBarProgress,h=b.$playtime,j=this,c=b.defStageWidth,B=b.defStageHeight,s=b.defLeftValue,p=b.defTopValue,q=b.defOffsetX,z=b.defOffsetY,k=b.defOverflow,g=parseInt(c)-265;0>g&&(g+=h.width(),h.hide());i.css("width",g);document.addEventListener("fullscreenchange",
d);document.addEventListener("MSFullscreenChange",d);document.addEventListener("mozfullscreenchange",d);document.addEventListener("webkitfullscreenchange",d);this.fullScreen=function(b){if("not-support"==b){var b=a(window).width(),d=a(window).height()-8;f.css("width",b);f.css("height",d);b=p-z+"px";f.css("left",s-q+"px");f.css("top",b);a("body").css("overflow","hidden")}else f.css("width","100%"),f.css("height","100%");b=parseInt(f.width())-265;0>b?(b+=h.width(),h.hide()):h.show();i.css("width",b)};
this.normalScreen=function(){f.css("width",c);f.css("height",B);f.css("left",s);f.css("top",p);a("body").css("overflow",k);g=parseInt(c)-265;0>g?(g+=h.width(),h.hide()):h.show();i.css("width",g)}}})(window.jQuery);(function(){SewisePlayerSkin.LogoBox=function(a){var b=a.$logoIcon;b.click(function(a){a.originalEvent.stopPropagation()});this.setLogo=function(a){b.css("background","url("+a+") 0px 0px no-repeat");b.attr("href","http://www.foream.cn/")}}})(window.jQuery);(function(){SewisePlayerSkin.TopBar=function(a){var b=a.$topbar,d=a.$programTip,f=a.$programTitle,i=a.$topbarClock;setInterval(function(){var a=SewisePlayerSkin.Utils.stringer.dateToTimeString();i.text(a)},1E3);this.setTitle=function(a){f.text(a)};this.show=function(){b.css("visibility","visible")};this.hide=function(){b.css("visibility","hidden")};this.hide2=function(){b.hide()};this.initLanguage=function(){var a=SewisePlayerSkin.Utils.language.getString("titleTip");d.text(a)}}})(window.jQuery);(function(a){SewisePlayerSkin.ControlBar=function(b,d,f){function i(){!1==$&&(D.css("visibility","visible"),f.show(),$=!0,R=setTimeout(c,aa))}function h(){clearTimeout(R)}function j(){R=setTimeout(c,aa)}function c(){D.css("visibility","hidden");f.hide();$=!1}function B(a){a=n+(a.pageX-E);0<a&&a<w&&(x.css("width",a),r.css("left",a-J/2))}function s(b){v.unbind("mousemove",B);a(document).unbind("mouseup",s);S=b.pageX;E!=S&&(n=x.width(),F=n/w,l.seek(F*G));K=!1}function p(a){e=a.originalEvent;1==e.targetTouches.length&&
(e.preventDefault(),a=n+(e.targetTouches[0].pageX-E),0<a&&a<w&&(x.css("width",a),r.css("left",a-J/2)))}function q(a){e=a.originalEvent;r.unbind("touchmove",p);r.unbind("touchend",q);if(1==e.changedTouches.length)S=e.changedTouches[0].pageX,E!=S&&(n=x.width(),F=n/w,l.seek(F*G));K=!1}function z(a){a=m+(a.pageX-H);0<a&&a<t&&(u.css("width",a),o.css("left",a-C/2))}function k(b){v.unbind("mousemove",z);a(document).unbind("mouseup",k);T=b.pageX;H!=T&&(m=u.width(),y=m/t,l.setVolume(y),Q())}function g(a){e=
a.originalEvent;1==e.targetTouches.length&&(e.preventDefault(),a=m+(e.targetTouches[0].pageX-H),0<a&&a<t&&(u.css("width",a),o.css("left",a-C/2)))}function A(a){e=a.originalEvent;o.unbind("touchmove",g);o.unbind("touchend",A);if(1==e.changedTouches.length)T=e.changedTouches[0].pageX,H!=T&&(m=u.width(),y=m/t,l.setVolume(y),Q())}function Q(){0<y?(l.muted(!1),L.show(),I.hide()):(l.muted(!0),L.hide(),I.show())}var v=b.$container,Z=b.$video,D=b.$controlbar,U=b.$playBtn,M=b.$pauseBtn,ga=b.$stopBtn,V=b.$fullscreenBtn,
N=b.$normalscreenBtn,L=b.$soundopenBtn,I=b.$soundcloseBtn,u=b.$volumelineVolume,O=b.$volumelineDragger,o=b.$volumelinePoint,ha=b.$playtime,x=b.$progressPlayedLine,r=b.$progressPlayedPoint,ia=b.$progressLoadedLine,P=b.$progressSeekLine,ba=b.$buffer,ja=b.$bufferTip,W=b.$bigPlayBtn,X=this,l,ca="normal",G=0.1,da=0,ea="00:00:00",fa="00:00:00",J=0,K=!1,E=0,S=0,n=0,w=0,F=0,$=!0,C=0,t=0,m=0,y=0,H=0,T=0,Y=!1,R,aa=5E3,J=r.width(),w=P.width(),C=o.width(),t=O.width();M.hide();N.hide();I.hide();ba.hide();R=setTimeout(c,
aa);v.click(function(){v.mousemove();Y?l.pause():l.play()});v.dblclick(function(){"normal"==ca?X.fullScreen():X.noramlScreen()});v.bind({mousemove:i,touchmove:i});D.bind({mouseover:h,touchstart:h});D.bind({mouseout:j,touchend:j});D.click(function(a){a.originalEvent.stopPropagation()});U.click(function(){l.play()});M.click(function(){l.pause()});ga.click(function(){l.stop()});W.click(function(a){a.originalEvent.stopPropagation();l.play()});V.click(function(){X.fullScreen()});N.click(function(){X.noramlScreen()});
L.click(function(){l.muted(!0);L.hide();I.show();u.css("width",0);o.css("left",-C/2)});I.click(function(){l.muted(!1);L.show();I.hide();u.css("width",m);o.css("left",m-C/2)});P.mousedown(function(a){n=a.pageX-a.target.getBoundingClientRect().left;w=P.width();x.css("width",n);r.css("left",n-J/2);F=n/w;l.seek(F*G)});r.mousedown(function(b){this.blur();K=!0;E=b.pageX;n=x.width();w=P.width();v.bind("mousemove",B);a(document).bind("mouseup",s)});r.bind("touchstart",function(a){e=a.originalEvent;r.blur();
a=e.targetTouches[0];K=!0;E=a.pageX;n=x.width();w=P.width();r.bind("touchmove",p);r.bind("touchend",q)});O.mousedown(function(a){m=a.pageX-a.target.getBoundingClientRect().left;t=O.width();u.css("width",m);o.css("left",m-C/2);y=m/t;l.setVolume(y);Q()});o.mousedown(function(b){this.blur();H=b.pageX;m=u.width();t=O.width();v.bind("mousemove",z);a(document).bind("mouseup",k)});o.bind("touchstart",function(a){e=a.originalEvent;o.blur();H=e.targetTouches[0].pageX;m=u.width();t=O.width();o.bind("touchmove",
g);o.bind("touchend",A)});this.setPlayer=function(a){l=a};this.started=function(){U.hide();M.show();W.hide();Y=!0};this.paused=function(){U.show();M.hide();W.show();Y=!1};this.stopped=function(){U.show();M.hide();W.show();Y=!1};this.setDuration=function(a){G=a;fa=SewisePlayerSkin.Utils.stringer.secondsToMS(G)};this.timeUpdate=function(a){da=a;ea=SewisePlayerSkin.Utils.stringer.secondsToMS(da);ha.text(ea+"/"+fa);K||(n=100*(da/G)+"%",x.css("width",n),a=x.width()-J/2,r.css("left",a))};this.loadProgress=
function(a){ia.css("width",100*a+"%")};this.initVolume=function(a){y=a;m=t*y;u.css("width",m);o.css("left",m-C/2);Q()};this.hide2=function(){D.hide()};this.fullScreen=function(){V.hide();N.show();var a=v.get(0);a.requestFullscreen?a.requestFullscreen():a.msRequestFullscreen?a.msRequestFullscreen():a.mozRequestFullScreen?a.mozRequestFullScreen():a.webkitRequestFullscreen?a.webkitRequestFullscreen():Z.webkitEnterFullscreen?(Z.play(),Z.webkitEnterFullscreen(),V.show(),N.hide()):d.fullScreen("not-support");
ca="full"};this.noramlScreen=function(){V.show();N.hide();document.exitFullscreen?document.exitFullscreen():document.msExitFullscreen?document.msExitFullscreen():document.mozCancelFullScreen?document.mozCancelFullScreen():document.webkitCancelFullScreen?document.webkitCancelFullScreen():d.normalScreen();ca="normal"};this.showBuffer=function(){ba.show()};this.hideBuffer=function(){ba.hide()};this.initLanguage=function(){var a=SewisePlayerSkin.Utils.language.getString("loading");ja.text(a)}}})(window.jQuery);(function(a,b){b(document).ready(function(){var a=SewisePlayer.IVodPlayer,b=new SewisePlayerSkin.ElementObject,i=new SewisePlayerSkin.ElementLayout(b),h=new SewisePlayerSkin.LogoBox(b),j=new SewisePlayerSkin.TopBar(b),c=new SewisePlayerSkin.ControlBar(b,i,j);SewisePlayerSkin.IVodSkin.player=function(b){a=b;c.setPlayer(a)};SewisePlayerSkin.IVodSkin.started=function(){c.started()};SewisePlayerSkin.IVodSkin.paused=function(){c.paused()};SewisePlayerSkin.IVodSkin.stopped=function(){c.stopped()};SewisePlayerSkin.IVodSkin.duration=
function(a){c.setDuration(a)};SewisePlayerSkin.IVodSkin.timeUpdate=function(a){c.timeUpdate(a)};SewisePlayerSkin.IVodSkin.loadedProgress=function(a){c.loadProgress(a)};SewisePlayerSkin.IVodSkin.loadedOpen=function(){c.showBuffer()};SewisePlayerSkin.IVodSkin.loadedComplete=function(){c.hideBuffer()};SewisePlayerSkin.IVodSkin.programTitle=function(a){j.setTitle(a)};SewisePlayerSkin.IVodSkin.logo=function(a){h.setLogo(a)};SewisePlayerSkin.IVodSkin.volume=function(a){c.initVolume(a)};SewisePlayerSkin.IVodSkin.initialClarity=
function(){};SewisePlayerSkin.IVodSkin.clarityButton=function(a){"enable"!=a&&c.hideClarityBtn()};SewisePlayerSkin.IVodSkin.timeDisplay=function(){};SewisePlayerSkin.IVodSkin.controlBarDisplay=function(a){"enable"!=a&&c.hide2()};SewisePlayerSkin.IVodSkin.topBarDisplay=function(a){"enable"!=a&&(j.hide2(),c.updateClarityBtnPosition())};SewisePlayerSkin.IVodSkin.customStrings=function(){};SewisePlayerSkin.IVodSkin.fullScreen=function(){c.fullScreen()};SewisePlayerSkin.IVodSkin.noramlScreen=function(){c.noramlScreen()};
SewisePlayerSkin.IVodSkin.initialAds=function(a){a&&SewisePlayerSkin.AdsContainer(b,a)};SewisePlayerSkin.IVodSkin.lang=function(a){SewisePlayerSkin.Utils.language.init(a);c.initLanguage();j.initLanguage()};try{SewisePlayer.CommandDispatcher.dispatchEvent({type:SewisePlayer.Events.PLAYER_SKIN_LOADED,playerSkin:SewisePlayerSkin.IVodSkin})}catch(B){console.log("No Main Player")}})})(window,window.jQuery);
