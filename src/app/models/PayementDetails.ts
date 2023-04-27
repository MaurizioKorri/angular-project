export class PayementDetails {
  cardHolderName: String;
  cardNumber: number;
  expirationDate: String;
  cvv: number;
  type: string;



  setType(type: string){
    this.type = type;
  }
}
