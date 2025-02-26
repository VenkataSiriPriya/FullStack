//CallApi
export function callApi(reqmethod, url, data, responseHandler){
    var option;
    if(reqmethod === "GET" || reqmethod === "DELETE")
         option = {method : reqmethod, headers: {'Content-Type' : 'application/json'}};
    else
         option = {method : reqmethod, headers: {'Content-Type' : 'application/json'}, body : data};
    fetch(url, option)
         .then(response => {
              if(!response.ok)
                   throw new Error(response.status + " " + response.statusText);
              return response.text();
         })
         .then(data => responseHandler(data))
         .catch(error => alert(error));
}