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
    // === ARTICLE CONTENTS ===
    getArticleContents: builder.query({
      query: () => "/article/contents/list/",
      providesTags: ["articleContents"],
    }),
    // === SINGLE ARTICLE CONTENT ===
    getArticleContentById: builder.query({
      query: (id) => `/article/contents/${id}/`,
      providesTags: ["articleContent"],
    }),
    // === LIKE ARTICLE ===
    likeArticle: builder.mutation({
      query: (data) => ({
        url: "/article-likes/",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["articleContent"], // refresh article data if needed
    }),
    // === BLOG (Vaults) CONTENTS ===
    getBlogContents: builder.query({
      query: () => "/blog/contents/list/",
      providesTags: ["blogContents"],
    }),

    // === SINGLE BLOG (Vault) CONTENT ===
    getBlogContentById: builder.query({
      query: (id) => `/blog/contents/${id}/`,
      providesTags: ["blogContent"],
    }),
    // === LIKE BLOG (Vault) ===
    likeBlog: builder.mutation({
      query: (data) => ({
        url: "/blog-likes/",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["blogContent"], // refresh blog data if needed
    }),
    // === GET RELATED BLOGS ===
    getRelatedBlogs: builder.query({
      query: (id) => `/blog/related-contents/${id}/`,
      providesTags: ["blogContent"],
    }),
    // === GET POPULAR TAGS ===
    getPopularTags: builder.query({
      query: () => `/popular-tags/`,
      providesTags: ["popularTags"],
    }),
    // === SUBSCRIBE EMAIL ===
    subscribeEmail: builder.mutation({
      query: (email) => ({
        url: `/subscribe/`,
        method: "POST",
        body: { email },
      }),
      invalidatesTags: [],
    }),
    // === GET PRIVACY POLICY ===
    getPrivacyPolicy: builder.query({
      query: () => "/privacy/",
      providesTags: ["privacyPolicy"],
    }),
    // === GET Terms And Conditions ===
    getTerms: builder.query({
      query: () => "/terms/",
      providesTags: ["terms"],
    }),
  }),
});

export const {
  useLoginMutation,
  useSignupMutation,
  useGetPartnersQuery,
  useGetContentsQuery,
  useGetContentByIdQuery,
  useGetTagsQuery,
  useSendContactMessageMutation,
  useLikeContentMutation,
  useGetAboutUsQuery,
  useGetCoreValuesQuery,
  useGetArticleContentsQuery,
  useGetArticleContentByIdQuery,
  useLikeArticleMutation,
  useGetBlogContentsQuery,
  useGetBlogContentByIdQuery,
  useLikeBlogMutation,
  useGetRelatedBlogsQuery,
  useGetPopularTagsQuery,
  useSubscribeEmailMutation,
  useGetPrivacyPolicyQuery,
  useGetTermsQuery,
} = authApi;
