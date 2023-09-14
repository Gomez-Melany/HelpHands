//var h1 =$('#titulo').texto('Hola');
$('#desaparecer').click(desaparecer);
function desaparecer(){
    $('div').hide('slow');
}

$('#aparecer').click(aparecer);
function aparecer(){
    $('div').show();
}