var getInp = document.getElementById('inp')
 function api_Github(){
    fetch(`https://api.github.com/users/${getInp.value}`)
.then(function(data){
    return data.json()
})
.then(function(data){
    console.log(data)
    var getDiv = document.getElementById('div')
    getDiv.innerHTML = `<div class="mainDiv d-flex justify-content-center"><div class="card text-center " style="width: 22rem;">
  <img  src="${data.avatar_url}"  class="img" alt="...">
  <div class="card-body">
    <h2 class="card-title">${data.login}</h2>
    <div>
        <ul>
             <li style="list-style:none;" class=""><strong>Repositorys:</strong> ${data.public_repos}</li>
             <li style="list-style:none;" class=""><strong>Followers:</strong> ${data.followers}</li>
             <li style="list-style:none;" class=""><strong>Following:</strong> ${data.following}</li>
        </ul>
        
    </div>
    <a style="text-decoration:none;" target="blank" href="${data.html_url}" class="btn btn-success">Profile</a>
  </div>
</div></div>`
    
})
.catch(function(err){
    console.log(err)
})
 }



