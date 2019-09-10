
const threadsTemplate = Handlebars.compile(
    document.getElementById('threads-template').innerHTML
 );

Handlebars.registerHelper('toLocaleString', function(number){
    return number.toLocaleString()
});

$('#search-button').on('click', function(){
   $('#results').html('');
});
$('#search-form').submit( async function(event){
	event.preventDefault();
  $('#loading-spinner').toggleClass('loader');
    let subredditname= document.querySelector('#subreddit-id').value;
    console.log(subredditname);
    
    let threads = await $.ajax({
    type: 'GET',
    url: 'https://www.reddit.com/r/'+subredditname+'.json'
    });

    console.log(threads);

    let sanitizedHtml = threadsTemplate({threads});

    console.log(sanitizedHtml);

    $('#loading-spinner').toggleClass('loader');

    $('#results').html(sanitizedHtml);
    
    
});