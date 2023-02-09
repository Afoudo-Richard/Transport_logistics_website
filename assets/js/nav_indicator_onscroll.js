let section = document.querySelectorAll('section'); // get all sections

let lists = document.querySelectorAll('.nav-link'); // select all navigation links

function activeLink(li) {
    lists.forEach((item) => item.classList.remove('nav_active'));
    li.classList.add('nav_active');
}

lists.forEach((item) =>
    item.addEventListener('click', function () {
        activeLink(this);
    }));

window.onscroll = () => {
    section.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset - 100 && top < offset + height) {
            const target = document.querySelector(`[href='/#${id}']`);
            activeLink(target);
        }
    })
};
