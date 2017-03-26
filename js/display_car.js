$(document).ready(function(){
    $.ajax({                    // to perform an AJAX (asynchronous HTTP) request
        type: 'GET',            // Specifies the type of request (GET or POST)
        url: 'car_list.xml',    // Specifies the URL to send the request to.
        dataType: 'xml',        // The data type of the server response. 
        success: function(xml){ // A function to be run when the request succeeds
            
            $(xml).find('car').each(function(){     // Find all tag with <car> from car_list.xml
                $('#TableCar').append(              // Append <tr> element every time <car> is found
                    '<tr>' + 
                        '<td rowspan="3"><img src="' + $(this).find('image').text() + '"></td>' +   // display the image of the car
                        '<td id="NAME" colspan="3">' + $(this).find('title').text() + '</td>' +     // display the title
                    '</tr>' +
                    '<tr>' +
                        '<td id="DESC">' + $(this).find('desc').text() + '</td>' +      // display the description put by the seller
                        '<td id="SPEC">' + $(this).find('type').text() + '</td>' +      // display the type of car (Used car)
                        '<td id="SPEC">' + $(this).find('year').text() + '</td>' +      // display the year when the car came out
                    '</tr>' +
                    '<tr>' +
                        '<td id="PRICE">' + $(this).find('price').text() + '</td>' +    // display the car price
                        '<td id="SPEC">' + $(this).find('mileage').text() + '</td>' +   // display the how many distance car has driven
                        '<td id="SPEC">' + $(this).find('cc').text() + '</td>' +        // display the cc of car
                    '</tr>' +
                    '<tr>' +
                        '<td colspan="4"> <hr/> </td>' +
                    '</tr>' 
                );
            });
        }
    });
});