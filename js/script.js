const searchBtn = document.querySelector('.search__bar--icon')
const searchInput = document.querySelector('.search__bar--input')
const modal = document.querySelector('.modal')
const allExploreBtns = document.querySelectorAll('.item__btn')



searchBtn.addEventListener('click', () => {
	searchInput.focus()
})

allExploreBtns.forEach(btn => {
	btn.addEventListener('click', () => {
		modal.showModal()
	})
})

