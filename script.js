document.getElementById('property-form').addEventListener('submit', function (e) {
    e.preventDefault(); // Предотвращаем перезагрузку страницы

    // Получаем значения от формы
    const title = document.getElementById('title').value;
    const imageFile = document.getElementById('image').files[0]; // Получаем файл изображения
    const description = document.getElementById('description').value; // Описание остается неизменным
    const price = document.getElementById('price').value;
    const rooms = document.getElementById('rooms').value;
    const floor = document.getElementById('floor').value;
    const address = document.getElementById('address').value;

    // Создаем объект FileReader для чтения содержимого файла изображения
    const reader = new FileReader();
    reader.onload = function(event) {
        // Создаем элемент списка для отображения добавленной недвижимости
        const propertyItem = document.createElement('li');
        propertyItem.innerHTML = `
            <h3>${title}</h3>
            <img src="${event.target.result}" alt="${title}" style="width: 100px;">
            <p>${description}</p>
            <p><strong>Цена:</strong> ${price} руб.</p>            <p><strong>Количество комнат:</strong> ${rooms}</p>
            <p><strong>Этаж:</strong> ${floor}</p>
            <p><strong>Адрес:</strong> ${address}</p>
        `;

        // Добавляем элемент в список
        document.getElementById('property-list').appendChild(propertyItem);

        // Очищаем форму
        document.getElementById('property-form').reset();
    };
    
    // Читаем файл изображения
    reader.readAsDataURL(imageFile);
});