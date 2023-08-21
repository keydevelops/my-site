$(document).ready(function () {
    function fetcher() {
        $.get('/assets/css/explosion.png');
        $.get('/assets/sounds/explode.mp3');
        $.get('/assets/sounds/squeaking.mp3');
    }

    function loadTyping(text, container, startup) {
        const element = $('#' + container);
        const pageElement = $('#sel-lang');
        let index = 0;
        pageElement.css('opacity', '0');
        element.css('display', 'block');

        const typingEffect = setInterval(function () {
            if (index < text.length) {
                element.append(text[index]);
                index++;
            } else {
                clearInterval(typingEffect);
                element.css('animation', '');
                if (startup) {
                    setTimeout(function () {
                        element.css('display', 'none');
                        element.css('width', '0');
                        pageElement.css('opacity', '1');
                        pageElement.css('display', 'block');
                    }, 2000);
                } else {
                    element.css('display', 'block');
                }
            }
        }, 4500 / text.length);
    }

    function showContent(text, container) {
        const element = $('#site-container');
        const pageElement = $('#sel-lang');
        pageElement.css('display', 'none');
        element.css('display', 'block');
        element.css('width', 'auto');
        loadTyping(text, container, false);
    }

    $('#russ').click(function () {
        showContent('Всем привет! Я ключ или KeyDevS...', 'site-container');
        setTimeout(function () {
            showContent('Мои проекты:\n1. Этот сайт,\n2. Dynar messanger\n3. InfinityRoom', 'projects-container');
            setTimeout(function () {
                showContent('© 2023, KeyDevS', 'copyright-container');
                setTimeout(function () {
                    const explodeContainer = $('#explode-container');
                    const explodeButton = $('#explode');
                    explodeButton.html('Взрыв сайта');
                    explodeContainer.css('display', 'block');
                }, 3500);
            }, 2000);
        }, 5999);
    });

    $('#engl').click(function () {
        showContent("Hi everyone, I'm Key or KeyDevS...", 'site-container');
        setTimeout(function () {
            showContent('My projects:\n1. This site,\n2. Dynar messanger\n3. InfinityRoom', 'projects-container');
            setTimeout(function () {
                showContent('© 2023, KeyDevS', 'copyright-container');
                setTimeout(function () {
                    const explodeButton = $('#explode');
                    const explodeContainer = $('#explode-container');
                    explodeButton.html('Explode site');
                    explodeContainer.css('display', 'block');
                }, 3500);
            }, 2000);
        }, 5999);
    });

    $(window).on('load', fetcher);

    loadTyping('KeyDevS', 'typing', true);

    $('#explode').click(function () {
        const explodeContainer = $('#explode-container');
        explodeContainer.css('display', 'none');

        const explosionEffect = $('<div></div>').addClass('explosion');
        $('body').append(explosionEffect);

        const explodeSound = new Audio('/assets/sounds/explode.mp3');
        explodeSound.play();

        setTimeout(function () {
            $('body').css('background-color', 'red');
            $('body').css('transition', 'background-color 0.5s ease');
            $('body').css('transform', 'translateY(-50vh)');
            const squeakingSound = new Audio('/assets/sounds/squeaking.mp3');
            squeakingSound.play();

            setTimeout(function () {
                $('.container').css('display', 'none');
                $('body').css('transform', 'translateY(5vh)');
                $('#exploded').css('display', 'block');
            }, 4500);
        }, 350);

        explosionEffect.on('animationend', function () {
            explosionEffect.remove();
        });
    });
});
