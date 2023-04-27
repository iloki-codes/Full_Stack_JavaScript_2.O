$( document.body ).click(function() {
    alert('Hi I am bound to the body!');
});

$( '#bar' ).click(function(e) {
    alert('I am the span and I do prevent propagation');
    e.stopPropagation();
});

$( '#yay' ).click(function() {
    $('span').each(function(i, elem) {
        var events        = jQuery._data(elem).events,
            oldHandler    = [ ],
            $elem         = $( elem );

        if( 'click' in events ) {                        
            [].forEach.call( events.click, function( click ) {
                oldHandler.push( click.handler );
            });

            $elem.off( 'click' );
        }

        if( oldHandler.length ) {
            oldHandler.forEach(function( handler ) {
                $elem.bind( 'click', (function( h ) {
                    return function() {
                        h.apply( this, [{stopPropagation: $.noop}] );
                    };
                }( handler )));
            });
        }
    });

    this.disabled = 1;
    return false;
});