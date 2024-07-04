const rooms = [
    // Granada Rooms
    {
        location: "Granada",
        numberOfPeople: 2,
        img: "./images/rooms/granada/1-granada.png",
        bedType: "double",
        bathroom: "private",
        price: 120,
        description: "Cozy double room with private bathroom and amenities",
        roomName: "Granada Deluxe"
    },
    {
        location: "Granada",
        numberOfPeople: 1,
        img: "./images/rooms/granada/2-granada.png",
        bedType: "simple",
        bathroom: "public",
        price: 80,
        description: "Simple single room with public bathroom access",
        roomName: "Granada Solo"
    },
    {
        location: "Granada",
        numberOfPeople: 3,
        img: "./images/rooms/granada/3-granada.jpg",
        bedType: "double",
        bathroom: "private",
        price: 150,
        description: "Spacious family room with private bathroom and double bed",
        roomName: "Granada Family Suite"
    },
    {
        location: "Granada",
        numberOfPeople: 1,
        img: "./images/rooms/granada/4-granada.png",
        bedType: "simple",
        bathroom: "public",
        price: 70,
        description: "Affordable single room with shared bathroom access",
        roomName: "Granada Budget"
    },
    {
        location: "Granada",
        numberOfPeople: 2,
        img: "./images/rooms/granada/5-granada.png",
        bedType: "simple",
        bathroom: "private",
        price: 110,
        description: "Comfortable twin room with private bathroom and amenities",
        roomName: "Granada Twin"
    },
    // Bilbao Rooms
    {
        location: "Bilbao",
        numberOfPeople: 3,
        img: "./images/rooms/bilbao/1-bilbao.jpg",
        bedType: "double",
        bathroom: "private",
        price: 160,
        description: "Luxury family suite with private bathroom and double bed",
        roomName: "Bilbao Family Deluxe"
    },
    {
        location: "Bilbao",
        numberOfPeople: 2,
        img: "./images/rooms/bilbao/2-bilbao.png",
        bedType: "simple",
        bathroom: "public",
        price: 90,
        description: "Cozy twin room with public bathroom access",
        roomName: "Bilbao Twin"
    },
    {
        location: "Bilbao",
        numberOfPeople: 1,
        img: "./images/rooms/bilbao/3-bilbao.png",
        bedType: "simple",
        bathroom: "private",
        price: 85,
        description: "Private single room with amenities and private bathroom",
        roomName: "Bilbao Solo"
    },
    {
        location: "Bilbao",
        numberOfPeople: 2,
        img: "./images/rooms/bilbao/4-bilbao.png",
        bedType: "double",
        bathroom: "public",
        price: 130,
        description: "Comfortable double room with shared bathroom access",
        roomName: "Bilbao Deluxe"
    },
    {
        location: "Bilbao",
        numberOfPeople: 3,
        img: "./images/rooms/bilbao/5-bilbao.png",
        bedType: "simple",
        bathroom: "private",
        price: 140,
        description: "Spacious triple room with private bathroom and amenities",
        roomName: "Bilbao Triple"
    }
];




function appendRooms(rooms) {
    const roomsSection = document.getElementById('rooms');
    roomsSection.innerHTML = '';

    rooms.forEach(room => {
        // Create the room container
        const roomDiv = document.createElement('div');
        roomDiv.classList.add('room');

        roomDiv.addEventListener('click',()=>{
            let allRooms = document.querySelectorAll('.room');
            allRooms.forEach((room)=>{
                room.style.border ='';
            })
            roomDiv.style.border ='2px solid orange'
            localStorage.setItem('selectedRoom', JSON.stringify(room));

            let checkingBtn = document.querySelector('.checkingBtn');
            checkingBtn.style.display = 'block'; 
             
        })

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
    });
}

let locations = document.getElementById('locations');
let people = document.getElementById('people');


function filtering(){
let selectedRooms = [...rooms];

if (locations.value === 'granada'){
    selectedRooms = rooms.filter((room)=>{return room.location === 'Granada'});
} else if (locations.value === 'bilbao'){
    selectedRooms = rooms.filter((room)=>{return room.location === 'Bilbao'});
} 
if (people.value) {
    selectedRooms = selectedRooms.filter((room) => room.numberOfPeople === parseInt(people.value));
}

appendRooms(selectedRooms)
}

addEventListener("DOMContentLoaded", (event) => {filtering()});
locations.addEventListener("input", filtering);
people.addEventListener("input", filtering);



let dateFromInput = document.getElementById('dateFrom');
let dateToInput = document.getElementById('dateTo');

// -----code from stackoverflow https://stackoverflow.com/questions/46266352/how-to-add-days-in-input-type-date 
function addOneDay(dateString) {
    // Parse the date string into a Date object
    let date = new Date(dateString);
    // Add one day
    date.setDate(date.getDate() + 1);
    // Convert back to string in format YYYY-MM-DD
    let newDateString = date.toISOString().split('T')[0];
    return newDateString;
}
// -------------------------------------------------
    dateFromInput.addEventListener('input', function() {

        dateFromInput.value = document.getElementById('dateFrom').value;
        dateToInput = document.getElementById('dateTo');
        // console.log(dateFromInput)
        // console.log(dateFromInput.value);

        if (dateToInput.value <= dateFromInput.value) {
            dateToInput.value = addOneDay(dateFromInput.value);
        }
       
    });

    dateToInput.addEventListener('input', function() {
        dateFromInput.value = document.getElementById('dateFrom').value;
        dateToInput = document.getElementById('dateTo');
        // console.log(dateFromInput)
        // console.log(dateFromInput.value);

        if (dateToInput.value <= dateFromInput.value) {
            dateToInput.value = addOneDay(dateFromInput.value);
        }
    });
