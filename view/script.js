// Modal de Cookies
document.addEventListener('DOMContentLoaded', (event) => {
    const cookieModal = document.getElementById('cookieModal');
    const closeModal = document.querySelector('.cookie-modal .close');
    const acceptCookies = document.getElementById('acceptCookies');

    // Verifica se o usuário já aceitou os cookies
    if (!getCookie('cookiesAccepted')) {
        cookieModal.style.display = 'block';
    }

    // Função para fechar o modal
    closeModal.onclick = function() {
        cookieModal.style.display = 'none';
    }

    // Função para aceitar os cookies
    acceptCookies.onclick = function() {
        setCookie('cookiesAccepted', 'true', 365);
        cookieModal.style.display = 'none';
    }

    // Função para definir um cookie
    function setCookie(name, value, days) {
        const date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        const expires = "expires=" + date.toUTCString();
        document.cookie = name + "=" + value + ";" + expires + ";path=/";
    }

    // Função para obter um cookie
    function getCookie(name) {
        const cname = name + "=";
        const decodedCookie = decodeURIComponent(document.cookie);
        const cookieArray = decodedCookie.split(';');
        for (let i = 0; i < cookieArray.length; i++) {
            let cookie = cookieArray[i];
            while (cookie.charAt(0) == ' ') {
                cookie = cookie.substring(1);
            }
            if (cookie.indexOf(cname) == 0) {
                return cookie.substring(cname.length, cookie.length);
            }
        }
        return "";
    }
});
