const swiper = new Swiper('.swiper', {
  // Optional parameters
  slidesPerView: 1,
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  scrollbar: {
    hide: true,
  },
});










// const commentsList = document.querySelector('.comments__list');
// const author = document.querySelector('.comments__input')
// const text = document.querySelector('.comments__textarea');
// const commentsAddbutton = document.querySelector('.comments__addbutton');

// let comments;
// if (!localStorage.comments) {
//   comments = []
// }
// else (
//   comments = JSON.parse(localStorage.getItem('comments'))
// )

// function Comment (author, text) {
//   this.author = author;
//   this.text = text;
// }

// function createTemplate(comment, index) {
//   return `
//     <li class="comments__item">
//       <span class="author">${comment.author}</span>
//       <span class="text">${comment.text}</span>
//       <button onClick="deleteComment(${index})" class="delete-button">Удалить</button>
//     </li>
//   `
// }

// function fillHtmlList() {
//   commentsList.innerHTML = "";
//   if(comments.length > 0) {
//     comments.forEach((item, index) => {
//       commentsList.innerHTML += createTemplate(item, index);
//     })
//   }
// }

// fillHtmlList()

// function updateLocal() {
//   localStorage.setItem('comments', JSON.stringify(comments))
// }


// commentsAddbutton.addEventListener('click', function() {
//   comments.push(new Comment(author.value, text.value))
//   console.log(comments);
//   updateLocal();
//   fillHtmlList();
//   author.value = '';
//   text.value = '';
// })

// function deleteComment(index) {
//   comments.splice(index, 1);
//   updateLocal();
//   fillHtmlList();
// }



//commentsAddbutton.addEventListener('click', function() {
//  if (commentsTextarea.value == 0) {
//    alert ('Оставьте свой комментарий')
//  }
//  else {
//    const commentsItem = document.createElement('li');
//    commentsItem.classList.add('comments__item');
//
//    const author = document.createElement('span')
//    author.innerHTML = commentsInput.value  + ':';
//    author.classList.add('author')
//
//    const text = document.createElement('span')
//    text.innerHTML = commentsTextarea.value;
//    text.classList.add('text')
//
//    const deleteButton = document.createElement('button');
//    deleteButton.innerHTML = 'Удалить'
//    deleteButton.classList.add('delete-button')
//
//    commentsItem.appendChild(author)
//    commentsItem.appendChild(text)
//    commentsItem.appendChild(deleteButton)
//    commentsList.appendChild(commentsItem);
//    deleteButton.addEventListener('click', function() {
//      commentsList.removeChild(commentsItem)
//    })
//  }
//  commentsInput.value = ''
//  commentsTextarea.value = ''
//})