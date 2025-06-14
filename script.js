function fetchJoke() {
    return new Promise((resolve, reject) => {
        const jokes = [
            "Why do programmers prefer dark mode? Because light attracts bugs.",
            "A programmer's wife tells him: 'While you're at the store, buy some milk.' He never comes back.",
            "Why did the JavaScript developer go broke? Because he kept using 'var' when he should've used 'let'.",
            "What's a programmer's favorite hangout place? The Foo Bar.",
            "Why do Java developers wear glasses? Because they don't C#.",
            "How many programmers does it take to change a light bulb? None. It's a hardware problem.",
            "Why was the JavaScript file so sad? Because it didn’t know how to 'null' its feelings.",
            "I would tell you a joke about async functions... but you’d have to await it.",
            "Why did the developer go broke? Because he used up all his cache.",
            "Debugging: Being the detective in a crime movie where you are also the murderer."];
        setTimeout(() => {


            if (jokes.length === 0) {
                reject("no jokes..");

            }
            else {
                const joke = jokes[Math.floor(Math.random() * jokes.length)];
                resolve(joke);
            }
        }, 1500);
    })
}


function getJoke() {
    const jokeBox = document.getElementById("jokeBox");
    jokeBox.textContent = "Loading joke...";
    //  jokeBox.classList.remove("error");

    fetchJoke()
        .then((joke) => {
            jokeBox.textContent = joke;
        })
        .catch((err) => {
            jokeBox.textContent = err;
            //  jokeBox.classList.add("error");
        });
}