
function initiate() {

    var canvas = document.getElementById("canvas");
    var ctx = canvas.getContext("2d");

    var canvas1 = document.getElementById("canvas1");
    var ctx1 = canvas1.getContext('2d');

    var canvas2 = document.getElementById("canvas2");
    var ctx2 = canvas2.getContext('2d');

    ctx.fillStyle = "tan";
    ctx.fillRect(0, 0, canvas.width, canvas.height);    ctx2.fillStyle = 'lightgray';
    ctx2.fillRect(0,0,canvas2.width,canvas2.height);
    ctx1.fillStyle = 'lightgray';
    ctx1.fillRect(0,0,canvas1.width,canvas1.height);

    var saveButton = document.getElementById('save');
    var retrieveButton = document.getElementById('retrieve');
    var reviewButton = document.getElementById('review');
    var data = document.getElementById('data');
    
    saveButton.addEventListener('click',saveItem);
    retrieveButton.addEventListener('click',retrieveItem);
    reviewButton.addEventListener('click',reviewItems);
    addEventListener('storage', storageReview);

    function saveItem() {
       var key = document.getElementById('key').value;
       localStorage[key] = document.getElementById('value').value;
   }

    function retrieveItem() {
       
       var key = document.getElementById('key').value;
       var value = localStorage[key];
       data.innerHTML = '<div>' + key + ': ' + value + '<div>';
   }

    function reviewItems() {
        for (var i = 0; i< localStorage.length; i++){
            var key = localStorage.key(i);
            var value = localStorage[key];
            data.innerHTML += '<div>' + key + ' : ' + value + '<br></div>';
        }
    }

    function storageReview(e) {
        data.innerHTML += '<div>' +
        'key: ' + e.key + '<br>' +
        'old value: ' + e.oldValue + '<br>'  +
            'new value: ' + e.newValue + '<br>' +
        'url: ' + e.url + '<br>' +
        'storage area: ' + e.storageArea + '<br></div>';

    }

    function quadCurve() {
        ctx1.beginPath();
        ctx1.moveTo(50,30);
        ctx1.quadraticCurveTo(230, 10, 50, 100);
        ctx1.stroke();

        ctx1.fillStyle = 'blue';
        //start1 point
        ctx1.fillRect(50, 30, 10, 10);
        //end p1oint
        ctx1.fillRect(50, 100, 10, 10);

        ctx1.fillStyle = 'red';
        //contr1 point
        ctx1.fillRect(230, 10, 10, 10);
    }
    quadCurve();

    function bezCurve() {
        ctx2.beginPath();
        ctx2.moveTo(50,20);
        ctx2.bezierCurveTo(0, 60, 120, 60, 50, 100);
        ctx2.lineWidth = 5;
        ctx2.lineCap = 'square';
        ctx2.stroke();

        ctx2.fillStyle = 'blue';
        // start po2int
        ctx2.fillRect(50, 20, 10, 10);
        // end poin2t
        ctx2.fillRect(50, 100, 10, 10);

        ctx2.fillStyle = 'red';
        // control 2point one
        ctx2.fillRect(0, 60, 10, 10);
        // control 2point two
        ctx2.fillRect(120, 60, 10, 10);
        
    }
    bezCurve();
}

addEventListener("load", initiate);
