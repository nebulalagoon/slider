$(document).ready(()=> {

    const imageRow1 = $('#row1');
    const imageRow2 = $('#row2').find('.imageRow');

    //slide left
    $('#arrowLeft').on('click', () => {
        //looping images
        let imgArray1 = imageRow1.find('img').toArray();
        let add1 = imgArray1[0];
        imageRow1.append(add1);

        let imgArray2 = imageRow2.find('img').toArray();
        let add2 = imgArray2[0]
        imageRow2.append(add2);

        //shift the active class
        imageRow1.find('.active').removeClass('active');
        imageRow1.find('img').last().addClass('active');

        imageRow2.find('.active').removeClass('active');
        imageRow2.find('img').last().addClass('active');

        //animation
        /*let widthRow1 = imageRow1.find('.active').innerWidth();
        let toRow1={'right': '+=' + widthRow1 + 'px'};
        imageRow1.find('img').animate(toRow1);

        let widthRow2 = imageRow2.find('.active').innerWidth();
        let toRow2={'right': '+=' + widthRow2 + 'px'};
        imageRow2.find('img').animate(toRow2);*/
        
        }
    );

    //slide right
    $('#arrowRight').on('click', () => {

        //looping trough images
        let imgArray1 = imageRow1.find('img').toArray();
        let add1 = imgArray1.pop();
        imageRow1.prepend(add1);

        let imgArray2 = imageRow2.find('img').toArray();
        let add2 = imgArray2.pop();
        imageRow2.prepend(add2);

        
        //shift the active class
        imageRow1.find('.active').removeClass('active');
        imageRow1.find('img').last().addClass('active');

        imageRow2.find('.active').removeClass('active');
        imageRow2.find('img').last().addClass('active');
        
        //animation
        /*let widthRow1 = imageRow1.find('.active').innerWidth();
        let toRow1={'right': '-=' + widthRow1 + 'px'};
        imageRow1.find('img').animate(toRow1);

        let widthRow2 = imageRow2.find('.active').innerWidth();
        let toRow2={'right': '-=' + widthRow2 + 'px'};
        imageRow2.find('img').animate(toRow2);*/
        
    });
});