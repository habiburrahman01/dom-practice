document.getElementById('add-border').addEventListener(
    'click', function () {
        const container = document.getElementById('friend-container')
        container.style.border = '3px solid #000'
    }
)
document.getElementById('remove-border').addEventListener(
    'click', function () {
        const container = document.getElementById('friend-container')
        container.style.border = 'none'
    }
)

function addBackground() {
    const friends = document.getElementsByClassName('friends')
    for (const friend of friends) {
        friend.style.backgroundColor = 'lightblue';
    }
}
function removeBackground() {
    const friends = document.getElementsByClassName('friends')
    for (const friend of friends) {
        friend.style.backgroundColor = 'transparent';
    }
}

document.getElementById('add-friend').addEventListener(
    'click', function(){
        const container=document.getElementById('friend-container')
        const friendDiv=document.createElement('div')
        friendDiv.classList.add('friends', 'newFriends')
        friendDiv.innerHTML=`
            <h3 class="friend-name">New friend</h3>
            <p>Minus et eius esse quas.</p>
        `
        container.appendChild(friendDiv)
    }
)



function colorNewfriends(){
    const newFreind=document.getElementsByClassName('newFriends')
    for( i of newFreind){
        i.style.color='green'
    }
    
}

