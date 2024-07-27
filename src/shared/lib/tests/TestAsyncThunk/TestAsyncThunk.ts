import { StateSchema } from 'app/providers/StoreProvider';
import { AsyncThunkAction } from '@reduxjs/toolkit';
import axios, { AxiosStatic } from 'axios';

type ActionCreatorType<Return, Arg, RejectedValue> = (
  arg: Arg,
) => AsyncThunkAction<Return, Arg, { rejectValue: RejectedValue }>;

jest.mock('axios');

const mockedAxios = jest.mocked(axios, true);

// Создание при помощи класса
export class TestAsyncThunk<Return, Arg, RejectedValue> {
  dispatch: jest.MockedFn<any>;

  getState: () => StateSchema;

  actionCreator: ActionCreatorType<Return, Arg, RejectedValue>;

  api: jest.MockedFunctionDeep<AxiosStatic>;

  navigate: jest.MockedFn<any>;

  constructor(
    actionCreator: ActionCreatorType<Return, Arg, RejectedValue>,
    state?: DeepPartial<StateSchema>,
  ) {
    this.actionCreator = actionCreator;
    this.dispatch = jest.fn();
    this.getState = jest.fn(() => state as StateSchema);
    this.api = mockedAxios;
    this.navigate = jest.fn();
  }

  async callThunk(arg: Arg) {
    const action = this.actionCreator(arg);
    const result = await action(this.dispatch, this.getState, {
      api: this.api,
      navigate: this.navigate,
    });

    return result;
  }
}

// Создание при помощи функции
// export const TestAsyncThunk = <Return, Arg, RejectedValue>(
//   actionCreator: ActionCreatorType<Return, Arg, RejectedValue>,
// ) => {
//   const dispatch: jest.MockedFn<any> = jest.fn();
//   const getState: () => StateSchema = jest.fn();

//   const callThunk = async (arg: Arg) => {
//     const action = actionCreator(arg);
//     const result = await action(dispatch, getState, undefined);
//     return result;
//   };

//   return {
//     dispatch,
//     getState,
//     actionCreator,
//     callThunk,
//   };
// };
