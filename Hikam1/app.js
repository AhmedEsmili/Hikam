document.addEventListener("DOMContentLoaded", function () {
  var quotes = [
    {
      text: "مَنْ عَرَفَ نَفْسَهُ عَرَفَ الحَق، وَمَنْ عَرَفَ الحَقَّ مَا عَرَفَ  نَفَسَهُ",
    },
    {
      text: "غَارَ عَلَيْكَ أَكَثَرَ مِنْ نَفْسِك، فَأَيُّ مَحَبَّةٍ أَعْظَمُ مِنْ ذَلِك",
    },
    {
      text: "مَنْ تَحَقَّقَ مِنْ مَوْتِه  عَاشَ لِغَيْرِه",
    },
    {
      text: "مِنْ عَلَامَةِ مَغْفِرَتِه لِلذَّنْب أَنْ يَجْعَلَهُ لَكَ بَابَ عِلْم وَتَوْبَة وَمَجْلَى مَعْرِفَة وَأَوْبَة",
    },
    {
      text: "بَيْنَ بَطْنِك وَبَاطِنِك أَلْفَ رَمَضَان",
    },
    {
      text: "نَاجِيه لَا لِيُعْطِيك ولَا لِيُنْجِيك، وَلَكِن لِأَنَّه يُحِبّ أَنْ يَسْمَعَ صَوْتَ عُبُودِيَتِك",
    },
    {
      text: "إِبْحَث فِي قَلْبِك عَنْ نُورِه وَابْحَث فِي نُورِه عَـنْ فُؤَادِك وَابْحَث فِي فُؤَادِك عَنْ سِرِّه وَابْحَثْ فِي سِرِّه عَنْ حَقِيقَتِك",
    },
  ];

  var quoteElement = document.querySelector(".quote-text");
  var buttonElement = document.querySelector(".next-quote");

  buttonElement.addEventListener("click", function () {
    // Generate a random index within the range of the quotes array
    var quoteIndex = Math.floor(Math.random() * quotes.length);

    // Add the "show" class to the quote element to trigger the transition
    quoteElement.classList.remove("show");
    setTimeout(function () {
      // Update the text of the quote element with the randomly selected quote
      quoteElement.textContent = quotes[quoteIndex].text;
      // Remove the "show" class to trigger the transition again on the next click
      quoteElement.classList.add("show");
    }, 500); // Wait for 500ms (the duration of the transition) before updating the text and triggering the transition again
  });
});
