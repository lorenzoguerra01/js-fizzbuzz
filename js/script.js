const squareWrapper = document.createElement('div');
//console.log(typeof squareWrapper);

squareWrapper.className = 'd-flex align-content-center flex-wrap ms_gap';
squareWrapper.id = "boxes";
//console.dir(squareWrapper);

let numBox = 100;
let tmpHtml = '';

for (let i = 0; i < numBox; i++) {
    if (((i + 1) % 3 === 0) && ((i + 1) % 5 === 0)) {
        tmpHtml += ` <div class="box box-fizzbuzz">fizzbuzz</div>`;
    } else if ((i + 1) % 3 === 0) {
        tmpHtml += ` <div class="box box-fizz">fizz</div>`;
    } else if ((i + 1) % 5 === 0) {
        tmpHtml += ` <div class="box box-buzz">buzz</div>`;
    } else {
        tmpHtml += ` <div class="box box-standard">${i + 1}</div>`;
    }
    console.log(tmpHtml);
}

squareWrapper.innerHTML = tmpHtml;

console.dir(squareWrapper);

const container = document.querySelector('.container');
container.append(squareWrapper);