$(document).ready(()=> {

    //loading images - this should be done with an ajax request on the server
    const imgNum = 9; //number of images

    for (let i = 1; i<=(imgNum/2 + 1); i++) { //row 1 load images
        $('#row1').append(`<img src="Assets/slider-images/slider-image-${i}.jpg" style="position: absolute"/>`); 
    }

    for (let i = Math.floor(imgNum/2 + 2); i<=imgNum; i++) { //row 2 load images
        $('#row2').append(`<img src="Assets/slider-images/slider-image-${i}.jpg" style="position: absolute"/>`); 
    }

    //variables

    const $imageRow1 = $('#row1');
    const $imageRow2 = $('#row2');

    const viewportWidth = $(window).width();

    //images initial positioning
   
    setTimeout(() => {
        let position0Row1 = viewportWidth - ($("#description").offset().left - 20);
        
        for (let i=$imageRow1.find('img').length-1; i>=0; i--) {
            moveImage($imageRow1.find('img')[i], position0Row1); 
            position0Row1 += ($imageRow1.find('img')[i].clientWidth + 10);
        };

        let position0Row2 = viewportWidth - ($("#description").offset().left - 180);
        
        for (let i=$imageRow2.find('img').length-1; i>=0; i--) {
            moveImage($imageRow2.find('img')[i], position0Row2); 
            position0Row2 += ($imageRow2.find('img')[i].clientWidth + 10);
        };
    }, 100);

    //slide left
    $('#arrowLeft').on('click', () => {
        const widthRow1 = $imageRow1.find('img').first().innerWidth();
        const widthRow2 = $imageRow2.find('img').first().innerWidth();
   
        const imageArray1 = $imageRow1.find('img').toArray();
        const imageArray2 = $imageRow2.find('img').toArray();


        //slide row 1
        $imageRow1.find('img').css('position', 'absolute');
        let position1 = widthRow1 + (viewportWidth - ($("#description").offset().left - 30));
        
        for (let i=$imageRow1.find('img').length-1; i>0; i--) {  
            moveImage($imageRow1.find('img')[i], position1); 
            position1 += ($imageRow1.find('img')[i].clientWidth + 10);
        }

        //slide row 2
        $imageRow2.find('img').css('position', 'absolute');
        let position2 = widthRow2 + (viewportWidth - ($("#description").offset().left - 190));
        
        for (let i=$imageRow2.find('img').length-1; i>0; i--) {
            moveImage($imageRow2.find('img')[i], position2); 
            position2 += ($imageRow2.find('img')[i].clientWidth + 10);
        }

        //row 1 move first element to end
        $imageRow1.append(imageArray1[0]); //leftmost element
        $imageRow1.find('img').last().css('right', (viewportWidth - $("#description").offset().left - widthRow1 - 20) + 'px'); //move it all the way to the right
        moveImage($imageRow1.find('img').last(), viewportWidth - ($("#description").offset().left - 20)); //slide into position

        //row 2 move first element to end
        $imageRow2.append(imageArray2[0]);
        $imageRow2.find('img').last().css('right', (viewportWidth - $("#description").offset().left - widthRow2 - 20) + 'px');
        moveImage($imageRow2.find('img').last(), (viewportWidth - ($("#description").offset().left - 180)));      
        });

    //slide right
    jQuery('#arrowRight').on('click', () => {
        const widthRow1 = $imageRow1.find('img').last().innerWidth();
        const widthRow2 = $imageRow2.find('img').last().innerWidth();
     
        const imageArray1 = $imageRow1.find('img').toArray();
        const imageArray2 = $imageRow2.find('img').toArray();

        //slide row1
        $imageRow1.find('img').css('position', 'absolute');
        let position1 = viewportWidth - ($("#description").offset().left - 30);

        for (let i=0; i<$imageRow1.find('img').length; i++) {
            position1 += $imageRow1.find('img')[i].clientWidth + 10;
        }

        //slide Row2
        $imageRow2.find('img').css('position', 'absolute');
        let position2 = viewportWidth - ($("#description").offset().left - 190);

        for (let i=0; i<$imageRow2.find('img').length; i++) {
            position2 += $imageRow2.find('img')[i].clientWidth + 10;
        }

        //row 1 move last element to beginning
        $imageRow1.prepend(imageArray1[imageArray1.length - 1]); //last element
        moveImage($imageRow1.find('img').first(), (viewportWidth - $("#description").offset().left - widthRow1 - 20)); //slide image out of frame
        $imageRow1.find('img').first().fadeOut(10);
        $imageRow1.find('img').first().css('right', position1-(widthRow1+10) + 'px'); //move it all the way to the left
        setTimeout(() => {$imageRow1.find('img').first().fadeIn(10)}, 1);

        //row 2 move last element to beginning
        $imageRow2.prepend(imageArray2[imageArray2.length - 1]); //last element
        moveImage($imageRow2.find('img').first(), (viewportWidth - $("#description").offset().left - widthRow2 - 20)); //slide image out of frame
        $imageRow2.find('img').first().fadeOut(10);
        $imageRow2.find('img').first().css('right', position2-(widthRow2+10) + 'px'); //move it all the way to the left
        setTimeout(() => {$imageRow2.find('img').first().fadeIn(10)}, 1);

        //slide row 1
        for (let i=0; i<$imageRow1.find('img').length; i++) {
            position1 -= ($imageRow1.find('img')[i].clientWidth + 10);
            moveImage($imageRow1.find('img')[i], position1); 

        }

        //slide row 2
        for (let i=0; i<$imageRow2.find('img').length; i++) {
            position2 -= ($imageRow2.find('img')[i].clientWidth + 10);
            moveImage($imageRow2.find('img')[i], position2); 

        }
    });
});

//helper functions

function moveImage (element, distance) {
    $(element).animate({'right': distance + 'px'});
}
