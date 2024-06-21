import {  createSlice } from "@reduxjs/toolkit";

interface State {
  email: string
}

const initialState: State = {
  email: 'yusuke.morita0905@gmail.com',
};

export const contactFormSlice = createSlice({
  name: "contactForm",
  initialState,
  reducers: {},
});