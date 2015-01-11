/************JS Call Flash***********/
////component info////
var bgInfo=["background", "material/background/bg008.swf",0,0];
var paInfo=["photoArea", "material/photoArea/pa009.swf", 100, 150];
var thInfo=["thumbnail", "material/thumbnail/th010.swf", 50, 30];
var cbInfo=["controlButton", "material/controlButton/cb012.swf", 500, 400];
var desInfo=["description", "material/description/des001.swf", 300, 300];
var tiInfo=["title", "material/title/ti001.swf", 60, 30];
var comInfo=[bgInfo, paInfo, thInfo, cbInfo, desInfo, tiInfo];

var mc0Info=["movieClip", "material/movieClip/mc_gramophone.swf", 80, 200];
var mc1Info=["movieClip", "material/movieClip/mc_date.swf", 200, 300];
var mc2Info=["movieClip", "material/movieClip/mc_seaSnail.swf", 100, 350];
var mcInfo=[mc0Info,mc1Info,mc2Info];

var dec0Info=["decoration", "material/decoration/dec_dandelion.swf", 0, 0];
var dec1Info=["decoration", "material/decoration/dec_music.swf", 0, 0];
var dec2Info=["decoration", "material/decoration/dec_heart.swf", 0, 0];
var decInfo=[dec0Info,dec1Info,dec2Info];

var teData1 = '<textData copyright="anvsoftTextEffectEditor"><textInfo><text>01 Text Effect!!!!!!!!!!</text><format font="Arial Black" color="0x00ff00" size="80" align="left" bold="true" italic="true" underline="false" embedFonts="false"/><shadow distance="5" angle="45" color="0xffffff" alpha="80" blur="8" strength="100"/></textInfo><effectInfo><entrance name="Swing" startEffectTime="0" entranceTime="4" effectTime="2"/><exit name="ToppleBackward" exitTime="6"/><interaction specifiedLoopTimes="false" loopTime="2" visibleAfterLoopOver="true"/></effectInfo></textData>';
var teData2 = '<textData copyright="anvsoftTextEffectEditor"><textInfo><text>02 Text Effect!!!!!!!!!!</text><format font="Arial Black" color="0xffff00" size="20" align="left" bold="false" italic="false" underline="false" embedFonts="false"/><shadow distance="5" angle="45" color="0x000000" alpha="80" blur="8" strength="100"/></textInfo><effectInfo><entrance name="FadeIn" startEffectTime="0" entranceTime="2" effectTime="2"/><exit name="ToppleBackward" exitTime="2"/><interaction specifiedLoopTimes="true" loopTime="2" visibleAfterLoopOver="true"/></effectInfo></textData>';
var teData3 = '<textData copyright="anvsoftTextEffectEditor"><textInfo><text>03 Text Effect!!!!!!!!!!</text><format font="Arial Black" color="0xff9900" size="40" align="left" bold="false" italic="false" underline="true" embedFonts="false"/><shadow distance="5" angle="45" color="0x0000ff" alpha="80" blur="8" strength="100"/></textInfo><effectInfo><entrance name="Swing" startEffectTime="0" entranceTime="2" effectTime="2"/><exit name="FadeOut" exitTime="2"/><interaction specifiedLoopTimes="false" loopTime="2" visibleAfterLoopOver="true"/></effectInfo></textData>';

var teData4 = '<textData copyright="anvsoftTextEffectEditor"><textInfo><text>New Text Effect!!!!!!!!!!</text><format font="Arial Black" color="0xff0000" size="50" align="left" bold="true" italic="true" underline="true" embedFonts="false"/><shadow distance="5" angle="45" color="0xffffff" alpha="80" blur="8" strength="100"/></textInfo><effectInfo><entrance name="FadeIn" startEffectTime="0" entranceTime="4" effectTime="2"/><exit name="FadeOut" exitTime="6"/><interaction specifiedLoopTimes="false" loopTime="2" visibleAfterLoopOver="true"/></effectInfo></textData>';

var teData5 = '<textData copyright="anvsoftTextEffectEditor"><textInfo><text>New Text Effect!!!!!!!!!!</text><format font="Arial Black" color="0xff0000" size="50" align="left" bold="true" italic="true" underline="true" embedFonts="false"/><shadow distance="5" angle="45" color="0xffffff" alpha="80" blur="8" strength="100"/></textInfo><effectInfo><entrance name="FadeIn" startEffectTime="0" entranceTime="1" effectTime="1"/><exit name="ToppleRightward" exitTime="6"/><interaction specifiedLoopTimes="false" loopTime="2" visibleAfterLoopOver="true"/></effectInfo></textData>';

var teData6 = '<textData copyright="anvsoftTextEffectEditor"><textInfo><text>Update Text Data!!!!!!!!!!</text><format font="Arial Black" color="0xff0000" size="50" align="left" bold="true" italic="true" underline="true" embedFonts="false"/><shadow distance="5" angle="45" color="0xffffff" alpha="80" blur="8" strength="100"/></textInfo><effectInfo><entrance name="FadeIn" startEffectTime="0" entranceTime="1" effectTime="1"/><exit name="ToppleRightward" exitTime="6"/><interaction specifiedLoopTimes="false" loopTime="2" visibleAfterLoopOver="true"/></effectInfo></textData>';

var photoEditor = '<template type="photoEditor" demoWidth="720" demoHeight="540" bgColor="0x0000ff" img="res/photo1.jpg" fillStyle="fit"><component type="theme"><property x="180" y="0" width="720" height="270" scaleX="0.5" scaleY="1" rotation="0" alpha="1" depth="0" /><info url="res/template.swf" /></component></template>';
var customTemplate = '<template type="customTemplate" demoWidth="720" demoHeight="540"><component type="textEffect"><property x="100" y="100" width="" height="" scaleX="1" scaleY="1" rotation="0" alpha="1" depth="0" /><info url=""><textData copyright="anvsoftTextEffectEditor"><textInfo><text>Text Effect of Next Data.</text><format font="Arial Black" color="0xff9900" size="40" align="left" bold="false" italic="false" underline="true" embedFonts="false"/><shadow distance="5" angle="45" color="0xffffff" alpha="80" blur="10" strength="100"/></textInfo><effectInfo><entrance name="Swing" startEffectTime="0" entranceTime="6" effectTime="2"/><exit name="ToppleBackward" exitTime="2"/><interaction specifiedLoopTimes="false" loopTime="2" visibleAfterLoopOver="true"/></effectInfo></textData></info><hyperlink url="http://www.anvsoft.com" target="0"/></component></template>';

var te0Info=["textEffect", "", 50, 50, teData1];
var te1Info=["textEffect", "", 150, 150, teData2];
var te2Info=["textEffect", "", 250, 250, teData3];
var teInfo=[te0Info,te1Info,te2Info];

//add component/////
function addComponent(index)
{
	addArrayCom(comInfo[index]);
}

//add movieclip/////
function addMovieClip(index)
{
	addArrayCom(mcInfo[index]);
}

//add decoration/////
function addDecoration(index)
{
	addArrayCom(decInfo[index]);
}

//addTextEffect/////
function addTextEffect(index)
{
	addArrayCom(teInfo[index]);
}

// update text effect///////
function updateTextEffect(type)
{
	var newDta;
	if(type == "text")
	{
		newDta = teData4;
		UpdateTextEffectVC("text",newDta);
	}else if(type == "effect"){
		newDta = teData5;
		UpdateTextEffectVC("effect",newDta);
	}else if(type == "data"){
		newDta = teData6;
		UpdateTextEffectVC("data",newDta);
	}
}

// update text effect///////
function updateHyperlink(url,target)
{
	UpdateHyperlinkVC(url,target);
}

//save js function///
function save()
{
	GetXMLDataVC();
}

//add component  js function//////
function addArrayCom(infoArray)
{
	AddComponentVC(infoArray[0], infoArray[1], infoArray[2], infoArray[3], infoArray[4]);
}
//load xml template files  js function//////
function loadXmlTemplateFiles(path1, path2)
{
	LoadProjectFileVC(path1);
	LoadProjectFileVC(path2);
}

//load xml template data js function//////
function loadXmlTemplateData(data1, data2)
{
	LoadXMLTemplateVC(data1);
	LoadXMLTemplateVC(data2);
}

//add  component vc function//////VC FUNCTION ONE
function AddComponentVC(type, path, x, y, data)
{
	thisMovie("templateEditor").AddComponentVC(type, path, x, y, data);
}

//remove component/////VC FUNCTION TWO
function RemoveComponentVC()
{
	thisMovie("templateEditor").RemoveComponentVC();
}

//change component layer function///////VC FUNCTION THREE
function ChangeComLayerVC(style)
{
	thisMovie("templateEditor").ChangeComLayerVC(style);
}

// update text effect///////VC FUNCTION THREE
function UpdateTextEffectVC(type,data)
{
	thisMovie("templateEditor").UpdateTextEffectVC(type,data);
}

// update text effect///////VC FUNCTION THREE
function UpdateHyperlinkVC(url,target)
{
	thisMovie("templateEditor").UpdateHyperlinkVC(url,target);
}

//save vc function///////VC FUNCTION FOUR
function GetXMLDataVC()
{
	xmlText.value = thisMovie("templateEditor").GetXMLDataVC();
}

//load project file vc function///////VC FUNCTION FIVE
function LoadProjectFileVC(path)
{
	thisMovie("templateEditor").LoadProjectFileVC(path);
}

//load xml template vc function///////VC FUNCTION FIVE
function LoadXMLTemplateVC(data)
{
	thisMovie("templateEditor").LoadXMLTemplateVC(data);
}

/**************Flash Call JS***********/

//flash call vc save xmlData////////VC FUNCTION SIX
function GetCurrentSelectedComXMLDataVC(str)
{
	xmlText.value = str;
}


/***********************************/
function thisMovie(movieName) 
{
    if (navigator.appName.indexOf("Microsoft") != -1)
	{
        return window[movieName];
    }
    else 
	{
        return document[movieName];
    }
}