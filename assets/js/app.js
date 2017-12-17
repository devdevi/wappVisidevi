
  $(document).ready(function(){
 

    $('select').material_select();
  
    



// La funcionalidad de tu proyecto

   var items = [];
      //itermaos cada fila de la tabla
    $('tbody tr').each(function(){

      var itemRestaurant = {};

       var tds = $(this).find('td');
       itemRestaurant.photoR = tds.filter(":eq(0)").text();
       itemRestaurant.name = tds.filter(":eq(1)").text();
      // itemRestaurant.typeC = tds.filter(":eq(2)").text(); ultimo mensaje
       //metemos el objeto itemRestaurant en el arreglo 
       items.push(itemRestaurant);
    });
      console.log(items);
      var restaurantHere = $('#restaurantHere');

  for( i = 0; i < items.length; i++){

       var photo =items[i].photoR;
       var nameRest  =items[i].name;
      // var cookType  =items[i].typeC; ultimo mensaje

       console.log('funciona');
      restaurantHere.append(

           '<div class="section" id="chat_'+ [i] + '">'+
            '<div class="row">' +
               ' <div class="col s2 center">' +
                   '<img src="'+ photo + '" alt="" class="circle responsive-img ">' +
               ' </div>' +
                '<div class="col s6  left">' +
                  '<strong> ' + nameRest +'</strong>' +
                 ' <small> ' + nameRest +' </small>' +
               ' </div>' +
                '<div class="col s4  center active-time"></div>' +
             ' </div>' +
           '<div class="divider"></div>' +
         '</div>' 
      ); 
  
    };
});
  $('#btn').click(function(){
    var messageNew = $('#textarea1').val();
    $('#textarea1').val("");
    var contenedor = $('#newMessageText');
    contenedor.append(
      '<div class="col s6 offset-s6 right light-green accent-1" class="newMessage">' +
          '<p >' +  messageNew + ' </p>' +
                          
      '</div>' 
  
      );
  });









