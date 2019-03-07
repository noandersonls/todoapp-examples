// Check todos by click

$('ul').on("click", "li", function () {
    $(this).toggleClass('complete');
});

//  delete with x span

$('ul').on("click", "span", function(event){
    $(this).parent().fadeOut(500, function(){
        $(this).remove();
    });
    event.stopPropagation();
})

$("input[type='text']").keypress(function(event){
    if(event.which === 13){
        // grab new todo from input 
        let todoText = $(this).val();
        $(this).val("");
        // create a new todo element and add
        $('ul').append('<li><span><i class="fas fa-trash-alt"></i></span> ' + todoText + '</li>')
    }
});

$(".fa-angle-double-down").click(2000, function(){
    $("input[type='text']").fadeToggle();

})