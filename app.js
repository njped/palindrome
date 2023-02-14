function onPageLoad() {
    const buttonElement = document.querySelector('button');
    buttonElement.addEventListener('click', handleOnClick)
}

function handleOnClick() {
    let textInput = document.getElementById('palindrome').value
    let message = checkPalindrome(textInput)
    document.getElementById('showMessage').textContent = message;
}

function checkPalindrome(input) {
    // nospace value removes all non-alphanumberic characters I can also use /[^A-Za-z0-9]/g
    let nospace = /[^A-Za-z0-9_]/g
    let lowRegStr = input.toLowerCase().replace(nospace, '');
    let reverseStr = lowRegStr.split('').reverse().join('');
    if(input === "") 
    return `Try Again`
    else if(reverseStr === lowRegStr)
    return `${input} is a palindrome`
    else 
    return`${input} is not a palindrome`
}

window.onload = onPageLoad;