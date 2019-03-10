export class Employee {
    constructor(
        public _id: string,
        public FirstName: string,
        public LastName: string,
        public AddressStreet: string,
        public AddressState: string,
        public AddressCity: string,
        public AddressZip: string,
        public PhoneNum: string,
        public Extension: string,
        public Position: Position,
        public HireDate: string,
        public SalaryBonus: number,
        public __v: number) { }
  }
  
  