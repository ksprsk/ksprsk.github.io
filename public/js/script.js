(function(document) {
  var toggle = document.querySelector('.sidebar-toggle');
  var sidebar = document.querySelector('#sidebar');
  var checkbox = document.querySelector('#sidebar-checkbox');

  document.addEventListener('click', function(e) {
    var target = e.target;

    if(!checkbox.checked ||
       sidebar.contains(target) ||
       (target === checkbox || target === toggle)) return;

    checkbox.checked = false;
  }, false);
})(document);

(function(window, document) {
  var sections = document.querySelectorAll('.category-section');
  if(!sections.length) return;

  function selectedCategory() {
    return decodeURIComponent(window.location.hash.replace(/^#/, ''));
  }

  function filterSections() {
    var category = selectedCategory();

    sections.forEach(function(section) {
      var matches = !category || section.getAttribute('data-category') === category;
      section.hidden = !matches;
    });
  }

  window.addEventListener('hashchange', filterSections);
  filterSections();
})(window, document);
