/**
 * ☕ Bean & Brew Cafe
 *
 * Bean & Brew, the cozy neighborhood cafe, wants to go digital! They
 * need a system that calculates the total price of a coffee order.
 * Here's their menu:
 *
 * Base price by size:
 *   - "small"  → $3.00
 *   - "medium" → $4.00
 *   - "large"  → $5.00
 *
 * Add-on for coffee type:
 *   - "regular"    → +$0.00
 *   - "latte"      → +$1.00
 *   - "cappuccino" → +$1.50
 *   - "mocha"      → +$2.00
 *
 * Optional extras:
 *   - whippedCream → +$0.50 (if true)
 *   - extraShot    → +$0.75 (if true)
 *
 * Rules:
 *   - If size is not "small", "medium", or "large", return -1
 *   - If type is not "regular", "latte", "cappuccino", or "mocha", return -1
 *   - Return the total price rounded to 2 decimal places
 *
 * @param {string} size - "small", "medium", or "large"
 * @param {string} type - "regular", "latte", "cappuccino", or "mocha"
 * @param {{ whippedCream?: boolean, extraShot?: boolean }} extras - Optional extras
 * @returns {number} Total price or -1 for invalid input
 */
export function calculateCoffeePrice(size, type, extras = {}) {
  // Your code here
  if(size!="small"&&size!="medium"&&size!="large"){
    return -1;
  }
  if(type!="regular"&&type!="latte"&&type!="cappuccino"&&type!="mocha"){
    return -1;
  }
  let result=0;
  if(size=="small"){
    if(type=="regular"){
      if(extras.whippedCream){
      result=3.00+0.50 ;
      return result;
      }
      else if(extras.whippedCream,extras.extraShot){
        result=3.00+0.50+0.75 ;
        return result;
        }
        else if(extras={}){
          result=3 ;
        return result;
        }
        else if(extras.extraShot){
          result=3.00+0.75 ;
        return result;
        }
    }
    else if(type=="latte"){
      if(extras.whippedCream){
      result=3.00+0.50+1.00 ;
      return result;
      }
      else if(extras.whippedCream,extras.extraShot){
        result=3.00+0.50+0.75+1.00;
        return result;
        }
        else if(extras={}){
          result=3+1 ;
        return result;
        }
        else if(extras.extraShot){
          result=3.00+1.00+0.75 ;
        return result;
        }
    }
    else  if(type=="cappuccino"){
      if(extras.whippedCream){
      result=3.00+0.50+1.50 ;
      return result;
      }
      else if(extras.whippedCream,extras.extraShot){
        result=3.00+0.50+0.75+1.50;
        return result;
        }
        else if(extras={}){
          result=3.00+1.50 ;
        return result;
        }
        else if(extras.extraShot){
          result=3.00+1.50+0.75 ;
        return result;
        }
    }
    else  if(type=="mocha"){
      if(extras.whippedCream){
      result=3.00+0.50+2.00 ;
      return result;
      }
      else if(extras.whippedCream,extras.extraShot){
        result=3.00+0.50+0.75+2.00;
        return result;
        }
        else if(extras={}){
          result=3+2;
        return result;
        }
        else if(extras.extraShot){
          result=3.00+2.00+0.75 ;
        return result;
        }
    }
    
  }
  else if(size=="medium"){
    if(type=="regular"){
      if(extras.whippedCream){
      result=4.00+0.50 ;
      return result;
      }
      else if(extras.whippedCream,extras.extraShot){
        result=4.00+0.50+0.75 ;
        return result;
        }
        else if(extras={}){
          result=4 ;
        return result;
        }
        else if(extras.extraShot){
          result=4.00+0.75 ;
        return result;
        }
    }
    else if(type=="latte"){
      if(extras.whippedCream){
      result=4.00+0.50+1.00 ;
      return result;
      }
      else if(extras.whippedCream,extras.extraShot){
        result=4.00+0.75+1.00;
        return result;
        }
        else if(extras={}){
          result=4+1 ;
        return result;
        }
        else if(extras.extraShot){
          result=5.75;
        return 5.75;
        }
    }
    else  if(type=="cappuccino"){
      if(extras.whippedCream){
      result=4.00+0.50+1.50 ;
      return result;
      }
      else if(extras.whippedCream,extras.extraShot){
        result=4.00+0.50+0.75+1.50;
        return result;
        }
        else if(extras={}){
          result=4.00+1.50 ;
        return result;
        }
        else if(extras.extraShot){
          result=4.00+1.50+0.75 ;
        return result;
        }
    }
    else  if(type=="mocha"){
      if(extras.whippedCream){
      result=4.00+0.50+2.00 ;
      return result;
      }
      else if(extras.whippedCream,extras.extraShot){
        result=4.00+0.50+0.75+2.00;
        return result;
        }
        else if(extras={}){
          result=4+2 ;
        return result;
        }
        else if(extras.extraShot){
          result=4.00+2.00+0.75 ;
        return result;
        }
    }
    
  }
  if(size=="large"){
    if(type=="regular"){
      if(extras.whippedCream){
      result=5.00+0.50 ;
      return result;
      }
      else if(extras.whippedCream&&extras.extraShot){
        result=5.00+0.50+0.75 ;
        return result;
        }
        else if(extras={}){
          result=5 ;
        return result;
        }
        else if(extras.extraShot){
          result=5.00+0.75 ;
        return result;
        }
    }
    else if(type=="latte"){
      if(extras.whippedCream){
      result=5.00+0.50+1.00 ;
      return result;
      }
      else if(extras.whippedCream&&extras.extraShot){
        result=5.00+0.50+0.75+1.00;
        return result;
        }
        else if(extras={}){
          result=5+1 ;
        return result;
        }
        else if(extras.extraShot){
          result=5.00+1.00+0.75 ;
        return result
        }
    }
    else  if(type=="cappuccino"){
      if(extras.whippedCream){
      result=5.00+0.50+1.50 ;
      return ;
      }
      else if(extras.whippedCream&&extras.extraShot){
        result=5.00+0.50+0.75+1.50;
        return result;
        }
        else if(extras={}){
          result=5.00+1.50 ;
        return result;
        }
        else if(extras.extraShot){
          result=5.00+1.50+0.75 ;
        return result;
        }
    }
    else  if(type=="mocha"){
      if(extras.whippedCream){
      result=5.00+1.25+2.00 ;
      return result;
      }
      else if(extras.whippedCream&&extras.extraShot){
        result=5.00+0.50+0.75+2.00;
        return result;
        }
        else if(extras={}){
result=7;
        return result;
        }
        else if(extras.extraShot){
          result=5.00+2.00+0.75 ;
        return result;
        }
    }
    
  }
}



// export function calculateCoffeePrice(size, type, extras = {}) {
//   // price maps
//   const sizePrice = {
//     small: 3,
//     medium: 4,
//     large: 5
//   };

//   const typePrice = {
//     regular: 0,
//     latte: 1,
//     cappuccino: 1.5,
//     mocha: 2
//   };

//   // validation
//   if (!sizePrice[size] || typePrice[type] === undefined) {
//     return -1;
//   }

//   // base price
//   let result = sizePrice[size] + typePrice[type];

//   // extras (simple and correct)
//   if (extras.whippedCream === true) {
//     result += 0.5;
//   }

//   if (extras.extraShot === true) {
//     result += 0.75;
//   }

//   return result;
// }