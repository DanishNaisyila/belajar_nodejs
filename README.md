### NAMA  : DANISH NAISYILA AZKA
### NIM   : 362458302098
### KELAS : TRPL-2D

## <h1 align="center">LAPORAN PRAKTIKUM MENGENAI MIDDLEWARE AUTENTIKASI</h1>
    Pada tugas ini dilakukan penerapan konsep pengamanan API menggunakan metode autentikasi dan otorisasi berbasis JSON Web Token (JWT) pada proyek Node.js. Tujuannya adalah agar setiap akses terhadap data pada API, seperti data film dan sutradara, hanya dapat dilakukan oleh pengguna yang telah terdaftar dan memiliki izin yang sah. Melalui proses ini, mahasiswa belajar bagaimana cara membuat sistem register dan login, melakukan hashing password dengan bcrypt, menghasilkan token JWT, serta menerapkan middleware autentikasi untuk melindungi endpoint penting. Selain itu, pengujian dilakukan menggunakan Postman untuk memastikan setiap endpoint, mulai dari register, login, hingga operasi CRUD (Create, Read, Update, Delete) pada data movies dan directors itu berfungsi dengan baik dan aman dari akses tidak sah.

## PENGUJIAN
1. Menjalankan server Node.js dengan perintah nodemon server.js agar bisa diakses melalui Postman.
2. Mengirim request POST /auth/register untuk menambahkan akun pengguna baru ke database.
![alt text](<assets/Screenshot 2025-11-06 152818.png>)

3. Melakukan login dengan mengirim data agar mendapatkan token JWT.
![alt text](<assets/Screenshot 2025-11-06 153123.png>)

5. Menambahkan variabel bernama token di tab Variables dan menempelkan nilai token ke kolom value.
![alt text](<assets/Screenshot 2025-11-06 155837.png>)

6. Menggunakan token tersebut untuk menambah data baru dengan metode POST ke endpoint yang dilindungi.
![alt text](<assets/Screenshot 2025-11-06 160652.png>)

7. Menampilkan pesan error jika token sudah kadaluwarsa atau tidak lagi valid.
![alt text](<assets/Screenshot 2025-11-06 154650.png>)

8. Menampilkan pesan error saat mencoba mengakses endpoint tanpa menyertakan token.
![alt text](<assets/Screenshot 2025-11-07 121530.png>)

11. Menambahkan data sutradara baru ke tabel directors dengan metode POST.
![alt text](<assets/Screenshot 2025-11-07 122708.png>)

12. Menggunakan token tersebut untuk menambah data baru dengan metode POST ke endpoint yang dilindungi.
![alt text](<assets/Screenshot 2025-11-07 122805.png>)

13. Menampilkan pesan error saat mencoba mengakses endpoint tanpa menyertakan token.
![alt text](<assets/Screenshot 2025-11-07 123525.png>)

## KESIMPULAN
    Penerapan autentikasi dan otorisasi menggunakan JWT pada API Node.js berhasil meningkatkan keamanan sistem, karena hanya pengguna terverifikasi yang dapat mengakses dan mengelola data melalui proses login dan token yang valid.

## POSTMAN
    **Movies**
    https://naisyiladanish-4163305.postman.co/workspace/Personal-Workspace~25c42560-9919-4618-a6d6-97fac72e69c1/collection/47980232-42d1e7dc-ae54-42d0-a47c-6dfd5e187ad3?action=share&source=copy-link&creator=47980232

    **Directors**
    https://naisyiladanish-4163305.postman.co/workspace/Personal-Workspace~25c42560-9919-4618-a6d6-97fac72e69c1/collection/47980232-54f455c0-e827-4386-8ca5-d39691fa42ab?action=share&source=copy-link&creator=47980232