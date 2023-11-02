const model = [
    {
        type: "title",
        value: "\u0422\u0438\u0443 \u043C\u0443\u0437\u0435\u0439"
    },
    {
        type: "text",
        value: "\u0424\u0430\u0440\u0438\u0442\u043E\u043D \u043B\u044E\u0431\u0438\u043C\u044B\u0439 \u043C\u0430\u043B\u044C\u0447\u0438\u043A"
    },
    {
        type: "colons",
        value: [
            "123123",
            "32332",
            "543"
        ]
    },
    {
        type: "image",
        value: "src/assets/4-pet.png"
    }
];
const $site = document.querySelector("#site");
model.forEach((block)=>{
    let html = "";
    if (block.type === "title") html = title(block);
    else if (block.type === "text") html = text(block);
    else if (block.type === "colons") html = colons(block);
    else if (block.type === "image") html = image(block);
    $site.insertAdjacentHTML("beforeend", html);
});
function title(block) {
    return `
    <div class="row">
        <div class="col-sm">
            <h1>${block.value}</h1>
        </div>
    </div>
    `;
}
function text(block) {
    return `
    <div class="row">
        <div class="col-sm">
            <p>${block.value}</p>
        </div>
    </div>
    `;
}
function colons(block) {
    const html = block.value.map((item)=>`<div class="col-sm">${item}</div>`);
    return `
    <div class="row">
        ${html.join("")}
    </div>
    `;
}
function image(block) {
    return `
    <div class="row">
        <img scr="${block.value}" />
    </div>
    `;
}

//# sourceMappingURL=index.579125c3.js.map
