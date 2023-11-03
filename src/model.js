import image from './assets/4-pet.png'

export const model = [
    {type: 'title', value: 'Боль и страдания, зато весело', options: {
        tag: 'h2',
        styles: {
            background: '#ff0099',
            color: '#fff',
            'text-align': 'center',
            padding: '1.5rem'
        }
    }},
    {type: 'text', value: 'Фаритон любимый мальчик'},
    {type: 'colons', value: [
        '123123',
        '32332',
        '543'
    ]},
    {type: 'image', value: image}
]