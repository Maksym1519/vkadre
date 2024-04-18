export type FuturePhotoPostType = {
  data: {
    username: string;
    email: string;
    phone: number;
    kind: string;
    date: string;
    time: string;
    length: string;
    text: string;
    userId: string;
  };
};

//------------------------------------------------------------
export type FuturePhotoGetType = [
  {
    attributes: {
      username: string;
      email: string;
      phone: number;
      kind: string;
      date: string;
      time: string;
      length: string;
      text: string;
      userId: string;
    };
    id: number
  },
  ];

export type FuturePhotoStateType = {
    futurePhotosession: FuturePhotoGetType | null,
    orderId: number,
    loading: boolean,
    error: string | null;
}
//---------------------------------------------------------------
export type FeedbackPostType = {
  data: {
    username: string;
    city: string;
    location: string;
    text: string;
  };
};
//----------------------------------------------------------------------
