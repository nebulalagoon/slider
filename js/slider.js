$(document).ready(()=> {
    //variables

    const $imageRow1 = $('#row1');
    const $imageRow2 = $('#row2').find('.imageRow');

    //slide left
    $('#arrowLeft').on('click', () => {
        const widthRow1 = $imageRow1.find('.first').innerWidth();
        const widthRow2 = $imageRow2.find('.first').innerWidth();
   
        const $imageArray1 = $imageRow1.find('img').toArray();
        const $imageArray2 = $imageRow2.find('img').toArray();

        moveLeft($imageRow1.find('img'), widthRow1);
        moveLeft($imageRow2.find('img'), widthRow2);

        /*this should work but it doesn't
        for (let i=$imageRow1.find('img').length-1; i>0; i--) {
            moveLeft($imageRow1.find('img')[i], $imageRow1.find('img')[i].clientWidth); => NotSupportedError: Animation to or from an underlying value is not yet supported.
        }*/

        //row 1 move first element to end
        $imageRow1.append($imageArray1[0]);
        //moveLeft($imageRow1.find('img').last(), widthRow2);

        //row 2 move first element to end
        $imageRow2.append($imageArray2[0]);

        moveClassFirst($imageRow1);
        moveClassFirst($imageRow2);

        moveClassLast($imageRow1);
        moveClassLast($imageRow1);
        
        });

    //slide right
    $('#arrowRight').on('click', () => {
        const widthRow1 = $imageRow1.find('.last').innerWidth();
        const widthRow2 = $imageRow2.find('.last').innerWidth();
     
        const $imageArray1 = $imageRow1.find('img').toArray();
        const $imageArray2 = $imageRow2.find('img').toArray();

        moveRight($imageRow1.find('img'), widthRow1);
        moveRight($imageRow2.find('img'), widthRow2);

        //row 1 move first element to end
        $imageRow1.prepend($imageArray1[$imageArray1.length - 1]);

        //row 2 move first element to end
        $imageRow2.prepend($imageArray2[$imageArray2.length - 1]);

        moveClassFirst($imageRow1);
        moveClassFirst($imageRow2);

        moveClassLast($imageRow1);
        moveClassLast($imageRow1);
    });
});

//helper functions

function moveLeft (element, distance) {
    console.log('moving left');
    element.animate({'right': distance + 'px'}); //just moves more and more to the left if += is used
}

function moveRight (element, distance) {
    element.animate({'right': distance + 'px'});
}

function moveClassFirst (row) {
    row.find('.first').removeClass('first');
    row.find('img').first().addClass('first');
}

function moveClassLast (row) {
    row.find('.last').removeClass('last');
    row.find('img').last().addClass('last');
}