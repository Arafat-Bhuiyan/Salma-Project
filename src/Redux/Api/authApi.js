import { api } from "./api";

export const authApi = api.injectEndpoints({
  endpoints: (builder) => ({
    // === LOGIN ===
    login: builder.mutation({
      query: (data) => ({
        url: "/auth/login/",
        method: "POST",
        body: data,
      }),
    }),
    // === SIGNUP ===
    signup: builder.mutation({
      query: (data) => ({
        url: "/auth/signup/",
        method: "POST",
        body: data,
      }),
    }),
    // === PARTNERS ===
    getPartners: builder.query({
      query: () => "/partners/",
      providesTags: ["partners"],
    }),
    // === CONTENTS ===
    getContents: builder.query({
      query: () => "/database/contents/",
      providesTags: ["contents"],
    }),
    // === SINGLE CONTENT ===
    getContentById: builder.query({
      query: (id) => `/database/contents/${id}/`,
      providesTags: ["content"],
    }),
    // === TAGS ===
    getTags: builder.query({
      query: () => "/tags/",
      providesTags: ["tags"],
    }),
    // === CONTACT FORM ===
    sendContactMessage: builder.mutation({
      query: (data) => ({
        url: "/email-records/",
        method: "POST",
        body: data,
      }),
    }),
     // === LIKE CONTENT ===
    likeContent: builder.mutation({
      query: (data) => ({
        url: "/content-likes/",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["content"], // re-fetch content if needed
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
    // === ABOUT US ===
    getAboutUs: builder.query({
      query: () => "/about-us/",
      providesTags: ["aboutUs"],
    }),
    // === CORE VALUES ===
    getCoreValues: builder.query({
      query: () => "/core-values/",
      providesTags: ["coreValues"],
    }),
  }),
});

export const {
  useLoginMutation,
  useSignupMutation,
  useGetPrivacyPolicyQuery,
  useCreatePrivacyPolicyMutation,
  useUpdatePrivacyPolicyMutation,
  useGetTermsQuery,
  useCreateTermsMutation,
  useUpdateTermsMutation,
  useGetPartnersQuery,
  useGetContentsQuery,
  useGetContentByIdQuery,
  useGetTagsQuery,
  useSendContactMessageMutation,
  useLikeContentMutation,
  useGetAboutUsQuery,
  useGetCoreValuesQuery,
} = authApi;
