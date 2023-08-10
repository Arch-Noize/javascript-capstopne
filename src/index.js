import './index.css';
import { getPokemon } from './modules/api.js';
import { getComment , addComment } from './modules/comment';

const pokeData = document.querySelector('#pokemon-data');
const newComment = document.querySelector('#add-comment');
const commentForm = document.querySelector('.comment-section');
const test = document.querySelector('.test');
const popup = document.querySelector('#popup');
const closeBtn = document.querySelector("#close-btn");
const list = document.querySelector("#comment-list");

const displayPoke = async () => {
  for (let i = 1; i <= 10; i += 1) {
    const pokemon = await getPokemon(i);
    pokeData.innerHTML += `<li class="poke">${pokemon.name}</li>`;
  }
};

const displayComment = async () => {
  const commentList = await getComment("item2");
  commentList.forEach((item) => {
    list.innerHTML+= `<li class="comment"> ${item.username}: ${item.comment} (${item.creation_date})`
  })
}

test.addEventListener('click', () => {
    popup.classList.remove("overlay");
});

closeBtn.addEventListener('click', () => {
    popup.classList.add("overlay");
});

newComment.addEventListener('click', (e) => {
    e.preventDefault;
    const commentor = document.querySelector('#username').value;
    const comment = document.querySelector('#comment').value;
    if (!commentor || !comment) {
      e.preventDefault();
      console.log("oops!");
    } else {
      addComment("item2", commentor, comment);
      getComment("item2");
      commentForm.reset();
    }
});

document.addEventListener("DOMContentLoaded", displayComment());