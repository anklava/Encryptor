function encode(key, message) {
    return [...message].map((char, i) => {
        const charCode = char.charCodeAt(0) + key.charCodeAt(i % key.length);
        return String.fromCharCode(charCode);
    }).join('');
}

function decode(key, encoded_message) {
    return [...encoded_message].map((char, i) => {
        const charCode = char.charCodeAt(0) - key.charCodeAt(i % key.length);
        return String.fromCharCode(charCode);
    }).join('');
}

document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('encode-button').addEventListener('click', function() {
        const key = document.querySelector('form:first-of-type input[name="key"]').value;
        const message = document.querySelector('form:first-of-type textarea[name="message"]').value;
        const result = encode(key, message);
        document.getElementById('result').innerText = 'Зашифроване повідомлення: ' + result;
    });

    document.getElementById('decode-button').addEventListener('click', function() {
        const key = document.querySelector('form:last-of-type input[name="key"]').value;
        const encoded_message = document.querySelector('form:last-of-type textarea[name="message"]').value;
        const result = decode(key, encoded_message);
        document.getElementById('result').innerText = 'Декодоване повідомлення: ' + result;
    });
});
