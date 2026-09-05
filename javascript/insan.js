
//soyutlama ile gerçek hayattakı bir nesneyi javascript ortamında tanımladım 
class Insan 
{  // başlangıc scope 
   //string tipinde isim diye bir değişken tanımladık 
  adi = "ibrahim123";
  soyadi = "gökyar";
  //integer tipinde tam sayısal verileri saklamak tutmak kullanır 
  //değişkenler datatype 
  yas = 48;
  //boolean true yada false şeklinde veri tutar 
  cinsiyet = false;
  //double kesirli sayılıra tutmak için kullanılır 
  maas = 3.14;

  uyu()
  {
    console.log("insan uyuyor");
  }

  yasHesapla(dogumyili) 
  {
    var bulundugumuzyil = new Date().getFullYear();
    var sonuc = bulundugumuzyil - dogumyili;
    return sonuc;
  }
} // bitiş scope


  //var = nesneadi  = new ClassAdi();  // nesne oluşturma
var i = new Insan();
i.adi = "hakan ";
i.soyadi = "yılmaz";
i.yas = 25;
i.cinsiyet = true;
i.uyu();
i.yasHesapla(1998);
var gelenyas = i.yasHesapla(1998);
console.log("gelen yas: " + gelenyas);