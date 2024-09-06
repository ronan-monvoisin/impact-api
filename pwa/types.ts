export type Response<T> = {
  "@context": string;
  "@id": string;
  "@type": string;
  "hydra:member": Array<T>;
  "hydra:totalItems": number;
};

export type ResponseSingle<T> = T & {
  "@context": string;
  "@id": string;
  "@type": string;
};

export type Category = {
  id: number;
  name: string;
};

export type PersonCategory = {
  id: number;
  category: Category;
  person?: Person;
  name: string;
};

export type IdentityField = "alias";

export type TypeIdentityField = {
  id: number;
  name: IdentityField;
};

export type PersonTypeIdentifyField = {
  id: number;
  value: string;
  typeIdentityField: TypeIdentityField;
  person?: Person;
};

export type Company = {};

export type Job = {};

export type PersonJob = {
  job: Job;
  person?: Person;
};

export type TypeRelative = {
  id: number;
  name: string;
};

export type PersonRelative = {
  id: number;
  name: string;
  isBiological: boolean;
  typeRelative: TypeRelative;
  person?: Person;
};

export type School = {};

export type PersonSchool = {
  id: number;
  school: School;
  person?: Person;
};

export type TypeSocialStatus = {
  id: number;
  name: string;
};

export type PersonSocialStatus = {
  id: number;
  name: string;
  typeSocialStatus: TypeSocialStatus;
  person?: Person;
};

export type Person = {
  id: number;
  name: "string";
  romanizedName?: string;
  personCategories: string[];
  personIdentityFields: string[];
  personJobs: string[];
  personRelatives: string[];
  personSchools: string[];
  personSocialStatuses: string[];
};
