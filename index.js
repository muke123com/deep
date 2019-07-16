function drawData(data) {
    let canvas = document.getElementById("canvas");
    let context = canvas.getContext("2d");
    context.beginPath();
    data.map((item) => {
        let x = (1 + item['x'])*400;
        let y = item['y']*400 + 200;
        context.fillStyle='#000';
        context.arc(x, y, 5, 0, Math.PI*2);
        context.fill();
        
        context.closePath();
    })
    
    
}