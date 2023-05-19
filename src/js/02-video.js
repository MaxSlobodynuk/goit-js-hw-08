import Vimeo from '@vimeo/player'
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Vimeo(iframe);



player.getCurrentTime().then(function (seconds) {
    localStorage.setItem('videoplayer-current-time', seconds);
}).catch(function (error) {
    console.log(error);
});

player.play();

player.on('timeupdate', throttle(function () {
    player.getCurrentTime().then(function (seconds) {
        localStorage.setItem('videoplayer-current-time', seconds);
    }).catch(function (error) {
    console.log(error);
    });
}, 1000));

const currentTime = localStorage.getItem('videoplayer-current-time');
if (currentTime) {
    player.setCurrentTime(currentTime).catch(function (error) {
        console.log(error);
    });
}