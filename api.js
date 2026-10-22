let link_api = "http://localhost:3000"

export async function buscar_produto(){
     const resposta = await(fetch(link_api + "/produto"))
     const resposta_json = await resposta.json()
     if(!resposta.ok){
        throw new Error("Erro em buscar produtos")
     }
     return resposta_json
}