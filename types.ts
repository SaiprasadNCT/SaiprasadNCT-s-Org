
export interface MenuItem {
  id: string;
  hindiName: string;
  englishName: string;
  description: string;
  price: number;
  image: string;
}

export interface MenuCategory {
  id: string;
  hindiTitle: string;
  englishTitle: string;
  items: MenuItem[];
}
