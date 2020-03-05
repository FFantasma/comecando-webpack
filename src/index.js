const textComponent = () => {
    const elH1 = document.createElement('H1');
    elH1.innerHTML = 'Olá Mundo!';
    return elH1;
}

document.body.appendChild(textComponent());