
function appendRooms(room) {
    const roomsSection = document.getElementById('roomCheck');
    roomsSection.innerHTML = '';

    
        // Create the room container
        const roomDiv = document.createElement('div');
        roomDiv.classList.add('selectedRoom');

        // Create the room image container
        const roomImgDiv = document.createElement('div');
        roomImgDiv.classList.add('room-img');
        
        // Create the room image
        const roomImg = document.createElement('img');
        roomImg.src = room.img;
        roomImg.alt = 'room-image';
        roomImg.classList.add('room-image');
        roomImgDiv.appendChild(roomImg);
        roomDiv.appendChild(roomImgDiv);

        // Create the info container
        const infoDiv = document.createElement('div');
        infoDiv.classList.add('info');

        // Create the room name
        const roomName = document.createElement('h1');
        roomName.classList.add('room-name');
        roomName.textContent = room.roomName;
        infoDiv.appendChild(roomName);

        // Create the characteristics container
        const characteristicsDiv = document.createElement('div');
        characteristicsDiv.classList.add('characteristics');

        // Create room people div
        const roomPeopleDiv = document.createElement('div');
        roomPeopleDiv.classList.add('room-people');
        const personIcon = document.createElement('img');
        personIcon.src = './images/icons8-person-30.png';
        personIcon.alt = 'person-icon';
        const numberPeople = document.createElement('span');
        numberPeople.classList.add('number-people');
        numberPeople.textContent = room.numberOfPeople;
        roomPeopleDiv.appendChild(personIcon);
        roomPeopleDiv.appendChild(numberPeople);
        characteristicsDiv.appendChild(roomPeopleDiv);

        // Create room bed div
        const roomBedDiv = document.createElement('div');
        roomBedDiv.classList.add('room-bed');
        const bedIcon = document.createElement('img');
        bedIcon.src = './images/icons8-sleeping-in-bed-30.png';
        bedIcon.alt = 'bed-icon';
        const bedType = document.createElement('span');
        bedType.classList.add('bed-type');
        bedType.textContent = room.bedType;
        roomBedDiv.appendChild(bedIcon);
        roomBedDiv.appendChild(bedType);
        characteristicsDiv.appendChild(roomBedDiv);

        // Create room bathroom div
        const roomBathroomDiv = document.createElement('div');
        roomBathroomDiv.classList.add('room-bathroom');
        const bathroomIcon = document.createElement('img');
        bathroomIcon.src = './images/icons8-bathroom-30.png';
        bathroomIcon.alt = 'bathroom-icon';
        const bathroomType = document.createElement('span');
        bathroomType.classList.add('bathroom-type');
        bathroomType.textContent = room.bathroom;
        roomBathroomDiv.appendChild(bathroomIcon);
        roomBathroomDiv.appendChild(bathroomType);
        characteristicsDiv.appendChild(roomBathroomDiv);

        infoDiv.appendChild(characteristicsDiv);

        // Create the room description
        const roomDescription = document.createElement('p');
        roomDescription.classList.add('room-description');
        roomDescription.innerHTML = room.description;
        infoDiv.appendChild(roomDescription);

        roomDiv.appendChild(infoDiv);

        // Create the room price div
        const roomPriceDiv = document.createElement('div');
        roomPriceDiv.classList.add('room-price');
        const roomPrice = document.createElement('h3');
        roomPrice.classList.add('room-price');
        roomPrice.textContent = `${room.price}€`;
        roomPriceDiv.appendChild(roomPrice);

        roomDiv.appendChild(roomPriceDiv);

        // Append the room to the rooms section
        roomsSection.appendChild(roomDiv);
    
}

function displayUserInfo(userInfo) {
   
    
    // Update HTML elements with user information
    document.getElementById("nameCheck").textContent = userInfo.name;
    document.getElementById("addressCheck").textContent = userInfo.address;
    document.getElementById("paymentMethod").textContent = userInfo.paymentMethod;
  }

const userInfo = JSON.parse(localStorage.getItem("userInfo"));
displayUserInfo(userInfo);

const userRoom = JSON.parse(localStorage.getItem("selectedRoom"));
document.addEventListener("DOMContentLoaded", appendRooms(userRoom));

