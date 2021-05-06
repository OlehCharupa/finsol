(() => {
    document.querySelector(".js-speaker-form").addEventListener("submit", (e) => {
        e.preventDefault();

        let client = new FormData(e.currentTarget).forEach((value, name) =>
            console.log(`${name}: ${value}`)
        );
        console.log(client);
        e.currentTarget.reset();
    });
})();