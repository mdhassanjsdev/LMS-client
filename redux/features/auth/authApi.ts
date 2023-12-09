import { apiSlice } from '../api/apiSlice';
import { userLoggedIn, userLoggedOut, userRegistration } from './authSlice';


type RegistrationResponse = {
    message: string;
    activationToken: string;
};

type RegistrationData = {};

export const authApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({

        register: builder.mutation<RegistrationResponse, RegistrationData>({
            query: (data) => ({
                url: "register",
                method: "POST",
                body: data,
                credentials: "include" as const,
            }),
            async onQueryStarted(arg, { queryFulfilled, dispatch }) {
                try {
                    const result = await queryFulfilled;

                    dispatch(
                        userRegistration({
                            token: result.data.activationToken
                        })
                    );
                } catch (error: any) {
                    console.log(error);
                }
            },
        }),

        activation: builder.mutation({
            query: (data) => ({
                url: 'activate-user',
                method: 'POST',
                body: data
            }),
        }),

        logIn: builder.mutation({
            query: ({ email, password }) => ({
                url: 'login',
                method: 'POST',
                body: {
                    email, password
                },
                credentials: "include" as const
            }),
            async onQueryStarted(arg, { queryFulfilled, dispatch }) {
                try {
                    const result = await queryFulfilled;
                    dispatch(
                        userLoggedIn({
                            accessToken: result.data.accessToken,
                            user: result.data.user,
                        })
                    );
                } catch (error: any) {
                    console.log(error);
                }
            },
        }),
    })
})


export const { useRegisterMutation, useActivationMutation, useLogInMutation } = authApi;