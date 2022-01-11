//replace names

spiderman_name = /Spiderman/g
replace_name = 'alskdjlasdoqejwqio'

//iterate through html
allElements = $('body').children();

//get all text/html
allElements.each(function() {
    //get current text on page
    allText = $(this).html()

    //replace text
    newText = allText.replace(spiderman_name,replace_name)

    //update with new text
    $(this).html(newText)
});