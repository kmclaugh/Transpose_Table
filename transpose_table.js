$(window).load(function () {
    
    $(document).ready(function() {
        transpose_table();
    })
})

function transpose_table() {
    /*Loops through all tables with the class "transpose" and creates a transposed
    version visible on xs devices*/
    
    //Loop through each table with the class transpose
    $('table.transpose').each(function(){
        
        //grab the parent for easy reference later
        var parent = $(this).parent();
        //Hide current table for xs devices
        $(this).addClass('hidden-xs');
        
        //Clone the table and flatten out the clone to remove any thead and tbody elements
        var table_clone = $(this).clone();
        var the_thead = false;
        if ($(table_clone).has('thead').length != 0){
            var table_head = $(table_clone).find("thead");
            the_thead = $(table_head).clone().empty();
            $(table_head).children().first().unwrap();
        }
        var the_tbody = false;
        if ($(table_clone).has('tbody').length != 0){
            var table_body = $(table_clone).find("tbody");
            the_tbody = $(table_body).clone().empty();
            $(table_body).children().first().unwrap();
        }
    
        //Loop through each row of the flattened cloned table to transpose columns and rows into the new rows
        var newrows = [];
        $(table_clone).children().each(function(){
            var i = 0;
            var row_copy = $(this).clone().removeAttr("id").empty();
            $(this).children().each(function(){
                if (newrows.length <= i){
                    newrows.push($(row_copy[0].outerHTML));
                }
                update_id(this)
                newrows[i].append($(this)[0].outerHTML);
                i++;
            });
        });
        
        //create the new table with the original thead and tbody if they exists
        var new_table = $(this).clone().empty();
        update_id(new_table);
        if (the_thead != false) {
            update_id(the_thead);
            new_table.append(the_thead);
        }
        if (the_tbody != false) {
            update_id(the_tbody);
            new_table.append(the_tbody);
        }
        
        //Add the new rows to either the thead, tbody, or table
        for (i = 0; i < newrows.length; i++) {
            var new_row = newrows[i];
            if (i == 0 && the_thead != false) {
                $(new_table).find("thead").append(new_row)
            }
            else if (the_tbody != false) {
                $(new_table).find("tbody").append(new_row)
            }
            else {
                new_table.append(new_row);
            }
        }
        
        //Make the transposed table only visible for xs small devices and add it to the parent
        $(new_table).addClass('visible-xs');
        parent.append(new_table);
    })
}

function update_id(element){
    /*Appends "_transposed" to the given element's id if it has an ID*/
    if ($(element).attr('id')) {
        $(element).attr('id', $(element).attr('id')+'_transposed')
    }
}
