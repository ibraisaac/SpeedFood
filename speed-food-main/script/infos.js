

let result = undefined;

function saveAval() {
  const name = document.querySelector("#nome");
  const aval = document.querySelector("#aval");

  if (name.value == "" || aval.value == "") {
    alert("Preencha os campos antes de enviar a avaliação!");
  }    
  let user = {
    Nome: 'John',
    Descricao: 'Smith'
  };
  
  let response = fetch('https://localhost:44394/api/Avaliacao', {
    method: 'POST',
    headers: {
      "Content-Type": "application/json;charset=utf-8"
    },
    body: JSON.stringify(user),
    mode: "no-cors"
  });
  

    name.value = "";
    aval.value = "";

    document.querySelector("h1#ty").classList.remove("hide");

    setInterval(() => {
      document.querySelector("h1#ty").classList.add("hide");
    }, 5000);
  }
