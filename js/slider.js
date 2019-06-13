$(document).ready(()=> {

    const imageRow1 = $('#row1');
    const imageRow2 = $('#row2').find('.imageRow');

    //slide left
    $('#arrowLeft').on('click', () => {
        
        //row1 adding animation
        imageRow1.find('img').addClass('slideLeft');
        setTimeout(() => {
            imageRow1.find('img').removeClass('slideLeft');
        }, 500);

        //row 2 adding animation
        imageRow2.find('img').addClass('slideLeft');
        setTimeout(() => {
            imageRow2.find('img').removeClass('slideLeft');
        }, 500);

        //row1 looping images
        let imgArray1 = imageRow1.find('img').toArray();
        let add1 = imgArray1[0];
        imageRow1.append(add1);

        //row 2 looping images
        let imgArray2 = imageRow2.find('img').toArray();
        let add2 = imgArray2[0];
        imageRow2.append(add2);
        }
    );

    //slide right
    $('#arrowRight').on('click', () => {

        //row 1 adding animation
        imageRow1.find('img').addClass('slideRight');
        setTimeout(() => {
            imageRow1.find('img').removeClass('slideRight');
        }, 500);

        //row 2 adding animation
        imageRow2.find('img').addClass('slideRight'); 
        setTimeout(() => {
            imageRow2.find('img').removeClass('slideRight');
        }, 500); 

        //row 1 looping trough images
        let imgArray1 = imageRow1.find('img').toArray();
        let add1 = imgArray1.pop();
        imageRow1.prepend(add1);

        //row 2 looping trough images
        let imgArray2 = imageRow2.find('img').toArray();
        let add2 = imgArray2.pop();
        imageRow2.prepend(add2);
    });
});