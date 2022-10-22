// Listar participantes e palestrantes por evento.
// Se o participante for maior de 18 anos, permitir o cadastro; senão, alertar que o cadastro não é permitido pela idade.
// Enquanto a quantidade de participantes for inferior a 100, permitir cadastro; senão, alertar que o cadastro não será permitido por ter excedido o limite.

var Lista_Participante = ["P1", "P2", "P3", "P4", "P5", "P6", "P7"]

if (Lista_Participante.length < 4) {
    console.log ("Participante cadastrado")
} else {
    console.log ("Número de participantes excedido")
}

var Idade = 24

if (Idade >= 18) {
    console.log ("Participante cadastrado")
} else {
    console.log ("Cadastro não permitido para menores de 18 anos")
}

