//POST--------------------------------------------
export type UserDataTypes = {
  data: {
    username: string;
    phone: string;
    password: number;
    email: string;
  };
};

//GET-----------------------------------------------------------------------
export type UserDataApi = [
  {
    username: string;
    password: number;
    phone: string;
    email: string;
  }
];

export type UserDataState = {
  guests: UserDataApi | null;
  id: string;
  loading: boolean;
  error: string | null;
};
