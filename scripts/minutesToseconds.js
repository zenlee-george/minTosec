const minutesInput = document.getElementById('minutes');
const convertBtn = document.getElementById('convert-btn');
const resultPara = document.getElementById('result');

convertBtn.addEventListener('click', () => {
    const minutes = parseInt(minutesInput.value);
    const seconds = minutes * 60;
    resultPara.textContent = `${minutes} minutes is equal to ${seconds} seconds`;
});