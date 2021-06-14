let images = document.querySelectorAll('.image');

for(let image of images) {
    image.onmousedown = function (event) {
        let shiftX = event.clientX - image.getBoundingClientRect().left;
        let shiftY = event.clientY - image.getBoundingClientRect().top;
        image.style.position = 'absolute';
        image.style.zIndex = '999';
        document.body.append(image);
        this.style.cursor = 'grabbing';
        moveAt(event.pageX, event.pageY);
    
        function moveAt(pageX, pageY) {
            image.style.left = pageX - shiftX + 'px';
            image.style.top = pageY - shiftY + 'px';
        }

        function mouseMove(event) {
            moveAt(event.pageX, event.pageY);
        }

        document.addEventListener('mousemove', mouseMove);
    
        image.onmouseup = function () {
            document.removeEventListener('mousemove', mouseMove);
            image.onmouseup = undefined;
            this.style.cursor = 'default';
        };
    };    

    image.ondragstart = function () {
        return false;
    };
}


