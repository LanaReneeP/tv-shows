

class Shows {

    constructor() {
        this.data = [
            {
                id: 'cn001',
                title: 'adventure time',
                genre: ['comedy', 'adventure', 'fantasy', 'action'],
                yearStart: new Date('April 5, 2010'),
                yearEnd: new Date('September 3, 2018'),
                seasonCount: 10,
                episodeCount: 283,
                network: 'cartoon network',
                creator: 'pendleton ward',
                isFavorite: false
            }, {
                id: 'pbs001',
                title: 'wild kratts',
                genre: ['adventure', 'comedy', 'family'],
                yearStart: new Date('JAnuary 3, 2011'),
                yearEnd: new Date(),
                seasonCount: 7,
                episodeCount: 170,
                network: 'pbs',
                creator: 'kratt brothers',
                isFavorite: false
            }, {
                id: 'pbs002',
                title: 'arthur',
                genre: ['family', 'comedy', 'fantasy'],
                yearStart: new Date('October 7, 1996'),
                yearEnd: new Date('Febuary 21, 2002'),
                seasonCount: 25,
                episodeCount: 253,
                network: 'pbs',
                creator: 'marc brown',
                isFavorite: false
            }, {
                id: 'nk001',
                title: 'spongebob squarepants',
                genre: ['comedy', 'adventure'],
                yearStart: new Date('May 1, 1999'),
                yearEnd: new Date(),
                seasonCount: 15,
                episodeCount: 311,
                network: 'nickelodeon',
                creator: 'steven hillenburg',
                isFavorite: false
            }, {
                id: 'cn002',
                title: 'regular show',
                genre: ['comedy', 'adventure', 'sci-fi'],
                yearStart: new Date('September 6, 2010'),
                yearEnd: new Date('January 16. 2017'),
                seasonCount: 8,
                episodeCount: 244,
                network: 'cartoon network',
                creator: 'j.g. quintel',
                isFavorite: false
            }, {
                id: 'dn001',
                title: 'duck tales',
                genre: ['adventure', 'comedy', 'fantasy'],
                yearStart: new Date('September 18, 1987'),
                yearEnd: new Date('November 28, 1990'),
                seasonCount: 4,
                episodeCount: 100,
                network: 'disney',
                creator: 'carl barks',
                isFavorite: false
            }, {
                id: 'dn002',
                title: 'gravity falls',
                genre: ['comedy', 'fantasy', 'mystery', 'sci-fi'],
                yearStart: new Date('June 15, 2012'),
                yearEnd: new Date('Febuary 15, 2016'),
                seasonCount: 2,
                episodeCount: 40,
                network: 'disney',
                creator: 'alex hirsch',
                isFavorite: false
            }, {
                id: 'cn003',
                title: 'johnny brovo',
                genre: ['comedy'],
                yearStart: new Date('July 14, 1997'),
                yearEnd: new Date('August 27, 2024'),
                seasonCount: 4,
                episodeCount: 65,
                network: 'cartoon network',
                creator: 'van partible',
                isFavorite: false
            }, {
                id: 'cn004',
                title: 'codename kids next door',
                genre: ['comedy', 'sci-fi'],
                yearStart: new Date('December 6, 2002'),
                yearEnd: new Date('JAnuary 21, 2008'),
                seasonCount: 6,
                episodeCount: 81,
                network: 'cartoon network',
                creator: 'mr warburton',
                isFavorite: false
            }, {
                id: 'nk002',
                title: 'rugrats',
                genre: ['comedy', 'adventure'],
                yearStart: new Date('August 11, 1991'),
                yearEnd: new Date('August 1, 2004'),
                seasonCount: 9,
                episodeCount: 172,
                network: 'nickelodeon',
                creator: 'arlene klasky',
                isFavorite: false
            }, {
                id: 'dn003',
                title: 'kim possible',
                genre: ['action', 'adventure'],
                yearStart: new Date('June 7, 202'),
                yearEnd: new Date('September 7, 2007'),
                seasonCount: 4,
                episodeCount: 87,
                network: 'disney',
                creator: 'bob schooley',
                isFavorite: false
            }, {
                id: 'nk003',
                title: 'backyardigans',
                genre: ['music', 'fantasy', 'adventutre'],
                yearStart: new Date('October 11, 2004'),
                yearEnd: new Date('July 12, 2013'),
                seasonCount: 4,
                episodeCount: 80,
                network: 'nickelodeon',
                creator: 'janice burgess',
                isFavorite: false
            }
        ]

        this.row = document.getElementById('row')
    }

    init() {
        console.log('init');
        this.loadCards(this.data)
    }

    buildCard(obj) {
        const row = this.row

        const column = document.createElement('div')
        column.classList.add('col')

        const card = document.createElement('div')
        card.classList.add('card', 'h-100')
        card.setAttribute('id',`card-${obj.id}`)

        card.innerHTML = `
            <header class="card-header">
                <h2 class="card-heading text-capitalize">${obj.title}</h2>
            </header>
            <section class="card-body">
                <p class="card-text">
                    <span>${obj.yearStart.toDateString()}</span> - 
                    <span>${obj.yearEnd.toDateString()}</span>
                </p>
                <p class="card-text">Eposodes: ${obj.episodeCount}</p>
                <p class="card-text">Seasons: ${obj.seasonCount}</p>
                <p class="card-text text-capitalize">${obj.network}</p>
                <p class="card-text text-capitalize">${obj.creator}</p>
            </section>
            <footer class="card-footer">
                <button class="btn btn-success text-capitalize favoriteBtns" id="${obj.id}">
                    ${obj.isFavorite ? 'unfavorite' : 'favorite'}
                </button>
                <span id="favorite">${obj.isFavorite ? '💗' : '🚫'}
            </footer>
        `

        column.appendChild(card)
        row.appendChild(column)
    }

    loadCards(arr) {
        arr.forEach(item => this.buildCard(item))
    }

    toggleFavorite(el, arr) {
        
        for (let item of arr) {
            if (el.id == item.id) {
                item.isFavorite = !item.isFavorite
                console.log(item.isFavorite);
                
            }
        }
    }
}

const action = new Shows()

action.init()

const buttons = document.querySelectorAll('.favoriteBtns')

buttons.forEach(button => {
    button.addEventListener('click', ()=> {
        action.toggleFavorite(button, action.data)
    })
    
})




//  ／\、
// （ﾟ､ ｡ ７
// ⠀ |、ﾞ ~ヽ
//   じしf_, )ノ