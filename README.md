# characters-count
simple jquery-based plugin for counting characters in an HTML input element
# BASIC USAGE
include .js and .css in your web page, initialise the CharsCount object as follow:


 $(document).ready(function(){   
   $('#yourInputID').CharsCount();      
 });  

With these few lines you will add count and limit functionality to your <input> element (input, textarea, ...) with default values and css styles.
# Options
-- MaxLength: (number) sets the maximum characters allowed.

-- WarningLevel: (number) sets the number of characters after which the plugin turns text color to orange. Defaults to MaxLength / 5.

-- Target: (string) id of the element that will contains the plugin output.

-- PreventOverflow: (boolean) if true input content will be truncated at a length equal to MaxLength, otherwise input length can be larger than MaxLength. Defaults to true.

-- CssClass: (string) base css class. Defaults to black normal text.

-- CssAlertClass: (string) css class used to display that content has reached MaxLength. Defaults to red bold text.

-- CssWarningClass: (string) css class used to display that content has reached WarningLevel. Defaults to orange normal text.

# Advanced usage


  $(document).ready(function(){  
    $('#yourInputID').CharsCount({  
        MaxLength: 50,  
        WarningLevel: 20,  
        Target: "yourTargetElementID",  
        CssClass: "yourCssBaseClass",  
        CssWarningClass: "yourCssWarningClass",  
        CssAlertClass: "yourCssAlertClass"  
    });  
  });  

