import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
import { ProfileSchema } from '../types/profile';
import { profileActions, profileReducer } from './profileSlice';
import { updateProfileData } from '../services/updateProfileData/updateProfileData';

const data = {
  age: 30,
  city: 'Moscow',
  country: Country.Russia,
  currency: Currency.RUB,
  lastname: 'Gr',
  username: 'Den',
  first: 'Denis',
};
describe('profileSlice.test', () => {
  test('test set readonly', () => {
    const state: DeepPartial<ProfileSchema> = { readonly: false };
    expect(profileReducer(state as ProfileSchema, profileActions.setReadonly(true))).toEqual({
      readonly: true,
    });
  });

  test('test set cancelEdit', () => {
    const state: DeepPartial<ProfileSchema> = { data };
    expect(profileReducer(state as ProfileSchema, profileActions.cancelEdit())).toEqual({
      readonly: true,
      data,
      form: data,
    });
  });

  test('test  updateProfile', () => {
    const state: DeepPartial<ProfileSchema> = { form: { username: '123' } };
    expect(
      profileReducer(state as ProfileSchema, profileActions.updateProfile({ username: '123456' })),
    ).toEqual({
      form: { username: '123456' },
    });
  });

  test('test  updateProfile service pending', () => {
    const state: DeepPartial<ProfileSchema> = { isLoading: false };
    expect(profileReducer(state as ProfileSchema, updateProfileData.pending)).toEqual({
      isLoading: true,
    });
  });

  test('test  updateProfile service fulfilled', () => {
    const state: DeepPartial<ProfileSchema> = { isLoading: false };
    expect(profileReducer(state as ProfileSchema, updateProfileData.fulfilled(data, ''))).toEqual({
      isLoading: false,
      readonly: true,
      form: data,
      data,
    });
  });
});
