let pass_length = document.getElementById('pass-length');
let password_length_display = document.getElementById('password-length');

let mix_capital = document.getElementById("mix-capital");
let mix_special = document.getElementById('special-char');
let mix_numbers = document.getElementById('mix-numbers');

let generated_password = document.getElementsByClassName("generated-password")[0];

let copy_button=document.getElementsByClassName("copy-button")[0];
let change_button=document.getElementsByClassName("change-button")[0];

let inp_object = {
    pl: pass_length.value,
    mc: mix_capital.checked,
    ms: mix_special.checked,
    mn: mix_numbers.checked
};


function fill_inp_object() {
    inp_object.pl = pass_length.value;
    inp_object.mc = mix_capital.checked;
    inp_object.ms = mix_special.checked;
    inp_object.mn = mix_numbers.checked;
}



generate_and_display_password();

pass_length.addEventListener('input', generate_and_display_password);
mix_capital.addEventListener('change', generate_and_display_password);
mix_special.addEventListener('change', generate_and_display_password);
mix_numbers.addEventListener('change', generate_and_display_password);





fill_inp_object();


function generate_random(max){
    return Math.round(Math.random()*max);
}

function generate_password(){
    let returnable_pass="";
    let str = "abcdefghijklmnopqrstwxyz";
    let cap_str = str.toUpperCase();
    let special_chars = "!@#$%^&*()_-+=[]{}|;:,.<>?";
    let numbers = "0123456789";

    

    if(inp_object.mc){
        str+=cap_str;
    }

    if(inp_object.ms){
        str+=special_chars;
    }

    if(inp_object.mn){
        str+=numbers;
    }

    for(let i=0;i<inp_object.pl;i++){
        returnable_pass+=str[generate_random(str.length-1)];
    }

    return returnable_pass;
}

function send_password(){
    generated_password.innerHTML=generate_password();
}

function generate_and_display_password(){
    fill_inp_object();
    send_password();
}

change_button.addEventListener('click',generate_and_display_password);

copy_button.addEventListener('click',()=>{
    const generatedPassword = document.querySelector('.generated-password');
    const temp_text_area=document.createElement("textarea");

    temp_text_area.value=generatedPassword.textContent;

    document.body.appendChild(temp_text_area);
    temp_text_area.select();
    document.execCommand('copy');
    document.body.removeChild(temp_text_area);
})