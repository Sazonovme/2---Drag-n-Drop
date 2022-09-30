const item = document.querySelector('.item')
const placeHolders = document.querySelectorAll('.placeholder')

item.addEventListener('dragstart', dragstart)
item.addEventListener('dragend', dragend)

function dragstart(e) {
  e.target.classList.add('hold')
  setTimeout(() => e.target.classList.add('hide'), 0)
  for (const placeholder of placeHolders) {
    placeholder.classList.add('inwait')
  }
}

function dragend(e) {
  e.target.className = 'item'
  for (const placeholder of placeHolders) {
    placeholder.classList.remove('inwait')
  }
}

for (const placeholder of placeHolders) {
  placeholder.addEventListener('dragover', dragover)
  placeholder.addEventListener('dragenter', dragenter)
  placeholder.addEventListener('dragleave', dragleave)
  placeholder.addEventListener('drop', drop)
}

function dragover(e) {
  e.preventDefault()
}

function dragenter(e) {
  e.target.classList.add('hovered')
}

function dragleave(e) {
  e.target.classList.remove('hovered')
}

function drop(e) {
  e.target.append(item)
  e.target.classList.remove('hovered', 'inwait')
}
