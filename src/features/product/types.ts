import type { IProduct } from "../../components/Products/types";


export interface IProductState {
  products: IProduct[];
  isLoading: boolean;
  error: string;
}
