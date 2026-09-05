class Araba
{

    //properties değişkenler 
marka = "bmw";
model = "x5";
kapiSayisi = 4;
pencereSayisi = 4;

//olaylar 
git()
{
  console.log("gidiyor...");
}

}

var a = new Araba();
a.marka = "mercedes";
a.model = "xl";
a.kapiSayisi = 4;
a.pencereSayisi = 4;
a.git();
console.log("Sipariş verilen arabanın markası " +
    a.marka + " modeli : "+a.model + " kapı sayısı : " + a.kapiSayisi + " pencere sayısı : " +a.pencereSayisi);