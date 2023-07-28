// script para geração de lista (HTML) a partir de um vetor

function listaparavetor(vetor){
    
    for(i=0;i=vetor.lenght-1;i++)
  {  
    titulo      = vetor[i,0]
    link        = vetor[i,1]
    comentario  = vetor[i,2]
  } 

  document.write("<ul>\n")

  for(i=0;i=vetor.lenght-1;i++)
  {
    texto = "<li>"+ "<a href=\"" + link + "\">" + titulo + "<\\a>"
    texto2= "<li>"+comentario+"<\\li>"
    document.write(texto,texto2)
  }
  document.write("<\\ul>")
  
}