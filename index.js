let scoreHome= document.getElementById("score-home")
let scoreGuest= document.getElementById("score-guest")
let plus1=document.getElementById("h1")
let plus2=document.getElementById("h2")
let plus3=document.getElementById("h3")
let plusg1=document.getElementById("g1")
let plusg2=document.getElementById("g2")
let plusg3=document.getElementById("g3")
let homeScore=0
let guestScore=0


plus1.onclick= function(){
    homeScore+=1
    scoreHome.innerText = homeScore
}
plus2.onclick= function(){
    homeScore+=2
    scoreHome.innerText=homeScore
}
plus3.onclick= function(){
    homeScore+=3
    scoreHome.innerText=homeScore
}


plusg1.onclick= function(){
    guestScore+=1
    scoreGuest.innerText = guestScore
}
plusg2.onclick= function(){
    guestScore+=2
    scoreGuest.innerText=guestScore
}
plusg3.onclick= function(){
    guestScore+=3
    scoreGuest.innerText=guestScore
}


function updateHomeScore(points) {
   homeScore+=points
    scoreHome.innerText = homeScore
}

function updateGuestScore(points) {
   guestScore+=points
    scoreGuest.innerText = guestScore
}

