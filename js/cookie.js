<script>
    // Установка cookie с возможностью указания срока
    function setCookie(name, value, days) {
        let expires = "";
        if (days) {
            let date = new Date();
            date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
            expires = "; expires=" + date.toUTCString();
        }
        document.cookie = name + "=" + (value || "") + expires + "; path=/";
    }

    // Получение значения cookie по имени
    function getCookie(name) {
        let matches = document.cookie.match(new RegExp(
            "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
        ));
        return matches ? decodeURIComponent(matches[1]) : undefined;
    }

    // Основная функция проверки наличия cookie
    function checkCookies() {
        const cookieNote = document.getElementById('cookie_note');
        const cookieBtnAccept = cookieNote?.querySelector('.cookie_accept');

        // Проверка наличия cookie
        if (!getCookie('cookies_policy') && cookieNote && cookieBtnAccept) {
            cookieNote.classList.add('show');

            // Обработчик клика на кнопку согласия
            cookieBtnAccept.addEventListener('click', function () {
                setCookie('cookies_policy', 'true', 90); // Срок хранения 3 месяца (90 дней)
                cookieNote.classList.remove('show');
            });
        }
    }

    // Инициализация
    document.addEventListener('DOMContentLoaded', checkCookies);
</script>
