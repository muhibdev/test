export interface IFormValues {
  PatientDetails;
  ClinicalDetail;
  sections: Isection[];
}

export interface Isection {
  title: string;
  color: string;
  fields: Ifield[];
}

export interface Ifield {
  _id?: string;
  label: string;
  value: Boolean;
}
