score=0;
cross=true;


document.onkeydown=function(e)
{
    console.log("key code is : ",e.keyCode);
    if(e.keyCode==38)//up key
    {
        bean=document.querySelector(".bean");
        bean.classList.add("beanAnimation");
        setTimeout(()=>{
            bean.classList.remove("beanAnimation");
        },700);
    }
    if(e.keyCode==39)//left key
    {
        bean=document.querySelector(".bean");
        bean_x=parseInt(window.getComputedStyle(bean,null).getPropertyValue('left'));
        bean.style.left=bean_x+112+"px";
    }
    if(e.keyCode==37)//right key
    {
        bean=document.querySelector(".bean");
        bean_x=parseInt(window.getComputedStyle(bean,null).getPropertyValue('left'));
        bean.style.left=bean_x-112+"px";
    }
}

//collision detection
//checking collision in every 100 msec
setInterval(() => {
    bean=document.querySelector(".bean");
    obstacle=document.querySelector(".obstacle");
    gameover=document.querySelector(".gameover"); 
    scoreCnt = document.querySelector(".scoreCnt");

    //finding current left and top position of bean
    bean_x=parseInt(window.getComputedStyle(bean,null).getPropertyValue('left'));
    bean_y=parseInt(window.getComputedStyle(bean,null).getPropertyValue('top'));

    //finding current and top position of obstacle : Mrs. Wicket
    obstacle_x=parseInt(window.getComputedStyle(obstacle,null).getPropertyValue('left'));
    obstacle_y=parseInt(window.getComputedStyle(obstacle,null).getPropertyValue('top'));

    //checking if there is a collision
    offset_x=Math.abs(bean_x-obstacle_x);
    offset_y=Math.abs(bean_y-obstacle_y);
    if(offset_x<92 && offset_y<52)
    {
        console.log(offset_x,offset_y);
        gameover.style.visibility="visible";
        obstacle.classList.remove("obstacleAnimation");
    }
    else if(offset_x<145 && cross){
        score+=1;
        updateScore(score);
        cross=false;
        setTimeout(() => {
            cross=true;
        }, 1000);

    }   
}, 100);

function updateScore(score)
{
    let scores=document.querySelector(".scoreCnt");
    scores.innerHTML="Your Score: "+score;
}