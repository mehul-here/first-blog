var cookie = 1
const image = document.getElementById('cookie_img');
const sound = document.getElementById('crunch');
image.addEventListener('click', () => {
    if (cookie == 1) {
        cookie = cookie + 1
        document.getElementById('cookie_img').setAttribute('src', 'cookie2.png')
        document.getElementById('crunch').play();
    }
    else if (cookie == 2) {
        cookie = cookie + 1
        document.getElementById('cookie_img').setAttribute('src', 'cookie3.png')
        document.getElementById('crunch').play();
    }
    else if (cookie == 3) {
        cookie = cookie + 1
        document.getElementById('cookie_img').setAttribute('src', 'empty_plate.png')
        document.getElementById('crunch').play();
    }
});