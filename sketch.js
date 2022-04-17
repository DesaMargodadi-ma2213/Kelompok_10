function setup() {
  createCanvas(2500, 3000);
  
}

//gambar logo
let = logo1;
let = logo2;
let = gambar;
let = dokumentasi1;
let = dokumentasi2;
let = dokumentasi3;

function preload(){
  logo1 = loadImage('logo1.jpg');
  logo2 = loadImage('logo2.png');
  gambar  =  loadImage('gambar.png');
  dokumentasi1 = loadImage('dokumentasi1.jpeg');
  dokumentasi2 = loadImage('dokumentasi2.jpeg');
  dokumentasi3 = loadImage('dokumentasi3.jpeg');
}


function draw() {
  background("white");
  fill (0,0,0);

  //logo dan gambar
  image(logo1,50,17,81,93);
  image(logo2,1100,17,81,93);
  image(gambar,1400,107,400,400);
  image(dokumentasi1,1000,2690,400,400);
  image(dokumentasi2,500,2690,400,400);
  image(dokumentasi3,50,2690,400,400);
  

  textSize (20);
  //profil desa
  line (0,10,0,130);
  line (1300,130,0,130);
  line (1300,10,1300,130);
  line (1300,0,0,0);
  text("profil desa margodadi",500,30);
  textSize (15);
  text("Desa Margodadi terletak di kabubaten Lampung Selatan, kecamatan Jati Agung. Desa ini memiliki luas sebesar 5,6561 km^2.",180,90);
  
  //A.batas wilayah
  text ("A.Batas Wilayah",40,150);
  line (40,330,40,170);
  line (480,330,40,330);
  line (480,170,40,170);
  line (190,330,190,170);
  line (340,330,340,170);
  line (480,330,480,170);
  line (480,190,40,190);
  text ("BATAS",80,190);
  text ("DESA",235,190);
  text ("KECAMATAN",350,190);
  line (480,220,40,220);
  line (480,250,40,250);
  line (480,280,40,280);
  //batas
  textSize (15);
  text ("SEBELAH UTARA",40,210);
  text ("SEBELAH TIMUR",40,240);
  text ("SEBELAH SELATAN",40,270);
  text ("SEBELAH BARAT",40,300);
  //desa
  text ("SUMBER JAYA",200,210);
  text ("GEDUNG AGUNG",200,240);
  text ("GEDUNG HARAPAN",190,270);
  text ("MARGO LESTARI",200,300);
  //Kecamatan
  text ("JATI AGUNG",350,210);
  text ("JATI AGUNG",350,240);
  text ("JATI AGUNG",350,270);
  text ("JATI AGUNG",350,300);
  
  //B.Jumlah Penduduk
  textSize (20);
  text ("B.jumlah Penduduk",590,150);
  line (590,309,590,170);
  line (590,170,1040,170);
  line (590,190,1040,190);
  line (590,220,1040,220);
  line (590,250,1040,250);
  line (590,280,1040,280);
  line (590,310,1040,310);
  line (1040,309,1040,170);
  line (800,309,800,170);
  //jumlah laki-laki
  text ("URAIAN",640,185);
  text ("KETERANGAN",850,185);
  textSize (15);
  text ("Jumlah Laki-Laki",600,210);
  text ("1541 Jiwa",850,210);
  text ("Jumlah Perempuan",600,240);
  text ("1431 Jiwa",850,240);
  text ("Jumlah Total",600,270);
  text ("2972 Jiwa",850,270);
  text ("Jumlah Kepala Keluarga",600,300);
  text ("875 KK",850,300);
  
  // grafik Jumlah Penduduk
  textSize (20);
  text ("C.Grafik Jumlah Penduduk",60,400)
  line (90,450,90,900);
  line (990,900,90,900);
  text ("Laki-Laki",190,950);
  text ("Perempuan",380,950);
  text ("Jumlah Total",580,950);
  text ("Jumlah Kepala Keluarga",780,950);
  text ("10",60,850);
  text ("300",50,750);
  text ("500",50,690);
  text ("1000",40,630);
  text ("1500",40,560);
  text ("2000",40,450);
  fill (255,255,204);
  rect (190,490,90,410);
  fill (204,254,204);
  rect (380,570,90,330);
  fill (153,255,255);
  rect (590,400,90,500);
  fill (255,153,153);
  rect (840,620,90,280);
  
  // D.Data Agama
  fill (0,0,0);
  text ("D.Jumlah Penganut Agama",50,1000);
  line (50,1050,700,1050);
  line (50,1050,50,1330);
  line (50,1090,700,1090);
  line (50,1130,700,1130);
  line (50,1170,700,1170);
  line (50,1210,700,1210);
  line (50,1250,700,1250);
  line (50,1290,700,1290);
  line (50,1330,700,1330);
  line (400,1330,400,1050);
  line (700,1330,700,1050);
  textSize (20);
  text ("Agama",150,1075);
  text ("Jumlah (Orang)",500,1075);
  text ("Islam",150,1115);
  text ("Katolik",150,1155);
  text ("Hindu",150,1200);
  text ("Buddha",150,1240);
  text ("Kristen",150,1280);
  text ("Konghucu",150,1320);
  text ("2875",500,1115);
  text ("89",500,1155);
  text ("0",500,1200);
  text ("0",500,1240);
  text ("8",500,1280);
  text ("0",500,1200);
  text ("0",500,1320);
  
  //E.Kewarganegaraan
  text ("E.Kewarganegaraan",950,1000);
  line (850,1050,1400,1050);
  line (850,1050,850,1250);
  line (850,1090,1400,1090);
  line (850,1130,1400,1130);
  line (850,1170,1400,1170);
  line (850,1210,1400,1210);
  line (850,1250,1400,1250);
  line (1400,1050,1400,1250);
  line (1050,1050,1050,1250);
  line (1200,1050,1200,1250);
  text ("Kewarganegaraan",870,1080);
  text ("Laki-Laki",1070,1080);
  text ("Perempuan",1250,1080);
  text ("WNI",870,1120);
  text ("1541 Orang",1070,1120);
  text ("1431 Orang",1250,1120);
  text ("WNA",870,1160);
  text ("-",1070,1160);
  text ("-",1250,1160);
  textSize (15);
  text ("WNI Kewarganegaraan",870,1200);
  text ("-",1250,1200);
  text ("-",1070,1200);
  textSize (20);
  text ("Jumlah",870,1240);
  text ("1541",1070,1240);
  text ("1431",1250,1240);
  
  //grafik Jumlah Penganut Agama
  text ("F.Grafik Jumlah Penganut Agama",70,1400)
  line (100,1430,100,1800);
  line (780,1800,100,1800);
  text ("Islam",150,1830);
  text ("Katolik",250,1830);
  text ("Hindu",350,1830);
  text ("Buddha",450,1830);
  text ("Kristen",550,1830);
  text ("Konghucu",650,1830);
  text ("0",70,1800);
  text ("500",60,1700);
  text ("1000",50,1600);
  text ("2000",50,1530);
  text ("3000",50,1450);
  fill (102,178,255);
  rect (130,1450,70,350);
  fill (51,255,153);
  rect (240,1750,70,50);
  fill (204,153,255);
  rect (540,1780,70,20);
  
  //grafik kewarganegaraan
  text ("G.Grafik jumlah kewarganegaraan",950,1400)
  line (900,1430,900,1800);
  line (1400,1800,900,1800);
  text ("WNI",950,1830);
  text ("WNA",1050,1830);
  text ("WNI KEWARGANEGARAAN",1150,1830);
  text ("500",860,1700);
  text ("1000",850,1600);
  text ("2000",850,1530);
  text ("3000",850,1450);
  fill (102,178,255);
  rect (930,1450,70,350);
  
  
  //H.PENDIDIKAN
  fill (0,0,0)
  text ("H.Pendidikan",70,1900)
  line (70,1950,700,1950);
  line (70,1990,700,1990);
  line (70,2030,700,2030);
  line (70,2070,700,2070);
  line (70,2110,700,2110);
  line (70,2150,700,2150);
  line (70,1950,70,2150);
  line (400,1950,400,2150);
  line (700,1950,700,2150);
  textSize (15);
  text ("JENJANG PENDIDIKAN",130,1975);
  text ("JUMLAH (ORANG)",450,1975);
  text ("SD",130,2015);
  text ("SMP",130,2055);
  text ("SMA",130,2095);
  text ("SARJANA/STRATA I",130,2135);
  text ("142",450,2015);
  text ("313",450,2055);
  text ("937",450,2095);
  text ("115",450,2135);
  
  //I.JENIS PEKERJAAN
  text("I.JENIS PEKERJAAN",950,1900)
  line (900,1950,1400,1950);
  line (900,1990,1400,1990);
  line (900,2030,1400,2030);
  line (900,2070,1400,2070);
  line (900,2110,1400,2110);
  line (900,2150,1400,2150);
  line (900,2190,1400,2190);
  line (900,1950,900,2190);
  line (1150,1950,1150,2190);
  line (1400,1950,1400,2190);
  textSize (15);
  text ("JENJANG PEKERJAAN",950,1975);
  text ("JUMLAH (ORANG)",1200,1975);
  text ("PETANI",950,2015);
  text ("BURUH",950,2055);
  text ("GURU",950,2095);
  text ("PEDAGANG",950,2135);
  text ("SWASTA",950,2175);
  text ("563",1200,2015);
  text ("152",1200,2055);
  text ("29",1200,2095);
  text ("99",1200,2135);
  text ("145",1200,2175);
  
  //J.GRAFIK PENDIDIKAN 
  text ("J.PENDIDIKAN",70,2250);
  line (100,2300,100,2600);
  line (700,2600,100,2600);
  text ("SD",150,2630);
  text ("SMP",250,2630);
  text ("SMA",350,2630);
  text ("SARJANA",450,2630);
  text ("0",70,2600);
  text ("250",60,2500);
  text ("500",60,2400);
  text ("1000",60,2320);
  fill (102,178,255);
  rect (130,2550,70,50);
  fill (51,255,153);
  rect (230,2520,70,80);
  fill (204,153,255);
  rect (330,2330,70,270);
  fill (102,178,255);
  rect (450,2580,70,20);
  
  //K.GRAFIK JENIS PEKERJAAN
  text ("J.PEKERJAAN",950,2250);
  line (950,2300,950,2600);
  line (950,2600,1500,2600);
  text ("PETANI",1000,2630);
  text ("BURUH",1100,2630);
  text ("GURU",1200,2630);
  text ("PEDAGANG",1300,2630);
  text ("SWASTA",1400,2630);
  text ("0",930,2600);
  text ("100",910,2500);
  text ("300",910,2400);
  text ("600",910,2320);
  fill (102,178,255);
  rect (990,2330,70,270);
  fill (51,255,153);
  rect (1090,2450,70,150);
  fill (204,153,255);
  rect (1200,2580,70,20);
  fill (102,178,255);
  rect (1300,2500,70,100);
  fill (51,255,153);
  rect (1390,2460,70,140);
  
  
}