$(document).ready(function() {

var count = 2;
var player = count;
var round = 0;

function display_player()
{
    
    $("td").on("click", function(){


    if(player%2==0)
    {
        document.getElementsByTagName('p')[0].innerHTML = "Player 2 has to play!";
        player++;
    }
    else if(player%2==1)
    {
        document.getElementsByTagName('p')[0].innerHTML = "Player 1 has to play!";
        player++;
    }

}); 
}

function rounds()
{
    
    $("td").on("click", function(){
    
        round++;
        if(round === 9)
        {
            document.getElementsByTagName('p')[0].innerHTML = "Game finished!";
        }
        
    });
}


function fillcell()
{
    $("td").on("click", function(){

        if($(this).hasClass("filled")==true)
        {
            alert("choose an empty box!");
        }
        else{
            if(count%2==0)
            {
                $(this).css('background-image', 'url(cross.png)');
                $(this).addClass("filled");
                $(this).addClass("1");
                count++;
            }
            else if(count%2==1)
            {
                $(this).css('background-image', 'url(circle.png)');
                $(this).addClass("filled");
                $(this).addClass("2");
                count++;
            }
        }
    });
}


function rules()
{
    $("td").on("click", function(){

        if(($("#cell1").hasClass("1") && $("#cell2").hasClass("1") && $("#cell3").hasClass("1")) ||
        ($("#cell4").hasClass("1") && $("#cell5").hasClass("1") && $("#cell6").hasClass("1")) ||
        ($("#cell7").hasClass("1") && $("#cell8").hasClass("1") && $("#cell9").hasClass("1")) ||
        ($("#cell1").hasClass("1") && $("#cell4").hasClass("1") && $("#cell7").hasClass("1")) ||
        ($("#cell2").hasClass("1") && $("#cell5").hasClass("1") && $("#cell8").hasClass("1")) ||
        ($("#cell3").hasClass("1") && $("#cell6").hasClass("1") && $("#cell9").hasClass("1")) ||
        ($("#cell1").hasClass("1") && $("#cell5").hasClass("1") && $("#cell9").hasClass("1")) ||
        ($("#cell3").hasClass("1") && $("#cell5").hasClass("1") && $("#cell7").hasClass("1")) )
        {
            document.getElementsByTagName('p')[0].innerHTML = "Game finished!";
            alert("Player 1 wins!");
        }

        if(($("#cell1").hasClass("2") && $("#cell2").hasClass("2") && $("#cell3").hasClass("2")) ||
        ($("#cell4").hasClass("2") && $("#cell5").hasClass("2") && $("#cell6").hasClass("2")) ||
        ($("#cell7").hasClass("2") && $("#cell8").hasClass("2") && $("#cell9").hasClass("2")) ||
        ($("#cell1").hasClass("2") && $("#cell4").hasClass("2") && $("#cell7").hasClass("2")) ||
        ($("#cell2").hasClass("2") && $("#cell5").hasClass("2") && $("#cell8").hasClass("2")) ||
        ($("#cell3").hasClass("2") && $("#cell6").hasClass("2") && $("#cell9").hasClass("2")) ||
        ($("#cell1").hasClass("2") && $("#cell5").hasClass("2") && $("#cell9").hasClass("2")) ||
        ($("#cell3").hasClass("2") && $("#cell5").hasClass("2") && $("#cell7").hasClass("2")) )
        {
            document.getElementsByTagName('p')[0].innerHTML = "Game finished!";
            alert("Player 2 wins!");
        }
    });
}


fillcell();
display_player();
rules();
rounds();

});