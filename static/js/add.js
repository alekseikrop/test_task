'use strict'

function addInput() {
    let form = document.getElementById("main-form");
    let name_input = form.getElementsByClassName('name');
    let input_count = name_input.length;
    let new_input = document.createElement("input");
    let new_label = document.createElement('label');
    let label_text = document.createTextNode(`name${input_count + 1}`);
    let button = document.getElementById('button1');
    new_input.setAttribute('id', `name${input_count + 1}`);
    new_input.setAttribute('class', 'name');
    new_input.setAttribute('name', 'input-form');
    new_input.setAttribute('type', 'text');
    new_label.appendChild(label_text);
    new_label.setAttribute('for', `name${input_count + 1}`);
    form.insertBefore(new_label, button);
    form.insertBefore(new_input, button);
}

function submitForm(){
    let form = document.getElementById("main-form");
    let inputs = form.getElementsByClassName('name');
    let url = window.location;
    let data = {};
    for (let input of inputs) {
        data[input.id] = input.value;
    }

    let csrftoken = getCookie('csrftoken');
    const request = new Request(
    url,
    {headers: {'X-CSRFToken': csrftoken}}
    );
    fetch(request, {
        method: 'POST',
        mode: 'same-origin',
        body: JSON.stringify(data)
    }).catch((error) => {console.log(error);});
    return false;
}

function getCookie(name) {
    let cookieValue = null;
    if (document.cookie && document.cookie !== '') {
        const cookies = document.cookie.split(';');
        for (let i = 0; i < cookies.length; i++) {
            const cookie = cookies[i].trim();
            if (cookie.substring(0, name.length + 1) === (name + '=')) {
                cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                break;
            }
        }
    }
    return cookieValue;
}