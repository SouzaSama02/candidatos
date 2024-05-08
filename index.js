// const axios = require("axios");

async function getrespos() {
  const estados = document.getElementById("estado").value;

  const url = "https://hackathon-orbita-2024.vercel.app/candidatos";
  let resposta = await axios.get(url);
  let urls = resposta.data.candidatos;

  for (i = 0; i < 1365; i++) {
    if (urls[i].municipio == estados) {
      console.log(urls[i]);
    }
  }
}

getrespos();
