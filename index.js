(function() {
    'use strict';
    var controls = document.getElementById('controls');
    var stop = document.getElementById('stopButton');
    var red = document.getElementById('stopLight');
    var slow = document.getElementById('slowButton');
    var orange = document.getElementById('slowLight');
    var go = document.getElementById('goButton');
    var green = document.getElementById('goLight');
    controls.addEventListener('mouseover', function(event) {
        console.log('Event target', event.target);
        if (event.target.id === 'stopButton' || event.target.id === 'slowButton' || event.target.id === 'goButton') {
            console.log('Eneterd ' + event.target.innerText + ' button.');
        }
    })
    controls.addEventListener('mouseout', function(event) {
        console.log('Event target', event.target);
        if (event.target.id === 'stopButton' || event.target.id === 'slowButton' || event.target.id === 'goButton') {
            console.log('Left ' + event.target.innerText + ' button.');
        }
    })
    controls.addEventListener('click', function() {
        console.log('Event target', event.target);
        if (event.target.id === 'stopButton') {
            red.classList.toggle('stop');
            orange.classList.remove('slow');
            green.classList.remove('go');
            console.log('Red bulb on');
        } else if (event.target.id === 'slowButton') {
            orange.classList.toggle('slow');
            red.classList.remove('stop');
            green.classList.remove('go');
            console.log('Orange bulb on');
        } else if (event.target.id === 'goButton') {
            green.classList.toggle('go');
            red.classList.remove('stop');
            orange.classList.remove('slow');
            console.log('Green bulb on');
        }
    })
})();
