(() => {
    const url = "https://www.w8ben.mgirenko.com.ua/leads/"

    document.querySelector("#js-form").addEventListener("submit", (e) => {
        e.preventDefault();





        const postData = async (url) => {
            try {

                let data = new FormData();

                let nm = document.getElementById("name");
                let eml = document.getElementById("email");
                let phn = document.getElementById("phone");
                let txt = document.getElementById("text");
                let result = document.getElementById("result")

                data.append("name", nm.value);
                data.append("email", eml.value);
                data.append("phone", phn.value);
                data.append("text", txt.value);


                const response = await fetch(url, {
                    method: "POST",
                    body: data,
                })

                const json = await response.json()
                console.log("Успех:", JSON.stringify(json));
                result.classList.remove("invisible")
                result.classList.remove("resultError")
                result.classList.add("resultOk")
                result.textContent = "Заявка успешно отпралена."
            } catch (error) {
                console.error("Ошибка", error)
                result.classList.remove("invisible")
                result.classList.remove("resultOk")
                result.classList.add("resultError")
                result.textContent = "Ошибка. Попробуйте ещё раз."
            }
        }


        postData(url)

        e.currentTarget.reset();
    });
})()