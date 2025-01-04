function searchFunction() {
    const query = document.getElementById("search-input").value;
    if (query) {
      // Redirect to Google Search results page for the query
      window.location.href = `https://www.google.com/search?q=${query}`;
    }
  }
  
  function luckySearch() {
    const query = document.getElementById("search-input").value;
    if (query) {
      // Redirect to "I'm Feeling Lucky" which takes you directly to the first search result
      window.location.href = `https://www.google.com/search?btnI=1&q=${query}`;
    }
  }
  