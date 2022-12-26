const open = document.getElementById('open');
const modal = document.getElementById('containerModal');
const close = document.getElementById('close');

open.addEventListener('click', () => {
    modal.classList.add('show');
})

close.addEventListener('click', () => {
    modal.classList.remove('show');
})