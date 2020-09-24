// validation script here
//var reg = /[a-z]/ig;

function scrollWin() {
    window.scrollBy(0, 704);
}

function scrollWin2() {
    window.scrollBy(0, 1408);
}

const inputs = document.querySelectorAll('input');

const patterns = {
    // Digits, must be exactly 10
    telephone: /^\d{10}$/,

    //Any characters and digits, between 5-12, i = case insensitive
    username: /^[a-z\d]{5,12}$/i,

    // Any characters, digits, @ and hyph/underscores - change to alphanumeric only
    password: /^[\w@-]{8,20}$/,

    // (yourname) @ (domain).(extension).(ext2-optional)
    email: /^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/

};

// validation function
function validate(field, regex) {
    if (field.value == "") {
        console.log("value is empty")
        field.className = 'invalid';
        return false;
    }
    if (regex.test(field.value)) {
        field.className = 'valid';
        return true;

    } else {
        field.className = 'invalid';
        return false;
    }
}

inputs.forEach((input) => {
    input.addEventListener('keyup', (e) => {
        validate(e.target, patterns[e.target.attributes.name.value])
    });
});


function ErrorCheck() {
    let okFields = [true, true, true, true, true];
    for (let j = 0; j < inputs.length; j++) {

        if (inputs[j].attributes.name.value !== "search") {
            if (!validate(inputs[j], patterns[inputs[j].attributes.name.value])) {
                console.log("validate failed: " + j)
                okFields[j] = false;

            }
        }
    }
    //console.log(okFields.every(function (element) { return element === true }));
    return okFields.every(function (element) { return element === true });
    //okFields.every(true)
}

function isTrue() {
    let okFields = [true, true, true, true];
    if (okFields.every()) {
        return true;
    } else {
        return false;
    }

    // om alla element i arrayen är true, return true annars return false;
    /* return true; */

}