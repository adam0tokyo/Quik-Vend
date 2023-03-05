interface Iproduct {
    name: string;
    imageURL: string;
    price: number;
}

export const productList: Iproduct[] = [
    {
        name: 'FRUIT PUNCH',
        imageURL: '/images/fruit_punch.webp',
        price: 100,
    },
    {
        name: 'KIWI SMOOTHIE',
        imageURL: '/images/kiwi_smoothie.jpg',
        price: 155,
    },
    {
        name: 'POMEGRANATE JUICE',
        imageURL: '/images/pomegranate_juice.jpg',
        price: 300,
    },
    {
        name: 'PIÑA COLADA',
        imageURL: '/images/pina_colada2.jpg',
        price: 555,
    },
    {
        name: 'FRUIT TEA',
        imageURL: '/images/fruit_tea.jpg',
        price: 1000,
    },
    {
        name: 'HEALING POTION',
        imageURL: '/images/healing_potion.jpg',
        price: 7777,
    },
    {
        name: 'MANA POTION',
        imageURL: '/images/mana_potion.png',
        price: 9999,
    },
    {
        name: 'PANACEA POTION',
        imageURL: '/images/panacea_potion.jpg',
        price: 1,
    },
]