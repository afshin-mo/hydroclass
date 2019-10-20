
window.onscroll=function(){setFixedMenu()};
var nav=document.getElementById('nav');
var sticky=nav.offsetTop;
function setFixedMenu(){
   // debugger;
    if(window.innerWidth>768){
        if((window.pageYOffset>sticky)){
            nav.classList.add('fixed');
        }else{
            nav.classList.remove('fixed');
        }
    }else{
        nav.classList.remove('fixed');
    }
}
window.onresize=function(){
    if(window.innerWidth<768){
        nav.classList.remove('fixed');
        $('.nav').hide();
        document.getElementById('nav-icon2').classList.remove('open');

    }
}

function gotoStart(){
    //document.getElementById('startSection').scrollIntoView();
    $('html, body').animate({scrollTop: $('#startSection').offset().top - 170}, 1000);
    return false;
}

$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    responsiveClass:true,
    animateOut: 'slideOutDown',
    animateIn: 'flipInX',
    autoplay:true,
    autoplayTimeout:6000,
    autoplayHoverPause:true,
    responsive:{
        0:{
            items:1,
            nav:false
        },
        600:{
            items:2,
            nav:false
        },
        1000:{
            items:4,
            nav:false,
            loop:false
        }
    }
})
$(document).ready(function(){
    var resizeTimer;
    $(window).on('resize', function (e) {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(function () {
            if ($(window).width() > 768) {
                $('.nav').show();
            } else {
                $('.nav').hide();
            }
        }, 250);
    });


	$('#nav-icon2').click(function(){
        $(this).toggleClass('open');
        $(".nav").slideToggle( "slow" );
    });
    
    $('.slider-nav__item').on('click',function(){
        $('.slider-nav__item').removeClass('selected');
        $(this).addClass('selected');
    });
});
var allElems = document.getElementsByClassName('trigger');
//console.log(allElems);
setInterval(function(){
    for (i = 0; i < allElems.length; i++) {
        //debugger;
        if(allElems[i].checked){
            $('.slider-nav__item').removeClass('selected');
            if(i==allElems.length-1){
                allElems[0].checked=true;
                $('#'+0).addClass('selected');
            }else{
                allElems[i+1].checked=true;
                $('#'+(i+1)).addClass('selected');
            }
            wait();
        }
    }
},5000);

const wait=setInterval(function(){
    //console.log('wait');
},6000);

AOS.init();
/*var user={
    username:'afshinmo',
    password:'12345'
    };
var database=[
    {
        username:'afshinmo',
        password:'12345'
    }

];
var newsfeed=[
    {
        username:'afshin',
        timeline:'5'
    },
    {
        username:'reza',
        timeline:'4'
    },
    {
        username:'ahmad',
        timeline:'2'
    }
]

var usernamePrompt=prompt('Please enter username');
var passwordPrompt=prompt('Please enter password');
signIn(usernamePrompt,passwordPrompt);

function signIn(user,pass){
    if(user===database[0].username &&
        pass===database[0].password){
            console.log(newsfeed);
    }else{
        console.log('sorry wrong password or username');
    }
}
*/
// var todos=[
//     "clean room",
//     "brush teeth",
//     "exercise"
// ];
// var todosNew=[
//     "clean room!",
//     "brush teeth!",
//     "exercise!"
// ];

// for(var i=0;i<todos.length;i++){
//     console.log(i);
// }
// todos.forEach(function(todo,i){
//     console.log(todo+" "+i);
// })

// function printList(listItem,index){
//     console.log(listItem+" "+index);
// }

// todos.forEach(printList);
// todosNew.forEach(printList);

/* var button=document.getElementsByTagName('button')[0];
button.addEventListener('click',function(){
    console.log('Click!!!');
});
button.addEventListener('mouseenter',function(){
    console.log('Mouse Enter!!!');
}); */

// var myBut=document.getElementById('addButton');
// var userInput=document.getElementById('userInput');
// var list=document.getElementById('list');


// function clickButton(){
//     addToList();
// }
// function enterKeypress(event){
//     if(event.keyCode===13){
//         addToList();
//     }
// }

// function select(e){

// }
// myBut.addEventListener('click',clickButton);

// userInput.addEventListener('keypress',enterKeypress);

// function listAction(e){
//     if(e.target.matches('li')){
//         e.target.classList.toggle('selected');
//     }else if(e.target.matches('button.delete')){
//         var parent=e.target.parentElement;
//         list.removeChild(parent);
//     }
// }
// list.addEventListener('click',listAction);



// function addToList(){
//     if(userInput.value.length>0){
//         var li=document.createElement('li');
//         var bt=document.createElement('button');
//         li.appendChild(document.createTextNode(userInput.value));
//         bt.appendChild(document.createTextNode('Delete'));
//         bt.classList.add('delete');
//         li.appendChild(bt);
//         list.appendChild(li);
//         userInput.value="";
//     }
// }


// // advanced java script
// const array=[1,2,5,10,20];
// const newArray=[];
// array.forEach((num)=>{
// 	newArray.push(num*2);
// });
// console.log('for each array',newArray);
// const mapArray=array.map((num)=>{
// 	return num*2;
// });
// console.log('map Array',mapArray);
// const filterArray=array.filter(num=> num>5);

// console.log('filter Array',filterArray);

// const reduceArray=array.reduce((accumolator,num)=>{
//     return accumolator+num;
// },5);
// console.log(reduceArray);

// class Player{
//     constructor(name,type){
//         console.log('Player',this);
//         this.name=name;
//         this.type=type;
//     }
//     introduce(){
//         console.log(`Hi I'm ${this.name}, I'm a ${this.type}`);
//     }
// }
// class Wizard extends Player{
//     constructor(name,type){
//         super(name,type);
//         console.log('wizard',this);
//     }
//     play(){
//         console.log(`Wee I am a ${this.type}`);
//     }
// }

// let wizard1=new Wizard('Afshin','Dark Magic');
// let wizard2=new Wizard('Bahar','Healer');