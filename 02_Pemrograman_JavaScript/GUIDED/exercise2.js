/** buatlah sebuah array berisi 3 minimum favorit kalian, dan simpan dalma variabel bersanam 
 * listMinuman
 * 2. setelah itu, ubah 2 element pertama menggunakan notasi dan penugasan
 * 3. terakhir, tambahkan minuman baru di depan array */

let listMinuman = ["Kopi", "Teh Tarik", "Matcha Latte"];

listMinuman[0] = "Es Jeruk";
listMinuman[1] = "Air Kelapa";

listMinuman.unshift("Susu Cokelat");

console.log(listMinuman);