let numbers = [34, 12, 76, 87, 43, 98];
let numbers1 = [-78, 233, 43, 876, 123];

function maxMin(num) {
  let kattasi = num[0];
  let kichigi = num[0];

  for (let i = 1; i < num.length; i++) {
    if (num[i] > kattasi) {
      // 1. num[1] > 34 => 12 > 34 => false
      // 2. num[2] > 34 => 76 > 34 => true
      // 3. num[3] > 76 => 87 > 76 => true
      // 4. num[4] > 87 => 43 > 87 => false
      // 5. num[5] > 87 => 98 > 87 => true

      kattasi = num[i];
      // 2. kattasi = num[2] = 76;
      // 3. kattasi = num[3] = 87;
      // 5. kattasi = num[5] = 98;
    }

    if (num[i] < kichigi) {
      kichigi = num[i];
    }
  }
  let kattaKichik = kichigi.toString() + " " + kattasi.toString();
  return kattaKichik;
}

const result = maxMin(numbers1);

// console.log(result);

let raqamMatn = ["nul", "bir", "ikki", "uch", "turt", "besh"];

const NumberText = (suz) => {
  let probel = suz.indexOf(" ");
  let ajdarBoshi = suz.slice(0, probel);
  let qolganSuz = suz.slice(1);
  let ajdarBoshiMatn;

  for (let i = 0; i < raqamMatn.length; i++) {
    if (ajdarBoshi == i) {
      ajdarBoshiMatn = raqamMatn[i];
    }
  }

  let natija = ajdarBoshiMatn + qolganSuz;
  return natija;
};

const result2 = NumberText("7 boshli ajdarho");
// console.log(result2);

let butunSonlar = [1, 2, 3, 4, 3, 2, 1];
let tekshir = 0;
let juftsizSon;

const checkNumber = () => {
  for (let i = 0; i < butunSonlar.length; i++) {
    tekshir = 0;
    for (let a = 0; a < butunSonlar.length; a++) {
      if (butunSonlar[i] == butunSonlar[a]) {
        tekshir++;
      }
    }
    if (tekshir == 1) {
      juftsizSon = butunSonlar[i];
    }
  }
  return juftsizSon;
};

const result3 = checkNumber();
// console.log(result3);
