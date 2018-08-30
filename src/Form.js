
import axios from 'axios'
const API_URL = 'https://api.github.com/users';


class Form {
  constructor(addCard, clearCards) {

    this.addCard = addCard;
    this.clearCards = clearCards;

    this.API_URL = "";
    this.searchTerm = "";

    this.searchInput = document.querySelector('input[name="search"]');
    this.searchInput.addEventListener("keyup", () => this.handleKeyup(event));

    this.submitbutton = document.querySelector('button[type="submit"]');
    this.submitbutton.disabled = !this.searchTerm;

    this.clearbutton = document.querySelector('button[type="button"]');
    this.clearbutton.addEventListener('click', ()=> this.clearCards())

    this.form = document.querySelector("form");
    this.form.addEventListener("submit", () => this.handleSubmit(event));
  }

  handleKeyup(event) {
    this.searchTerm = event.target.value.trim();

    this.API_URL = `${API_URL}/${this.searchTerm}`;
    this.submitbutton.disabled = !this.searchTerm;
  }

  handleSubmit(event){
    event.preventDefault();
    axios
    .get(this.API_URL)
    .then(({ data }) => this.addCard(data))
      .catch(err => this.formError("Promise rejected !", err));

    this.form.reset()

  }

  formError(err){
    console.log(err);
    const errorText = document.createElement('p');
    errorText.style.color = "red";
    errorText.style.fontStyle = "bold";
    errorText.style.fontSize = "2rem";
    errorText.innerText = 'no user found';
    this.form.appendChild(errorText);

    setTimeout(() => this.form.removeChild(errorText), 3000);
  }



}


export default Form;