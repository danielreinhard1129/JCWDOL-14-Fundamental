// Write a code to find angles of triangle if two angles are given.

// const a = 80;
// const b = 65;
// const c = 180 - (a + b);

// console.log("sudut c adalah : " + c);

// ======================================================================

// Write a code to get difference between dates in days.

const date1 = new Date("2023-11-01");
const date2 = new Date("2023-10-20");
const bedaTanggal = Math.abs(date2 - date1); // math absolute -> hasilnya akan selalu positif

const bedaHari = Math.round(bedaTanggal / (1000 * 3600 * 24));
console.log("Perbedaan hari : " + bedaHari);
