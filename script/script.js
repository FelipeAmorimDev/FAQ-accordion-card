const faqs = document.querySelectorAll(".faqs");

var indiceAtivo = -1
faqs.forEach((item,indice) =>{
  item.addEventListener("click",function (){
    var ativo = item.classList.contains("active")
    console.log(item.innerHTML)
    if(ativo == false){
     
      if(indiceAtivo === -1){
       
       
        item.classList.add("active")
       
        
        indiceAtivo = indice
        
      }
      else{
        faqs[indiceAtivo].classList.remove("active")
        
        indiceAtivo = -1
        item.classList.add("active")
        
        indiceAtivo = indice
      }
    }
    else{
     
      item.classList.remove("active")
     
    }
    
  
    


    
  })
})