angular.module('myApp').service('groceryService', function(){
 var groceryItems = [
   {
     name: 'Butter',
     price: 2.50
   },
   {
     name: 'Carrots',
     price: .35
   },
   {
     name: 'Ground Beef',
     price: 2.99
   },
   {
     name: 'Lucky Charms',
     price: 2.99
   }];

   this.getGroceries = function(){
     return groceryItems;
   }
})
