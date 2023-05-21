import Vimeo from '@vimeo/player'
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Vimeo(iframe);


player.on('timeupdate', throttle(function ({seconds}) {
    localStorage.setItem('videoplayer-current-time', seconds);
}));

const currentTime = localStorage.getItem('videoplayer-current-time');
if (currentTime) {
    player.setCurrentTime(currentTime)
    };
