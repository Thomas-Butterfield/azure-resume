window.addEventListener('DOMContentLoaded', (event) =>{
    getVisitCount();
})

const functionApiUrl = 'https://func-butterresume.azurewebsites.net/api/Counter?code=SEuykv0ePEJ1rLNymzyiKTH60rV0dUM4beKwpdvgFiJFAzFui7H32Q==';

const getVisitCount = () => {
    let visitorCount = 30;
    fetch(functionApiUrl).then(response => {
        return response.json()
    }).then(response =>{
        console.log("Website called function API.");
        count = response.VisitorCount;
        document.getElementById("counter").innerText = count;
    }).catch(function(error){
        console.log(error);
    });
    return visitorCount;
}