let comments = [];
loadComments();

document.getElementById('comment-add').addEventListener('click', function(event){
    let commentName = document.getElementById('comment-name');
    let commentPlus = document.getElementById('comment-plus');
    let commentMinus = document.getElementById('comment-minus');
    let commentBody = document.getElementById('comment-body');

    let comment = {
        name : commentName.value,
        plus: commentPlus.value,
        minus: commentMinus.value,
        body : commentBody.value,
    }

    commentName.value = '';
    commentPlus.value = '';
    commentMinus.value = '';
    commentBody.value = '';

    comments.push(comment);
    saveComments();
    showComments();
})

function saveComments(){
    localStorage.setItem('comments', JSON.stringify(comments));
}

function loadComments(){
    if (localStorage.getItem('comments')) comments = JSON.parse(localStorage.getItem('comments'));
    showComments();
}

function showComments (){
    let commentField = document.getElementById('comment-field');
    let out = '';
    comments.forEach(function(item){
        out += `<div class="comm_item"><p role="alert">Имя: ${item.name}</p>`;
        out += `<p role="alert">Достоинства: ${item.plus}</p>`;
        out += `<p role="alert">Недостатки: ${item.minus}</p>`;
        out += `<p role="alert">Комментарий: ${item.body}</p></div>`;
    });
    commentField.innerHTML = out;
}