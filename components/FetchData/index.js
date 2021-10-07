
class FetchData  {

    constructor(urlFetch, productTemplate) {
     
        this.urlFetch = urlFetch;
        this.productTemplate = productTemplate;

        this.getData().then((result) => {
            result.forEach((element) => {      
                const {id, title, body} = element;
                const postsContainer = document.querySelector('.posts');
                new productTemplate(id, title, body, postsContainer);    
               });  
        })
    }

getData = () => {
    return fetch(this.urlFetch).then((response) => {
        return response.json();
    })
}

}

export default FetchData;