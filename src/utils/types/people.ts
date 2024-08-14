import { IPerson } from "./person"

export interface IGetPeopleResponse {
  count: number
  next: string
  previous: any
  results: IPerson[]
};
