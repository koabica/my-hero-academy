var flra_array = {"MainContentW":"1140","LeftBannerW":"160","RightBannerW":"160","TopAdjust":"450","TopAdjustScroll":"50"}; 
var MainContentW=parseInt(flra_array.MainContentW);var LeftAdjust=parseInt(flra_array.LeftAdjust);var TopAdjust=parseInt(flra_array.TopAdjust);var RightAdjust=parseInt(flra_array.RightAdjust);var LeftBannerW=parseInt(flra_array.LeftBannerW);var TopAdjustScroll=parseInt(flra_array.TopAdjustScroll);var leftDivID='floatLadsbyvli';var rightDivID='floatRadsbyvli';var objAdDivRight=document.getElementById(rightDivID);var objAdDivLeft=document.getElementById(leftDivID);var body=document.querySelector("body");var html=document.querySelector("html");
function FloatTopDiv()
{startLX=((document.body.clientWidth-MainContentW)/2)-(LeftBannerW+LeftAdjust),startLY=TopAdjust;startRX=((document.body.clientWidth-MainContentW)/2)+(MainContentW+RightAdjust),startRY=TopAdjust;var d=document;var scrollTopDevvn=window.pageYOffset||d.documentElement.scrollTop||d.body.scrollTop||0;
function set_position(divID,xP,yP){divID.style.left=xP+'px';divID.style.top=yP+'px';}
if(scrollTopDevvn>=Math.abs(TopAdjust-TopAdjustScroll)){startLY=TopAdjustScroll;startRY=TopAdjustScroll;objAdDivLeft.style.position='fixed';objAdDivRight.style.position='fixed';}else{startLY=TopAdjust;startRY=TopAdjust;objAdDivLeft.style.position='absolute';objAdDivRight.style.position='absolute';};set_position(objAdDivLeft,startLX,startLY);set_position(objAdDivRight,startRX,startRY);}
function ShowAdDiv()
{objAdDivRight.style.display="block";objAdDivLeft.style.display="block";body.style.overflowX="hidden";html.style.overflowX="hidden";FloatTopDiv();}
ShowAdDiv();window.addEventListener('resize',function(){FloatTopDiv();});window.addEventListener('scroll',function(){FloatTopDiv();});