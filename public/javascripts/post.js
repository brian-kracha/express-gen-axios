document.addEventListener('DOMContentLoaded', function(){
  let divs = document.querySelector('.content')

  axios.get('/posts')
  .then(function(res) {

  console.log('hello',res.data)
  divs.innerHTML = JSON.stringify(res.data[3])

})

})
