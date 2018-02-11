var i = 0;
var found = false;

while(i < 100 && !found) {
    fetch(`https://events.yandex.ru/lib/filter/people/?callback=jQuery18305743080794275759_1518221232477&page=${i}&_=1518221312621`)
        .then(function(response) {
            return response.json();
        })
        .then(function(user) {
            user.results.some((data) => {data.name.includes('Ситник')})
            return true;
        });
}
