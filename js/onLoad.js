/* Button Switch para mudar o tema */
(function() {
    $(document).ready(function() {
        $('#switchButton').on('change', function() {
            var isChecked = $(this).is(':checked');
            localStorage.setItem("theme",isChecked);
             
            var theme = localStorage.getItem("theme")
            //console.log(theme)
            
            //console.log(localStorage)
            //console.log('isChecked: ' + isChecked); 
            if (isChecked) {
                //console.log(theme)
                //console.log("Light")                
                document.getElementById("css-sheet").setAttribute("href", "./css/myDarkStyle.css")
            } else if (!isChecked) {
                //console.log(theme)
                //console.log("Dark")
                document.getElementById("css-sheet").setAttribute("href", "./css/myLightStyle.css")
                    }
            });
        });
    })();

function getTheme() {
    var theme = localStorage.getItem("theme")

    if (theme == "true") {
        //console.log(theme)
        //console.log("Light")    
        document.getElementById("switchButton").checked = true;
        document.getElementById("css-sheet").setAttribute("href", "./css/myDarkStyle.css")
    } else if (theme == "false") {
        //console.log(theme)
        //console.log("Dark")
        document.getElementById("css-sheet").setAttribute("href", "./css/myLightStyle.css")
            }
}

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    
    if (document.body.scrollTop > 170 || document.documentElement.scrollTop > 170) {
        document.getElementById("btnReturn").style.visibility = "visible"
    } else {
        document.getElementById("btnReturn").style.visibility = "hidden"
        document.getElementById("btnReturn").style.transition = "1.5s"
    }    
  }

function returnToTop() {

    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
    document.documentElement.scrollTop

}
