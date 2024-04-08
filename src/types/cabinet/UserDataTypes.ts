//POST--------------------------------------------
export type UserDataTypes = {
  data: {
    username: string;
    phone: number;
    password: number;
    email: string;
  };
};

//GET-----------------------------------------------------------------------
export type UserDataApi = [
  {
    attributes: {
      username: string;
      password: number;
      phone: number;
      email: string;
    };
  }
];

export type UserDataState = {
  guests: UserDataApi | null;
  id: string;
  loading: boolean;
  error: string | null;
};
