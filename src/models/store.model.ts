interface Search {
  text: string;
}
interface Page {
  selected: number;
}
export interface StarWarsModel {
  searchText: Search;
  // search: Action<StarWarsModel, Search>;
  selectedPage: Page;
  // select: Action<StarWarsModel, Page>;
}
