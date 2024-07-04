var p5div = document.querySelector('#p5sketch');
var w, h;

var p5sketch = (p5) => {
  p5.setup = () => {
    w = p5div.clientWidth;
    h = p5div.clientHeight;
    p5.createCanvas(w, h);
  };
  
  p5.windowResized = () => {
    w = p5div.clientWidth;
    h = p5div.clientHeight; 
    p5.resizeCanvas(w, h);
  }

  var comb = [
    [
      {x:0.5, y:0}, 
      {x:0, y:0.5}, 
      {x:1, y:0.5}, 
      {x:0.5, y:1},
      {x:0.5, y:0.5}
    ],
    [
      {x:0.5,y:0},
      {x:0.5,y:1},
    ],
    [
      {x:0.5,y:0},
      {x:0.5,y:1},
      {x:0.5,y:0.5}
    ],
    [
      {y:0.5,x:0},
      {y:0.5,x:1},
    ],
    [
      {y:0.5,x:0},
      {y:0.5,x:1},
      {y:0.5,x:0.5}
    ],
    [
      {x:0,y:0},
      {x:1,y:0},
      {x:0,y:1},
      {x:1,y:1}
    ],
    [
      {x:0,y:0},
      {x:1,y:0},
      {x:0,y:1},
      {x:1,y:1},
      {x:0.5,y:0.5}
    ],
    [
      {x:0,y:0},
      {x:0,y:0.5},
      {x:0,y:1},
    ],
    [
      {x:1,y:0},
      {x:1,y:0.5},
      {x:1,y:1},
    ],
    [
      {y:0,x:0},
      {y:0,x:0.5},
      {y:0,x:1},
    ],
    [
      {y:1,x:0},
      {y:1,x:0.5},
      {y:1,x:1},
    ],
    [
      {x:0.75, y:0}, 
      {x:0, y:0.75}, 
      {x:1, y:0.75}, 
      {x:0.75, y:1},
      {x:0.75, y:0.75}
    ],
    [
      {x:0.25, y:0}, 
      {x:0, y:0.25}, 
      {x:1, y:0.25}, 
      {x:0.25, y:1},
      {x:0.25, y:0.25}
    ],
    [
      {x:0.75, y:0}, 
      {x:0, y:0.25}, 
      {x:1, y:0.25}, 
      {x:0.75, y:1},
      {x:0.75, y:0.25}
    ],
    [
      {x:0.25, y:0}, 
      {x:0, y:0.75}, 
      {x:1, y:0.75}, 
      {x:0.25, y:1},
      {x:0.25, y:0.75}
    ]
  ];
  var pos = p5.random(comb);
  var rnd = p5.random();
  var t = 0, t0 = 1;
  var step = p5.floor(p5.random()*15)+4;
  
  p5.draw = () => {
    p5.clear();
    p5.noFill();
    p5.stroke('black');
  
    let fc = p5.frameCount;
    for(p of pos) {
      for(let i = 0; i < 50; i++) {
        let t1 = p5.sin(i/30*rnd+t)*1.2;
        p5.strokeWeight(t1*0.8);

        t += 0.0001;
        if(fc%100 == 0) {
          t0 += 0.1;
          rnd = p5.random();
          step = p5.floor(p5.random()*15)+4;
        }

        if(fc%200 == 0) {
          pos = p5.random(comb);
        }
        
        p5.ellipse(
          w*p.x,
          h*p.y, 
          (100-i)*step, 
          i*step
        );
      }
    }
  }
}

var p5inst = new p5(p5sketch, p5div);