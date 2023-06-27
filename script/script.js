let aqcuiring_form = document.forms.aqcuiring_form;

let client = aqcuiring_form.elements.client;
let connection = aqcuiring_form.elements.connection;
let integration = aqcuiring_form.elements.integration;
let payment_method = aqcuiring_form.elements.payment_method;
let payers = aqcuiring_form.elements.payers;
let payment_system = aqcuiring_form.elements.payment_system;
let bank = aqcuiring_form.elements.bank;

let submit_btn = document.getElementById('submit')

function choose_connection_item() {
    if (connection.value == 'Without website' || connection.value == 'With mobile application') {
        integration.disabled = true;
        integration.labels[0].style.color = 'rgb(180, 180, 180)';
        integration.value = '';
    } else {
        integration.disabled = false;
        integration.labels[0].style.color = 'black';
    }
}

function choose_payers_item() {
    if (payers.value == 'Non-residents' || payers.value == 'Both types') {
        if (payment_system.value != 'MIR') {
            payment_system.value = '';
        }        
        payment_system.options[1].hidden = true;
        payment_system.options[3].hidden = true;
    } else {
        payment_system.options[1].hidden = false;
        payment_system.options[3].hidden = false;
    }
}

function choose_item() {
    if (payment_method.value == 'QR code') {
        if (bank.value != 'BelVEB' || bank.value != '') {
            bank.value = '';
        }        
        bank.options[1].hidden = true;
        bank.options[3].hidden = true;
    } else if (payment_method.value != 'QR code' && payment_system.value == 'MIR') {
        if (bank.value == 'Priorbank') {
            bank.value = '';
        }        
        bank.options[1].hidden = true;
        bank.options[3].hidden = false;
    } else {
        bank.options[1].hidden = false;
        bank.options[3].hidden = false;
    }
}

function submit_btn_can_be_clickable() {
    if (connection.value == 'With website' && client.value != '' && integration.value != '' && payment_method.value != '' && 
    payers.value != '' && payment_system.value != '' && bank.value != '' ||
    connection.value != 'With website' && client.value != '' && connection.value != '' && payment_method.value != '' && payers.value != '' && 
    payment_system.value != '' && bank.value != '') {
        submit_btn.disabled = false;
    } else {
        submit_btn.disabled = true;
    }
}

function click_to_submit_btn() {
    
}
