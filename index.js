document.querySelector ("button").addEventListener ("click", function () {
    let generatedArray = [];
    for (let i = 0; i < 10; i++) generatedArray[i] = Math.floor(Math.random() * 21 - 10);
    document.querySelector('#outResult').innerHTML = 'Сгенерировали: ' + generatedArray;
    let min = Math.min.apply(null, generatedArray);
    document.querySelector('#outMin').innerHTML = 'Минимальное: ' + min;
    let max = Math.max.apply(null, generatedArray);
    document.querySelector('#outMax').innerHTML = 'Максимальное: ' + max;
// найти среднее арифметическое значение массива элементов (сумму элементов поделить на количество элементов)
    let sum = 0; // переменная с нулевым значением, далее цикл for, метод length (устанавливаю длину массива), деление и вывод результата
    for (let i = 0; i < generatedArray.length; i++) {
        sum += generatedArray[i];
    }
    let result = sum / generatedArray.length;
    document.querySelector('#outArithmeticMean').innerHTML = 'Среднее арифметическое: ' + result;
    let findSum = generatedArray.reduce(function(sum, num) {
        return sum + num;
    }); //в learn.js в разделе метода массива reduce в синтаксисе поиска суммы значений массива пишется "}, 0);" (присваивается нулевое значение?!) и при подсчете суммы значений работает и с 0 и без него, но при поиске произведения значений см. ниже
    document.querySelector('#outSum').innerHTML = 'Сумма чисел: ' + findSum;
    let findProduct = generatedArray.reduce(function(product, num) {
        return product * num;
    }); //если ставлю "}, 0);", то результат всегда 0 (значения умножаются на 0 и получается 0?!) - при умножении не ставить 0, а при сложении ставить?
    document.querySelector('#outProduct').innerHTML = 'Произведение чисел: ' + findProduct;
});