//define a class that is immediately exported
//classes are always uppercase first letter
module.exports=
class Duck{
  constructor(name){
      this.name = name
  }
  
  wings = 2
  hasBill = true
  hasFeathers = true


  goQuack(){
      return 'Duck goes quack'
  }
}