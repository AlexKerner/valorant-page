
import { Api } from "../axios-config"


interface Character {
  uuid: string
  displayName: string;
  description: string;
  displayIconSmall: string;
}


const getAll = async () => {
  try {
    
    const url = "https://valorant-api.com/v1/agents"
    const response = await Api.get(url)

    if (response) {
      
      return response.data
    }
    
  } catch (error) {
    
    return error
  }
}




export const CharactersServices = {
  getAll
}