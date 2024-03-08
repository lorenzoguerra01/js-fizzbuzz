const squareWrapper = document.createElement('div');
//console.log(typeof squareWrapper);

squareWrapper.className = 'd-flex justify-content-between align-content-center flex-wrap';
squareWrapper.setAttribute('id','boxes');
//console.dir(squareWrapper);

let numBox = 100;
let tmpHtml = '';

for(let i = 0; i < numBox; i++){
    tmpHtml += ` <div class="box">${i + 1}</div>`;
}

squareWrapper.innerHTML = tmpHtml;

console.dir(squareWrapper);

const container = document.querySelector('.container');
container.append(squareWrapper);