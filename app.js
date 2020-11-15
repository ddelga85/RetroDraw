const PALETTE = [
    'red',
    'blue',
    'yellow',
    'green',
    'orange',
    'black',
    'white'
]

let makeGrid = function(){
    for(let i=0; i<64; i++){
   $('.grid').append('<div class="cell"></div>')
    }
}

let makePalette = function (){
    for(let i=0; i<PALETTE.length; i++){      
        const nextButton = $('<button>');
        const nextColor = PALETTE[i];
        nextButton.css('background-color', ''+ nextColor);         
        $('.palette').append(nextButton);
        $('.palette button').first().addClass('active');    
    }
}


let onPaletteClick = function (){
    $('.active').removeClass('active');
    $(this).toggleClass('active');
}
let onGridClick = function (){
    let activeColor = $('.active').css('background-color');
    if($(this).css('background-color') === activeColor){
        $(this).css('background-color', 'rgba(0, 0, 0, 0)')
    }else {
        $(this).css('background-color', '' + activeColor);
    }
       
}
let onClearClick = function (){
    $('.grid .cell').css('background-color', '');
}
let onFillAllClick = function (){
    let fillColor = $('.active').css('background-color');
    $('.grid .cell').css('background-color', ''+ fillColor)
}
let onFillEmptyClick = function (){
    const elements = $('.grid .cell');
    let fillColor = $('.active').css('background-color');
    for(let i=0; i<elements.length; i++){
        let nextElement = $(elements[i]);
        if(nextElement.css('background-color') === 'rgba(0, 0, 0, 0)'){
            nextElement.css('background-color', fillColor);
        }
    }
}

$('.task-input button').click(function(){
    const userColor = $('input').val();
    PALETTE.unshift(userColor);
    $('.palette button').remove();
    makePalette();
    $('.palette button').click(onPaletteClick); 
    $('input').val('');  
}) 


makeGrid();
makePalette();
$('.palette button').click(onPaletteClick);
$('.grid .cell').click(onGridClick);
$('.controls .clear').click(onClearClick);
$('.controls .fill-all').click(onFillAllClick);
$('.controls .fill-empty').click(onFillEmptyClick);
