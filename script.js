function toogleMode() {
  // MODO NÃO PRATICO DE FAZER ISSO :::::
  // // constante body q recebe o atributo body dentro do document
  const html = document.documentElement
  // // si, dentro do html no classlist CONTER o tema "light", então remova o tema "light"
  // if (html.classList.contains("light")) {
  //   html.classList.remove("light")
  // } else {
  //   // si nao adiciona na classlist q esta dentro do html o tema "light"
  //   html.classList.add("light")
  // }

  // MODO PRATICO !!!! TOGGLE = ALTERNAR, SE TEM OU NÃO TEM
  html.classList.toggle("light")

  //pegar a tag img
  const img = document.querySelector("#profile img")

  //substituir a imagem
  if (html.classList.contains("light")) {
    //se tiver light mode, adicionar a imagem light |||| setAttribute = adicionar ajustar modificar um atributo
    img.setAttribute("src", "./assets/Avatar-light.png")
  } else {
    //se tiver sem light mode, manter a imagem normal
    img.setAttribute("src", "./assets/Avatar-dark.png")
  }

  //pegar o img
  const imgAlt = document.querySelector("#profile img")
  //substituir o texto do alt
  if (html.classList.contains("light")) {
    //se for light mode deixar o texto para dark mode
    img.setAttribute("alt", "Perfil para o tema claro!")
  } else {
    //se tiver sem light mode manter o alt normal
    img.setAttribute("alt", "Perfil para o tema dark!")
  }
}
