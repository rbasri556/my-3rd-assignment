

//solution:1
var meter= 1000;

function kilometerToMeter(kilometer){
  var meter = 1000*1;
  return meter;

}
console.log(meter);

//solution:2
function budgetCalcular(watch, phone, laptop){

  var result = watch + phone + laptop;
  return result;
}
     var total =budgetCalcular (50, 100, 500);
      console.log(total);

  //solution:3    
 function hotelCost(night){
    var cost = 0;
    if(night <= 10){
      cost = night * 100
    }
    else if (night <= 20){
      var firstTenNight = 10 * 100;
      var remaining = night - 10;
      var secondTenNight = 10 * 80;
        cost= firstTenNight + secondTenNight;
    }else {
        var firstTenNight = 10 * 100;
        var secondTenNight = 10 * 80;
        var remaining = night - 20;
        var thirdTenNight = remaining * 50;
        cost = firstTenNigh + secondTenNight +  thirdTenNight;
    }
    return cost;
  }
      var rent = hotelCost (15);
      console.log(rent);

     //fourth condition
     function megaFriend(){
     var nazeef = 50;
     var asif = 20;
     var ria = 30;
     if(nazeef > asif){
       console.log("nazeef is bigger");
     }else{
       console.log("asif is bigger");
     }
    }
    megaFriend();

     