const ratingEls = document.querySelectorAll(".rating");
const btnEl = document.getElementById("btn");
const boxEl = document.getElementById("main-box");

let selected = "";

ratingEls.forEach((ratingEl) => {
    ratingEl.addEventListener("click", (event) => {
        removeActive();
        selected = event.target.innerText || event.target.parentNode.innerText;
        event.target.classList.add("active");
        event.target.parentNode.classList.add("active");
    });
});

function removeActive(){
    ratingEls.forEach((ratingEl) => {
        ratingEl.classList.remove("active");
    });
}

try {
    btnEl.addEventListener("click", () => {
        if(selected !== ""){
            boxEl.innerHTML = `
                <h2>Thank you!</h2>
                <br>
                <strong>Feedback: ${selected}</strong>
                <p style="text-align:center;">Your valuable feedback helps us improve our product for people!</p>
                <br>
            `;
        }
    });
} catch (error) {
    boxEl.innerHTML = `
                <h2>OOPS!</h2>
                <br>
                <strong>There was some error</strong>
                <p style="text-align:center;">We're working on the issue. Please try again later!</p>
                <br>
            `;
    console.log(error);
}



