interface Iproduct {
    name: string;
    description: string;
    imageURL: string;
    price: number;
}

export const productList: Iproduct[] = [
    {
        name: 'SODA',
        description: 'A nice, refreshing drink',
        imageURL: '/images/Campari_Soda.jpg',
        price: 220,
    },
    {
        name: 'FRUIT PUNCH',
        description: 'when life gives you lemons',
        imageURL: '/images/fruit_punch.webp',
        price: 111,
    },
    {
        name: 'KIWI JUICE',
        description: 'which fruit??',
        imageURL: '/images/kiwi-wheatgrass-juice.jpg',
        price: 7001,
    }
]