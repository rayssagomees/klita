// Criação do footer
const footer = document.createElement('footer');

const div = document.createElement('div');
div.classList.add('centering');

const ul = document.createElement('ul');

const links = [
    { href: '/termos', text: 'Termos de Uso' },
    { href: '/privacidade', text: 'Política de Privacidade' },
    { href: '/ajuda', text: 'Central de Ajuda' }
];

links.forEach(linkData => {
    const li = document.createElement('li');
    const a = document.createElement('a');
    a.href = linkData.href;
    a.textContent = linkData.text;
    li.appendChild(a);
    ul.appendChild(li);
});

div.appendChild(ul);
footer.appendChild(div);

// Criação do copyright
const copyright = document.createElement('div');
copyright.classList.add('centering');

const currentYear = new Date().getFullYear();
copyright.innerHTML = `&copy; ${currentYear} Klita. Todos os direitos reservados.`; // CNPJ: 61.827.404/0001-48

// Adiciona tudo ao body
footer.appendChild(copyright);
document.body.appendChild(footer);
