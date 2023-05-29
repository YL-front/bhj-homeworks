const popup = document.getElementById('subscribe-modal');
const popupClose = document.querySelector('.modal__close');

popupClose.addEventListener('click', () => {
    popup.classList.remove('modal_active');
    //setCookie('popup', 'closed');
    document.cookie = 'popup=closed';
    //document.setCookie = 'popup=' + encodeURIComponent('closed')
    
});

// function setCookie (key, value) {
//     document.cookie = key + '=' + encodeURIComponent(value)
// }

function getCookie (name) {
    // const value = "; " + document.cookie;
    // let parts = value.split("; " + name + "=");
    // if (parts.length === 2) {
    //     return parts.pop().split(";").shift();
    // }
    const cookieArr = document.cookie.split('; ');                        
    const cookie = cookieArr.find(c => c.startsWith(name + '='));         
    return cookie;
}

if (getCookie('popup') !== 'closed') {
    popup.classList.add('modal_active');
}  










