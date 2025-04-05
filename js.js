var cursor_x=0;
var cursor_y=0;
const window_w=window.screen.width;
const window_h=window.screen.height;
movemconst=-1;
function movem(mpu){
	if (movemconst!=-1){
		movemconst=-1;
	}else{
		movemconst=mpu;}
}
function mv(m,v){
	return document.getElementById("m"+(m+1).toString()+"v"+(v+1).toString())
}
function mm(m){
	return document.getElementById("m"+(m+1).toString())
}
d = 0.0;
ob = [[500,500],[100,100],[750,250]]
function xy2rad(x,y){
	return Math.atan(y/x)+(Math.PI/2)*(Math.sign(x)+3);
}
function normalize(x,y){
	return [ x/Math.sqrt(x*x+y*y), y/Math.sqrt(x*x+y*y) ];
}
function distance(x,y){
	return Math.sqrt(x*x+y*y)
}
function distance2(x,y){
	return x*x+y*y
}
setInterval(function () {
	if (movemconst!=-1){
		ob[movemconst][0] = cursor_x;
		ob[movemconst][1] = cursor_y;
	}
	for (m=0;m<3;m++){
		mm(m).style.left=ob[m][0].toString()+"px"
		mm(m).style.top=ob[m][1].toString()+"px"
		for (v=1;v<3;v++){
			vm = (m+v)%3;
			mv(m,vm).style.transform = "translate(50px, 50%) rotate(" + xy2rad(ob[vm][0]-ob[m][0], ob[vm][1]-ob[m][1]).toString() + "rad)";
			mv(m,vm).style.fontSize = (100000000 / distance2(ob[m][0]-ob[vm][0], ob[m][1]-ob[vm][1])).toString()+"%";
		}
	}
	}
	, 10);

document.onmousemove = function(event)
{
 cursor_x = event.pageX;
 cursor_y = event.pageY;
}
