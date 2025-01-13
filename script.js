log = localStorage.getItem("log");
log = log ? log : "solution,response,time(ms)\n";

stats = localStorage.getItem("stats");
stats = stats ? JSON.parse(stats) : [[0,0,0,0,0,0],[0,0,0,0,0,0],[0,0,0,0,0,0],[0,0,0,0,0,0],[0,0,0,0,0,0],[0,0,0,0,0,0]];

function display() {
  document.getElementById("log").innerText = log;
  for (let i = 1; i <= 6; i++) {
    for (let j = 1; j <= 6; j++) {
      document.getElementById(`${i}${j}`).innerText = stats[i - 1][j - 1];
    }
  }
}

display();

const names = [
  "aa1", "aa2", "aa3", "aa4", "aai1", "aai2", "aai3", "aak1", "aak3", "aam1", "aam2", "aan1", "aan2", "aan3", "aang1", "aap3", "aat3", "aau1", "aau2", "aau3", "ai1", "ai2", "ai3", "ak1", "am1", "am2", "am3", "an3", "ang1", "ang2", "ap1", "au1", "au2", "au3", "baa1", "baa2", "baa3", "baa6", "baai1", "baai2", "baai3", "baai6", "baak1", "baak3", "baak6", "baan1", "baan2", "baan3", "baan6", "baang6", "baat3", "baat6", "baau1", "baau2", "baau3", "baau6", "bai1", "bai3", "bai6", "bak1", "bak6", "bam1", "ban1", "ban2", "ban3", "ban6", "bang1", "bang2", "bang6", "bat1", "bat6", "bau6", "be1", "bei1", "bei2", "bei3", "bei4", "bei6", "bek3", "beng2", "beng3", "beng6", "bik1", "bik3", "bin1", "bin2", "bin3", "bin6", "bing1", "bing2", "bing3", "bing4", "bing6", "bit1", "bit3", "bit6", "biu1", "biu2", "biu3", "biu6", "bo1", "bo2", "bo3", "bok1", "bok3", "bok6", "bong1", "bong2", "bong3", "bong6", "bou1", "bou2", "bou3", "bou6", "bui1", "bui3", "bui4", "bui5", "bui6", "buk1", "buk6", "bun1", "bun2", "bun3", "bun6", "bung2", "bung6", "but3", "but6", "caa1", "caa3", "caa4", "caai1", "caai2", "caai3", "caai4", "caak1", "caak3", "caak6", "caam1", "caam2", "caam3", "caam4", "caam5", "caan1", "caan2", "caan3", "caan4", "caang1", "caang2", "caang3", "caang4", "caap3", "caat3", "caau1", "caau2", "caau3", "caau4", "cai1", "cai2", "cai3", "cai4", "cai5", "cak1", "cam1", "cam2", "cam3", "cam4", "cam5", "cam6", "can1", "can2", "can3", "can4", "cang1", "cang3", "cang4", "cap1", "cat1", "cau1", "cau2", "cau3", "cau4", "cau5", "ce1", "ce2", "ce3", "ce4", "cek3", "ceng1", "ceng2", "ceng4", "ceoi1", "ceoi2", "ceoi3", "ceoi4", "ceon1", "ceon2", "ceon4", "ceot1", "ci1", "ci2", "ci3", "ci4", "ci5", "cik1", "cik3", "cim1", "cim2", "cim3", "cim4", "cim5", "cin1", "cin2", "cin4", "cin5", "cing1", "cing2", "cing3", "cing4", "cip3", "cit1", "cit3", "ciu1", "ciu2", "ciu3", "ciu4", "ciu5", "co1", "co2", "co3", "co4", "co5", "coek3", "coeng1", "coeng2", "coeng3", "coeng4", "coi1", "coi2", "coi3", "coi4", "cok3", "cong1", "cong2", "cong3", "cong4", "cou1", "cou2", "cou3", "cou4", "cou5", "cuk1", "cuk3", "cung1", "cung2", "cung3", "cung4", "cung5", "cung6", "cyu1", "cyu2", "cyu3", "cyu4", "cyu5", "cyun1", "cyun2", "cyun3", "cyun4", "cyun5", "cyut3", "daa1", "daa2", "daai1", "daai2", "daai3", "daai6", "daak1", "daam1", "daam2", "daam3", "daam6", "daan1", "daan2", "daan3", "daan6", "daap1", "daap3", "daap6", "daat3", "daat6", "dai1", "dai2", "dai3", "dai6", "dak1", "dak6", "dam2", "dam3", "dam4", "dan1", "dan2", "dan3", "dan6", "dang1", "dang2", "dang3", "dang6", "dap1", "dat1", "dat6", "dau1", "dau2", "dau3", "dau6", "de1", "de2", "dei6", "dek6", "deng1", "deng2", "deng3", "deng6", "deoi1", "deoi3", "deoi6", "deon1", "deon6", "deot1", "deu6", "dik1", "dik6", "dim1", "dim2", "dim3", "dim6", "din1", "din2", "din3", "din6", "ding1", "ding2", "ding3", "ding6", "dip3", "dip6", "dit3", "dit6", "diu1", "diu2", "diu3", "diu6", "do1", "do2", "do3", "do6", "doe2", "doek3", "doi6", "dok6", "dong1", "dong2", "dong3", "dong6", "dou1", "dou2", "dou3", "dou6", "duk1", "duk6", "dung1", "dung2", "dung3", "dung4", "dung6", "dyun1", "dyun2", "dyun3", "dyun6", "dyut6", "e6", "ei6", "faa1", "faa3", "faa4", "faai3", "faak3", "faan1", "faan2", "faan3", "faan4", "faan5", "faan6", "faat3", "fai1", "fai2", "fai3", "fai6", "fan1", "fan2", "fan3", "fan4", "fan5", "fan6", "fang4", "fat1", "fat3", "fat6", "fau1", "fau2", "fau4", "fau6", "fe1", "fei1", "fei2", "fei4", "fei6", "fo1", "fo2", "fo3", "fo6", "fok3", "fong1", "fong2", "fong3", "fong4", "fu1", "fu2", "fu3", "fu4", "fu5", "fu6", "fui1", "fui2", "fui3", "fuk1", "fuk6", "fun1", "fun2", "fung1", "fung2", "fung3", "fung4", "fung6", "fut3", "gaa1", "gaa2", "gaa3", "gaa4", "gaai1", "gaai2", "gaai3", "gaak3", "gaam1", "gaam2", "gaam3", "gaan1", "gaan2", "gaan3", "gaang1", "gaang3", "gaap3", "gaat3", "gaau1", "gaau2", "gaau3", "gaau6", "gai1", "gai2", "gai3", "gai6", "gam1", "gam2", "gam3", "gam6", "gan1", "gan2", "gan3", "gan6", "gang1", "gang2", "gang3", "gap1", "gap3", "gap6", "gat1", "gat6", "gau1", "gau2", "gau3", "gau6", "ge1", "gei1", "gei2", "gei3", "gei6", "geng1", "geng2", "geng3", "geoi1", "geoi2", "geoi3", "geoi6", "gep6", "gik1", "gik3", "gik6", "gim1", "gim2", "gim3", "gim6", "gin1", "gin2", "gin3", "gin6", "ging1", "ging2", "ging3", "ging6", "gip2", "gip3", "gip6", "git3", "git6", "giu1", "giu2", "giu3", "giu6", "go1", "go2", "go3", "goe3", "goek3", "goeng1", "goeng6", "goi1", "goi2", "goi3", "gok3", "gon1", "gon2", "gon3", "gon4", "gong1", "gong2", "gong3", "gong6", "got3", "gou1", "gou2", "gou3", "gu1", "gu2", "gu3", "gui6", "guk1", "guk6", "gun1", "gun2", "gun3", "gung1", "gung2", "gung3", "gung6", "gwaa1", "gwaa2", "gwaa3", "gwaai1", "gwaai2", "gwaai3", "gwaak3", "gwaan1", "gwaan3", "gwaang2", "gwaang6", "gwaat3", "gwai1", "gwai2", "gwai3", "gwai6", "gwan1", "gwan2", "gwan3", "gwan6", "gwang1", "gwat1", "gwat6", "gwik1", "gwing1", "gwing2", "gwo1", "gwo2", "gwo3", "gwok3", "gwong1", "gwong2", "gwong3", "gwong6", "gyun1", "gyun2", "gyun3", "gyun6", "gyut3", "gyut6", "haa1", "haa2", "haa4", "haa5", "haa6", "haai1", "haai4", "haai5", "haai6", "haak1", "haak3", "haam1", "haam2", "haam3", "haam4", "haam5", "haam6", "haan1", "haan4", "haan5", "haan6", "haang1", "haang4", "haap3", "haap6", "haau1", "haau2", "haau3", "haau4", "haau6", "hai1", "hai4", "hai5", "hai6", "hak1", "ham1", "ham2", "ham3", "ham4", "ham5", "ham6", "han2", "han4", "han6", "hang1", "hang2", "hang3", "hang4", "hang5", "hang6", "hap1", "hap6", "hat1", "hat6", "hau1", "hau2", "hau3", "hau4", "hau5", "hau6", "hei1", "hei2", "hei3", "hek3", "heng1", "heoi1", "heoi2", "heoi3", "heoi5", "hik1", "him1", "him2", "him3", "hin1", "hin2", "hin3", "hing1", "hing3", "hing5", "hip3", "hip6", "hit3", "hiu1", "hiu2", "hiu3", "hm1", "hng6", "ho1", "ho2", "ho3", "ho4", "ho6", "hoe1", "hoeng1", "hoeng2", "hoeng3", "hoi1", "hoi2", "hoi4", "hoi5", "hoi6", "hok3", "hok6", "hon1", "hon2", "hon3", "hon4", "hon5", "hon6", "hong1", "hong2", "hong3", "hong4", "hong5", "hong6", "hot3", "hot6", "hou1", "hou2", "hou3", "hou4", "hou6", "huk1", "huk6", "hung1", "hung2", "hung3", "hung4", "hung6", "hyun1", "hyun2", "hyun3", "hyut3", "jaa5", "jaa6", "jaai2", "jaak3", "jai5", "jai6", "jam1", "jam2", "jam3", "jam4", "jam5", "jam6", "jan1", "jan2", "jan3", "jan4", "jan5", "jan6", "jap1", "jap6", "jat1", "jat6", "jau1", "jau2", "jau3", "jau4", "jau5", "jau6", "je4", "je5", "je6", "jeng2", "jeng4", "jeoi1", "jeoi4", "jeoi5", "jeoi6", "jeon6", "ji1", "ji2", "ji3", "ji4", "ji5", "ji6", "jik1", "jik6", "jim1", "jim2", "jim3", "jim4", "jim5", "jim6", "jin1", "jin2", "jin3", "jin4", "jin5", "jin6", "jing1", "jing2", "jing3", "jing4", "jing5", "jing6", "jip3", "jip6", "jit3", "jit6", "jiu1", "jiu2", "jiu3", "jiu4", "jiu5", "jiu6", "jo1", "joek3", "joek6", "joeng1", "joeng2", "joeng3", "joeng4", "joeng5", "joeng6", "juk1", "juk6", "jung1", "jung2", "jung3", "jung4", "jung5", "jung6", "jyu1", "jyu2", "jyu3", "jyu4", "jyu5", "jyu6", "jyun1", "jyun2", "jyun3", "jyun4", "jyun5", "jyun6", "jyut3", "jyut6", "kaa1", "kaa2", "kaa3", "kaai2", "kaak1", "kaak3", "kaat1", "kaau3", "kai1", "kai2", "kai3", "kam1", "kam4", "kam5", "kan4", "kan5", "kang2", "kang3", "kap1", "kap6", "kat1", "kau1", "kau3", "kau4", "kau5", "ke1", "ke4", "kei1", "kei2", "kei3", "kei4", "kei5", "kek6", "keoi1", "keoi4", "keoi5", "kik1", "kim4", "kin3", "kin4", "king1", "king2", "king4", "kit3", "kiu1", "kiu2", "kiu3", "kiu4", "kiu5", "ko1", "koe4", "koek3", "koek6", "koeng3", "koeng4", "koeng5", "koi2", "koi3", "kok1", "kok3", "kong1", "kong2", "kong3", "kong4", "ku1", "kui2", "kui3", "kuk1", "kung4", "kut3", "kwaa1", "kwaa2", "kwaa3", "kwaai3", "kwaang1", "kwaang3", "kwai1", "kwai2", "kwai3", "kwai4", "kwai5", "kwan1", "kwan2", "kwan3", "kwan4", "kwan5", "kwik1", "kwok3", "kwong3", "kwong4", "kyun4", "kyut3", "kyut6", "laa1", "laa3", "laai1", "laai2", "laai3", "laai6", "laak6", "laam2", "laam4", "laam5", "laam6", "laan1", "laan4", "laan5", "laan6", "laang5", "laap3", "laap6", "laat6", "laau1", "laau4", "lai1", "lai4", "lai5", "lai6", "lak6", "lam2", "lam4", "lam5", "lam6", "lang1", "lap1", "lap6", "lat1", "lau1", "lau4", "lau5", "lau6", "le1", "le2", "le4", "le5", "lei1", "lei4", "lei5", "lei6", "lek1", "lek6", "lem2", "leng1", "leng3", "leng4", "leng5", "leoi3", "leoi4", "leoi5", "leoi6", "leon2", "leon4", "leon5", "leon6", "leot6", "li1", "lik1", "lik6", "lim1", "lim2", "lim4", "lim5", "lim6", "lin2", "lin4", "lin5", "lin6", "ling1", "ling2", "ling4", "ling5", "ling6", "lip6", "lit3", "lit6", "liu1", "liu2", "liu4", "liu5", "liu6", "lo1", "lo2", "lo3", "lo4", "lo5", "lo6", "loek6", "loeng2", "loeng4", "loeng5", "loeng6", "loi4", "loi6", "lok3", "lok6", "long1", "long4", "long5", "long6", "lou1", "lou2", "lou4", "lou5", "lou6", "luk1", "luk6", "lung1", "lung4", "lung5", "lung6", "lyun1", "lyun2", "lyun4", "lyun5", "lyun6", "lyut3", "lyut6", "m2", "m4", "m6", "maa1", "maa2", "maa3", "maa4", "maa5", "maa6", "maai4", "maai5", "maai6", "maak1", "maak3", "maak6", "maan4", "maan5", "maan6", "maang1", "maang4", "maang5", "maang6", "maat3", "maat6", "maau1", "maau4", "maau5", "maau6", "mai1", "mai3", "mai4", "mai5", "mai6", "mak1", "mak3", "mak6", "man1", "man2", "man4", "man5", "man6", "mang2", "mang4", "mat1", "mat6", "mau1", "mau3", "mau4", "mau5", "mau6", "me1", "me2", "me5", "mei1", "mei4", "mei5", "mei6", "meng2", "meng4", "meng6", "mi1", "mik2", "mik6", "min4", "min5", "min6", "ming4", "ming5", "ming6", "mit1", "mit6", "miu1", "miu4", "miu5", "miu6", "mo1", "mo2", "mo4", "mo5", "mo6", "mok1", "mok3", "mok6", "mong1", "mong4", "mong5", "mong6", "mou1", "mou2", "mou4", "mou5", "mou6", "mui4", "mui5", "mui6", "muk6", "mun1", "mun4", "mun5", "mun6", "mung1", "mung2", "mung4", "mung5", "mung6", "mut3", "mut6", "naa1", "naa4", "naa5", "naa6", "naai1", "naai4", "naai5", "naai6", "naam1", "naam4", "naam5", "naan2", "naan4", "naan5", "naan6", "naap6", "naat3", "naat6", "naau4", "naau5", "naau6", "nai4", "nai5", "nai6", "nam4", "nam5", "nam6", "nan2", "nang4", "nap1", "nat6", "nau1", "nau2", "nau4", "nau5", "nau6", "ne1", "ne6", "nei1", "nei2", "nei4", "nei5", "nei6", "neoi5", "neoi6", "neot6", "ng2", "ng4", "ng5", "ng6", "ngaa1", "ngaa2", "ngaa3", "ngaa4", "ngaa5", "ngaa6", "ngaai1", "ngaai3", "ngaai4", "ngaai6", "ngaak1", "ngaak3", "ngaak6", "ngaam4", "ngaan3", "ngaan4", "ngaan5", "ngaan6", "ngaang1", "ngaang6", "ngaap3", "ngaat3", "ngaat6", "ngaau1", "ngaau2", "ngaau3", "ngaau4", "ngaau5", "ngaau6", "ngai1", "ngai2", "ngai3", "ngai4", "ngai5", "ngai6", "ngak1", "ngam1", "ngam2", "ngam3", "ngam4", "ngam6", "ngan1", "ngan3", "ngan4", "ngan6", "ngang1", "ngang2", "ngap1", "ngap6", "ngat1", "ngat6", "ngau1", "ngau2", "ngau3", "ngau4", "ngau5", "ngau6", "ngit6", "ngo1", "ngo2", "ngo4", "ngo5", "ngo6", "ngoi1", "ngoi2", "ngoi3", "ngoi4", "ngoi6", "ngok3", "ngok6", "ngon1", "ngon3", "ngon6", "ngong1", "ngong3", "ngong4", "ngong5", "ngong6", "ngou1", "ngou2", "ngou3", "ngou4", "ngou6", "ngou", "nguk1", "ngung1", "ngung3", "ni1", "ni4", "nik1", "nik6", "nim1", "nim2", "nim4", "nim5", "nim6", "nin2", "nin4", "nin5", "nin6", "ning1", "ning4", "ning6", "nip1", "nip6", "niu1", "niu4", "niu5", "niu6", "no1", "no4", "no5", "no6", "noeng4", "noi5", "noi6", "nok6", "nong4", "nong5", "nong6", "nou4", "nou5", "nou6", "nuk6", "nung4", "nung6", "nyun5", "nyun6", "o1", "o2", "o4", "oi1", "oi2", "oi3", "ok1", "ok3", "on1", "on3", "ong1", "ong3", "ou1", "ou2", "ou3", "paa1", "paa3", "paa4", "paai3", "paai4", "paak1", "paak3", "paan1", "paan3", "paang1", "paang4", "paang5", "paau1", "paau2", "paau3", "paau4", "pai1", "pai3", "pai5", "pan1", "pan3", "pan4", "pan5", "pang2", "pang4", "pat1", "pau2", "pau3", "pau4", "pei1", "pei2", "pei3", "pei4", "pei5", "pek3", "pek6", "peng1", "peng4", "pik1", "pin1", "pin2", "pin3", "pin4", "pin5", "ping1", "ping2", "ping3", "ping4", "pit3", "piu1", "piu2", "piu3", "piu4", "piu5", "po1", "po2", "po3", "po4", "poi2", "pok3", "pok6", "pong1", "pong3", "pong4", "pong5", "pou1", "pou2", "pou3", "pou4", "pou5", "pui1", "pui3", "pui4", "pui5", "puk1", "pun1", "pun2", "pun3", "pun4", "pun5", "pun6", "pung1", "pung2", "pung3", "pung4", "put3", "saa1", "saa2", "saa3", "saa4", "saai2", "saai3", "saai5", "saak3", "saam1", "saam2", "saam3", "saan1", "saan2", "saan3", "saan4", "saang1", "saang2", "saap3", "saap6", "saat3", "saau1", "saau2", "saau3", "sai1", "sai2", "sai3", "sai6", "sak1", "sam1", "sam2", "sam3", "sam4", "sam6", "san1", "san4", "san5", "san6", "sang1", "sang3", "sap1", "sap6", "sat1", "sat6", "sau1", "sau2", "sau3", "sau4", "sau6", "se1", "se2", "se3", "se4", "se5", "se6", "sei2", "sei3", "sek3", "sek6", "seng1", "seng2", "seng3", "seng4", "seoi1", "seoi2", "seoi3", "seoi4", "seoi5", "seoi6", "seon1", "seon2", "seon3", "seon4", "seon5", "seon6", "seot1", "seot6", "si1", "si2", "si3", "si4", "si5", "si6", "sik1", "sik3", "sik6", "sim1", "sim2", "sim3", "sim4", "sim6", "sin1", "sin2", "sin3", "sin4", "sin5", "sin6", "sing1", "sing2", "sing3", "sing4", "sing6", "sip3", "sit3", "sit6", "siu1", "siu2", "siu3", "siu4", "siu6", "so1", "so2", "so3", "so4", "soek3", "soeng1", "soeng2", "soeng3", "soeng4", "soeng5", "soeng6", "soi1", "sok3", "sok6", "song1", "song2", "song3", "sou1", "sou2", "sou3", "suk1", "suk3", "suk6", "sung1", "sung2", "sung3", "sung4", "syu1", "syu2", "syu3", "syu4", "syu5", "syu6", "syun1", "syun2", "syun3", "syun4", "syun5", "syun6", "syut3", "taa1", "taai1", "taai3", "taai5", "taam1", "taam2", "taam3", "taam4", "taam5", "taan1", "taan2", "taan3", "taan4", "taan5", "taap3", "taat3", "tai1", "tai2", "tai3", "tai4", "tai5", "tai6", "tam5", "tan1", "tan2", "tan3", "tan4", "tang4", "tau1", "tau2", "tau3", "tau4", "tei4", "tek3", "teng1", "teng3", "teng5", "teoi1", "teoi2", "teoi3", "teoi4", "teon1", "teon2", "teon3", "teon4", "teon5", "tik1", "tik6", "tim1", "tim2", "tim3", "tim4", "tim5", "tin1", "tin2", "tin3", "tin4", "tin5", "ting1", "ting2", "ting3", "ting4", "ting5", "tip3", "tit3", "tiu1", "tiu2", "tiu3", "tiu4", "tiu5", "to1", "to2", "to3", "to4", "to5", "to6", "toe3", "toe5", "toi1", "toi2", "toi4", "toi5", "tok3", "tong1", "tong2", "tong3", "tong4", "tou1", "tou2", "tou3", "tou4", "tou5", "tuk1", "tung1", "tung2", "tung3", "tung4", "tyun1", "tyun4", "tyun5", "tyut3", "uk1", "ung2", "ung3", "waa1", "waa2", "waa4", "waa5", "waa6", "waai1", "waai2", "waai4", "waai6", "waak6", "waan1", "waan2", "waan4", "waan5", "waan6", "waang4", "waang6", "waat3", "waat6", "wai1", "wai2", "wai3", "wai4", "wai5", "wai6", "wan1", "wan2", "wan3", "wan4", "wan5", "wan6", "wang4", "wat1", "wat6", "wik6", "wing1", "wing4", "wing5", "wing6", "wo1", "wo2", "wo3", "wo4", "wo5", "wo6", "wok3", "wok6", "wong1", "wong2", "wong4", "wong5", "wong6", "wu1", "wu2", "wu3", "wu4", "wu6", "wui1", "wui2", "wui3", "wui4", "wui5", "wui6", "wun1", "wun2", "wun4", "wun5", "wun6", "wut6", "zaa1", "zaa2", "zaa3", "zaa6", "zaai1", "zaai3", "zaai6", "zaak3", "zaak6", "zaam1", "zaam2", "zaam3", "zaam6", "zaan2", "zaan3", "zaan6", "zaang1", "zaang3", "zaang6", "zaap3", "zaap6", "zaat3", "zaat6", "zaau1", "zaau2", "zaau3", "zaau6", "zai1", "zai2", "zai3", "zai6", "zak1", "zam1", "zam2", "zam3", "zam6", "zan1", "zan2", "zan3", "zan6", "zang1", "zang3", "zang6", "zap1", "zap6", "zat1", "zat6", "zau1", "zau2", "zau3", "zau6", "ze1", "ze2", "ze3", "ze5", "ze6", "zek1", "zek3", "zek6", "zeng1", "zeng2", "zeng3", "zeng6", "zeoi1", "zeoi2", "zeoi3", "zeoi6", "zeon1", "zeon2", "zeon3", "zeon6", "zeot1", "zi1", "zi2", "zi3", "zi6", "zik1", "zik3", "zik6", "zim1", "zim2", "zim3", "zim6", "zin1", "zin2", "zin3", "zin6", "zing1", "zing2", "zing3", "zing6", "zip3", "zit1", "zit3", "zit6", "ziu1", "ziu2", "ziu3", "ziu6", "zo2", "zo3", "zo6", "zoek3", "zoek6", "zoeng1", "zoeng2", "zoeng3", "zoeng6", "zoi1", "zoi2", "zoi3", "zoi6", "zok3", "zok6", "zong1", "zong2", "zong3", "zong6", "zou1", "zou2", "zou3", "zou6", "zuk1", "zuk3", "zuk6", "zung1", "zung2", "zung3", "zung6", "zyu1", "zyu2", "zyu3", "zyu6", "zyun1", "zyun2", "zyun3", "zyun6", "zyut3", "zyut6"
];

tone = 0;
time = 0;

function randomize() {
  const randomIndex = Math.floor(Math.random() * names.length);
  const randomName = names[randomIndex];

  audio = document.getElementById('audio');
  audio.src = `media/${randomName}.wav`;
  
  tone = parseInt(randomName.slice(-1));
  time = Date.now();
}

function start() {
  document.getElementById('start').style.display = 'none';
  document.getElementById('quiz').style.display = 'block';
  randomize();
}

function process(number) {
  body = document.getElementsByTagName('body')[0];
  body.style.backgroundColor = number === tone ? 'green' : 'red';
  
  log += `${tone},${number},${Date.now() - time}\n`;2
  localStorage.setItem('log', log);
  
  stats[number - 1][tone - 1]++;
  localStorage.setItem('stats', JSON.stringify(stats));
  
  display();
  randomize();
}

document.addEventListener('keydown', (event) => {
  const keyInt = parseInt(event.key);
  if (keyInt >= 1 && keyInt <= 6) process(keyInt);
});