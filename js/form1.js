(() => {
    const url = "https://www.w8ben.mgirenko.com.ua/leads/"

    document.querySelector("#js-form").addEventListener("submit", (e) => {
        e.preventDefault();

        // const nameUser = document.querySelector("#name")
        // const phone = document.querySelector("#phone")
        // const email = document.querySelector("#email")
        // const text = document.querySelector("#text")

        // console.log(nameUser.value);
        // console.log(nameUser.name);

        const data = new FormData().forEach((name, value) => {
            data.append(name, value);

        })
        // formData.append(phone.name, phone.value);
        // formData.append(email.name, email.value);
        // formData.append(text.name, text.value);


        // console.log(data);

        const postData = async (url) => {
            try {
                const response = await fetch(url, {
                    method: "POST",
                    body: new FormData(data),
                })

                const json = await response.json()
                console.log("Успех:", JSON.stringify(json));

            } catch (error) {
                console.error("Ошибка", error)
            }
        }


        postData(url)

        e.currentTarget.reset();
    });
})()