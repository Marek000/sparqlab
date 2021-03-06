// Shared settings

var createCookie = function (name, value) {
  var date = new Date();
  // The cookie will expire in a year.
  date.setTime(date.getTime() + (365 * 24 * 60 * 60 * 1000));
  var expires = "; expires=" + date.toUTCString();
  document.cookie = "sparqlab-exercise-" + name + "=" + value + expires + "; path=/";
}

// Global configuration for YASR
yasrConfig = {
  outputPlugins: ["error", "boolean", "rawResponse", "table"],
  persistency: {
    prefix: null
  },
  useGoogleCharts: false
};
YASR.plugins.table.defaults.fetchTitlesFromPreflabel = false;
YASR.plugins.rawResponse.defaults.CodeMirror.lineNumbers = false;
YASR.plugins.rawResponse.defaults.CodeMirror.theme = "sparqlab";

var sparqlabLocale, yasqeLocale;
if (acceptLang === "cs") {
  YASR.plugins.table.defaults.datatable.language = {
    "url": "/localization/Czech.json"
  };
  sparqlabLocale = {
    expectedToken: "Očekáváno",
    lockedScrolling: "Přepnout společné posouvání",
    syntaxError: "Chyba syntaxe dotazu",
    timeout: "Dotaz překročil maximální povolenou dobu provádění ({seconds} sekund)."
  };
  yasqeLocale = {
    invalidLine: "Na tomto řádku je chyba. Očekáváno:",
    setFullScreen: "Maximalizovat na celou obrazovku",
    setSmallScreen: "Minimalizovat",
    shareQuery: "Sdílení dotazu",
    shorten: "Zkrátit",
    autocomplete: {
      failedSuggestions: "Stahování dokončení selhalo...",
      fetching: "Stahování dokončení",
      nothing: "Nic k dokončení!",
      trigger: "Stiskněte CTRL - <mezerník> pro automatické dokončování",
      zeroMatches: "Žádná dokončení nenalezena..."
    }
  };
} else {
  sparqlabLocale = {
    expectedToken: "Expected",
    lockedScrolling: "Toggle locked scrolling",
    syntaxError: "Query syntax error",
    timeout: "The query exceeded the maximum allowed execution time ({seconds} seconds)."
  };
  yasqeLocale = YASQE.defaults.language;
}

/** Setup autocomplete for searching by SPARQL language constructs using `data`. */
var initAutocomplete = function (data) {
  var searchTerm = document.getElementById("search-term"),
      searchConstruct = document.getElementById("search-construct");
  new Awesomplete(searchTerm, {
    autoFirst: true,
    list: data
  });
  // Put autocompleted construct in a hidden input and submit.
  searchTerm.addEventListener("awesomplete-select", function (e) {
    e.preventDefault();
    searchConstruct.value = e.text.value;
    searchTerm.value = "";
    $(searchTerm).closest("form").submit(); 
  });
};
(function ($) {
  $(document).ready(function () {
    $.ajax({
      url: context + "/api/sparql-constructs",
      success: initAutocomplete
    });
  });
})(jQuery);
