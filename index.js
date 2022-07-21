document.querySelector ("button").addEventListener ("click", function () {
    //создаем пустой массив и генерируем 10 случайных чисел в нужном диапозоне при попощи цикла for
    let generatedArray = [];
    for (let i = 0; i < 10; i++) generatedArray[i] = Math.floor(Math.random() * 21 - 10);
    document.querySelector('#outResult').innerHTML = 'Сгенерировали: ' + generatedArray;
    //находим минимальное значение в массиве
    let min = Math.min.apply(null, generatedArray);
    document.querySelector('#outMin').innerHTML = 'Минимальное: ' + min;
    //находим максимальное значение в массиве
    let max = Math.max.apply(null, generatedArray);
    document.querySelector('#outMax').innerHTML = 'Максимальное: ' + max;
    // находим среднее арифметическое значение массива (сумму элементов поделить на количество элементов)
    let sum = 0; // переменная с нулевым значением, далее цикл for, метод length (устанавливаю длину массива), деление и вывод результата
    for (let i = 0; i < generatedArray.length; i++) {
        sum += generatedArray[i];
    }
    let result = sum / generatedArray.length;
    document.querySelector('#outArithmeticMean').innerHTML = 'Среднее арифметическое: ' + result;
    //находим сумму элементов массива
    let findSum = generatedArray.reduce(function(sum, num) {
        return sum + num;
    }, 0);
    document.querySelector('#outSum').innerHTML = 'Сумма чисел: ' + findSum;
    //находим произведение элементов массива
    let findProduct = generatedArray.reduce(function(product, num) {
        console.log(product);
        return product * num;
    }, 1);
    document.querySelector('#outProduct').innerHTML = 'Произведение чисел: ' + findProduct;
});
