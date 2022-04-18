import Person from "./person.model";

interface PageDate {
  hasNextPage: boolean;
  hasPreviousPage: boolean;
  numberOfPages: number;
  people: Array<Person>;
}

export default PageDate;
