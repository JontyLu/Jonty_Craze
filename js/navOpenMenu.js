/**
 * Created by lenovo on 2017/3/28.
 */
window.onload=function(){
    var navOpenMenu = document.getElementsByClassName("navOpenMenu")[0];
    var noNavOpenMenu = document.getElementsByClassName("container")[0];

    var odiv = document.getElementsByClassName("smallMenu")[0];

    odiv.onclick=function ()
    {

        startmove(0,10);//��һ������Ϊdiv   left���Ե�Ŀ��ֵ   �ڶ���Ϊ ÿ���ƶ���������

    };
    noNavOpenMenu.onclick =function ()
    {

        if (navOpenMenu.offsetLeft >= -10){
            startmove(-200,-10);
        }

    }
};

var timer=null;
function startmove(target,speed)
{

    var navOpenMenu = document.getElementsByClassName("navOpenMenu")[0];
    clearInterval(timer);
    timer=setInterval(function (){

        if(navOpenMenu.offsetLeft==target)
        {
            clearInterval(timer);
        }
        else
        {
            navOpenMenu.style.left=navOpenMenu.offsetLeft+speed+'px';
        }

    },10)
}