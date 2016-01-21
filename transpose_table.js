$(window).load(function () {
    
    $(document).ready(function () {
        
        create_flip_table();
    })
})

function create_flip_table () {
    /*Loops through all tables with the class "flip_table" into a flip table*/
    $('.flip_table').each(function(){
        var parent = $(this).parent();
        var original = $(this).html();
        
        //Update current table
        $(this).addClass('visible-xs')
        var $this = $(this);
        var newrows = [];
        $this.find("tr").each(function(){
            var i = 0;
            $(this).find("td").each(function(){
                i++;
                if(newrows[i] === undefined) { newrows[i] = $("<tr></tr>"); }
                newrows[i].append($(this));
            });
        });
        $this.find("tr").remove();
        $.each(newrows, function(){
            $this.append(this);
        });
        
        //Append original
        $(parent).append('<table class="flip_table hidden-xs">'+original+"</table>")
    })
}