import { data } from '$lib/index';

export async function load({ params }) {
  let component = null;
  
  data.forEach((section) => {
    if (section.section === 'Port') {
      section.categories.forEach((category) => {
        const foundItem = category.items.find((item) => item.slug === params.slug);
        if (foundItem) {
          component = {
            section: section.section,
            category: category.name,
            ...foundItem
          };
        }
      });
    }
  });

  return {
    page: component
  };
}