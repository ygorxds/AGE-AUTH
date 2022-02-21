function verificar() {
  let date = new Date();
  let year = date.getFullYear();
  let formYear = window.document.getElementById("year");
  let formYearReal = Number(formYear.value);
  let res = document.getElementById("res");
  let photo = document.getElementById("picture");

  if (formYear.value.length == 0 || formYear.value > year) {
    window.alert("ERR:.Verifique os dados e tente novamente.");
  } else {
    let formsSex = window.document.getElementsByName("radsex");

    let age = year - formYearReal;

    let genero = "";

    if (formsSex[0].checked) {
      genero = "Homem";

      if (age >= 0 && age < 10) {
        res.style.textAlign = "center";
        res.innerHTML = `É um menino de ${age} anos`;
        photo.innerHTML = '<img src="kid-man.png">';
      } else if (age < 13) {
        res.innerHTML = `É um menino pre-adolescente de ${age} anos`;
        photo.innerHTML = '<img src="pre-teen-boy.png">';
      } else if (age < 18) {
        res.innerHTML = `É um homem adolescente de ${age} anos`;
        photo.innerHTML = '<img src="teen-men.png">';
      } else if (age < 65) {
        res.innerHTML = `É um homem adulto de ${age} anos`;
        photo.innerHTML = '<img src="adult-men.png">';
      } else {
        res.innerHTML = `É um homem idoso de ${age} anos`;
        photo.innerHTML = '<img src="grandfather.png">';
      }
    } else if (formsSex[1].checked) {
      genero = "Mulher";

      if (age >= 0 && age < 10) {
        res.innerHTML = `É uma menina de ${age} anos`;
        photo.innerHTML = '<img src="kid-woman.png">';
      } else if (age < 13) {
        res.innerHTML = `É uma menina pre-adolescente de ${age} anos`;
        photo.innerHTML = '<img src="pre-teen-woman.png">';
      } else if (age < 18) {
        res.innerHTML = `É uma mulher adolescente de ${age} anos`;
        photo.innerHTML = '<img src="teen-woman.png">';
      } else if (age < 65) {
        res.innerHTML = `É uma mulher adulta de ${age} anos`;
        photo.innerHTML = '<img src="adult-woman.png">';
      } else {
        res.innerHTML = `É uma mulher idosa de ${age} anos`;
        photo.innerHTML = '<img src="grandmother.png">';
      }
    } else {
      alert("Insira o Sexo no qual você se indentifica");
    }
  }
}
