(function(a){a.SewisePlayerSkin={version:"1.0.0"};a.SewisePlayer=a.SewisePlayer||{}})(window);(function(a){a.SewisePlayer.IVodPlayer=a.SewisePlayer.IVodPlayer||{play:function(){},pause:function(){},stop:function(){},seek:function(){},changeClarity:function(){},setVolume:function(){},toPlay:function(){},duration:function(){},playTime:function(){},type:function(){},showTextTip:function(){},hideTextTip:function(){},muted:function(){}}})(window);(function(a){a.SewisePlayerSkin.IVodSkin=a.SewisePlayerSkin.IVodSkin||{player:function(){},started:function(){},paused:function(){},stopped:function(){},seeking:function(){},buffering:function(){},bufferProgress:function(){},loadedProgress:function(){},programTitle:function(){},duration:function(){},playTime:function(){},startTime:function(){},loadSpeed:function(){},initialClarity:function(){},lang:function(){},logo:function(){},timeUpdate:function(){},volume:function(){},clarityButton:function(){},
timeDisplay:function(){},controlBarDisplay:function(){},topBarDisplay:function(){},customStrings:function(){},fullScreen:function(){},noramlScreen:function(){},initialAds:function(){}}})(window);(function(){SewisePlayerSkin.Utils={stringer:{time2FigFill:function(a){var b,a=Math.floor(a);10>a?b="0"+a:b=""+a;return b},secondsToHMS:function(a){if(!(0>a)){var b=this.time2FigFill(Math.floor(a/3600)),g=this.time2FigFill(a/60%60),a=this.time2FigFill(a%60);return b+":"+g+":"+a}},secondsToMS:function(a){if(!(0>a)){var b=this.time2FigFill(a/60),a=this.time2FigFill(a%60);return b+":"+a}},dateToTimeString:function(a){var b;b=a?a:new Date;var a=b.getFullYear(),g=b.getMonth()+1,h=b.getDate(),k=this.time2FigFill(b.getHours()),
c=this.time2FigFill(b.getMinutes());b=this.time2FigFill(b.getSeconds());return a+"-"+g+"-"+h+" "+k+":"+c+":"+b},dateToTimeStr14:function(a){var b=a.getFullYear(),g=this.time2FigFill(a.getMonth()+1),h=this.time2FigFill(a.getDate()),k=this.time2FigFill(a.getHours()),c=this.time2FigFill(a.getMinutes()),a=this.time2FigFill(a.getSeconds());return b+g+h+k+c+a},dateToStrHMS:function(a){var b=this.time2FigFill(a.getHours()),g=this.time2FigFill(a.getMinutes()),a=this.time2FigFill(a.getSeconds());return b+
":"+g+":"+a},dateToYMD:function(a){var b=a.getFullYear(),g=this.time2FigFill(a.getMonth()+1),a=this.time2FigFill(a.getUTCDate());return b+"-"+g+"-"+a},hmsToDate:function(a){var a=a.split(":"),b=new Date;b.setHours(a[0]?a[0]:0,a[1]?a[1]:0,a[2]?a[2]:0);return b}},language:{zh_cn:{stop:"\u505c\u6b62\u64ad\u653e",pause:"\u6682\u505c",play:"\u64ad\u653e",fullScreen:"\u5168\u5c4f",normalScreen:"\u6062\u590d",soundOn:"\u6253\u5f00\u58f0\u97f3",soundOff:"\u5173\u95ed\u58f0\u97f3",clarity:"\u6e05\u6670\u5ea6",
titleTip:"\u6b63\u5728\u64ad\u653e\uff1a",claritySetting:"\u6e05\u6670\u5ea6\u8bbe\u7f6e",clarityOk:"\u786e\u5b9a",clarityCancel:"\u53d6\u6d88",backToLive:"\u56de\u5230\u76f4\u64ad",loading:"\u7f13\u51b2\u8282\u76ee",subtitles:"\u5b57\u5e55","default":"\u9ed8\u8ba4"},en_us:{stop:"Stop",pause:"Pause",play:"Play",fullScreen:"Full Screen",normalScreen:"Normal Screen",soundOn:"Sound On",soundOff:"Sound Off",clarity:"Clarity",titleTip:"Playing: ",claritySetting:"Definition Setting",clarityOk:"OK",clarityCancel:"Cancel",
backToLive:"Back To Live",loading:"Loading",subtitles:"Subtitles","default":"Default"},lang:{},init:function(a){switch(a){case "en_US":this.lang=this.en_us;break;case "zh_CN":this.lang=this.zh_cn;break;default:this.lang=this.zh_cn}},getString:function(a){return this.lang[a]}}}})();(function(a){SewisePlayerSkin.BannersAds=function(b,g){function h(){A=SewisePlayerSkin.Utils.stringer.dateToYMD(new Date);l=g[A]||g["0000-00-00"];f=0;if(void 0!=l)u=l.length}function k(){for(var a=(new Date).getTime(),b=0;b<u;b++){var i=SewisePlayerSkin.Utils.stringer.hmsToDate(l[b].time).getTime();if(b<u-1){var c=SewisePlayerSkin.Utils.stringer.hmsToDate(l[b+1].time).getTime();if(a>i&&a<c){f=b;j(f);break}}else if(a>i){f=b;j(f);break}}}function c(){var a=(new Date).getTime();if(f<u-1){var b=SewisePlayerSkin.Utils.stringer.hmsToDate(l[f+
1].time).getTime();a>b&&(f++,j(f))}else SewisePlayerSkin.Utils.stringer.dateToYMD(new Date)!=A&&(h(),k())}function j(a){i=l[a].ads[0].picurl;n=l[a].ads[1].picurl;""==i&&""==n||(""==i&&""!=n?i=n:""!=i&&""==n&&(n=i),d.attr("src",i),s.attr("src",n))}var m=a(' <div style="position:absolute; display:table; width:100%; height:100%;"><div style="display:table-cell; text-align:left; vertical-align:middle;"><img style="pointer-events:auto; cursor:pointer; width: auto; height: auto;"></div></div> ');m.appendTo(b);
var d=m.find("img"),m=a(' <div style="position:absolute; display:table; width:100%; height:100%;"><div style="display:table-cell; text-align:right; vertical-align:middle;"><img style="pointer-events:auto; cursor:pointer; width: auto; height: auto;"></div></div> ');m.appendTo(b);var s=m.find("img"),i,n,A,l,f,u;h();void 0!=l&&(1==u&&""==l[0].time?j(0):(k(),setInterval(c,1E4)),d.click(function(a){a.originalEvent.stopPropagation();a=l[f].ads[0].link_url;window.openAdsLink&&"function"==typeof window.openAdsLink?
window.openAdsLink(a):window.open(a,"_blank")}),s.click(function(a){a.originalEvent.stopPropagation();a=l[f].ads[1].link_url;window.openAdsLink&&"function"==typeof window.openAdsLink?window.openAdsLink(a):window.open(a,"_blank")}))}})(window.jQuery);(function(a){SewisePlayerSkin.AdsContainer=function(b,g){var h=b.$container,k=b.$sewisePlayerUi,c=g.banners;if(c){var j=a("<div class='sewise-player-ads-banner'></div>");j.css({position:"absolute",width:"100%",height:"100%",left:"0px",top:"0px",overflow:"hidden","pointer-events":"none"});j.appendTo(h);k.css("z-index",1);SewisePlayerSkin.BannersAds(j,c)}}})(window.jQuery);(function(a){SewisePlayerSkin.ElementObject=function(){this.$sewisePlayerUi=a(".sewise-player-ui");this.$container=this.$sewisePlayerUi.parent();this.$video=this.$container.find("video").get(0);this.$controlbar=this.$sewisePlayerUi.find(".controlbar");this.$playBtn=this.$sewisePlayerUi.find(".controlbar-btns-play");this.$pauseBtn=this.$sewisePlayerUi.find(".controlbar-btns-pause");this.$stopBtn=this.$sewisePlayerUi.find(".controlbar-btns-stop");this.$fullscreenBtn=this.$sewisePlayerUi.find(".controlbar-btns-fullscreen");
this.$normalscreenBtn=this.$sewisePlayerUi.find(".controlbar-btns-normalscreen");this.$soundopenBtn=this.$sewisePlayerUi.find(".controlbar-btns-soundopen");this.$soundcloseBtn=this.$sewisePlayerUi.find(".controlbar-btns-soundclose");this.$volumelineVolume=this.$sewisePlayerUi.find(".controlbar-volumeline-volume");this.$volumelineDragger=this.$sewisePlayerUi.find(".controlbar-volumeline-dragger");this.$volumelinePoint=this.$sewisePlayerUi.find(".controlbar-volumeline-point");this.$playtime=this.$sewisePlayerUi.find(".controlbar-playtime");
this.$totaltime=this.$sewisePlayerUi.find(".controlbar-totaltime");this.$controlBarProgress=this.$sewisePlayerUi.find(".controlbar-progress");this.$progressPlayedLine=this.$sewisePlayerUi.find(".controlbar-progress-playedline");this.$progressPlayedPoint=this.$sewisePlayerUi.find(".controlbar-progress-playpoint");this.$progressLoadedLine=this.$sewisePlayerUi.find(".controlbar-progress-loadedline");this.$progressSeekLine=this.$sewisePlayerUi.find(".controlbar-progress-seekline");this.$logo=this.$sewisePlayerUi.find(".logo");
this.$logoIcon=this.$sewisePlayerUi.find(".logo-icon");this.$topbar=this.$sewisePlayerUi.find(".topbar");this.$programTip=this.$sewisePlayerUi.find(".topbar-program-tip");this.$programTitle=this.$sewisePlayerUi.find(".topbar-program-title");this.$topbarClock=this.$sewisePlayerUi.find(".topbar-clock");this.$buffer=this.$sewisePlayerUi.find(".buffer");this.$bigPlayBtn=this.$sewisePlayerUi.find(".big-play-btn");this.$claritySwitchBtn=this.$sewisePlayerUi.find(".clarity-switch-btn");this.$clarityBtnText=
this.$sewisePlayerUi.find(".clarity-btn-text");this.defStageWidth=this.$container.width();this.defStageHeight=this.$container.height();this.defLeftValue=parseInt(this.$container.css("left"));this.defTopValue=parseInt(this.$container.css("top"));this.defOffsetX=this.$container.get(0).getBoundingClientRect().left;this.defOffsetY=this.$container.get(0).getBoundingClientRect().top;this.defOverflow=a("body").css("overflow")}})(window.jQuery);(function(a){SewisePlayerSkin.ElementLayout=function(b){function g(){null!=document.fullscreenElement||null!=document.msFullscreenElement||null!=document.mozFullScreenElement||null!=document.webkitFullscreenElement?j.fullScreen():j.normalScreen()}var h=b.$container,k=b.$controlBarProgress,c=b.$playtime,j=this,m=b.defStageWidth,d=b.defStageHeight,s=b.defLeftValue,i=b.defTopValue,n=b.defOffsetX,A=b.defOffsetY,l=b.defOverflow,f=parseInt(m)-265;0>f&&(f+=c.width(),c.hide());k.css("width",f);document.addEventListener("fullscreenchange",
g);document.addEventListener("MSFullscreenChange",g);document.addEventListener("mozfullscreenchange",g);document.addEventListener("webkitfullscreenchange",g);this.fullScreen=function(b){if("not-support"==b){var b=a(window).width(),g=a(window).height()-8;h.css("width",b);h.css("height",g);b=i-A+"px";h.css("left",s-n+"px");h.css("top",b);a("body").css("overflow","hidden")}else h.css("width","100%"),h.css("height","100%");b=parseInt(h.width())-265;0>b?(b+=c.width(),c.hide()):c.show();k.css("width",b)};
this.normalScreen=function(){h.css("width",m);h.css("height",d);h.css("left",s);h.css("top",i);a("body").css("overflow",l);f=parseInt(m)-265;0>f?(f+=c.width(),c.hide()):c.show();k.css("width",f)}}})(window.jQuery);(function(){SewisePlayerSkin.LogoBox=function(a){var b=a.$logoIcon;b.click(function(a){a.originalEvent.stopPropagation()});this.setLogo=function(a){b.css("background","url("+a+") 0px 0px no-repeat");b.attr("href","http://www.sewise.com/")}}})(window.jQuery);(function(){SewisePlayerSkin.TopBar=function(a){var b=a.$topbar,g=a.$programTip,h=a.$programTitle,k=a.$topbarClock;setInterval(function(){var a=SewisePlayerSkin.Utils.stringer.dateToTimeString();k.text(a)},1E3);this.setTitle=function(a){h.text(a)};this.show=function(){b.css("visibility","visible")};this.hide=function(){b.css("visibility","hidden")};this.hide2=function(){b.hide()};this.initLanguage=function(){var a=SewisePlayerSkin.Utils.language.getString("titleTip");g.text(a)}}})(window.jQuery);(function(a){SewisePlayerSkin.ClarityWindow=function(b){var g=b.$container,h,k,c,j="",m="",d,s,i=0,n=0;this.setPlayer=function(a){h=a};this.setControlBar=function(a){k=a};this.initialClarities=function(b){var l=SewisePlayerSkin.Utils.language.getString("claritySetting"),f=SewisePlayerSkin.Utils.language.getString("clarityOk"),u=SewisePlayerSkin.Utils.language.getString("clarityCancel");d=b;s=d.length;for(b=0;b<s;b++){var B;d[b].selected?(B=' checked = "checked" ',i=b,k.updateClarityBtnText(d[b].name)):
B=" ";j+='<input style="width: 20px; height: 18px; " type="radio" name="radio_clarity"'+B+'"value="'+d[b].name+'">'+d[b].name+"\n"}m='<div style="position:absolute; width: 300px; height: 140px; color: #FFF; border: 2px solid #FF9501; padding: 10px; background: rgba(255, 149, 1, 0.3); "><div><div style="float: left; ">'+l+'</div><div style="float: right; "><a href="javascript:;" name="cancel_clarity" style="color: #FFF; font-weight:bold; text-decoration: none; padding: 4px 6px; ">X</a></div></div><div style="width: 100%; height: 40px; padding: 30px 0px 10px 0px; text-align: center; clear: both;">'+
j+'</div><div style="padding: 10px; text-align: center; "><a href="javascript:;" name="confirm_clarity" style="color: #FFF; text-decoration: none; background-color: #FF9501; padding: 5px 10px; margin-right: 20px; ">'+f+'</a><a href="javascript:;" name="cancel_clarity" style="color: #FFF; text-decoration: none; background-color: #FF9501; padding: 5px 10px; margin-left: 20px; ">'+u+"</a></div><div>";c=a("<div></div>");c.html(m);c.css({position:"absolute",left:"50%",top:"50%","margin-left":"-162px",
"margin-top":"-82px"});c.hide();c.appendTo(g);c.click(function(a){a.originalEvent.stopPropagation()});c.find("[name = confirm_clarity]").click(function(a){a.originalEvent.stopPropagation();c.hide();i!=n&&(i=n,k.updateClarityBtnText(d[i].name),h.changeClarity({name:d[i].name,videoUrl:d[i].videoUrl,id:d[i].id,selected:!0}))});c.find("[name = cancel_clarity]").click(function(a){a.originalEvent.stopPropagation();c.hide();n=i});c.find("[name = radio_clarity]").click(function(b){b.originalEvent.stopPropagation();
n=a(b.target).index()})};this.toggle=function(){c.toggle();c.find("[name = radio_clarity]").get(i).checked=!0;n=i}}})(window.jQuery);(function(a){SewisePlayerSkin.ControlBar=function(b,g,h,k){function c(a){a=q+(a.pageX-D);0<a&&a<x&&(y.css("width",a),t.css("left",a-J/2))}function j(b){f.unbind("mousemove",c);a(document).unbind("mouseup",j);Q=b.pageX;D!=Q&&(q=y.width(),E=q/x,p.seek(E*F));K=!1}function m(a){e=a.originalEvent;1==e.targetTouches.length&&(e.preventDefault(),a=q+(e.targetTouches[0].pageX-D),0<a&&a<x&&(y.css("width",a),t.css("left",a-J/2)))}function d(a){e=a.originalEvent;t.unbind("touchmove",m);t.unbind("touchend",d);
if(1==e.changedTouches.length)Q=e.changedTouches[0].pageX,D!=Q&&(q=y.width(),E=q/x,p.seek(E*F));K=!1}function s(a){a=o+(a.pageX-G);0<a&&a<v&&(w.css("width",a),r.css("left",a-C/2))}function i(b){f.unbind("mousemove",s);a(document).unbind("mouseup",i);R=b.pageX;G!=R&&(o=w.width(),z=o/v,p.setVolume(z),l())}function n(a){e=a.originalEvent;1==e.targetTouches.length&&(e.preventDefault(),a=o+(e.targetTouches[0].pageX-G),0<a&&a<v&&(w.css("width",a),r.css("left",a-C/2)))}function A(a){e=a.originalEvent;r.unbind("touchmove",
n);r.unbind("touchend",A);if(1==e.changedTouches.length)R=e.changedTouches[0].pageX,G!=R&&(o=w.width(),z=o/v,p.setVolume(z),l())}function l(){0<z?(p.muted(!1),L.show(),H.hide()):(p.muted(!0),L.hide(),H.show())}var f=b.$container,u=b.$video,B=b.$controlbar,P=b.$playBtn,I=b.$pauseBtn,$=b.$stopBtn,S=b.$fullscreenBtn,M=b.$normalscreenBtn,L=b.$soundopenBtn,H=b.$soundcloseBtn,w=b.$volumelineVolume,N=b.$volumelineDragger,r=b.$volumelinePoint,aa=b.$playtime,ba=b.$totaltime,y=b.$progressPlayedLine,t=b.$progressPlayedPoint,
ca=b.$progressLoadedLine,O=b.$progressSeekLine,da=b.$buffer,T=b.$bigPlayBtn,U=b.$claritySwitchBtn,ea=b.$clarityBtnText,X=this,p,F=0.1,V=0,Y="00:00:00",Z="00:00:00",J=0,K=!1,D=0,Q=0,q=0,x=0,E=0,W=!0,C=0,v=0,o=0,z=0,G=0,R=0,J=t.width(),x=O.width(),C=r.width(),v=N.width();I.hide();M.hide();H.hide();da.hide();B.click(function(a){a.originalEvent.stopPropagation()});f.click(function(){W?(B.css("visibility","hidden"),h.hide(),W=!1):(B.css("visibility","visible"),h.show(),W=!0)});P.click(function(){p.play()});
I.click(function(){p.pause()});$.click(function(){p.stop()});T.click(function(a){a.originalEvent.stopPropagation();p.play()});S.click(function(){X.fullScreen()});M.click(function(){X.noramlScreen()});L.click(function(){p.muted(!0);L.hide();H.show();w.css("width",0);r.css("left",-C/2)});H.click(function(){p.muted(!1);L.show();H.hide();w.css("width",o);r.css("left",o-C/2)});U.click(function(a){a.originalEvent.stopPropagation();k.toggle()});O.mousedown(function(a){q=a.pageX-a.target.getBoundingClientRect().left;
x=O.width();y.css("width",q);t.css("left",q-J/2);E=q/x;p.seek(E*F)});t.mousedown(function(b){this.blur();K=!0;D=b.pageX;q=y.width();x=O.width();f.bind("mousemove",c);a(document).bind("mouseup",j)});t.bind("touchstart",function(a){e=a.originalEvent;t.blur();a=e.targetTouches[0];K=!0;D=a.pageX;q=y.width();x=O.width();t.bind("touchmove",m);t.bind("touchend",d)});N.mousedown(function(a){o=a.pageX-a.target.getBoundingClientRect().left;v=N.width();w.css("width",o);r.css("left",o-C/2);z=o/v;p.setVolume(z);
l()});r.mousedown(function(b){this.blur();G=b.pageX;o=w.width();v=N.width();f.bind("mousemove",s);a(document).bind("mouseup",i)});r.bind("touchstart",function(a){e=a.originalEvent;r.blur();G=e.targetTouches[0].pageX;o=w.width();v=N.width();r.bind("touchmove",n);r.bind("touchend",A)});this.setPlayer=function(a){p=a};this.started=function(){P.hide();I.show();T.hide()};this.paused=function(){P.show();I.hide();T.show()};this.stopped=function(){P.show();I.hide();T.show()};this.setDuration=function(a){F=
a;Z=SewisePlayerSkin.Utils.stringer.secondsToMS(F);ba.text(Z)};this.timeUpdate=function(a){V=a;Y=SewisePlayerSkin.Utils.stringer.secondsToMS(V);aa.text(Y);K||(q=100*(V/F)+"%",y.css("width",q),a=y.width()-J/2,t.css("left",a))};this.loadProgress=function(a){ca.css("width",100*a+"%")};this.initVolume=function(a){z=a;o=v*z;w.css("width",o);r.css("left",o-C/2);l()};this.hide2=function(){B.hide()};this.hideClarityBtn=function(){U.hide()};this.updateClarityBtnPosition=function(){U.css("top","0%");U.css("margin-top",
"-5px")};this.updateClarityBtnText=function(a){ea.text(a)};this.fullScreen=function(){S.hide();M.show();var a=f.get(0);a.requestFullscreen?a.requestFullscreen():a.msRequestFullscreen?a.msRequestFullscreen():a.mozRequestFullScreen?a.mozRequestFullScreen():a.webkitRequestFullscreen?a.webkitRequestFullscreen():u.webkitEnterFullscreen?(u.play(),u.webkitEnterFullscreen(),S.show(),M.hide()):g.fullScreen("not-support")};this.noramlScreen=function(){S.show();M.hide();document.exitFullscreen?document.exitFullscreen():
document.msExitFullscreen?document.msExitFullscreen():document.mozCancelFullScreen?document.mozCancelFullScreen():document.webkitCancelFullScreen?document.webkitCancelFullScreen():g.normalScreen()}}})(window.jQuery);(function(a,b){b(document).ready(function(){var a=SewisePlayer.IVodPlayer,b=new SewisePlayerSkin.ElementObject,k=new SewisePlayerSkin.ElementLayout(b),c=new SewisePlayerSkin.LogoBox(b),j=new SewisePlayerSkin.TopBar(b),m=new SewisePlayerSkin.ClarityWindow(b),d=new SewisePlayerSkin.ControlBar(b,k,j,m);SewisePlayerSkin.IVodSkin.player=function(b){a=b;d.setPlayer(a);m.setPlayer(a)};SewisePlayerSkin.IVodSkin.started=function(){d.started()};SewisePlayerSkin.IVodSkin.paused=function(){d.paused()};SewisePlayerSkin.IVodSkin.stopped=
function(){d.stopped()};SewisePlayerSkin.IVodSkin.duration=function(a){d.setDuration(a)};SewisePlayerSkin.IVodSkin.timeUpdate=function(a){d.timeUpdate(a)};SewisePlayerSkin.IVodSkin.loadedProgress=function(a){d.loadProgress(a)};SewisePlayerSkin.IVodSkin.programTitle=function(a){j.setTitle(a)};SewisePlayerSkin.IVodSkin.logo=function(a){c.setLogo(a)};SewisePlayerSkin.IVodSkin.volume=function(a){d.initVolume(a)};SewisePlayerSkin.IVodSkin.initialClarity=function(a){m.setControlBar(d);m.initialClarities(a)};
SewisePlayerSkin.IVodSkin.clarityButton=function(a){"enable"!=a&&d.hideClarityBtn()};SewisePlayerSkin.IVodSkin.timeDisplay=function(){};SewisePlayerSkin.IVodSkin.controlBarDisplay=function(a){"enable"!=a&&d.hide2()};SewisePlayerSkin.IVodSkin.topBarDisplay=function(a){"enable"!=a&&(j.hide2(),d.updateClarityBtnPosition())};SewisePlayerSkin.IVodSkin.customStrings=function(){};SewisePlayerSkin.IVodSkin.fullScreen=function(){d.fullScreen()};SewisePlayerSkin.IVodSkin.noramlScreen=function(){d.noramlScreen()};
SewisePlayerSkin.IVodSkin.initialAds=function(a){a&&SewisePlayerSkin.AdsContainer(b,a)};SewisePlayerSkin.IVodSkin.lang=function(a){SewisePlayerSkin.Utils.language.init(a);j.initLanguage()};try{SewisePlayer.CommandDispatcher.dispatchEvent({type:SewisePlayer.Events.PLAYER_SKIN_LOADED,playerSkin:SewisePlayerSkin.IVodSkin})}catch(s){console.log("No Main Player")}})})(window,window.jQuery);
