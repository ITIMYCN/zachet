function checkNameFirst()
{
    var first = document.getElementById("firstname").value;
    var regex = /^[a-zA-Zа-яА-ЯёЁ\s]{2,20}$/;

    if (regex.test(first)) 
    {
        document.getElementById("firstname_check").innerHTML = "";
        return true;
    }
    else
    {
        document.getElementById("firstname_check").style.color = "red";
        document.getElementById("firstname_check").innerHTML = "Введите от 2 до 20 букв";
        return false;
    }
}

function checkNumberFirst()
{
    var phone = document.getElementById("firstnumber").value;
    var regex = /^\d{3}-(\d{3})-\d{3}$/;

    if (regex.test(phone))
    {
        document.getElementById("firstnumber_check").innerHTML = "";
        return true;
    }
    else
    {
        document.getElementById("firstnumber_check").style.color = "red";
        document.getElementById("firstnumber_check").innerHTML = "Корректно введите номер";
        return false;
    }
}

function checkMessageFirst()
{
    var dest = document.getElementById("firstmessage").value;
    var regex = /^[a-zA-Zа-яА-ЯёЁ0-9\s]{5,100}$/;

    if (regex.test(dest))
    {
        document.getElementById("firstmessage_check").innerHTML = "";
        return true;
    }
    else
    {
        document.getElementById("firstmessage_check").style.color = "red";
        document.getElementById("firstmessage_check").innerHTML = "Введите от 5 до 100 символов";
        return false;
    }
}

function checkNameSecond() {
    var first = document.getElementById("secondname").value;
    var regex = /^[a-zA-Zа-яА-ЯёЁ\s]{2,20}$/;

    if (regex.test(first)) {
        document.getElementById("secondname_check").innerHTML = "";
        return true;
    } else {
        document.getElementById("secondname_check").style.color = "red";
        document.getElementById("secondname_check").innerHTML = "Введите от 2 до 20 букв";
        return false;
    }
}

function checkNumberSecond() {
    var phone = document.getElementById("secondnumber").value;
    var regex = /^\d{3}-\d{3}-\d{3}$/;

    if (regex.test(phone)) {
        document.getElementById("secondnumber_check").innerHTML = "";
        return true;
    } else {
        document.getElementById("secondnumber_check").style.color = "red";
        document.getElementById("secondnumber_check").innerHTML = "Корректно введите номер";
        return false;
    }
}

function checkMessageSecond() {
    var dest = document.getElementById("secondmessage").value;
    var regex = /^[a-zA-Zа-яА-ЯёЁ0-9\s]{5,100}$/;

    if (regex.test(dest)) {
        document.getElementById("secondmessage_check").innerHTML = "";
        return true;
    } else {
        document.getElementById("secondmessage_check").style.color = "red";
        document.getElementById("secondmessage_check").innerHTML = "Введите от 5 до 100 символов";
        return false;
    }
}

function checkEmail() {
    var dest = document.getElementById("email").value;
    var regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (regex.test(dest)) {
        document.getElementById("mail_check").innerHTML = "";
        return true;
    } else {
        document.getElementById("mail_check").style.color = "red";
        document.getElementById("mail_check").innerHTML = "Введите почту корректно";
        return false;
    }
}

function validateForm(event, formType) {
    event.preventDefault();

    var isValid = false;

    if (formType === 'first') {
        var isNameFirstValid = checkNameFirst();
        var isNumberFirstValid = checkNumberFirst();
        var isMessageFirstValid = checkMessageFirst();

        if (isNameFirstValid && isNumberFirstValid && isMessageFirstValid) {
            outputDataFirst();
            isValid = true;
        }
    } else if (formType === 'second') {
        var isNameSecondValid = checkNameSecond();
        var isNumberSecondValid = checkNumberSecond();
        var isMessageSecondValid = checkMessageSecond();
        var isEmailValid = checkEmail();

        if (isNameSecondValid && isNumberSecondValid && isMessageSecondValid && isEmailValid) {
            outputDataSecond();
            isValid = true;
        }
    }

    if (!isValid) {
        alert("Пожалуйста, корректно заполните все поля");
    }
}

function outputDataFirst() {
    var name = document.getElementById("firstname").value;
    var number = document.getElementById("firstnumber").value;
    var message = document.getElementById("firstmessage").value;

    if (name !== "" && message !== "" && number !== "") {
        alert("Имя: " + name + "\nНомер: " + number + "\nСообщение: " + message);
    } else {
        alert("Пожалуйста, корректно заполните все поля");
    }
}

function outputDataSecond() {
    var name = document.getElementById("secondname").value;
    var number = document.getElementById("secondnumber").value;
    var message = document.getElementById("secondmessage").value;
    var mail = document.getElementById("email").value;

    if (name !== "" && message !== "" && number !== "" && mail !== "") {
        alert("Имя: " + name + "\nНомер: " + number + "\nПочта: " + mail + "\nСообщение: " + message);
    } else {
        alert("Пожалуйста, корректно заполните все поля");
    }
}
 