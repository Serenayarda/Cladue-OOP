class matematik {
    topla(sayi1, sayi2) 
{
    var sonuc = 0
    sonuc = sayi1 + sayi2
    return sonuc
}
}

var m = new matematik()
var gelendeger = m.topla(5, 5)
console.log("toplam sonucu: " + gelendeger)