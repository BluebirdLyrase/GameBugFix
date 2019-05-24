$(function () { 

console.log('Get data ...');
$.get("data/gamelist.json", function(data, status){
     console.log(data);
     console.log(status);

     for(var index in data){
         var game = data[index];
         var tableRow = '<div class="card shadow mb-4"><div>Game : '+game.name+'</div><div>Problem : '+game.Problem+'</div><div>Step1 :'+game.Solution+'</div><div>Step2 :'+game.Solution2+'</div><div><img src="'+game.Pic+'"></div><div>'+game.File+'</div></div>'
      $('#cardgame').append(tableRow);
     }
});
});