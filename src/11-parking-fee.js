/**
 * 🅿️ City Central Parking
 *
 * City Central Parking garage is the busiest in downtown. They need an
 * automated system to calculate parking fees. Different vehicle types
 * have different rates, and there's a daily maximum so customers
 * aren't overcharged.
 *
 * Rates (first hour / each additional hour):
 *   - "car":        $5 first hour, then $3/hour
 *   - "motorcycle": $3 first hour, then $2/hour
 *   - "bus":        $10 first hour, then $7/hour
 *
 * Daily Maximum (fee can never exceed this):
 *   - "car":        $30
 *   - "motorcycle": $18
 *   - "bus":        $60
 *
 * Rules:
 *   - Partial hours are rounded UP (e.g., 1.5 hours → 2 hours)
 *   - The fee should never exceed the daily maximum
 *   - If hours is 0 or negative, return -1
 *   - If vehicleType is not "car", "motorcycle", or "bus", return -1
 *
 * Examples:
 *   - car, 1 hour     → $5
 *   - car, 3 hours    → $5 + $3 + $3 = $11
 *   - car, 0.5 hours  → rounds up to 1 hour → $5
 *   - car, 24 hours   → $5 + 23×$3 = $74 → capped at $30
 *
 * @param {number} hours - Number of hours parked
 * @param {string} vehicleType - "car", "motorcycle", or "bus"
 * @returns {number} Parking fee or -1 for invalid input
 */
export function calculateParkingFee(hours, vehicleType) {
  // Your code here
  if(hours<=0||(vehicleType!="car"&&vehicleType!="motorcycle"&&vehicleType!="bus")){
    return -1;
  }
   const daily={
    "car":        30,
    "motorcycle": 18,
    "bus":       60
   };

   const first={
    "car":        5,
    "motorcycle": 3,
    "bus":       10
   };

  const other={
    "car":        3,
    "motorcycle": 2,
    "bus":       7
  };
  if(!Number.isInteger(hours)){
    hours=Math.ceil(hours);
  }
  let total=0;
  if(hours>1){
   total=first[vehicleType]+(hours-1)*other[vehicleType];
   if(total>30&&vehicleType=="car"){
  total=30;
   }
   else if(total>18&&vehicleType=="motorcycle"){
    total=18;
     }
     else if(total>60&&vehicleType=="bus"){
      total=60;
       }
       return total;
  }
  else{
    return first[vehicleType];
  }
}
