function newfunction(){
fetch('https://mehakgill2470.github.io/COMP1073FinalExam/Q3/loadcat.json')
.then((resp) => resp.json())
.then(function(data) {

let myloadcat = data;
loadcat(myloadcat);
});
}

function loadcat(jsonObj) {
     let loadcat = jsonObj.loadcat;
    for (let i = 0; i < loadcat.length; i++) {
        let article = document.createElement('article');
        let h2 = document.createElement('h2');
        let h3 = document.createElement('h3');
        let img = document.createElement('img');
        let p = document.createElement('p');
        let list = document.createElement('ul');
        let hr = document.createElement('hr');
        let br = document.createElement('br');
        let section = document.querySelector('section');
        img.setAttribute('src', loadcat[i].photo);
        img.setAttribute('alt', loadcat[i].name);
        img.setAttribute('height', '300px');
        img.setAttribute('width', '300px');
        h2.textContent = loadcat[i].name;
        h3.textContent = "Cat Age = " + loadcat[i].age;        
        p.textContent = 'Species: ' + loadcat[i].species;
        let favFoods = loadcat[i].favFoods;
        for (let j = 0; j < favFoods.length; j++) {
            let listItem = document.createElement('li');
            listItem.innerHTML = favFoods[j];
            list.appendChild(listItem);
        }
        article.appendChild(img);
        article.appendChild(h2);
        article.appendChild(h3);
        article.appendChild(p);
        article.appendChild(list);
        article.appendChild(hr);
        article.appendChild(br);
        section.appendChild(article);
    }
}
