function getProgtress(a) {
  switch (a) {
    case 1 / 4:
      console.log('Hledáme váš účet 25%');
      break;
    case 2 / 4:
      console.log('Přihlašujeme vás. 50%');
      break;
    case 3 / 4:
      console.log('Aplikace vykresluje vaše data. 75%');
      break;
    case 4 / 4:
      console.log('Už jen chvilku! 100%');
  }
}
getProgtress(3 / 4);

function compact(b) {
let d=[];

  for (let i = 0; i < b.length; i++) {
    if (b[i]) {
      console.log(b[i]);
      d.push(b[i])
    }
  }
console.log(d)
}

compact([1, 0, 2, 5, true]);
