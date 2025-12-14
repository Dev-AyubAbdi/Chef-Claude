import React from 'react'

export const Main = () => {
  const ingredients = ["chicken", "Orageno", "Tomatoes"]
    const handleClick = () => {
    }
    const ingredientListItmes = ingredients.map(ingredient => (
        <li key={ingredient}>{ingredient}</li>
    ))
    const handleSunbmit = () => {
        console.log("cliked")
    }
  return (
   <main>
    <form onSubmit={handleSunbmit} className='add-ingredient-form'>
        <input type="text" aria-label='Add ingredient' placeholder='e.g. oregano' />
        <button onClick={handleClick()}>+Add ingredient</button>
    </form>
    <ul>
        {
            ingredientListItmes
        }
    </ul>
   </main>
  )
}
