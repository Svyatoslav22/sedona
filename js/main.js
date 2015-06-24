(function(){
    var chooseHotel = document.getElementById('choose-hotel');
    var hotelsFilters = document.getElementById('hotels-filters');

    if(chooseHotel) {
        var counters = chooseHotel.querySelectorAll('.counter');

        for(var i = 0, len= counters.length; i < len; i++) {
            val = +counters[i].querySelector('.input-counter').value;
            if(val === 0) {
                counters[i].querySelector('.btn-counter.icon-minus')
                    .classList.add('btn-counter-disabled');
            }
        }

        chooseHotel.addEventListener('click', function(event) {
            target = event.target;

            if(target.classList.contains('btn-toggle')) {
                event.preventDefault();

                popup = chooseHotel.querySelector('.choose-hotel-popup');
                popup.classList.toggle('popup-show');
                popup.classList.toggle('popup-hide');

                if(!popup.classList.contains('hidden')) {
                    popup.querySelector('input').focus();
                }
                return;
            }

            if(target.classList.contains('icon-minus')) {
                decNum(target.parentNode);
                return;
            }

            if(target.classList.contains('icon-plus')) {
                incNum(target.parentNode);
                return;
            }

            if(target.classList.contains('icon-calendar')) {
                setDate(target.parentNode);
                return;
            }
        });

        window.addEventListener('keydown', function(event) {
            target = event.target;

            if(event.keyCode === 27) {
                popup = chooseHotel.querySelector('.choose-hotel-popup');

                if(!popup.classList.contains('hidden')) {
                    popup.classList.add('hidden');
                }
                return;
            }
        });

        chooseHotel.querySelector('form').addEventListener('submit', function(event) {
            target = event.target;

            requireds = chooseHotel.querySelectorAll('[required]');

            for(var i = 0, len= requireds.length; i < len; i++) {
                if(isValid(requireds[i])) continue;

                event.preventDefault();

                requireds[i].focus();
                requireds[i].classList.add('input-error');
                requireds[i].oninput = clearErrorState;

                alert('поле заполнено неверно');
                return;
            }

            function clearErrorState() {
                this.classList.remove('input-error');
                this.oninput = null;
            }
        });
    }

    if(hotelsFilters) {

    }

    function incNum(counter) {
        var input = counter.querySelector('.input-counter');
        if(+input.value === 0) {
            counter.querySelector('.btn-counter.icon-minus')
                .classList.remove('btn-counter-disabled');
        }
        input.value = +input.value + 1;
    }

    function decNum(counter) {
        var input = counter.querySelector('.input-counter');
        if(+input.value === 0) return;
        if(+input.value === 1) {
            counter.querySelector('.btn-counter.icon-minus')
                .classList.add('btn-counter-disabled');
        }
        input.value = +input.value - 1;
    }

    function setDate(elem) {
        // ToDo: добавить модуль установки даты
        alert('Заглушка для модуля установки даты');
        return true;
    }

    function isValid(input) {
        console.log(input.type);
        console.log(input.name);
        console.log(input.value);
        console.log(input.validity);

        // ToDo: добавить полезную логику проверок
        return input.value !== '';
    }
})();
