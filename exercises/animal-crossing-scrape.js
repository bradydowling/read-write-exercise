// https://animalcrossing.fandom.com/wiki/Fish_(New_Leaf)

const categories = [...document.querySelectorAll('thead tr th')].map(node => node.innerText.trim());
const rows = [...(document.querySelector('table table tbody')).querySelectorAll('tr')];
const fish = rows.map(row => {
    return [...row.querySelectorAll('td')].reduce((fishData, td, i) => {
        return {
            ...fishData,
            [categories[i]]: td.innerText.trim()
        }
    }, {});
});