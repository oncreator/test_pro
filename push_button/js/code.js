var canvas;
var context;
var canvasContainer;
var btn;
var btn_start;
var btn_once;
var start_panel;
var end_panel
var countps = 0;
var count_total = 0;
var dur   = 1;
var time  = 0;
var time_id;

var misson_array = new Array(10)
misson_array[0] = 1
misson_array[1] = 2
misson_array[2] = 3
misson_array[3] = 4
misson_array[4] = 5
misson_array[5] = 5
misson_array[6] = 6
misson_array[7] = 6
misson_array[8] = 7
misson_array[9] = 7

// init
function init(){
    // canvasContainer = document.getElementById("canvasContainer");
    btn         = document.getElementById("btn");
    btn_start   = document.getElementById("btn_start");
    btn_once    = document.getElementById("btn_once");
    start_panel = document.getElementById("start");
    end_panel   = document.getElementById("end");
    
    btn.addEventListener("touchstart", btn_click, false);
    btn.addEventListener("touchend", btn_click2, false);
    btn_start.addEventListener("touchstart", btn_start_click, false);
    btn_start.addEventListener("touchend", btn_start_click2, false);
    btn_once.addEventListener("touchstart", btn_once_click, false);
    btn_once.addEventListener("touchend", btn_once_click2, false);
    // btn.ontouchstart     = btn_click;
    //btn.onmouseup       = btn_click2;
    // btn_start.onclick = btn_start_click;
    // btn_once.onclick  = btn_once_click;
}
init();

//
function btn_click(){
	// alert("时间到！ 你的成绩是" + count);
	countps++;
	count_total++;
	btn.innerText = count_total;
	btn.style.border="10px  solid gray";
}

function btn_click2(){
	btn.style.border="10px  solid black";
}

function btn_start_click(){
	btn_start.style.border="10px  solid gray";
}

function btn_start_click2(){
	start_panel.style.display="none";
	time_id = setInterval(back_time, dur * 1000);
	btn_start.style.border="10px  solid black";
}

function btn_once_click(){
	btn_once.style.border="10px  solid gray";
}

function btn_once_click2(){
	countps     = 0;
	count_total = 0;
	time        = 0;
	end_panel.style.display   = "none";
	start_panel.style.display = "block";
	btn_once.style.border="10px  solid black";
}

function back_time(){
	var flag = 0
	console.log(time);
	if (time < 10){
		if (misson_array[time] > countps){
			flag = 1;
		}
	}else{
		flag = 1;
	}

	if(flag == 1){
		clearInterval(time_id);
		// end_panel.innerText = "时间到！ 你的成绩是" + count;
		var title = document.getElementById("title");
		title.innerText = "时间到！ 你的成绩是" + count_total;
		end_panel.style.display="block";

		// alert("时间到！ 你的成绩是" + count);
		count = 0;
		btn.innerText = count_total;
	}else{
		time++;
		countps = 0;
	}
}
