// animasi text
const bahasa = [
  "Selamat datang",
  "Welcome",
  "أهلاً وسهلاً",
  "ようこそ",
  "Benvenuto",
  "欢迎",
  "환영합니다",
];
let index = 0;
const teks = document.getElementById("teks-kedatangan");

const changeText = () => {
  teks.classList.remove("animate-fadeSlide");
  void teks.offsetWidth;
  teks.classList.add("animate-fadeSlide");

  teks.textContent = bahasa[index];

  index = (index + 1) % bahasa.length;
};

teks.classList.add("animate-fadeSlide");
setInterval(changeText, 3000);

// search bar
const searchBar = document.getElementById("searchBar");
const overlay = document.getElementById("overlay");
const cards = document.querySelectorAll(".card");

// Saat diketik
searchBar.addEventListener("input", () => {
  const query = searchBar.value.toLowerCase().trim();

  if (query.length > 0) {
    overlay.classList.remove("hidden");
    document.body.classList.add("overflow-hidden"); // ⛔ disable scroll body
    filterCards(query);
  } else {
    overlay.classList.add("hidden");
    document.body.classList.remove("overflow-hidden"); // ✅ balikin scroll body
  }
});

// Tutup overlay manual
function closeOverlay() {
  overlay.classList.add("hidden");
  document.body.classList.remove("overflow-hidden"); // ✅ balikin scroll body
  searchBar.value = ""; // kosongkan input
}

// Filter card sesuai input
function filterCards(query) {
  cards.forEach((card) => {
    const title = card.textContent.toLowerCase();
    card.style.display = title.includes(query) ? "block" : "none";
  });
}

// hasil zoologi 1
const nilaiTerakhir = parseInt(localStorage.getItem("nilaiAkhirZoologi"));

// Cari semua elemen <a> yang memiliki href "kelas-dasar-zoology.html"
const linkZoologiNodes = document.querySelectorAll(
  'a[href="kelas-dasar-zoology.html"]'
);

// dark mode
const body = document.body;
const btnDark = document.getElementById("button-dark");
const btnLight = document.getElementById("button-light");

// --- Saat halaman pertama kali dibuka ---
if (localStorage.getItem("theme") === "dark") {
  body.classList.add("dark", "bg-gray-900", "text-white");
  btnDark.classList.add("hidden");
  btnLight.classList.remove("hidden");
} else {
  btnLight.classList.add("hidden");
  btnDark.classList.remove("hidden");
}

// --- Klik tombol dark (🌙) ---
btnDark.addEventListener("click", () => {
  body.classList.add("dark", "bg-gray-900", "text-white");
  body.classList.remove("bg-white", "text-black");
  btnDark.classList.add("hidden");
  btnLight.classList.remove("hidden");
  localStorage.setItem("theme", "dark");
});

// --- Klik tombol light (☀️) ---
btnLight.addEventListener("click", () => {
  body.classList.remove("dark", "bg-gray-900", "text-white");
  btnLight.classList.add("hidden");
  btnDark.classList.remove("hidden");
  localStorage.setItem("theme", "light");
});
