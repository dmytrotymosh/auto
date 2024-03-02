const formatName = (input) => {
    const name = input.value.replace(/[^a-zA-Zа-яА-ЯїЇіІ]/g, '');
    return name;
}
const inputNameFormatter = (event) => {
    const input = event.currentTarget;
    const formattedName = formatName(input);
    input.value = formattedName;
}
const nameInputs = document.querySelectorAll('input[type="text"]');
nameInputs.forEach(element => element.addEventListener('input', inputNameFormatter));