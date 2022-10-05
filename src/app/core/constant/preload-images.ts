interface PreloadImage {
    [index: string]: string;
}

interface PreloadImages {
    [index: string]: PreloadImage;
}

export const PRELOAD_IMAGES: PreloadImages = Object.freeze({
    ['/account/login']: {
        ['--login-background']: 'login/background.png',
        ['--login-light']: 'login/light.png',
        ['--login-banner']: 'login/banner.png',
        ['--login-title']: 'login/title.png',
        ['--login-food']: 'login/food.png',
        ['--login-food-light']: 'login/food-light.png',
        ['--login-food-with-shadow']: 'login/food-with-shadow.png',
        ['--login-character']: 'login/character.png',
        ['--login-character-shadow']: 'login/character-shadow.png',
        ['--login-vine']: 'login/vine.png',
        ['--login-grass']: 'login/grass.png',
        ['--login-btn-login']: 'login/btn-login.png',
    },
    ['/main/home']: {
        ['--home-background']: 'home/background.png',
        ['--home-cloud']: 'home/cloud.png',
        ['--home-mountain-left']: 'home/mountain-left.png',
        ['--home-trees']: 'home/trees.png',
        ['--home-tree']: 'home/tree.png',
        ['--home-mountain']: 'home/mountain.png',
        ['--home-land']: 'home/land.png',
        ['--home-plus-green']: 'home/plus-green.png',
        ['--home-plus-yellow']: 'home/plus-yellow.png',
        ['--home-heart']: 'home/heart.png',
        ['--home-gold']: 'home/gold.png',
        ['--home-diamond']: 'home/diamond.png',
        ['--home-setting']: 'home/setting.png',
        ['--home-task']: 'home/task.png',
        ['--home-mail']: 'home/mail.png',
        ['--home-sign']: 'home/sign.png',
        ['--home-bag']: 'home/bag.png',
        ['--home-map']: 'home/map.png',
        ['--home-egg']: 'home/egg.png',
        ['--home-btn-mission']: 'home/btn-mission.png',
        ['--home-mission-star']: 'home/mission-star.png',
        ['--home-yogurt-front']: 'home/yogurt-front.png',
        ['--home-yogurt-back']: 'home/yogurt-back.png',
        ['--home-bottom-cloud']: 'home/bottom-cloud.png',
        ['--home-bottom-menu']: 'home/bottom-menu.png',
        ['--home-hole-left']: 'home/hole-left.png',
        ['--home-hole-center']: 'home/hole-center.png',
        ['--home-hole-right']: 'home/hole-right.png',
        ['--home-coup']: 'home/coup.png',
        ['--home-go']: 'home/go.png',
        ['--home-shop']: 'home/shop.png',
    },
});
