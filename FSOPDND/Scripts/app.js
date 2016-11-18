let items = document.querySelectorAll('.item'), 
    startX,
    startY;

const move = (target, start, end) => {
    let { startX, startY } = start;
    let { endX, endY } = end;

    let x = endX - startX,
        y = endY - startY;

    target.style.transform = `translate(${x}px, ${y}px)`;
};

const handleTouchEvent = (e) => {
    if (!startX || !startY) {
        return;
    }
    
    e.preventDefault();

    move(e.target, { startX, startY }, { endX: e.targetTouches[0].pageX, endY: e.targetTouches[0].pageY });
};

const handleMouseEvent = (e) => {
    if (!startX || !startY) {
        return;
    }
    
    e.preventDefault();

    move(e.target, { startX, startY }, { endX: e.pageX, endY: e.pageY });
};

for (let item of items) {
    item.ontouchstart = (e) => {
        startX = e.targetTouches[0].pageX;
        startY = e.targetTouches[0].pageY;
    };
    item.ontouchmove = handleTouchEvent;
    item.ontouchend = (e) => {
        startX = null;
        startY = null;
    };

    item.onmousedown = (e) => {
        e.preventDefault();
        startX = e.pageX;
        startY = e.pageY;
    };
    item.onmousemove = handleMouseEvent;
    item.onmouseup = (e) => {
        e.preventDefault();
        startX = null;
        startY = null;
    };
}
