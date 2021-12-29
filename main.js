const API = "https://jsonplaceholder.typicode.com/users";

//mostrar datos en el dom
const layoutInfo = (user) => {
  const $main = document.getElementById("main");
  const $fragment = document.createDocumentFragment();

  user.map(({ username, name, email, company }) => {
    const $article = document.createElement("article");
    $article.setAttribute("class", "card");
    $article.innerHTML = `
      <img class="user-image" src="http://dummyimage.com/200x200&text={website}">
      <h3 class="name">${username}</h3>
      <p>${name}</p>
      <p>${email}</p>
      <p>${company.name} </p>
    `;
    $fragment.appendChild($article);
  });

  $main.appendChild($fragment);
};

//conexcion a la API
const userInfo = async () => {
  const data = await fetch(API);
  const user = await data.json();
  layoutInfo(user);
  console.log(user); //muestra los datos por consola
};

userInfo();
