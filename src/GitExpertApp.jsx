import { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GitExpertApp = () => {
  const [categories, setCategories] = useState(['Los Simpson']);

  const onAddCategory = (newCategory) => {
    if (categories.includes(newCategory)) return;
    // console.log(onNewCategory);
    // console.log('Valorant');
    setCategories([newCategory, ...categories]);
  };

  return (
    <>
      <h1>GitExpertApp</h1>

      <AddCategory
        // setCategories={setCategories}
        onNewCategory={onAddCategory}
      />

      {categories.map((category) => (
        <GifGrid key={category} category={category} />
      ))}
      {/* <li>ABC</li> */}
    </>
  );
};
