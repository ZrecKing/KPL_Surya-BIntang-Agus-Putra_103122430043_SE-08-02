# TM 03_GUI_dengan_HTML_dan_CSS

**Nama:** Surya Bintang Agus Putra
**NIM:** 103122430043
**Kelas:** S1SE-08-02
**Dosen pengampu:** Yudha Islami Sulistiya
**Asisten Praktikum:** Adhiansyah Ancha & Hamid Khaeruman

## Soal

Kamu sudah menulis fungsi mulOfArray. Ujilah dengan input [2, 0, 26, 28, -2], dengan output yang seharusnya adalah 1456. Jika kamu menemukan bahwa hasilnya berbeda, bisakah kamu memperbaikinya? Jika kamu menemukan bahwa hasilnya sama, bisakah kamu menjelaskan mengapa demikian?

## Kode Sumber

Kode Pemograman Tersedia di [index.js](index.js)

di karenakan program awal ini berfungsi hanya untuk mensortir angka positif bukan di atas 0 yang menggakibatkan saat perkalian dengan 0 maka hasil nya akan selalu 0

```
        if (arr[i] >= 0) {
                result = result * arr[i];
                }
```

maka harus di perbaiki algoritma nya menjadi
```
        if (arr[i] > 0) {
                result = result * arr[i];
                }
```

## Output

Sebelum di perbaiki

![OutputAwal.png](OutputAwal.png)

setelah di perbaiki

![OutputAkhir Fix.png](OutputAkhir.png)

## Deskripsi
kesimpulan nya
pada algoritma pertama selalu menghasilkan 0 di karena angka 0 tidak tersoortir
dan di perbaiki dengan menghilang kan `=` pada algoritma pertama dari semuala `if (arr[i] >= 0)` menjadi `if (arr[i] > 0)`