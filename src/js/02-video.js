import Vimeo from '@vimeo/player'
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Vimeo(iframe);


// player.on('timeupdate', throttle(function ({seconds}) {
//     localStorage.setItem('videoplayer-current-time', seconds);
// }));

player.on('timeupdate', throttle(function (evt) {
    const currentTime = evt.seconds;
    localStorage.setItem('videoplayer-current-time', currentTime);
}, 1000));

const currentTime = localStorage.getItem('videoplayer-current-time');
if (currentTime) {
    player.setCurrentTime(currentTime)
    };
