let telefone = function () {
  this.cor = "preto";

  this.ligar = function () {
    console.log("uma ligação");
    return "ligando";
  };
};

let objeto = new telefone();
console.log(objeto);
