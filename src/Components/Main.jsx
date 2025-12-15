import React from 'react'

export const Main = () => {
  const ingredients = ["chicken", "Orageno", "Tomatoes"]
    const handleClick = () => {
    }
    const ingredientListItmes = ingredients.map(ingredient => (
        <li key={ingredient}>{ingredient}</li>
    ))
    const handleSunbmit = (event) => {
        event.preventDefault()
        const formData = new formData(event.currentTarget)
        const newIngredient = formData.get("ingredent")
        console.log(newIngredient);
    }
  return (
   <main>
    <form onSubmit={handleSunbmit} className='add-ingredient-form'>
        <input type="text" aria-label='Add ingredient' placeholder='e.g. oregano' name='igredient' />
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
