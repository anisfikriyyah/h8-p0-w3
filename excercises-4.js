var input = ["0001", "Roman Alamsyah ", "Bandar Lampung", "21/05/1989", "Membaca"]

 function dataHandling2(input){
   input[1]="Roman Alamsyah Elsyahrawy" 
   input[2]="Provinsi Bandar Lampung" 
   input.pop()
   input.splice(5,0,"Pria","SMA Internasional Metro")
   console.log(input)
   input[4]= "21/05/1989"
   var split = input[4].split("/")
   //console.log(split)
   var bulan = ""
   switch(Number(split[1])) {
    case 01 :
      bulan = "Januari"
    break;
    case 02 :
      bulan = "Februari"
    break;
    case 03 :
      bulan = "Maret"
    break;
    case 04 :
      bulan = "April"
    break;
    case 05 :
      bulan = "Mei"
    break;
    case 06 :
      bulan = "Juni"
    break;
    case 07 :
      bulan = "Juli"
    break;
    case 08 :
      bulan = "Agustus"
    break;
    case 09 :
      bulan = "September"
    break;
    case 10 :
      bulan = "Oktober"
    break;
    case 11 :
      bulan = "November"
    break;
    case 12 :
      bulan = "Desember"
    break;
    default :
      bulan = "Maaf Format Anda Salah"
    break;
  }
  console.log(bulan)

  var Descending = split.sort(function(x,y) {return y-x})
 console.log(Descending)

 var date = input[4].split('/')
 console.log(date.join('-'))
  
 var name = input[1].slice(0,14)
 console.log(name)

}

 dataHandling2(input)
/**
 * keluaran yang diharapkan (pada console)
 *
 * ["0001", "Roman Alamsyah Elsharawy", "Provinsi Bandar Lampung", "21/05/1989", "Pria", "SMA Internasional Metro"]
 * Mei
 * ["1989", "21", "05"]
 * 21-05-1989
 * Roman Alamsyah
 */