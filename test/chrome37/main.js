var scrptElement = document.getElementById("mainJsId");
var scrptParent = scrptElement.parentNode;
var container = document.createElement("div");
container.id = "container";
container.style.position = "relative";
container.style.width = "100%";
container.style.height = "100%";
container.style.left = "0px";
container.style.top = "0px";
scrptParent.appendChild(container);


var body = document.getElementsByTagName('body')[0];
var iframe = document.createElement('iframe');
iframe.src =  "skin.html";
iframe.onload = iframe.onreadystatechange = function(){
	try{
		if(iframe === null) return;
		var skin = iframe.contentWindow.document.getElementsByClassName("sewise-player-ui")[0];
		container.appendChild(skin);
        body.removeChild(iframe);
        iframe = null;
        

        var $sewisePlayerUi = $(".sewise-player-ui");
        var $container = $sewisePlayerUi.parent();
        var $controlbar = $sewisePlayerUi.find(".controlbar");
        var $playBtn = $sewisePlayerUi.find(".controlbar-btns-play");
        //console.log($container);
        ///////////////////////////////////////
        $controlbar.click(function(e){
            //console.log("controlbar");
            //为什么这个里在chrome37下无效
            
            e.originalEvent.stopPropagation();
        });
        $playBtn.click(function(e){
            console.log("playBtn");
        });

        /*$playBtn.get(0).onclick = function(){
            console.log("playBtn");
        };*/

        $container.click(function(e){
            console.log("container");
        });

        
	}catch(e){
		console.log("跨域无法加载");
	}
};
body.appendChild(iframe);


