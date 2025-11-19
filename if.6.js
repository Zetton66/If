let totalBelanja = 120000;

if (totalBelanja >= 500000) {
    console.log(`
        Total belanja: Rp ${totalBelanja}
        Diskon 20%
        Total bayar: Rp ${totalBelanja-(totalBelanja*20/100)}`);
} else if (totalBelanja >= 200000) {
    console.log(`
        Total belanja: Rp ${totalBelanja}
        Diskon 10%
        Total bayar: Rp ${totalBelanja-(totalBelanja*10/100)}`);
} else if (totalBelanja >= 100000) {
    console.log(`
        Total belanja: Rp ${totalBelanja}
        Diskon 5%
        Total bayar: Rp ${totalBelanja-(totalBelanja*5/100)}`);
}
