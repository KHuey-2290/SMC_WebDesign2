// Autocomplete Widget
$( function() {
    var availableTags = [
        "ActionScript",
        "AppleScript",
        "Asp",
        "BASIC",
        "C",
        "C++",
        "Clojure",
        "COBOL",
        "ColdFusion",
        "Erlang",
        "Fortran",
        "Groovy",
        "Haskell",
        "Java",
        "JavaScript",
        "Lisp",
        "Perl",
        "PHP",
        "Python",
        "Ruby",
        "Scala",
        "Scheme"
    ];

    $( "#choices" ).autocomplete({
        source: availableTags
    });
} );

// accordion widget
$( function() {
    $( "#accordionWidget" ).accordion({
        heightStyle: "content",
        collapsible: true
    });
} );