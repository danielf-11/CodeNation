// console.log(' ',' ',' ','|',' ',' ',' ','|',' ',' ',' ');
// console.log(' ',' ',' ','|',' ',' ',' ','|',' ',' ',' ');
// console.log(' ',' ',' ','|',' ',' ',' ','|',' ',' ',' ');
// console.log('-','-','-','-','-','-','-','-','-','-','-');
// console.log(' ',' ',' ','|',' ',' ',' ','|',' ',' ',' ');
// console.log(' ',' ',' ','|',' ',' ',' ','|',' ',' ',' ');
// console.log(' ',' ',' ','|',' ',' ',' ','|',' ',' ',' ');
// console.log('-','-','-','-','-','-','-','-','-','-','-');
// console.log(' ',' ',' ','|',' ',' ',' ','|',' ',' ',' ');
// console.log(' ',' ',' ','|',' ',' ',' ','|',' ',' ',' ');
// console.log(' ',' ',' ','|',' ',' ',' ','|',' ',' ',' ');

// let col = ["   |   |   "];
// let row = ["-----------"]

// for (let colIndex = 0, rowIndex = 0; colIndex < 11; colIndex++, rowIndex++){

//     if (rowIndex == 3){
//       console.log(row)
//     }
//       else if (rowIndex == 7){
//           console.log(row)
//       }
//       else{
//         console.log(col)
//       }
// }

let col = ["   |   |   "];
let row = ["-----------"];
let line1 =[" X | O |   "], line2 =[" X | X |   "], line3 = [" O |   |   "]

for (let colIndex = 0; colIndex < 11; colIndex++) {

    if ((colIndex == 3) || (colIndex == 7)) {
      console.log(row);
    }
    else{
      switch (true) {
        case colIndex == 1:
          console.log(line1);
          break;
          case colIndex == 5:
            console.log(line2);
            break;
            case colIndex == 9:
              console.log(line3);
              break;
        default:
          console.log(col);
          break;
      }
    }

}


// if ((24 % 5) == 4){
//  console.log("true")
//  }
//  else{
//    console.log("false")
//  }

//  let place = "Manc";
//  let weather = "Cloudy";
//  if (place == "Manc" && weather == "Sunny") {
//  console.log("Check again");
//  }
//  else if (place == "Manc" && weather == "Rain") {
//  console.log("Obvs");
//  }
//  else {
//  console.log("What it isn't raining?");
//  }