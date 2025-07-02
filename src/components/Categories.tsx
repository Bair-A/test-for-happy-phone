'use client';

import { useEffect, useState } from 'react';
import { getInitialValues } from '@/utils/utils';

const Categories = () => {
  const [categories, setCategories] = useState<string[]>([]);

  useEffect(() => {
    const { categories } = getInitialValues();

    setCategories(categories as string[]);

    console.log('Категории ', categories);
  }, []);

  return <div>Категории</div>;
};

export default Categories;
