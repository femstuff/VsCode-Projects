const model =[
    {type: 'title', value: 'Tyuiu from AR'},
    {type: 'text', value: 'some text'},
    {type: 'colons', value: [
        '123123',
        '32332',
        '543'
    ]}
]
const $site = document.querySelector('#site')

model.forEach(block => {
    let html = ``
    if(block.type === 'title'){
        html = 
        <div class="row">
            <div class="col-sm">
                <h1>${block.value}</h1>
            </div>
        </div>
        
    } else if(block.type === 'text'){
        html = `
        <div class="row">
            <div class="col-sm">
                <p>${block.value}</p>
            </div>
        </div>
        `
    } else if(block.type === 'colons'){
        html = `
        
        `
    }
    $site.insertAdjacentHTML('beforeend',html)
})