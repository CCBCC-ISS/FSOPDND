let movedItems = new Map();
let movingItem = null;

const slots = document.querySelectorAll('.grid.left td');
const len = slots.length;
      
let rects = [];
for (var i = 0; i < len; i++) {
  let slot = slots[i];
  rects.push(slot.getBoundingClientRect());
}

const down = (e) => {
  e.preventDefault();

  movingItem = e.target.id;
 
  if (!movedItems.has(e.target.id)) {
    movedItems.set(e.target.id, {
      x: e.pageX,
      y: e.pageY
    });
  }
};

const move = (e) => {
  if (e.target.id !== movingItem || !movingItem) {
    return;
  }

  e.preventDefault();

  if (movedItems.has(e.target.id)) {
    let oldPos = movedItems.get(e.target.id);
    let newPos = {
      x: e.pageX,
      y: e.pageY
    };

    let difX = newPos.x - oldPos.x,
        difY = newPos.y - oldPos.y;
  
    e.target.style.transform = `translate(${difX}px, ${difY}px)`;
  }
};

const up = (e) => {
  e.preventDefault();
  
  let pos = {
    x: e.pageX,
    y: e.pageY
  };

  // search through slots to find one closest to 
  // where item was dropped;
  
  movingItem = null;
};

let items = document.querySelectorAll('.item');
for (let item of items) {
    item.ontouchstart = down;
    item.ontouchmove = move;
    item.ontouchend = up;

    item.onmousedown = down;
    item.onmousemove = move;
    item.onmouseup = up;
}

document.getElementById('reset').onclick = () => {
    for (let item of items) {
        item.classList.add('reset');
        item.style.transform = 'initial';
    }
};
