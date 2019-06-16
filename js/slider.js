$(document).ready(()=> {

    const imageRow1 = $('#row1');
    const imageRow2 = $('#row2').find('.imageRow');

    //slide left
    $('#arrowLeft').on('click', () => {

        //row1
        let widthRow1 = imageRow1.find('.first').innerWidth();
        let imgArray1 = imageRow1.find('img').toArray();

        imageRow1.append(imgArray1[0]);
        imageRow1.find('img').last().css('right', '-' + widthRow1 + 'px');
        
        moveLeft(imageRow1.find('img').last(), widthRow1);
        
        moveClassFirst(imageRow1);
        moveClassLast(imageRow1);

        //row 2
        let widthRow2 = imageRow2.find('.first').innerWidth();
        let imgArray2 = imageRow2.find('img').toArray();
        let add2 = imgArray2[0];

        imageRow2.append(add2);
        imageRow2.find('img').last().css('right', '-' + widthRow2 + 'px');


        moveLeft(imageRow2.find('img').last(), widthRow2);

        moveClassFirst(imageRow2);
        moveClassLast(imageRow2);
        }
    );

    //slide right
    $('#arrowRight').on('click', () => {

        //row 1
        let imgArray1 = imageRow1.find('img').toArray();
        let widthRow1 = imageRow1.find('.last').innerWidth();

        let add1 = imgArray1.pop();
        imageRow1.prepend(add1);

        imageRow1.find('img').first().css('right', widthRow1 + 'px');

        moveRight(imageRow1.find('img').last(), widthRow1);
        
        moveClassFirst(imageRow1);
        moveClassLast(imageRow1);

        //row 2
        let imgArray2 = imageRow2.find('img').toArray();
        let widthRow2 = imageRow2.find('.last').innerWidth();

        let add2 = imgArray2.pop();
        imageRow2.prepend(add2);

        imageRow2.find('img').last().css('right', widthRow2 + 'px');
        moveRight(imageRow2.find('img').last(), widthRow2);

        moveClassFirst(imageRow2);
        moveClassLast(imageRow2);
    });
});

//helper functions

function moveLeft (element, distance) {
    element.animate({'right': '+=' + distance + 'px'});
}

function moveRight (element, distance) {
    element.animate({'right': '-=' + distance + 'px'});
}

function moveClassFirst (row) {
    row.find('.first').removeClass('first');
    row.find('img').first().addClass('first');
}

function moveClassLast (row) {
    row.find('.last').removeClass('last');
    row.find('img').last().addClass('last');
}