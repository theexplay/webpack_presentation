import join from 'lodash/join';

function component() {
    var element = document.createElement('div');

    element.innerHTML = join(['Hello', 'webpack', 'lalallalal'], ' ');

    return element;
}

document.body.appendChild(component());
