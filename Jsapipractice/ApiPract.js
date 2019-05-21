var rootDiv = document.getElementById('groot');
var container = document.createElement('div');
var pic = document.createElement('img');
pic.src = 'KodakBlack.jpg'

rootDiv.appendChild(container);
container.appendChild(pic);

var request = new XMLHttpRequest();

request.open('GET','https://jsonplaceholder.typicode.com/users',true);

request.onload = function(){
    var data = JSON.parse(this.response);
    if(request.status >= 200 && request.status < 400) {
        data.forEach(users => {
            var card = document.createElement('div');
            var heading1 = document.createElement('h1');
            heading1.textContext = users.name;
            heading1.style.textAlign = 'center';
            var heading2 = document.createElement('h2');
            heading2.textContent = users.username;
            heading2.style.fontFamily = 'fantasy';
            heading2.style.textAlign = 'center';
            var para = document.createElement('p');
            para.textContent = users.email;
            para.style.textAlign = 'center';

            container.appendChild(card);
            card.appendChild(heading1);
            card.appendChild(heading2);
            card.appendChild(para);


        });
    } else {
        alert('Yea Aight!');
    }
}

request.send();
