const API_URL = "https://YOUR_API_ID.execute-api.ap-southeast-1.amazonaws.com/prod/predict";

async function predict() {
    const input = document.getElementById("inputValue").value;

    const body = {
        input_value: Number(input)
    };

    document.getElementById("result").innerHTML = "Loading...";

    try {
        const response = await fetch(API_URL, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(body)
        });

        const data = await response.json();
        const output = JSON.parse(data.body);

        document.getElementById("result").innerHTML =
            "Prediction: " + output.prediction;

    } catch (error) {
        console.error(error);
        document.getElementById("result").innerHTML =
            "Error: Could not fetch prediction.";
    }
}
