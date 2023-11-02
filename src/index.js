const model =[
    {type: 'title', value: 'Тиу музей'},
    {type: 'text', value: 'Фаритон любимый мальчик'},
    {type: 'colons', value: [
        '123123',
        '32332',
        '543'
    ]},
    {type: 'image', value: './assets/4-pet.png'}
]
const $site = document.querySelector('#site')

model.forEach(block => {
    let html = ''

    if(block.type === 'title'){
        html = title(block)
    } else if(block.type === 'text'){
        html = text(block)
    } else if(block.type === 'colons'){
        html = colons(block)
    } else if(block.type === 'image'){
        html = image(block)
    }
    $site.insertAdjacentHTML('beforeend',html)
    
})

function title(block){
    return `
    <div class="row">
        <div class="col-sm">
            <h1>${block.value}</h1>
        </div>
    </div>
    `
}

function text(block){
    return `
    <div class="row">
        <div class="col-sm">
            <p>${block.value}</p>
        </div>
    </div>
    `
}

function colons(block){
    const html = block.value.map(item=> `<div class="col-sm">${item}</div>`)
    return `
    <div class="row">
        ${html.join('')}
    </div>
    `
}

function image(block){
    return `
    <div class="row">
        <img scr="${block.value}" />
    </div>
    `
}