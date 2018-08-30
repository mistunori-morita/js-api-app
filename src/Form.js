

const API_URL = 'https://api.github.com/users';


class Form {
  constructor() {
    this.API_URL = "";
    this.searchTerm = "";

    this.searchInput = document.querySelector('input[name="search"]');
    this.searchInput.addEventListener("keyup", () => this.handleKeyup(event));

    this.submitbutton = document.querySelector('button[type="submit"]');

    this.submitbutton.disabled = !this.searchTerm;

    this.form = document.querySelector("form");
    this.form.addEventListener("submit", () => this.handleSubmit(event));
  }

  handleKeyup(event) {
    console.log(event);
    this.searchTerm = event.target.value.trim();

    this.API_URL = `${API_URL}/${this.searchTerm}`;
    console.log(this.API_URL);
    this.submitbutton.disabled = !this.searchTerm;
  }

  handleSubmit(event){
    event.preventDefault();
  }



}


export default Form;