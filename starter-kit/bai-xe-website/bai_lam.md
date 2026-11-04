# bai_lam

# BÀI LÀM – HACKATHON 02

- **Mã đề:** 02
- **Họ tên: Nguyễn Công Thắng**
- **Lớp: cntt4-k26**
- **Link repository:**https://github.com/thangnctg/HN_KS26_CNTT4_NguyenCongThang_HACKATHON02
- **Hệ điều hành (Windows/macOS):**

## 4.2. Thao tác máy tính cơ bản bằng CLI

### Các lệnh đã chạy

```bash
· Hiển thị đường dẫn tuyệt đối của thư mục hiện tại: pwd
· Liệt kê nội dung thư mục gốc, gồm cả file ấn: ls -Force
. Di chuyển file huong_dan_van_hanh.txt vào docs : mv .\huowng-dan-van-hanh.txt .\docs\
· Tạo thư mục backup trong thư mục gốc: mkdir ./backup
. Sao chép data/luot_gui_xe_thang_2.xlsx vào backup: cp .\data\luot-gui-xe-thang-2.xlsx .\backup\
· Xoá file .tmp tại thư mục gốc; không xoá file khác:  rm .\temp_202.tmp
· Dùng đường dẫn tương đối vào logs, liệt kê nội dung rồi quay lại thư mục gốc: cd .\logs\
   Get-ChildItem
   cd..
   
```

### Kết quả liệt kê toàn bộ dự án (Windows: Get-ChildItem -Recurse -Force; macOS: ls -aR)

```
 Directory: D:\NEW-DOWNNLOAD\starter-kit\bai-xe-website\web

Mode                 LastWriteTime         Length Name
----                 -------------         ------ ----
d-----         11/4/2026   7:32 AM                images
------         11/3/2026   7:06 AM            600 app.js
------         11/3/2026   7:06 AM            533 index.html
------         11/3/2026   7:06 AM            460 style.css

    Directory: D:\NEW-DOWNNLOAD\starter-kit\bai-xe-website\web\images

Mode                 LastWriteTime         Length Name
----                 -------------         ------ ----
------         11/3/2026   7:06 AM           3089 logo-parkeasy.png

```

## 4.3. Lọc log truy cập website

### a) Lệnh lọc các dòng status=500

```bash
 Get-Content .\logs\gate.log | Select-String "status=500" > .\logs\loi_500.txt
```

### 2 dòng đầu tiên trong logs/loi_500.txt

```
2026-02-28 08:08:39 POST /api/cho-trong status=500
2026-02-28 08:23:23 POST /api/cho-trong status=500
```

### b) Lệnh đếm số dòng status=404 và kết quả

```bash
 (Get-Content .\logs\gate.log | Select-String "status=404").count
```

```
4
```

## 4.4. Chạy script tong_hop (.ps1 hoặc .sh)

### Lệnh chạy (Windows: nếu dùng Phụ lục 2 thì ghi cả 2 lệnh)

```bash
 Set-ExecutionPolicy -Scope Process -ExecutionPolicy Bypass
 .\tong_hop.ps1
```

### Nội dung file logs/tong_hop.txt

```
=== BAO CAO SU CO WEBSITE ===

2026-02-28 08:12:50 GET /tin-tuc status=404
2026-02-28 08:31:56 GET /images/so-do-bai.jpg status=404
2026-02-28 08:36:18 GET /images/so-do-bai.jpg status=404
2026-02-28 08:47:02 GET /tin-tuc status=404

Count    : 6
Average  : 
Sum      : 
Maximum  : 
Minimum  : 
Property : 

```

## 4.5. README.md và bảo vệ thông tin bí mật

> README.md, .gitignore và .env.example được chấm trực tiếp trên file ở gốc dự án. Đánh dấu `[x]` vào các mục đã làm để tự kiểm tra.
> 
- [x]  README.md: Heading 1, mô tả có **in đậm** và *in nghiêng*, bảng, code block, task list, blockquote
- [x]  .gitignore có dòng `.env` (tên file đúng, không có đuôi .txt)
- [x]  .env.example có đủ tên biến, giá trị để trống (tên file đúng, không có đuôi .txt)

## 4.6. Kiểm tra trang web bằng DevTools (F12) và báo cáo lỗi

### Bảng lỗi

| STT | Tab DevTools phát hiện lỗi | Tên file hoặc thông báo lỗi | Cách khắc phục |
| --- | --- | --- | --- |
| 1 | tab network | GET file:///D:/NEW-DOWNNLOAD/starter-kit/bai-xe-website/web/images/logo.jpg net::ERR_FILE_NOT_FOUND | vào file index.html trong vscode ở dòng thứ 10 sửa lại đường dẫn ảnh thành đường dẫn chỉ đúng sang ảnh bên trong file images: src="./images/logo-parkeasy.png” |
| 2 | tab console | app.js:18 Uncaught ReferenceError: hienThiGiaGui is not defined | vào file app.js bên trong vscode sửa lại cách gọi hàm đúng thành hienThiBangGiaGui(); |

> Ảnh chụp màn hình lưu trong thư mục `evidence/` (network.png, console.png).
> 

### Báo cáo lỗi gửi trưởng nhóm

- **Context: mình đang ở trang index.html có chủ đề là ParkEasy – Bãi giữ xe thông minh thì f12 lên phát hiện lỗi ở trong tab console là sai cách gọi hàm trong file app.js khiến phần Bảng giá gửi xe bị lỗi không hiển thị được bảng giá**
- **Expected: Hàm  hienThiBangGiaGui() được gọi và thực thi bình thường để hiển thị bảng giá gửi xe lên giao diện trang index.html**
- **Actual:  trang web ngừng thực thi đoạn mã javascript gọi hàm trong app.js khiến phần bảng không được hiển thị đúng trên trang và bắn ra tab console dòng thông báo lỗi là hàm hienThiBangGiaGui() chưa được định nghĩa.**
- **Log:** app.js:18 Uncaught ReferenceError: hienThiGiaGui is not defined

### Câu tìm kiếm Google

```
 site:stackoverflow.com “Uncaught ReferenceError: Function is Not Defined”
```

## 4.7. Excel

> Phần Excel được chấm trực tiếp trên file `data/luot_gui_xe_thang_2.xlsx`, không cần ghi vào đây.
>