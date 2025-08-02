export interface FavoriteColor {
  name: string;
  hex: string;
  value: string;
  type: 'color' | 'gradient';
  addedAt: number;
  css: string;
}

export const getFavorites = (): FavoriteColor[] => {
  if (typeof window === 'undefined') return [];
  const favorites = localStorage.getItem('color-favorites');
  return favorites ? JSON.parse(favorites) : [];
};

export const addToFavorites = (color: Omit<FavoriteColor, 'addedAt'>) => {
  const favorites = getFavorites();
  const newFavorite = { ...color, addedAt: Date.now() };
  const updatedFavorites = [newFavorite, ...favorites.filter(f => f.name !== color.name)];
  localStorage.setItem('color-favorites', JSON.stringify(updatedFavorites));
  return updatedFavorites;
};

export const removeFromFavorites = (colorName: string) => {
  const favorites = getFavorites();
  const updatedFavorites = favorites.filter(f => f.name !== colorName);
  localStorage.setItem('color-favorites', JSON.stringify(updatedFavorites));
  return updatedFavorites;
};

export const isFavorite = (colorName: string): boolean => {
  const favorites = getFavorites();
  return favorites.some(f => f.name === colorName);
};