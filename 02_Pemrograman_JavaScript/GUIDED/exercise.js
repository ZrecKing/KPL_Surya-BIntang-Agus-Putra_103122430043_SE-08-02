/**Tulislah sebuah fungsi yang menerima bilangan N dan mencetak penjumlahan 
dari 1 hingga N. Contohnya, jika N adalah 5, 
maka fungsi akan mencetak 15 (dalam hal ini menjumlahkan 1 + 2 + 3 + 4 + 5)**/

function Jumlah(N) {
    let Total = 0;
    let i = 1;
    
    while (i <= N) {
        Total += i;
        i++;
    }
    
    return Total;
}

let MasukanBilangan = Jumlah(5);
console.log(MasukanBilangan);