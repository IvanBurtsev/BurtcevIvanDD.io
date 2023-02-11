const item = document.querySelector('.item');

const placeholders = document.querySelectorAll('.placeholder');
item.addEventListener('dragstart', dragstart);
item.addEventListener('dragend', dragend);

const rows = document.querySelectorAll('.row')

//console.log(rows)

for (const placeholder of placeholders) {
  placeholder.addEventListener('dragover', dragover);
  placeholder.addEventListener('dragenter', dragenter);
  placeholder.addEventListener('dragleave', dragleave);
  placeholder.addEventListener('drop', drop);
}

function dragstart(event) {
  //console.log("dragstart", event.target);
  event.target.classList.add('hold');
  setTimeout(() => event.target.classList.add('hide'), 0)
  event.target.classList.remove(event.target.closest('.placeholder').dataset.headerclass);
};

function dragend(event) {
  //console.log("dragend", event.target);
  item.classList.remove('hold', 'hide');
}

function dragover(event) {
  //console.log('drag over')
  event.preventDefault()
}

function dragenter(event) {
  //console.log('drag enter');
  event.target.classList.add('hovered');
}

function dragleave(event) {
  //console.log('drag leave');
  event.target.classList.remove('hovered');
}

function drop(event) {
  //console.log('drag drop')
  event.target.append(item); // drop element in a specific position
  event.target.classList.remove('hovered');
  event.target.querySelector('.item').classList.add(event.target.closest('.placeholder').dataset.headerclass);
}