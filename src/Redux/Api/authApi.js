import { api } from "./api";

export const authApi = api.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (data) => ({
        url: "/login/",
        method: "POST",
        body: data,
      }),
    }),

    getPrivacyPolicy: builder.query({
      query: () => "/adminapi/privacy/",
      providesTags: ["privacy"],
    }),

    createPrivacyPolicy: builder.mutation({
      query: (data) => ({
        url: "/adminapi/privacy/",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["privacy"],
    }),

    updatePrivacyPolicy: builder.mutation({
      query: ({ id, data }) => ({
        url: `/adminapi/privacy/${id}/`,
        method: "PUT",
        body: data,
      }),
      invalidatesTags: ["privacy"],
    }),

    getTerms: builder.query({
      query: () => "/adminapi/terms/",
      providesTags: ["terms"],
    }),
    createTerms: builder.mutation({
      query: (data) => ({
        url: "/adminapi/terms/",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["terms"],
    }),
    updateTerms: builder.mutation({
      query: ({ id, data }) => ({
        url: `/adminapi/terms/${id}/`,
        method: "PUT",
        body: data,
      }),
      invalidatesTags: ["terms"],
    }),
  }),
});

export const {
  useLoginMutation,
  useGetPrivacyPolicyQuery,
  useCreatePrivacyPolicyMutation,
  useUpdatePrivacyPolicyMutation,
  useGetTermsQuery,
  useCreateTermsMutation,
  useUpdateTermsMutation,
} = authApi;
