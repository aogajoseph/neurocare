document.addEventListener('DOMContentLoaded', function () {
    const searchForm = document.getElementById('searchform');
    const searchInput = document.getElementById('s');
    
    if (searchForm) {
        searchForm.addEventListener('submit', function (e) {
            e.preventDefault(); // Prevent page reload
            const query = searchInput.value.trim().toLowerCase();
            if (query) {
                searchAndHighlight(query);
            }
        });
    }
});

function searchAndHighlight(query) {
    // Remove previous highlights
    clearPreviousHighlights();

    const bodyText = document.body.innerHTML;
    
    // Regular expression to search for the query text
    const regex = new RegExp(query, 'gi');
    const matches = bodyText.match(regex);

    if (matches && matches.length > 0) {
        highlightText(query);
    } else {
        alert("No matches found!");
    }
}

// Function to highlight matching text in the page
function highlightText(query) {
    const body = document.body;
    const regex = new RegExp(query, 'gi');
    
    // Loop through all text nodes and wrap matching text in a span with highlight class
    const walk = document.createTreeWalker(body, NodeFilter.SHOW_TEXT, null, false);
    let node;
    while (node = walk.nextNode()) {
        if (regex.test(node.nodeValue)) {
            const span = document.createElement('span');
            span.classList.add('highlight');
            span.innerHTML = node.nodeValue.replace(regex, match => `<mark>${match}</mark>`);
            node.parentNode.replaceChild(span, node);
        }
    }
}

// Function to clear previous highlights
function clearPreviousHighlights() {
    const highlightedElements = document.querySelectorAll('.highlight');
    highlightedElements.forEach(element => {
        const parent = element.parentNode;
        parent.replaceChild(document.createTextNode(element.textContent), element);
    });
}
