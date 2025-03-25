import { IDrug, IPharmacy } from '../interfaces';
import { Drug } from './drug.service';

export class Pharmacy implements IPharmacy {
  private readonly MAX_BENEFIT = 50;
  private readonly MIN_BENEFIT = 0;
  private readonly FERVEX_THRESHOLD_1 = 10;
  private readonly FERVEX_THRESHOLD_2 = 5;
  private readonly EXPIRED = 0;
  public drugs: Drug[];

  constructor(drugs: Drug[] = []) {
    this.drugs = drugs;
  }

  updateBenefitValue(): IDrug[] {
    return this.drugs.map((drug) => this.updateDrug(drug));
  }

  private updateDrug(drug: IDrug): IDrug {
    switch (drug.name) {
      case 'Magic Pill':
        return drug;
      case 'Herbal Tea':
        return this.updateHerbalTea(drug);
      case 'Fervex':
        return this.updateFervex(drug);
      case 'Dafalgan':
        return this.updateDafalgan(drug);
      default:
        return this.updateRegularDrug(drug);
    }
  }

  private updateHerbalTea(drug: IDrug): IDrug {
    const increaseFactor = drug.expiresIn <= 0 ? 2 : 1;
    drug.benefit = Math.min(drug.benefit + increaseFactor, this.MAX_BENEFIT);
    drug.expiresIn--;
    return drug;
  }

  private updateFervex(drug: IDrug): IDrug {
    if (drug.expiresIn <= this.EXPIRED) {
      drug.benefit = 0;
    } else {
      let increase = 1;
      if (drug.expiresIn <= this.FERVEX_THRESHOLD_2) increase = 3;
      else if (drug.expiresIn <= this.FERVEX_THRESHOLD_1) increase = 2;

      drug.benefit = Math.min(drug.benefit + increase, this.MAX_BENEFIT);
    }
    drug.expiresIn--;
    return drug;
  }

  private updateDafalgan(drug: IDrug): IDrug {
    const decrease = drug.expiresIn <= 0 ? 4 : 2;
    drug.benefit = Math.max(drug.benefit - decrease, this.MIN_BENEFIT);
    drug.expiresIn--;
    return drug;
  }

  private updateRegularDrug(drug: IDrug): IDrug {
    const decrease = drug.expiresIn <= 0 ? 2 : 1;
    drug.benefit = Math.max(drug.benefit - decrease, this.MIN_BENEFIT);
    drug.expiresIn--;
    return drug;
  }
}
