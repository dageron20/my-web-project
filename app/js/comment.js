const url = 'https://jsonplaceholder.typicode.com/comments'

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}  

function addComment(name, body, email){
    let div = document.createElement('div')
    div.className = "fetch-comment"
    div.innerHTML = "<span id='namecomment'>" + name + "</span>" + " : " + "<span id='bodycomment'>" + body + "</span>" + "<span id='emailcomment'>" + "<br><br>" + "Отправлено от: " + email + "</span>"
    document.querySelector('#comments-list').append(div)
}

fetch(url)
    .then(response => response.json())
    .then(data =>  {
        let counter = 10
        let border =  getRandomInt(500)
        for (let item of data) {
            if(item['id'] < border) {
                continue
            }
            else {
                addComment(item['name'],  item['body'], item['email'])
                counter--
                if(counter <= 0){
                    break   
                }
            }
        }
    })
    .catch(err => {
        console.log(err)
    })