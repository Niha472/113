function preload(){

}
function setup(){
canvas=createCanvas(400,400)
canvas.center()
camera=createCapture(VIDEO)
camera.hide()
}
function draw(){
image(camera,0,0,400,400)
fill('purple')
circle(100,100,100)
circle(320,100,100)
circle(100,350,100)
circle(320,350,100)
rect(80,100,50,200)
rect(300,100,50,200)
rect(120,100,200,50)
rect(120,350,200,50)
}
function take_snapshot(){
    save('color.png')
}
function filter(){
color=document.getElementById("text").value 

}