const danhSachBangGia = [
  { ma: "XM-NGAY", ten: "Xe may ban ngay", gia: 5000 },
  { ma: "XM-DEM", ten: "Xe may qua dem", gia: 15000 },
  { ma: "OTO-4", ten: "O to 4 cho theo luot", gia: 30000 },
  { ma: "OTO-7", ten: "O to 7 cho theo luot", gia: 40000 },
];

function hienThiBangGiaGui() {
  const bang = document.getElementById("bang-gia");
  for (const muc of danhSachBangGia) {
    const dong = bang.insertRow();
    dong.insertCell().textContent = muc.ma;
    dong.insertCell().textContent = muc.ten;
    dong.insertCell().textContent = muc.gia.toLocaleString("vi-VN");
  }
}

hienThiBangGiaGui();
