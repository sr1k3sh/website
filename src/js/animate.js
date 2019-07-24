import anime from 'animejs';


export function logoAnimation(element,translate) {
    anime({
        targets: element,
        translateY: translate,
        duration:1500,
        easing:'linear'
    });
    
}
export function scaling(target, translatex, translatey, delay, duration,scale){
    anime({
       targets: target,
       scale:scale,
        translateX: translatex,
        translateY:translatey,
        duration: duration,
        delay:delay,
        easing: 'easeInQuad'
    })
}
export function justScale(target,delay,duration,scale){
    anime({
        targets: target,
        scale:scale,
        duration: duration,
        delay: delay,
        easing: 'easeInQuad'
    })
}
export function enlarge(target,width,height, translatex, translatey, delay, duration) {
    anime({
        targets: target,
        width:width,
        height:height,
        translateX: translatex,
        translateY: translatey,
        duration: duration,
        delay: delay,
        easing: 'easeInQuad'
    })
}
export function translate(element,translatex,translatey,delay,duration){
    anime({
        targets: element,
        translateX: translatex,
        translateY:translatey,
        duration: duration,
        delay:delay,
        easing: 'easeInQuad'
    });
}
export function visiblity(target,opacity){
    anime({
        targets:target,
        opacity:opacity,
        easing: 'easeInQuad',
        duration:1500
    })
}
export function ease(target){
    var time = anime.timeline()
    time.add(
        { 
        targets: target,
        width: [0,260], // -> from '28px' to '100%',
        easing: 'easeInOutQuad',
        direction: 'alternate',
        //opacity:1,
        loop: false,
        delay:1000
    })
}
export function bounce(id){
   anime({
            //autoplay: false,
            targets: id,
            translateY: 80,
            direction: 'alternate',
            loop: 5,
            duration: 300,
            opacity: 100,
            easing: 'easeInOutSine',
        }
    )
   
    //anime();

    // var bounceDown = anime({
    //     autoplay: false,
    //     targets: id,
    //     translateY: {
    //         value: ['0px', '60px'],
    //         duration: 575,
    //         easing: 'easeInQuad',
    //         loop:4
    //     },
    //     complete: function () { bounceUp.loop=3 },
    // });

    // bounceDown.play(); 
}
export function logoanime(fillin,fillout,lineout){
   
    var animate=anime.timeline();
    animate.add({
        targets: fillin,

        strokeDashoffset: {
            value: [anime.setDashoffset, 0],
            duration: 2000,
            delay: function (el, i) { return 100 + (i * 100); },
            easing: 'easeOutQuart'
        },
        stroke: {
            value: ['none', 0],
            duration: 500,
            delay: 500,
            easing: 'easeInQuad'
        },
        opacity: {
            value: 0,
            duration: 1,
            delay: function (el, i) { return 1900 + (i * 80); },
        },
        offset: 0
    })
        .add({
            targets: fillout,

            strokeDashoffset: [anime.setDashoffset, 0],

            easing: 'easeInOutSine',
            duration: 400,
            delay: function (el, i) {
                return i * 250
            },
            direction: 'alternate',
            loop: true,


        })
        .add({
            targets: lineout,
            strokeDashoffset: {
                value: [0, anime.setDashoffset],
                duration: 1200,
                delay: function (el, i) { return 2500 + (i * 100); },
                easing: 'easeInQuart'
            },
            strokeWidth: {
                value: [0, 5],
                delay: function (el, i) { return 2000 + (i * 100); },
                duration: 200,
                easing: 'linear'
            },
            offset: 0
        })
}
export function cross(element,value,duration) {
    anime({
        targets: element,
        strokeDashoffset: value,
        easing: "easeInOutSine",
        direction: 'alternate',
        loop: true,
        duration: duration,
        delay(el, i) {
            return i * 250;
        }
    });
}


