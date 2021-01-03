export default interface ICompany {
  id?: string;
  name: string;
  departments: [
    {
      label: string;
      code: string;
    }
  ]
}
