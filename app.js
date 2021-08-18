const forms = document.querySelectorAll(".seccionfooter");
const getTemplate = () =>{
    return fetch("./template.html").then((response) => response.text())  //fecth lanzamos una peticion
}

/* const sendEmail = (miVariable) =>{   //arrow function
    miVariable.preventDefault()
    console.log(miVariable);
} */

const sendEmailToApi = (address, template) => {
    fetch(`https://bedu-email-sender-api.herokuapp.com/send?id`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        address: address,
        template: template,
      }),
    })
      .then((results) => {
        console.log(results.status);
        if(results.status == 200){
          alert("E-mail send!")
        } else {
          alert("Send failed")
        }
        document.getElementById("correo").value = ""
      })
      .catch((error) => {
        console.error(error);
        document.getElementById("correo").value = ""
        alert("Send failed")
      });
  };

//servicio asincrono

function sendEmail(miVariable) {
    console.log("hola")
    miVariable.preventDefault()
    const email = miVariable.target.querySelector("input").value
    console.log(email)
    getTemplate()
      .then((template) => {
        sendEmailToApi(email, template)
      })
      .catch((error) => {
        console.log(error, "error al obtener el template");
      })
  }

//console.log(forms);

for (let i=0; i< forms.length; i++){ //arreglos empiezan en posicion 0
    forms[i].addEventListener("submit",sendEmail)
}   


