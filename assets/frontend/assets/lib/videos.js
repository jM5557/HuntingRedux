let categories = [
    {
        id: 1,
        CATEGORY: 'NONE'
    },
    {
        id: 2,
        CATEGORY: 'TRAILER'
    },
    {
        id: 3,
        CATEGORY: 'INTRO'
    },
    {
        id: 4,
        CATEGORY: 'ECOLOGY'
    }
]

let games = [
    {
        id: 1,
        name: 'Monster Hunter Portable 3rd',
        abbr: 'MHP3rd',
        videos: [
            {
                src: 'wsGVYFBxY88',
                CATEGORY: 2
            },
            {
                src: '98mSNK2UKqg',
                CATEGORY: 2
            },
            {
                src: 'X0w1iPWyoRA',
                CATEGORY: 2
            },
            {
                src: '47DKoSDeOUQ',
                CATEGORY: 3
            }
        ]
    },
    {
        id: 2,
        name: 'Monster Hunter G',
        abbr: 'MHG',
        videos: [
            {
                src: 'PWbjfqWietQ',
                CATEGORY: 3
            }
        ]
    },
    {
        id: 3,
        name: 'Monster Hunter',
        abbr: 'MH1',
        videos: [
            {
                src: 'mJcuO4tTAPM',
                CATEGORY: 4
            }
        ]
    }
]

window.hr__videos = {
    games,
    categories
}