const noteInput = document.getElementById('noteInput');
const addBtn = document.getElementById('addBtn');
const noteList = document.getElementById('noteList');

function addNote() {
  const text = noteInput.value.trim();
  if (!text) return;

  const li = document.createElement('li');
  li.innerHTML = `
    <span>${text}</span>
    <button class="delete-btn">Hapus</button>
  `;

  li.querySelector('.delete-btn').addEventListener('click', () => li.remove());
  noteList.appendChild(li);
  noteInput.value = '';
}

addBtn.addEventListener('click', addNote);
noteInput.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') addNote();
});
