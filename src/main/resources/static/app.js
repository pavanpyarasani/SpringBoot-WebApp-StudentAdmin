const apiBase = '/api/students';

async function fetchStudents() {
  const res = await fetch(apiBase);
  const data = await res.json();
  const tbody = document.querySelector('#students-table tbody');
  tbody.innerHTML = '';
  data.forEach(s => {
    const tr = document.createElement('tr');
    tr.innerHTML = `
      <td>${s.id}</td>
      <td>${s.name}</td>
      <td>${s.email}</td>
      <td>${s.age}</td>
      <td class="actions">
        <button onclick="editStudent(${s.id})">Edit</button>
        <button onclick="deleteStudent(${s.id})">Delete</button>
      </td>
    `;
    tbody.appendChild(tr);
  });
}

async function saveStudent(e) {
  e.preventDefault();
  const id = document.getElementById('student-id').value;
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const age = parseInt(document.getElementById('age').value,10);

  const payload = { name, email, age };

  if (!id) {
    await fetch(apiBase, { method:'POST', headers:{'Content-Type':'application/json'}, body:JSON.stringify(payload) });
  } else {
    await fetch(`${apiBase}/${id}`, { method:'PUT', headers:{'Content-Type':'application/json'}, body:JSON.stringify(payload) });
  }
  resetForm();
  fetchStudents();
}

async function editStudent(id) {
  const res = await fetch(`${apiBase}/${id}`);
  if (!res.ok) { alert('Student not found'); return; }
  const s = await res.json();
  document.getElementById('student-id').value = s.id;
  document.getElementById('name').value = s.name;
  document.getElementById('email').value = s.email;
  document.getElementById('age').value = s.age;
  document.getElementById('cancel-btn').style.display = 'inline-block';
}

async function deleteStudent(id) {
  if (!confirm('Delete student?')) return;
  await fetch(`${apiBase}/${id}`, { method:'DELETE' });
  fetchStudents();
}

function resetForm() {
  document.getElementById('student-id').value = '';
  document.getElementById('name').value = '';
  document.getElementById('email').value = '';
  document.getElementById('age').value = '';
  document.getElementById('cancel-btn').style.display = 'none';
}

document.getElementById('student-form').addEventListener('submit', saveStudent);
document.getElementById('cancel-btn').addEventListener('click', resetForm);

window.addEventListener('load', fetchStudents);
