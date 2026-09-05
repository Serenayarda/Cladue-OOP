var Person = function() {
    isim;
    soyisim;
    this.adSoyad = function() 
    {
        return isim + " " + soyisim;
    }
}

var p = new Person();
p.isim = "ibrahim";
p.soyisim = "gökyar";
var gelenAdSoyad = p.adSoyad();
console.log("gelen ad soyad: " + gelenAdSoyad);