$(document).ready(function() {
    $.ajax({
        url: "https://prod-105.westus.logic.azure.com:443/workflows/c2355d1b898d47d5af94811d5c6c3c78/triggers/manual/paths/invoke?api-version=2016-06-01&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=V8SyKpklgzOsb07shXFspu9B5ilLyLS8x6Mn5RyOgvc"
    }).then(function(data) {
      $(".ml-auto").append("</li><h1>You have " + data.length + " pending approvals</h1></li>");
      for(var i = 0; i < data.length; i++) {
      $(".feature-box").append("<div><h3 class='feature-title'>" + data[i].subject + "</h3><p>" + data[i].body + "</p></div>");
     }
    });
});
