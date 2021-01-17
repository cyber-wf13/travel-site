let elementX = document.querySelector('.element-x');
let elementO1 = document.querySelector('.element-o-1');
let elementO2 = document.querySelector('.element-o-2');
let body = document.body;
// let elemStyle = getComputedStyle(elementX);
// console.log(elemStyle.marginLeft);
// elemStyle.marginLeft = '500px';
function createFigure (elem = Object, name = String, style = ''){
    cloneElem = elem.cloneNode(true);
    cloneElem.removeAttribute('style');    
    cloneElem.className = name;
    if (style!=''){
        cloneElem.setAttribute('style', style);
    }
    body.prepend(cloneElem);
}

createFigure(elementX, 'way-element-x');
createFigure(elementO1, 'way-element-o-1');
createFigure(elementX, 'destination-element-x');
createFigure(elementO1, 'destination-element-o-1', 'margin-top: 2350px; margin-left: 570px;');
createFigure(elementO1, 'destination-element-o-1');
createFigure(elementX, 'thousand-element-x');
createFigure(elementX, 'thousand-element-x','margin-top: 3000px; margin-left: 540px; left: 0;');
createFigure(elementO1, 'thousand-element-o-1');
