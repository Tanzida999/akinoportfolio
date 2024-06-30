
    function hideElementById(id) {
        document.getElementById(id).classList.add('hidden');
    }

    function showElementById(id) {
        document.getElementById(id).classList.remove('hidden');
    }

    function play() {
        hideElementById('start');
        hideElementById('company');
        hideElementById('address')
        showElementById('aboutus');
    }

    function play2() {
        hideElementById('aboutus');
        hideElementById('company');
        hideElementById('address')
        showElementById('start');
    }

    function play3() {
        hideElementById('start');
        hideElementById('aboutus');
        hideElementById('address')
        showElementById('company');

    }
    function play4() {
        hideElementById('start');
        hideElementById('aboutus')
        hideElementById('company');
        showElementById('address')
    }

