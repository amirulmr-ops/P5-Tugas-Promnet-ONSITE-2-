const form = document.getElementById("itemForm");
const input = document.getElementById("itemInput");
const errorMessage = document.getElementById("errorMessage");
const list = document.getElementById("daftar");

form.addEventListener("submit", function (event) {
  event.preventDefault();
  const value = input.value.trim();

  // if input kosong
  if (value === "") {
    errorMessage.textContent = "Field tidak boleh kosong";
    input.classList.add("invalid");
    input.classList.remove("valid");
    return;
  }


  errorMessage.textContent = "";
  input.classList.remove("invalid");
  input.classList.add("valid");
  const li = document.createElement("li");
  li.textContent = value;
  li.addEventListener("click", function () {
    li.classList.toggle("done");
  });

  // tombol hapus
  const btn = document.createElement("button");
  btn.textContent = "Hapus";
  btn.addEventListener("click", function (e) {
    e.stopPropagation();
    li.remove();
  });

  li.append(btn);
  list.append(li);

  input.value = "";
});
