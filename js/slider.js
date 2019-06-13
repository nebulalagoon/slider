$(document).ready(()=> {

    const imageRow1 = $('#row1');
    const imageRow2 = $('#row2').find('.imageRow');

    //slide left
    $('#arrowLeft').on('click', () => {
        let widthRow1 = imageRow1.find('.active').innerWidth();
        let toRow1={'right': '+=' + widthRow1 + 'px'};
        imageRow1.find('img').animate(toRow1);

        let widthRow2 = imageRow2.find('.active').innerWidth();
        let toRow2={'right': '+=' + widthRow2 + 'px'};
        imageRow2.find('img').animate(toRow2);

        }
    );

    //slide right
    $('#arrowRight').on('click', () => {
        let widthRow1 = imageRow1.find('.active').innerWidth();
        let toRow1={'right': '-=' + widthRow1 + 'px'};
        imageRow1.find('img').animate(toRow1);

        let widthRow2 = imageRow2.find('.active').innerWidth();
        let toRow2={'right': '-=' + widthRow2 + 'px'};
        imageRow2.find('img').animate(toRow2);

        }
    );
});