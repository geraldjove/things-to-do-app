const button = document.getElementById('button');
const input = document.getElementById('input');
const textInput = document.querySelector('input');
const ul = document.querySelector('ul');
const checkbox = document.querySelector('checkbox');

const textInputCheck = () => {
    return textInput.value.length;
}

const createListElement = () => {
    const li = document.createElement('li');
    const checkbox = document.createElement('input');
    const delButton = document.createElement('button');
    delButton.appendChild(document.createTextNode('Delete'));
    li.appendChild(checkbox).classList.add('checked');
    li.appendChild(checkbox).type = "checkbox";
    li.appendChild(document.createTextNode(textInput.value));
    li.appendChild(delButton).classList.add('remove')
    ul.appendChild(li);
    textInput.value = '';
    
}

const submitOnClick = () => {
    if (textInputCheck() > 0 ) {
        createListElement();
    }
}

const submitOnEnter = (event) => {
    if (event.keyCode === 13 && textInputCheck() > 0) {
        createListElement();
    }
}

const toggleChecked = (event) => {
    if (event.target.classList.contains('checked')) {
        event.target.closest('li').classList.toggle('done');
    }
}

const delItem = (event) => {
    if (event.target.classList.contains('remove')) {
        event.target.closest('li').remove();
    }
}

button.addEventListener('click', submitOnClick);
input.addEventListener('keypress', submitOnEnter);
ul.addEventListener('click', toggleChecked);
ul.addEventListener('click', delItem);

// Date and Time


// Display Clock
const displayClock = () => {
    const today = new Date();
    const year = today.getFullYear();
    const date = today.getDate();
    const month = today.getMonth();
    const day = today.getDay();
    const dayList = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
    ];
    let hour = today.getHours();
    const minute = today.getMinutes();
    const second = today.getSeconds();
    const dt = document.getElementById('dt');
    let prepand = (hour <= 12 ) ? "AM" : "PM";
    hour = (hour >= 12) ? hour - 12 : hour;
    
    if (hour === 0 && prepand === 'AM'){
        if (minute === 0 && second === '0') {
            hour = 12;
            prepand="Midnight";
        } else {
            hour = 12;
            prepand = "AM";
        }
    }

    if (hour === 0 && prepand === 'PM'){
        if (minute === 0 && second === 0) {
            hour = 12;
            prepand = "Noon";
        } else {
            hour = 12;
            prepand = "PM";
        }
    }
    console.log(hour);
    dt.innerHTML = `${month}/${date}/${year} | ${hour}${prepand}:${minute}:${second}`;
    setTimeout(displayClock, 1000);
}

displayClock();
