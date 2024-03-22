let navbar = document.querySelector('.navbar');

document.querySelector('#menu').onclick = () =>{
    navbar.classList.toggle('active');
}

window.onscroll = () =>{
    navbar.classList.remove('active');
}


$(document).ready(function(){

    $('.button').click(function(){
        $(this).addClass('active').siblings().removeClass('active');

        var filter = $(this).attr('data-filter')

        if(filter == 'all'){
            $('.gallery .image').show(400);
        }
        else{
            $('.gallery .image').not('.' +filter).hide(200);
            $('.gallery .image').filter('.' +filter).show(200);
        }

    });

    $('.gallery').magnificPopup({
        delegate:'a',
        type:'image',
        gallery:{
            enabled:true,
        }
    });

});

document.addEventListener('DOMContentLoaded', function () {
    const audioElements = document.querySelectorAll('audio');

    function pauseOtherAudios(currentAudio) {
        audioElements.forEach(audio => {
            if (audio !== currentAudio) {
                audio.pause();
            }
        });
    }

    audioElements.forEach(audio => {
        audio.addEventListener('play', function () {
            pauseOtherAudios(this);
        });
    });
});
