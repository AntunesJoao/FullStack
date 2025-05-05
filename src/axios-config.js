import axios from "axios"

//base da url (onde fica o servidor)
axios.defaults.baseURL = "https://fullstack-production-feea.up.railway.app/memories"


//quanto tempo o axios vai levar pra desistir da requisição (10segundos)
axios.defaults.timeout = 10000

export default axios

