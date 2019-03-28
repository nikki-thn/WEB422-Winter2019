export class EmployeeRaw {
    
    public _id: string;
    public FirstName: string;
    public LastName: string;
    public AddressStreet: string;
    public AddressState: string;
    public AddressCity: string;
    public AddressZip: string;
    public PhoneNum: string;
    public Extension: string;
    public Position: string;
    public HireDate: string;
    public SalaryBonus: number;
    public __v: number;
    
    constructor(obj?: EmployeeRaw) { }

}
