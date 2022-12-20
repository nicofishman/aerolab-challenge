export const filterButtons = ['Most Recent', 'Lowest Price', 'Highest Price'] as const;

export type FilterButtons = typeof filterButtons[number];