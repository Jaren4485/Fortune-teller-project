// In the year 2035 it would be a.... year.You will be ... years old. 
// In the year 2035 you will have driven far. You will have driven .. miles in the past16 years /
// Isn't it so good that everything is...

$("button").click(function(){
    var feeling =  $("#feeling").val();
    var age =  $("#age").val();
    var word =  $("#word").val();
     $(".output").text("In 2019 you are " + age + " and it it " +feeling + ".In 2035 it will be a " + feeling +"and you will be " + age);

});