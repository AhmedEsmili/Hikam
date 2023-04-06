document.addEventListener("DOMContentLoaded", function () {
  var quotes = [
    {
      text: "مَنْ عَرَفَ نَفْسَهُ عَرَفَ الحَق، وَمَنْ عَرَفَ الحَقَّ مَا عَرَفَ  نَفَسَهُ",
    },
    {
      text: "غَارَ عَلَيْكَ أَكَثَرَ مِنْ نَفْسِك، فَأَيُّ مَحَبَّةٍ أَعْظَمُ مِنْ ذَلِك",
    },
    {
      text: "مَنْ عَرَفَ نَفْسَهُ عَرَفَ الحَق، وَمَنْ عَرَفَ الحَقَّ مَا عَرَفَ  نَفَسَهُ",
    },
    {
      text: "غَارَ عَلَيْكَ أَكَثَرَ مِنْ نَفْسِك، فَأَيُّ مَحَبَّةٍ أَعْظَمُ مِنْ ذَلِك",
    },
  ];

  var quoteIndex = 0;
  var quoteElement = document.querySelector(".quote-text");
  var buttonElement = document.querySelector(".next-quote");

  buttonElement.addEventListener("click", function () {
    // Increment the quoteIndex variable
    quoteIndex++;

    // If we've gone through all the quotes, start over from the beginning
    if (quoteIndex === quotes.length) {
      quoteIndex = 0;
    }

    // Add the "show" class to the quote element to trigger the transition
    quoteElement.classList.remove("show");
    setTimeout(function () {
      // Update the text of the quote element
      quoteElement.textContent = quotes[quoteIndex].text;
      // Remove the "show" class to trigger the transition again on the next click
      quoteElement.classList.add("show");
    }, 500); // Wait for 500ms (the duration of the transition) before updating the text and triggering the transition again
  });
});
