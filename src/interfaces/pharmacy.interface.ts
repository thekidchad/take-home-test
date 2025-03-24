import { IDrug } from './drug.interface';

export interface IPharmacy {
  drugs: IDrug[];
  updateBenefitValue(): IDrug[];
}
