// ==========================
// DOM Element ধরছি
// ==========================
const input = document.getElementById("inputText"); // Input field
const list = document.getElementById("itemList"); // UL list container

// Buttons ধরছি
const addBtn = document.getElementById("addBtn"); // Add Item
const removeBtn = document.getElementById("removeBtn"); // Remove Last
const changeHTMLBtn = document.getElementById("changeHTMLBtn"); // innerHTML
const changeStyleBtn = document.getElementById("changeStyleBtn"); // Change Style

// ==========================
// Add new item
// ==========================
addBtn.onclick = () => {
  const text = input.value.trim(); // Input থেকে text নিলাম
  if (!text) return; // Input খালি হলে কিছু হবে না

  // নতুন <li> তৈরি
  const li = document.createElement("li");
  li.textContent = text; // <li> তে text যোগ
  li.className =
    "p-6 bg-purple-100 rounded-2xl shadow-lg hover:shadow-2xl transition cursor-pointer text-xl"; // CSS class
  list.appendChild(li); // List-এ append
  input.value = ""; // Input খালি
};

// ==========================
// Remove last item
// ==========================
removeBtn.onclick = () => {
  if (!list.lastElementChild) return; // List খালি হলে কিছু হবে না
  list.removeChild(list.lastElementChild); // Last item remove
};

// ==========================
// Change first item innerHTML (bold)
// ==========================
changeHTMLBtn.onclick = () => {
  const text = input.value.trim(); // Input থেকে text নিলাম
  if (!list.firstElementChild || !text) return; // List খালি বা input খালি হলে কিছু হবে না
  list.firstElementChild.innerHTML = `<strong>${text}</strong>`; // Bold HTML apply
  input.value = ""; // Input খালি
};

// ==========================
// Change first item style
// ==========================
changeStyleBtn.onclick = () => {
  if (!list.firstElementChild) return; // List খালি হলে কিছু হবে না
  const first = list.firstElementChild;
  first.style.color = "white"; // Text color white
  first.style.backgroundColor = "purple"; // Background purple
  first.style.fontWeight = "bold"; // Font bold
};

