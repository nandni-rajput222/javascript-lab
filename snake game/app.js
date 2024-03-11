let canvas= document.querySelector('#canvas');
let ctx=canvas.getContext('2d');
ctx.fillStyle=" lightseagreen";
// ctx.fillRect(0, 0, 100, 100);
let cs=60;
let H=750;
let W=1200;
let Snake={
     init: 5,
    direction:'right',
    cells:[],

    CreateSnake:function()
    {
        for(let i=0;i<this.init;i++)
        {
            this.cells.push({
                x:i,
                y:0
            })
        }
    },
    DrawSnake:function()
    {
        for(let cell of this.cells)
        {
            ctx.fillRect(cell.x*cs,cell.y*cs,cs-1,cs-1)
        }
    },
    UpdateSnake: function(){
        this.cells.shift();
        const Headx=this.cells[this.cells.length-1].x;
        const Heady=this.cells[this.cells.length-1].y;

        let nextX;
        let nextY;
        if(this.direction==='down'){
            nextX=Headx;
            nextY=Heady+1;
        }
        else if(this.direction==='up'){
            nextX=Headx;
            nextY=Heady-1;
        }
        else if(this.direction==='left')
        {
            nextX=Headx-1;
            nextY=Heady;
        }
        else{
            nextX=Headx+1;
            nextY=Heady;
        }
        this.cells.push({
            x:nextX,
            y:nextY
        })
    }
    
}
function initial()
{
    Snake.CreateSnake();
    food=getRandomFood();
    function keypressed(e){
        if(e.key==='ArrowDown'){
            Snake.direction='down';
        }
        else if(e.key==='ArrowUp'){
            Snake.direction='up';
        }
        else if(e.key==='ArrowLeft'){
            Snake.direction='left';
        }
        else{
            Snake.direction="right";
        }
        
    }
    document.addEventListener('keydown',keypressed);
}
function update(){  
     Snake.UpdateSnake();
}

function draw()
{
    ctx.clearRect(0,0,W,H);
    ctx.fillStyle='yellow';
    ctx.fillRect(food.x*cs,food.y*cs,cs,cs);
    ctx.fillStyle='lightseagreen';
    Snake.DrawSnake();
}
function getRandomFood(){
    const foodX=((Math.random()*(W-cs)/cs));
    const foodY=((Math.random()*(H-cs)/cs));
    food={
        x:foodX,
        y:foodY
    }
    return food;
}
initial();
function Gameloop()
{
 update();
 draw();
}
setInterval(Gameloop,500);
// function init(){
// ctx.fillRect(W, H, 100, 100);
// }
// function update(){
//     W+=100;
//     // console.log("inside update");
// }
// function draw(){
//     ctx.clearRect(0, 0, 1200, 750);
//     ctx.fillRect(W, H, 100, 100);

//     // console.log("inside draw");
// }
// init();
// function Gameloop(){
//     update();
//     draw();
// }
// setInterval(Gameloop, 100)