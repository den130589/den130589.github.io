//open modal
function openModal () {
    var modal = document.getElementById('modal');
    var login = document.getElementById('login');
    var cover = document.getElementById('cover');
    var btnClose = document.getElementById('btnClose');
    login.addEventListener('click', function() {
        modal.style.display = 'block';
        cover.style.opacity = 0.5; 
    });
    btnClose.addEventListener('click', function() {
        modal.style.display = 'none';
        cover.style.opacity = 1; 
    });
}

//scrollTop

function scrollTop () {
    var btnTop = document.getElementById('top');

    btnTop.addEventListener('click', function() {
            window.scrollTo({top: 0, behavior: 'smooth'});
    });
        
    function checkDistance() {
        if (document.documentElement.scrollTop > 100 || document.body.scrollTop > 100) {
            btnTop.style.display = 'block';
        } else {
             btnTop.style.display = 'none';
            }
        }

    window.onscroll = checkDistance; 
}