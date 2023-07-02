const { assert } = require("chai");

describe('Верстка статичных страниц', async function() {
    it('Главная статична', async function() {
        await this.browser.url('http://localhost:3000/hw/store/');
        await this.browser.assertView('plain', 'body');
    });

    it('Доставка статична', async function() {
        await this.browser.url('http://localhost:3000/hw/store/delivery/');
        await this.browser.assertView('plain', 'body');
    });

    it('Контакты статична', async function() {
        await this.browser.url('http://localhost:3000/hw/store/contacts/');
        await this.browser.assertView('plain', 'body');
    });
});

describe('Функционал гамбургера', async function() {
    it('Открывается при нажатии на меню, закрывается при нажатии на ссылку', async function({ browser }) {
        await browser.setWindowSize(545, 800);
        await browser.url('http://localhost:3000/hw/store/');

        const elem = await browser.$('.navbar-toggler');
        const link = await browser.$$('.nav-link')[1];

        await browser.assertView('plain', 'body');
        await elem.click();
        await browser.assertView('open', 'body');
        await link.click();
        await browser.assertView('closed', 'body');
    })
})

describe('В шапке есть все ссылки', async function() {
    it('')
})

describe('Верстка страницы продукта', async function() {
        it('Кнопка "Добавить" соответствует макету', async function({ browser }) {
        await browser.url('http://localhost:3000/hw/store/catalog/0/');
        await browser.assertView('plain', '.ProductDetails-AddToCart');
    })
})

describe('Сценарий покупки товара', async function() {
    it('У продуктов есть имена', async function({ browser }) {
        const puppeteer = await browser.getPuppeteer();
        const [page] = await puppeteer.pages();
    
        await page.goto('http://localhost:3000/hw/store/catalog/');

        const productName = await page.waitForSelector('.ProductItem-Name');
        const productNameValue = await productName.evaluate(el => el.textContent);

        assert.isNotEmpty(productNameValue);

        it('уровень 2', async function({ browser }) {
            await page.click('.ProductItem-DetailsLink');
        
            await page.click('.ProductDetails-AddToCart');

            const cartLink = await page.$('.nav-link:nth-of-type(4)');
            const cartLinkValue = await cartLink.evaluate(el => el.textContent);

            assert(cartLinkValue === 'Cart (2)');
            
            await cartLink.click();
        
            const nameForm = await page.$('#f-name');
            const telForm = await page.$('#f-phone');
            const addressForm = await page.$('#f-address');
            const ckeckoutBtn = await page.$('.Form-Submit');
        
            await nameForm.type('testName');
            await telForm.type('+71111111111');
            await addressForm.type('testAddress');
            await ckeckoutBtn.click();
    
            assert.isOk(page.$('.Cart-SuccessMessage'));

        })
    })

})

// describe('Верстка сообщения об отправке', async function() {
//     it('Верстка алерта соответствует макету', async function({ browser }) {
//         await browser.url('http://localhost:3000/hw/store/cart/');
//         const form = {
//             name: 'testName',
//             phone: '+71111111111',
//             address: 'example@mail.com',
//         }
//         const cart = {
//             name: 'testName',
//             count: 1,
//             price: 100,
//         }

//     })
// })

// describe('Товар добавляется в корзину', async function() {
//     it('При нажатии "Добавить" товар добавляется в корзину', async function({ browser }) {
//         await browser.url('http://localhost:3000/hw/store/catalog/0/');

//         const cartCount = await browser.$$('.nav-link')[4];
//         assert(cartCount.getText()).equal('Cart');

//         const elem = await browser.$('.ProductDetails-AddToCart');
//         elem.click();
//         assert(cartCount.getText()).equal('Cart (1)');

//     })
// })