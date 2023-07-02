import { ExampleStore } from '../../src/server/data';

describe('При запросе продуктов, сервер возвращает их список', () => {
    it('Все поля должны быть заполнены', () => {
        const store = new ExampleStore();
        const products = store.getAllProducts(Number(process.env.BUG_ID));

        const values = products.flatMap(p => Object.values(p));

        expect(values).not.toContain(undefined);
    });
});
