$(document).ready(()=> {
    //variables

    const $imageRow1 = $('#row1');
    const $imageRow2 = $('#row2').find('.imageRow');

    const viewportWidth = $(window).width();

    //images initial setup (load images)
    
    let position0Row1 = viewportWidth - ($("#description").offset().left - 20);
        
    for (let i=$imageRow1.find('img').length-1; i>=0; i--) {
        moveLeft($imageRow1.find('img')[i], position0Row1); 
        position0Row1 += ($imageRow1.find('img')[i].clientWidth + 10);
    };

    let position0Row2 = viewportWidth - ($("#description").offset().left - 180);
        
    for (let i=$imageRow2.find('img').length-1; i>=0; i--) {
        moveLeft($imageRow2.find('img')[i], position0Row2); 
        position0Row2 += ($imageRow2.find('img')[i].clientWidth + 10);
    };

    //slide left
    $('#arrowLeft').on('click', () => {
        const widthRow1 = $imageRow1.find('img').first().innerWidth();
        const widthRow2 = $imageRow2.find('img').first().innerWidth();
   
        const imageArray1 = $imageRow1.find('img').toArray();
        const imageArray2 = $imageRow2.find('img').toArray();

        //slide row 1
        let position1 = widthRow1 + (viewportWidth - ($("#description").offset().left - 30));
        
        for (let i=$imageRow1.find('img').length-1; i>0; i--) {
            moveLeft($imageRow1.find('img')[i], position1); 
            position1 += ($imageRow1.find('img')[i].clientWidth + 10);
        }

        //slide row 2
        let position2 = widthRow2 + (viewportWidth - ($("#description").offset().left - 190));
        
        for (let i=$imageRow2.find('img').length-1; i>0; i--) {
            moveLeft($imageRow2.find('img')[i], position2); 
            position2 += ($imageRow2.find('img')[i].clientWidth + 10);
        }

        //row 1 move first element to end
        $imageRow1.append(imageArray1[0]); //leftmost element
        $imageRow1.find('img').last().css('z-index', '-10');
        moveLeft($imageRow1.find('img').last(), viewportWidth - ($("#description").offset().left - 20)); //move it all the way to the right
        setTimeout(() => {$imageRow1.find('img').last().css('z-index', '10')}, 500);

        //row 2 move first element to end
        $imageRow2.append(imageArray2[0]);
        $imageRow2.find('img').last().css('z-index', '-10');
        moveLeft($imageRow2.find('img').last(), (viewportWidth - ($("#description").offset().left - 180)));
        setTimeout(() => {$imageRow2.find('img').last().css('z-index', '10')}, 500);        
        });

    //slide right
    jQuery('#arrowRight').on('click', () => {
        const widthRow1 = $imageRow1.find('img').last().innerWidth();
        const widthRow2 = $imageRow2.find('img').last().innerWidth();
     
        const imageArray1 = $imageRow1.find('img').toArray();
        const imageArray2 = $imageRow2.find('img').toArray();

        let position1 = viewportWidth - ($("#description").offset().left - 30);

        for (let i=0; i<$imageRow1.find('img').length; i++) {
            position1 += $imageRow1.find('img')[i].clientWidth + 10;
        }

        let position2 = viewportWidth - ($("#description").offset().left - 190);

        for (let i=0; i<$imageRow2.find('img').length; i++) {
            position2 += $imageRow2.find('img')[i].clientWidth + 10;
        }

        //row 1 move last element to beginning
        $imageRow1.prepend(imageArray1[imageArray1.length - 1]); //last element
        $imageRow1.find('img').first().css('z-index', '-10');
        moveRight($imageRow1.find('img').first(), position1-(widthRow1+10)); //move it all the way to the left
        setTimeout(() => {$imageRow1.find('img').first().css('z-index', '10')}, 500);

        //row 2 move last element to beginning
        $imageRow2.prepend(imageArray2[imageArray2.length - 1]); //last element
        $imageRow2.find('img').first().css('z-index', '-10');
        moveRight($imageRow2.find('img').first(), position2-(widthRow2+10)); //move it all the way to the left
        setTimeout(() => {$imageRow2.find('img').first().css('z-index', '10')}, 500);

        //slide row 1
        for (let i=0; i<$imageRow1.find('img').length; i++) {
            position1 -= ($imageRow1.find('img')[i].clientWidth + 10);
            moveRight($imageRow1.find('img')[i], position1); 

        }

        //slide row 2
        for (let i=0; i<$imageRow2.find('img').length; i++) {
            position2 -= ($imageRow2.find('img')[i].clientWidth + 10);
            moveRight($imageRow2.find('img')[i], position2); 

        }
    });
});

//helper functions

function moveLeft (element, distance) {
    $(element).animate({'right': distance + 'px'});
}

function moveRight (element, distance) {
    $(element).animate({'right': distance + 'px'});
}
