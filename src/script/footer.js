// Criação do footer -------------------------------------------------------------------
const footer = document.createElement('footer');

const div = document.createElement('div');
div.classList.add('flex-space-between-row');

const divLeft = document.createElement('div');
divLeft.classList.add('flex-space-between-row');

const divRight = document.createElement('div');
divRight.classList.add('flex-space-between-row');

// Criação da logo -------------------------------------------------------------------

const logo = document.createElement('img');
logo.classList.add('logo')

logo.src = 'src/image/klita-logo-white.png';
logo.alt = 'Logo Klita';

const home = document.createElement('a');

home.href = '/';
//home.textContent = linkData.text;
home.target = '_blank';

home.appendChild(logo);

// Criação do copyright -------------------------------------------------------------------
const copyright = document.createElement('div');

const currentYear = new Date().getFullYear();
copyright.innerHTML = `&copy; ${currentYear} Klita Brasil. Todos os direitos reservados.`; // CNPJ: 61.827.404/0001-48

// Criação dos links -------------------------------------------------------------------
const ul = document.createElement('ul');

const links = [
    { href: '/termos-de-uso', text: 'Termos' },
    { href: '/politica-de-privacidade', text: 'Privacidade' },
];

links.forEach(linkData => {
    const li = document.createElement('li');
    const a = document.createElement('a');
    a.href = linkData.href;
    a.textContent = linkData.text;
    a.target = '_blank';
    li.appendChild(a);
    ul.appendChild(li);
});

// Montagem final -------------------------------------------------------------------
divLeft.appendChild(home);
divRight.appendChild(copyright);
divRight.appendChild(ul);

div.appendChild(divLeft);
div.appendChild(divRight);

footer.appendChild(div);
document.body.appendChild(footer);
