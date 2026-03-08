export type CustomerColumn = {
  id: string | null;
  company: string | null;
  contactName: string | null;
  fax: string | null;
  country: string | null;
  totalOrders: string | null;
};

// FOR FILTER
export type InputFilterField = {
  id: string | null;
  company: string | null;
  contactName: string | null;
}
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
