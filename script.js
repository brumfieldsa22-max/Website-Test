const addBtn = document.getElementById('addBtn');
const bookInput = document.getElementById('bookInput');
const bookList = document.getElementById('bookList');

if (addBtn) {
    addBtn.onclick = function() {
        if (bookInput.value.trim() !== "") {
            const li = document.createElement('li');
            li.innerHTML = `
                <span>${bookInput.value}</span>
                <button onclick="this.parentElement.remove()" style="background:red; color:white; border:none; padding:5px; border-radius:3px;">Delete</button>
            `;
            bookList.appendChild(li);
            bookInput.value = ";
        }
    };
}const addBtn = document.getElementById('addBtn');
const bookInput = document.getElementById('bookInput');
const bookList = document.getElementById('bookList');

if (addBtn) {
    addBtn.onclick = function() {
        if (bookInput.value.trim() !== "") {
            const li = document.createElement('li');
            li.innerHTML = `
                <span>${bookInput.value}</span>
                <button onclick="this.parentElement.remove()" style="background:red; color:white; border:none; padding:5px; border-radius:3px;">Delete</button>
            `;
            bookList.appendChild(li);
            bookInput.value = "";
        }
    };
}
