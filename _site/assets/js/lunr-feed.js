var hostname = "http://www.kamara.io";
var index = lunr(function () {
    this.field('title')
    this.field('content', {boost: 10})
    this.field('category')
    this.field('tags')
    this.ref('id')
});



    index.add({
      title: "FirebaseUI Quickstarts for Android",
      category: null,
      content: "I have just open source FirebaseUI Quickstarts for Android. A simple a quickstarts project for getting you started with Firebase for Android app development using FirebaseUI.\n\nThis project was intended to for Let’s Build an App Together (Workshop) attendees as a starter project, but can be used by anyone interested in using Firebase.\n\nThere is also a demo Activity that demonstrate users authentication, photo upload to cloud storage and writing data to the realtime database in a single flow.\n\nRequirements\n\n  Android SDK.\n  Android 7.0 (API 25) .\n  Android SDK Tools\n  Android SDK Build tools 25.0.2\n  Android Support Repository\n  Android Support library\n  Google Play Services\n\n\nSource code: https://github.com/GDG-Trondheim/firebase-ui-quickstart-android\n",
      tags: [],
      id: 0
    });
    


var store = [{
    "title": "FirebaseUI Quickstarts for Android",
    "link": "/firebaseui-quickstarts-for-android.html",
    "image": null,
    "date": "May 30, 2017",
    "category": null,
    "excerpt": "I have just open source FirebaseUI Quickstarts for Android. A simple a quickstarts project for getting you started with Firebase..."
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