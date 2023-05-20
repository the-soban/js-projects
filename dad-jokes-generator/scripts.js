
const btnEl = document.getElementById("btn");
const jokeEl = document.getElementById("joke");

const apiKey = "vJKPJPGJHBad/t27OojIAg==TjAYtniSb2e9RrJY";

const apiOpts = {
    method: "GET",
    headers: {
        "X-Api-Key": apiKey,
    },
};

const apiUrl = "https://api.api-ninjas.com/v1/dadjokes?limit=1";

async function getJoke(){

    try {
        jokeEl.innerText = "Generating...";
        btnEl.disabled = true;
        btnEl.innerText = "Wait for joke";
    
        const response = await fetch(apiUrl, apiOpts);
        const data = await response.json();
    
        btnEl.disabled = false;
        btnEl.innerText = "Generate a Joke";
    
        jokeEl.innerText = data[0].joke;
    } catch (error) {
        jokeEl.innerText = "An error occured. Please check your internet connection or Try Again.";
        btnEl.disabled = false;
        btnEl.innerText = "Generate a Joke";
        console.log(error);


    }


}

btnEl.addEventListener("click", getJoke);