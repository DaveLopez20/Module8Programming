let data = [
    {
        name: 'Phoenix Wright',
        age: '33'
    },
    {
        name: 'Lupin the 3rd',
        age: '50'
    },
    {
        name: 'Monkey D. Luffy',
        age: '19'
    },
    {
        name: 'Cole Phelps',
        age: '27'
    },
    {
        name: 'Frank Woods',
        age: '59'
    },
    {
        name: 'Scott Pilgrim',
        age: '23'
    },
    {
        name: 'Huey',
        age: '24'
    },
];

const info= document.querySelector('#info')

let details = data.map(function(item) {
    return '<div>' + item.name + ' ' + 'is ' + item.age + ' years old' + '</div>';
});

info.innerHTML = details.join("\n")