function fetchUser(){
    fetch('https://randomuser.me/api').then((feeback) => {
        return feeback.json()
    }).then((data) => {
        displayUser(data.results[0])
    })
}

// fetchUser();

displayUser = (user) => {
    const userDisplay = document.querySelector('.users-info')
    const newDiv = document.createElement('div')
    if(user.gender === 'female'){
        document.body.style.backgroundColor = 'yellow'
    }else{
        document.body.style.backgroundColor = 'steelblue'
    }

    userDisplay.innerHTML = `
    <div class="users-info">
        <img src=${user.picture.large} alt="" class="img">
     <div class="text">
       <p><span>Name:</span>${user.name.first} ${user.name.last}</p>
      <p><span>Email:</span> ${user.email}</p>
      <p><span>Phone:</span> ${user.phone}</p>
      <p><span>Location:</span> ${user.location.city} ${user.location.city}</p>
      <p><span>Age:</span> ${user.dob.age}</p>
     </div>
     </div>
    `
}

const GenBtn = document.querySelector('.Gen-btn').addEventListener('click', fetchUser)