// За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині

let technologies = [
    'HTML',
    'CSS',
    'JavaScript',
    'TypeScript',
    'React',
    'Angular',
    'Vue',
    'Node.js',
    'Python',
    'SQL'
];

for (let i = 0; i < technologies.length; i++) {
    document.write(`<div><p>${technologies[i]}</p></div>`);
}

