# TM_02_Pemrograman_JavaScript

**Nama:** Surya Bintang Agus Putra
**NIM:** 103122430043
**Kelas:** S1SE-08-02
**Dosen pengampu:** Yudha Islami Sulistiya
**Asisten Praktikum:** Adhiansyah Ancha & Hamid Khaeruman

## Soal

Buatlah sebuah fungsi bernama fizzBuzz yang menerima input larik (array) dan mengembalikan deretan bilangan dan "Fizz" untuk kelipatan 2, "Buzz" untuk kelipatan 7, dan "FizzBuzz" untuk kelipatan 14. Beri nama berkas program sebagai tm.js dan taruh di direktori TM

## Kode Sumber

Kode Pemograman Tersedia di [tm.js](tm.js)

## Output
![Output.png](Output.png)

## Deskripsi

Kode tersebut merupakan implementasi fungsi JavaScript bernama fizzBuzz yang dirancang untuk memproses sebuah larik (array) bilangan berdasarkan aturan pembagian tertentu, disertai dengan serangkaian pengujian unit (unit testing) untuk memastikan validitasnya. Fungsi ini bekerja dengan mengevaluasi setiap elemen dalam larik menggunakan struktur perulangan while: bilangan yang habis dibagi 14 akan diganti dengan kata "FizzBuzz", bilangan yang habis dibagi 2 menjadi "Fizz", dan bilangan yang habis dibagi 7 menjadi "Buzz", sedangkan bilangan lainnya tetap dipertahankan. Format keluaran fungsi ini bersifat adaptif, di mana hasil akhir akan digabungkan menggunakan pemisah koma jika angka 1 terdapat dalam larik input, dan menggunakan spasi jika tidak ada. Bagian pengujian menggunakan modul assert untuk memvalidasi berbagai skenario, mulai dari input angka negatif, bilangan nol, hingga penanganan galat jika input yang diberikan bukan merupakan sebuah larik.