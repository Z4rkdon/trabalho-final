let link_api = "http://localhost:3000"

async function buscar_produto(queryParams){
     let rota = "/produtos"
     const queryString = queryParams.toString();
     if (queryString){
      rota+= "?" + queryString
     }
     const resposta = await fetch(link_api + rota);

     if(!resposta.ok){
        throw new Error("Erro em buscar produtos")
     }

     const resposta_json = await resposta.json();
     return resposta_json
}