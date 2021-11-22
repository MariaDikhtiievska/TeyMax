
/*function $(el){
    return document.getElementById(el);
}
var tzdragg = function(){
    return {
        move : function(divid,xpos,ypos){
            console.log('1');
            var a = $(divid);
            $(divid).style.left = xpos + 'px';
            $(divid).style.top = ypos + 'px';
        },
        startMoving : function(evt){

            evt = evt || window.event;
            var posX = evt.clientX,
                posY = evt.clientY,
                a = $('elem'),
                divTop = a.style.top,
                divLeft = a.style.left;

            divTop = divTop.replace('px','');
            divLeft = divLeft.replace('px','');
            var diffX = posX - divLeft,
                diffY = posY - divTop;
            document.onmousemove = function(evt){
                evt = evt || window.event;
                var posX = evt.clientX,
                    posY = evt.clientY,
                    aX = posX - diffX,
                    aY = posY - diffY;
                var boun=document.getElementById("parent").offsetWidth-document.getElementById("elem").offsetWidth;

                if((aX>0)&&(aX<boun)&&(aY>0)&&(aY<boun))
                    tzdragg.move('elem',aX,aY);
            }
        },
        stopMoving : function(){
            var a = document.createElement('script');
            document.onmousemove = function(){}
        },
    }
}();
/*

 */
const el = document.querySelector(".square");


el.addEventListener("mousedown", onmousedown);

function  onmousedown(e){
    window.addEventListener("mousemove", mousemove);
    window.addEventListener("mouseup", mouseup);

    let prevX = e.clientX;
    let prevY = e.clientY;

    function mousemove(e) {
        let newX = prevX - e.clientX;
        let newY = prevY - e.clientY;


        el.style.left = el.offsetLeft - newX + "px";
        el.style.top = el.offsetTop - newY + "px";

        prevX = e.clientX;
        prevY = e.clientY;
    }
    function  mouseup(){
window.removeEventListener("mousemove", mousemove);
window.removeEventListener("mouseup", mouseup);
    }
}

