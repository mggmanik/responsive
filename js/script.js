// jQuery for alert slide-down.
$(function(){

    $('#alertMe').click(function(e){

            e.preventDefault();
        $('#dangerAlert').slideDown();
    });

});