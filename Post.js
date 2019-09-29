<script>

    let inc=0;



    function Sort(field){
        inc=inc+1;
        let str =$('.InputForm').serialize();

        count=inc%2;

        if (count!=0){

            field=field+"Reverse";
        }
        str=str+"&sortID="+field +"&";
        $.ajax({
            type: "POST",
            url: $(this).data('action'),
            data: {Sorting:str},
            beforeSend: function( xhr ) {
                $('.progress').fadeTo(0, 1);
            },
            success: function(data) {
              $('.SortResults').html(data);

            },
            error: function(data, textStatus, xhr) {
                $('#feedback').addClass('red').text(invalidMessage).fadeTo(0, 1);
            },
            complete: function( xhr ) {
                $('.progress').fadeTo(0, 0);
            },
        });
    }
</script>