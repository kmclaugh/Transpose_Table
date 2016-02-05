
## **Transpose Table** ##


----------
transpose_table.js is a Bootstrap add-on that creates a responsive, transposed version (ie one with rows and columns flipped) of selected tables for extra small screens to make the tables more readable on extra small screens. 

Try the [Demo](https://rawgit.com/kmclaugh/Transpose_Table/master/transpose_table.html)
------------------------------------------------------------------------

See a live example [here](http://www.countingcalculi.com/features/uber_v_taxis/)

For example a table on small to large screens like this

<div ><table class="table transpose" id="my_table"><thead id="my_thead"><tr class="headers" id="the_header_row"><th id="loan_header">
                            Loan
                        </th><th>
                            Interest Rate
                        </th><th>
                            Origination Date
                        </th><th>
                            Monthly Payment
                        </th></tr></thead><tbody id="my_tbody"><tr><th>
                            Loan 1

                        </th><td>
                            2%
                        </td><td>
                            3/1/2015
                        </td><td>
                            $40
                        </td></tr><tr><th>
                            Loan 2

                        </th><td>
                            6%
                        </td><td>
                            7/1/2016
                        </td><td>
                            $80
                        </td></tr></tbody></table></div></div>
 

Will look like this on extra small screens

<table style="max-width: 200px"><thead id="my_thead_transposed"><tr class="headers"><th id="loan_header_transposed">
                            Loan
                        </th><th>
                            Loan 1
                        
                        </th><th>
                            Loan 2
                        
                        </th></tr></thead><tbody id="my_tbody_transposed"><tr class="headers"><th>
                            Interest Rate
                        </th><td>
                            2%
                        </td><td>
                            6%
                        </td></tr><tr class="headers"><th>
                            Origination Date
                        </th><td>
                            3/1/2015
                        </td><td>
                            7/1/2016
                        </td></tr><tr class="headers"><th>
                            Monthly Payment
                        </th><td>
                            $40
                        </td><td>
                            $80
                        </td></tr></tbody></table>
   
For tables with many more columns than rows, transposing the table is often much more readable on extra small screens like iPhones.

To transpose a table on extra small screens, simple include your favorite Bootstrap distro, and transpose_table.js in your head section like so:

    <script src="transpose_table.js"></script>
  
  Then include the class "transpose" for every table that you want to transpose like so:`

    <div name='table_wraper'>
    <table class="transpose">...</table>
    </div>` 
   

Tips:
-----

 1. As shown above, it helps to wrap the table a in div block since the new transposed table will be attached to the parent of the original table
 2. Don't rely on classes or ids for tr elements in the table. The code will copy classes to the new rows, but it likely won't work the way you want since the columns and rows are flipped in the new table. Row ids are deleted. 
 3. ids for td, th, thead, tbody, and table elements are copied and appended with a "_transposed" for instance "#mytable" will become "#mytable_transposed"
 4. Don't use multiple rows in a thead element
 5. Don't use multiple tbody elements
 6. transpose_table doesn't work with tfoot elements yet
 

How it works.
-------------

transpose_table.js clones the original table and adds bootstrap's "hidden-xs" class to the original table.

Then it strips out any thead and tbody elements leaving just the tr, th, and td elements in the cloned table.

Then it loops through each td of each tr and flips the columns and rows, keeping any html attributes (like style or class) with the td element when it moves to its new spot. Any id attributes are append with "_transposed". For instance

    <td class='cool_class' id='mycell'>
   
will become

    <td class='cool_class' id='mycell_transposed'>

Then it adds the thead and tbody elements back to the new table, if they were in the original table. Only the first new row is added to the thead element. The rest are added to the tbody.

Finally it adds Bootstrap's "visible-xs" class to the new table and appends the new table to the original table's parent.

Now the original table will responsively appear on screens larger than extra small and the transposed table will  responsively appear on extra small screens.
