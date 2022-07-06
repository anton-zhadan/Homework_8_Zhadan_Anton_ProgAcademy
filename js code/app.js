let elem = document.getElementById('mainButton');

elem.style.borderColor = 'yellow';
elem.style.background = 'red';
elem.style.borderStyle = 'dotted';
elem.style.borderRadius = '20px';

let drawCircles = document.querySelector('input');



let difColor = () => { return `hsl(${Math.floor(Math.random()*360)}, 50%, 50%)`; }

    

drawCircles.onclick = function() {
    let diametr = document.createElement('input');
            
    diametr.setAttribute('type', 'text');
        diametr.placeholder = 'Введіть бажаний діаметр кіл';
        diametr.style.marginLeft = '100px';
        diametr.style.borderColor = 'red';
        diametr.style.borderRadius = '20px';
        diametr.style.borderStyle = 'dotted'
        diametr.style.textAlign = 'center';
        diametr.style.width = '20%';
        diametr.style.height = '30px';
        diametr.style.background = 'yellow';

        drawCircles.after(diametr);
            
    let paint = document.createElement('input');
        paint.setAttribute('type', 'button'); 
        paint.setAttribute('value', 'Намалювати кола');
        paint.style.marginLeft = '100px';
        paint.style.borderColor = 'red';
        paint.style.borderRadius = '20px';
         
        diametr.after(paint);
                
            
        paint.onclick = function () {
            document.body.innerHTML = '';
                    
            for (let i=0; i < 100; i++) {
                let circle = document.createElement ('div');
                    circle.style.width = diametr.value + 'px';
                    circle.style.height = diametr.value + 'px';
                    circle.style.backgroundColor = difColor();
                    circle.style.borderRadius = '50%';
                    circle.style.display = 'inline-block';

                    document.body.append(circle);
                }
                    
            let [...circles] = document.querySelectorAll ('div');
                    for(let i = 0; i < circles.length; i++) {
                            circles[i].onclick = () => {
                            circles[i].style.display = 'none';
                        }
                }
        }
            
}