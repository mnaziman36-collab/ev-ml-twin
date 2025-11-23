const apiURL = "a1i1yi2zgvdh8u-ats.iot.ap-southeast-1.amazonaws.com";

async function getPrediction() {
    const response = await fetch(apiURL);
    const data = await response.json();
    console.log("Prediction:", data);
}
