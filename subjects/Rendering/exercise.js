////////////////////////////////////////////////////////////////////////////////
// Exercise:
//
// - render DATA.title in an <h1>
// - render a <ul> with each of DATA.items as an <li>
// - now only render an <li> for mexican food (hint: use DATA.items.filter(...))
// - sort the items in alphabetical order by name (hint: use sort-by https://github.com/staygrimm/sort-by#example)
//
// Got extra time?
// - add a select dropdown to make filtering on `type` dynamic
// - add a button to toggle the sort order
// - Hint: you'll need an `updateThePage` function that calls `render`,
//   and then you'll need to call it in the event handlers of the form controls
////////////////////////////////////////////////////////////////////////////////
import React from 'react'
import { render } from 'react-dom'
import sortBy from 'sort-by'

const DATA = {
  title: 'Menu',
  items: [
    { id: 1, name: 'tacos', type: 'mexican' },
    { id: 2, name: 'burrito', type: 'mexican' },
    { id: 3, name: 'tostada', type: 'mexican' },
    { id: 4, name: 'mushy peas', type: 'english' },
    { id: 5, name: 'fish and chips', type: 'english' },
    { id: 6, name: 'black pudding', type: 'english' }
  ]
}

var items = DATA.items.filter(item => (item.type === 'mexican')).sort((a,b) => {
  if(a.name > b.name) { return 1; }
  else if(a.name < b.name) { return -1; }
  else { return 0; }
}).map(item => {
  return <li key={item.id}>{item.name}</li>;
});

function Menu() {
  return (
    <div>
      <h1>{DATA.title}</h1>
      <ul>{items}</ul>
    </div>
  )
}

render(<Menu/>, document.getElementById('app'), () => {
  require('./tests').run()
})
