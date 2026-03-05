export type CustomerModel = {
  id: string | null;
  company: string | null;
  contactName: string | null;
  fax: string | null;
  country: string | null;
};

// FOR FILTER
export type InputFilterField = Pick<
  CustomerModel,
  "id" | "company" | "contactName"
>;
export type CustomerFilterModel = InputFilterField;
export type CustomerFilterModelKey = keyof CustomerFilterModel;

type BaseFilter = {
  label: string;
};

export type InputFilter<T = string> = {
  placeholder: string;
  defaultValue: T;
} & BaseFilter;

export type CustomerFilterControl = {
  [K in CustomerFilterModelKey]: InputFilter<
    CustomerFilterModel[CustomerFilterModelKey]
  >;
};

export type CustomerFilterControlKey = keyof CustomerFilterControl;
export type FilterHandler = (...args: any[]) => void;
export type FilterHanlderProvider = Record<
  CustomerFilterControlKey,
  FilterHandler
>;
