import '../css/styles.scss';

const textComponent = () => {
    const elH1 = document.createElement('H1');
    elH1.innerHTML = 'Olá Mundo!';
    elH1.classList.add('title');
    return elH1;
}

document.body.appendChild(textComponent());