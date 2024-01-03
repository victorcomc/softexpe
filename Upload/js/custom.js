function validarTamanhoArquivo(seletorCampo)
{
   var imagem = document.getElementById(seletorCampo)

   console.log(imagem.files[0].size);

   if(imagem.files[0].size > (50000000)){
    alert("Tamanho máximo permitido é de 50mb");

    imagem.value = '';

   }
}