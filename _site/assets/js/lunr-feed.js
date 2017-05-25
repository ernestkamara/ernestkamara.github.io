var hostname = "";
var index = lunr(function () {
    this.field('title')
    this.field('content', {boost: 10})
    this.field('category')
    this.field('tags')
    this.ref('id')
});



    index.add({
      title: "Sample Data..",
      category: ["docs"],
      content: "    Workaholic 😎 - Fixing Unit tests while waiting for Bea 👌 . . . . . . #androidmwc #androiddev #developer #programmer #trondheim #code A post shared by Ernest S. Kamara (@instakamara) on Mar 21, 2017 at 5:09am PDT\n\n\n",
      tags: [],
      id: 0
    });
    


var store = [{
    "title": "Sample Data..",
    "link": "/docs/sample-data.html",
    "image": null,
    "date": "March 11, 2016",
    "category": ["docs"],
    "excerpt": "Workaholic 😎 - Fixing Unit tests while waiting for Bea 👌 . . . . . . #androidmwc #androiddev #developer..."
}]

$(document).ready(function() {
    $('#search-input').on('keyup', function () {
        var resultdiv = $('#results-container');
        if (!resultdiv.is(':visible'))
            resultdiv.show();
        var query = $(this).val();
        var result = index.search(query);
        resultdiv.empty();
        $('.show-results-count').text(result.length + ' Results');
        for (var item in result) {
            var ref = result[item].ref;
            var searchitem = '<li><a href="'+ hostname + store[ref].link+'">'+store[ref].title+'</a></li>';
            resultdiv.append(searchitem);
        }
    });
});