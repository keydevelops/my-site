document.addEventListener("DOMContentLoaded", () => {
    function loadTyping(text, container, startup) {
        const element = document.getElementById(container);
        const pageElement = document.getElementById('sel-lang');
        let index = 0;
        pageElement.style.opacity = '0';
        element.style.display = 'block';

        const typingEffect = setInterval(() => {
            if (index < text.length) {
                element.innerHTML += text[index];
                index++;
            } else {
                clearInterval(typingEffect);
                element.style.animation = '';
                if (startup === true) {
                    setTimeout(() => {
                        element.style.display = 'none';
                        element.style.width = '0';
                        pageElement.style.opacity = '1';
                        pageElement.style.display = 'block';
                    }, 2000);
                } else {
                    element.style.display = 'block';
                }
            }
        }, 4500 / text.length);
    }

    function aboutme(text) {
        const element = document.getElementById('site-container');
        const pageElement = document.getElementById('sel-lang');
        pageElement.style.display = 'none';
        element.style.display = 'block';
        element.style.width = 'auto';
        loadTyping(text, 'site-container', false);
    }

    function myprojects(text) {
        const element = document.getElementById('site-container');
        const pageElement = document.getElementById('sel-lang');
        pageElement.style.display = 'none';
        element.style.display = 'block';
        element.style.width = 'auto';
        loadTyping(text, 'projects-container', false);
    }

    function copyright(text) {
        const element = document.getElementById('site-container');
        const pageElement = document.getElementById('sel-lang');
        pageElement.style.display = 'none';
        element.style.display = 'block';
        element.style.width = 'auto';
        loadTyping(text, 'copyright-container', false);
    }

    document.getElementById('russ').addEventListener('click', () => {
        aboutme('Всем привет! Я ключ или KeyDevS. Я создаю всякие штучки на PHP, Python, Unity, C#, Html. Я создавал лёгкие сайты, приложения, и так далее. Я буду изучать CSS и SCSS чтобы делать красивые сайты. Я всегда буду изучать новые технологии и инструменты, чтобы стать еще лучше в своей работе.');
        setTimeout(() => {
            myprojects(`Мои проекты:
            1. Этот сайт,
            2. Dynar messanger
            3. InfinityRoom`)
            setTimeout(() => {

                copyright('© 2023, KeyDevS')
            }, 2000)
        }, 5999)
    });

    document.getElementById('engl').addEventListener('click', () => {
        aboutme("Hi everyone, I'm Key or KeyDevS. I create stuff in PHP, Python, Unity, C#, Html. I've been building lightweight websites, apps, and so on. I will learn CSS and SCSS to make beautiful sites. I will always be learning new techniques and tools to become even better at what I do.");
        setTimeout(() => {
            myprojects(`My projects:
            1. This site,
            2. Dynar messanger
            3. InfinityRoom`)
            setTimeout(() => {
                copyright('© 2023, KeyDevS')
            }, 2000)
        }, 5999)
        
    });

    loadTyping('KeyDevS', 'typing', true);
});
