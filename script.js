
const close = document.getElementById('close_envelope');
const open = document.getElementById('open_envelope');
const click = document.getElementById('click');

click.addEventListener('click', () => {
    close.classList.add('opacity-0');
    close.classList.remove('opacity-100');

    open.classList.remove('opacity-0');
    open.classList.add('opacity-100');
});