$(window).load(function () {
    
    $(document).ready(function () {
        
        create_flip_table();
    })
})

function create_flip_table () {
    /*Loops through all tables with the class "flip_table" into a flip table*/
    $('.flip_table').each(function(){
        var parent = $(this).parent();
        var new_table = $(this).clone().empty();
        $(this).addClass('hidden-xs');
        
        var newrows = [];
        $(this).children().first().find("tr").each(function(){
            var i = 0;
            $(this).children().each(function(){
                if (newrows.length <= i){
                    newrows.push($('<tr></tr>'));
                }
                newrows[i].append($(this)[0].outerHTML);
                i++;
            });
        });
        
        for (i = 0; i < newrows.length; i++) {
            var new_row = newrows[i];
            new_table.append(new_row);
        }
        $(new_table).addClass('visible-xs');
        parent.append(new_table);
    })
}