$(document).ready(function() {
    console.log('document firing...');

    //--Friend arr for the accusin' --//
    var fiends = ['Finch', 'Dom', 'Big Squat', 'Lazy Susan', 'John'];
    //--Killing Tools---//
    var weapons = ['piano wire', 'grubby mitts', 'ottoman', 'railgun', 'bassoon', 'signed first edition of The Joy Luck Club', 'pipe wrench', 'fireball', 'candlestick', 'the power of words', 'Sig 1911 STX', 'Coach bag filled with ferrets', 'kindness', 'Van Halen 1980 tour tee', 'Photograph by Nickelback', 'wet seabass' , 'dry seabass', 'false teeth', 'squirt gun', 'six pack of Bumblebee Tuna'];
    //---Locaations--//
    var locales = ['the YMCA steamroom', 'Shu Shop', 'the Kenny Chesney concert mosh pit', 'the Upside Down', 'a very tall tree', 'a very rude manner', 'Legoland', 'the parlour', 'space', 'the Youtube comments'];

    //----Create for loop to iterate 100 times---//

    for (var i = 1; i <= 100; i++) {
        //---Accu h3 to append to container div ----//
        var $accuseH3 = $('<h3>Accusation ' + i + '</h3>');
        $($accuseH3).appendTo('.container');
        //-- On click call alertClick, runs and returns accuse function ('cause we all want closure')//
        $($accuseH3).click(alertClick(i));
    };

    function alertClick(i) {
        //-- Set variables for ind. friend with mod ---//
        var fiend = fiends[i % 5];
        var weapon = weapons[i % 20];
        var locale = locales[i % 10];

        //---Function to create the alert ----//
        function accuse() {
            alert('Accusation ' + i + ': I accuse ' + fiend + ' with the ' + weapon + ' in ' + locale + '!');
        }
        return accuse;
    };
});

