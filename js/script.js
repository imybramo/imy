var timeout = async ms => new Promise((resolve) => setTimeout(() => resolve(), ms));
var inputs = Object.values(document.getElementsByTagName('input'));
var sections = Object.values(document.getElementsByTagName('section'));
var imgs = Object.values(document.getElementsByTagName('img'));

inputs.map(input => {
    input.addEventListener('click', async e => {
        if (!e.target.id.includes('portfolio')) {
            inputs.map(input => {input.nextSibling.style.color = 'black'})
            e.target.nextSibling.style.color = "darkgrey";
            sections.map(section => {section.style.opacity = '0'; section.style.transition = '.3s ease-in-out';});
            await timeout(300);
            sections.map(section => {section.style.display = 'none'});
            document.getElementById(e.target.id.replace('-radio', '')).style.display = 'flex';
            await timeout(300);
            sections.map(section => {section.style.opacity = '1'; section.style.transition = '.3s ease-in-out';});
        }
    });
});

imgs.map(img => {
    img.addEventListener('mouseenter', e => {
        if (Object.values(e.target.classList).includes('no')) return

        e.target.style.filter = 'brightness(30%)';
        e.target.style.transition = '.3s ease-in-out';
        e.target.nextSibling.style.opacity = "1";
        e.target.nextSibling.style.transition = '.3s ease-in-out';

        if (e.target.nextSibling.nextSibling) {
            e.target.nextSibling.nextSibling.style.opacity = "1";
            e.target.nextSibling.nextSibling.style.transition = '.3s ease-in-out';
        }
    });
    img.addEventListener('mouseleave', e => {
        if (Object.values(e.target.classList).includes('no')) return

        e.target.style.filter = 'brightness(100%)';
        e.target.style.transition = '.3s ease-in-out';
        e.target.nextSibling.style.opacity = "0";
        e.target.nextSibling.style.transition = '.3s ease-in-out';

        if (e.target.nextSibling.nextSibling) {
            e.target.nextSibling.nextSibling.style.opacity = "0";
            e.target.nextSibling.nextSibling.style.transition = '.3s ease-in-out';
        }
    });
});