function consultaCep()
{
    var cep = document.getElementById("cep").value;
    var url = "https://viacep.com.br/ws/" +cep+"/json/";
    console.log(url); 
    $.ajax
    (
        {
            //url:"https://viacep.com.br/ws/01001000/json/",
            url: url,
            type: "GET",
            success: function(response)
            {
                console.log(response);
                /*alert(response.logradouro);
                alert(response.complemento);
                alert(response.bairro);
                alert(response.localidade);
                */
               $("#logradouro").html(response.logradouro);
               document.getElementById("logradouro").innerHTML = response.logradouro;
               document.getElementById("bairro").innerHTML = response.bairro;
               document.getElementById("localidade").innerHTML = response.localidade;
               document.getElementById("uf").innerHTML = response.uf;
            }
        }
    )
}