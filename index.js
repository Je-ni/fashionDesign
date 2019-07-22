$(document).ready(function() {
    $(".app").hide();
    $('#button').click(function() {

        postInfo()


    });


});

function getInfo() {
    $.ajax({
        type: 'GET',
        url: 'http://localhost:3000/category',
        success: function(data) {
            $("#all").click(function() {
                $("#banner").hide();
                $('#button').show();
                var inform = ''
                data.map(function(fash) {
                    return inform += `
                    <div>
                    <div>
                      <img class = "photo" src ="${fash.image}" alt="our image"/>
                      <h1>${fash.id} ${fash.name} </h1>
                      <p>the cost is # ${fash.cost}</p>
                      <p>${fash.description}</p>
                      </div>
                  </div>`
                }).join("");
                $(".app").show();
                $(".app").append(inform);

            });

        }
    });
};

function postInfo() {
    $.post('http://localhost:3000/category', { "name": $("#name").val(), "type": $("#type").val(), "image": $("#image").val(), "description": $("#descript").val() },
        function(data, status) {
            alert(status);
            getInfo();

        }
    )

}