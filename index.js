(function () {
    let counter = document.querySelector('.counter');
    let decrease = document.querySelector('.decrease');
    let increase = document.querySelector('.increase');
    let reset = document.querySelector('.reset');

    increase.addEventListener('click', function (e) {
        ans = counter.value + "+" + 1;
        counter.value = eval(ans);
    })

    decrease.addEventListener('click', function (e) {
        ans = counter.value + "-" + 1;
        counter.value = eval(ans);
    })

    reset.addEventListener('click', function (e) {
        counter.value = 0;
    })

})();