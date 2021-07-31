var initialState = [
    {
        id: 1,
        name: 'Ip 7 plus',
        image: 'data:image/jpeg;base64,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',
        description: 'do apple san xuat',
        price: 500,
        inventory: 10,
        rating: 3
    },
    {
        id: 2,
        name: 'samsung galaxy s21 ultra',
        image: 'data:image/jpeg;base64,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',
        description: 'Samsung san xuat',
        price: 1000,
        inventory: 15,
        rating: 5
    },
    {
        id: 3,
        name: 'Xiaomi mi 12',
        image: 'data:image/jpeg;base64,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',
        description: 'Xiaomi san xuat',
        price: 1500,
        inventory: 20,
        rating: 2
    },
];

const products = (state = initialState, action ) => {
    switch (action.type) {
        default: return [...state]
    }
}

export default products;