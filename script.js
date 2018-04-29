
$().ready(function(){

    var url = 'https://jsonplaceholder.typicode.com/posts';

    $('#search').keydown(function(){

        $.get(url, function(data){
            var search = $('#search').val();
            var regex = new RegExp(search,'i');
            var output;           

            $.each(data, function(key, value){
                if ((value.title.search(regex) != -1) || (value.body.search(regex) != -1)) {
                    output += "<tr>";
                    output += "<td id='" + key + "'>" + value.userId + "</td>";
                    output += "<td id='" + key + "'>" + value.id + "</td>";
                    output += "<td id='" + key + "'>" + "<a href='https://www.google.com/' target='_blank'>" + value.title + "</a>" + "</td>";
                    output += "<td id='" + key + "'>" + value.body + "</td>";
                    output += "</tr>";                    
                }
            });

            output += '';
            $('tbody').html(output);
            $('#body_table tr td:nth-child(4)').addClass('rerum');          
            $('.rerum').highlight('rerum');                
        });
    });
});


