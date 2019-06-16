$(document).ready(()=> {

    const imageRow1 = $('#row1');
    const imageRow2 = $('#row2').find('.imageRow');

    //slide left
    $('#arrowLeft').on('click', () => {
        
        });

    //slide right
    $('#arrowRight').on('click', () => {
        
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