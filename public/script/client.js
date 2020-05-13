var button = document.querySelector('.headernav__btnSearch');
button.addEventListener('click', function () {
    var url = location.pathname;
    var input = document.querySelector('.headernav__input');
    var search = input.value;
    url = url + '?search=' + search;

    location.href = url;
});

var select = document.querySelector('select');
select.addEventListener('change', function (ev) {
    var url = location.pathname;
    url = url + "?type=" + select.value;
    console.log(select.value);
    location.href = url;
});
