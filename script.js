let isMoving = true

function setBackgroundMoving() {
    // setting background berjalan
    if(isMoving == true) {        
        setTimeout(function() {
            let bg = document.getElementById('main')
            bg.style.backgroundPositionY = (parseInt(bg.style.backgroundPositionY.replace('px','')) + 1) + 'px'
    
            // update score
            document.getElementById('score').innerHTML = parseInt(document.getElementById('score').innerHTML) + 1
    
            // panggil recursive setbackgroundmoving
            setBackgroundMoving()
            // console.log(bg)
        }, 5)
    }
}

// inisialisasi background berjalannya
setBackgroundMoving()

// setting meteor
function setMeteorMoving() {
    let meteor = document.getElementById('meteor')
        plane = document.getElementById('plane')

    setTimeout(function() {
        meteor.style.marginTop = (parseInt(meteor.style.marginTop.replace('px', '')) + 1) + 'px'
        
        if(parseInt(meteor.style.marginTop.replace('px', '')) > 500) {
            meteor.style.marginLeft = (Math.floor(Math.random() * 250) + 50) + 'px'
            meteor.style.marginTop = '-100px'
        }

        if(meteor.offsetTop + 56 >= plane.offsetTop && 
           meteor.offsetLeft + 50 >= plane.offsetLeft && 
           meteor.offsetTop + 56 <= plane.offsetTop + 100 && 
           meteor.offsetLeft <= plane.offsetLeft + 50) {
            alert('Game Over, Score :' + document.getElementById('score').innerHTML)
            isMoving = false
            plane.setAttribute('class', 'freeze')
            meteor.setAttribute('class', 'freeze')
        } else {
            // gerakkan lagi meteornya
            setMeteorMoving()
        }
    }, 1)
}

// inisialisasi meteor
setMeteorMoving()

window.addEventListener('keydown', function(e) {
    let plane = document.getElementById('plane'),
    left = parseInt(plane.style.marginLeft.replace('px', '')),
    top = parseInt(plane.style.marginTop.replace('px', ''))
    /* 
    37 -> kiri
    38 -> atas
    39 -> kanan
    40 -> bawah
    */
   if(isMoving == true) {
       if(e.keyCode == 37) {
        if(left > 0) {
            plane.style.marginLeft = (left - 10) + 'px'
        }
       } else if(e.keyCode == 38) {
        if(top > 0) {
            plane.style.marginTop = (top - 10) + 'px'
        }
       } else if(e.keyCode == 39) {
        if(left < 340) {
            plane.style.marginLeft = (left + 10) + 'px'
        }
       } else if(e.keyCode == 40) {
        if(top < 400) {
            plane.style.marginTop = (top + 10) + 'px'
        }
       } 
   }
})
