export class EmployeeModel {
   firstName: string;
   lastName: string;
   isFullName: boolean;
   constructor(FirstName: string, LastName: string, IsFullName: boolean){
      this.firstName = FirstName;
      this.lastName = LastName;
      this.isFullName = IsFullName;
   }
}