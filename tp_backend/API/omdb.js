import axios from "axios";

const API_URL = "http://www.omdbapi.com/?apikey=5e9e08eb&";


class OmbDb {
    constructor(name) {
        if(name===undefined)
        {
            name="James Bond"
        }
        this.name = name
    }

    fetchMovie(){
        return axios
        .get(`${API_URL}?t=${this.name}`, {
          crossdomain: true
        })
      }
}

