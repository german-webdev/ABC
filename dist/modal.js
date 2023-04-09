const rulesButton = document.querySelector('.button-rules');
const modalRules = document.querySelector('.modal-rules');
const closeButton = document.querySelector('.modal-button');
const body = document.body;

rulesButton.addEventListener('click', (event) => {
    const on = body.classList.contains('modal-rules--active');
	modalRules.classList.toggle('modal-rules--active');
    closeButton.addEventListener('click', closeModal);

    if (on) closeModal();

})

document.addEventListener('keydown', function(e) {
	if( e.keyCode == 27 ) closeModal();
});

function closeModal() {
    modalRules.classList.remove('modal-rules--active')
}

