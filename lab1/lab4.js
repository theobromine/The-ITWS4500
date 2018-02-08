function sleep(milliseconds) {
  var start = new Date().getTime();
  for (var i = 0; i < 1e7; i++) {
    if ((new Date().getTime() - start) > milliseconds){
      break;
    }
  }
};

window.onload = function() {

  // document.getElementById('coverart').addEventListener('click', function (e) {
    // $.ajax({
    $( document ).ready(function(e) {
      $.ajax({
      contentType: 'application/json',
      dataType: "json",
      url: "./TwitterTweets17.json",
      success: function (dataCheck) {
                      console.log(dataCheck);
                      // var showdata = $('#s');
                      var build = "<center> <h1> Isaac Llewellyn's Lit Tweetz </h1> </center> <table style='width:70%'><!-- The below tr shows the basic schema for adding new items -->                            <tr><td> Track Name </td> <td> Artist </td>  <td> Album Name </td>                              <td> Release Date </td>                              <td> Genre </td>                              <td> Link to the artist's website </td><td> Album Cover (Image) </td></tr> <!-- item 1 --> <div id='tt'></div>";
                      var array = [];
                      var count = 0;
                      for (var i = 0; i < dataCheck.length; i++) {
                        // alert('a');
                        var text = dataCheck[i].text;
                        // var track = song.TrackName;
                        // var artist = song.Arist;
                        // var album = song.Album;
                        // var date = song.Date;
                        // var genre = song.Genre
                        // var website = song.Website;
                        if(text){
                          count++;
                          // alert(text);
                          try{
                          var cover = dataCheck[i].user.profile_image_url_https;
                          }
                          catch(e){
                            cover = 'https://pbs.twimg.com/profile_images/774074783130488832/kQ3JMvAF_normal.jpg';
                          }

                          array[count] = "<tr>" +
                          //  "<td>" + t + "</td>"+
                          // "<td>" + artist + "</td>"+
                          // "<td>" + album + "</td>"+
                          // "<td>" + date +"</td>"+
                          // "<td>" +genre + "</td>"+
                          // "<td>" + website +"</td>"+
                          "<td><img src=" +cover+
                          // " height='" +cover["-height"]+
                          // "' width='"+cover["-width"] +
                           "> </td>" +
                          "<td>" + text + "</td>"+ "</tr>";
                            if(count % 5 == 0){
                              console.log("Array, ", array )
                              // setTimeout(function() { alert(1); }, i*5000);

                              // setTimeout(update(build), 1000);
                              // $("#tt").html(b);

                              // sleep(1000);

                              build = "";
                            }
                            else {
                              build+=array[count]
                            }
                        }
                      }
                      alert("Loaded tweets!");
                      // build = "fin";
                      build = "<center> <h3> Displaying Bestest Tweetz </h3> <p>patience is king</p> </center> <table style='width:70%'>                            <tr><td> Usr Img </td> <td> Text </td>  </tr> <!-- item 1 --> <div id='tt'></div>";
                      $("#info").html(build);
                      // showdata.html(build);
                      var counter = 0,
                      timer = setInterval(function(){
                            update(counter, array);
                            counter += 5;
                            if (counter == array.length) {
                                  clearInterval(timer);
                            }
                      },5000);

                  },
      error: function(data, errorThrown)
            {
                alert('request failed :'+errorThrown);
            }

      })


      alert("Loaded Json!");
});
};

update = function(text, array){

  $("#tt1").hide().html(array[text]).fadeIn(1000);
  $("#tt2").hide().html(array[text+1]).fadeIn(400);
  $("#tt3").hide().html(array[text+2]).fadeIn(500);
  $("#tt4").hide().html(array[text+3]).fadeIn(700);
  $("#tt5").hide().html(array[text+4]).fadeIn(1000);
  $("#tc").hide().html(text+5).fadeIn(200);
  // $("#tt").html('rwwwwwwz');

};
