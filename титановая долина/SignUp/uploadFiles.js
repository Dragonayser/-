document.getElementById('file').addEventListener('change', function (e) {
    // Проверяем, что только 1 файл был выбран
    if (this.files && this.files.length == 1) {
        const textContainer = this.nextElementSibling.querySelector('.field-file__label--text');
        const fileName = e.target.value.split('\\').pop();
        if (textContainer) {
            textContainer.textContent = fileName || 'Выберите файл для загрузки';
            return true;
        }
    }
})
    return false;