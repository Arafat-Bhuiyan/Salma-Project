import { get } from "react-scroll/modules/mixins/scroller";
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

    // Filter by contribution list
    getContributions: builder.query({
      query: () => "/filters/contribution/",
      providesTags: ["Contribution"],
    }),

    // Filter by country list
    getCountries: builder.query({
      query: () => "/filters/country/",
      providesTags: ["Country"],
    }),

    // Filter by function list
    getFunctions: builder.query({
      query: () => "/filters/function/",
      providesTags: ["Function"],
    }),

    // Filter by genre list
    getGenres: builder.query({
      query: () => "/filters/genre/",
      providesTags: ["Genre"],
    }),

    // Filter by language list
    getLanguages: builder.query({
      query: () => "/filters/language/",
      providesTags: ["Language"],
    }),

    // Filter by movement list
    getMovements: builder.query({
      query: () => "/filters/movement/",
      providesTags: ["Movement"],
    }),

    // Filter by period list
    getPeriods: builder.query({
      query: () => "/filters/period/",
      providesTags: ["Period"],
    }),

    // Filter by region list
    getRegions: builder.query({
      query: () => "/filters/region/",
      providesTags: ["Region"],
    }),

    // Filter by theme list
    getThemes: builder.query({
      query: () => "/filters/theme/",
      providesTags: ["Theme"],
    }),

    // Filter by theoretical list
    getTheoreticals: builder.query({
      query: () => "/filters/theoretical/",
      providesTags: ["Theoretical"],
    }),

    // Filter by type-of-content list
    getTypeOfContents: builder.query({
      query: () => "/filters/type-of-content/",
      providesTags: ["TypeOfContent"],
    }),
    
    // === Week's highlights ===
    getHighlightedContents: builder.query({
      query: () => "/highlighted-contents/",
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
    // GET FEATURED (Highlighted) ARTICLES
    getHighlightedArticles: builder.query({
      query: () => `/highlighted-articles/`,
      providesTags: ["contents"],
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
    // === GET RELATED CONTENTS ===
    getRelatedContents: builder.query({
      query: (id) => `/related-content/?content_id=${id}`,
    }),
    // GET RELATED ARTICLES
    getRelatedArticles: builder.query({
      query: (id) => `/article/related-contents/${id}/`,
      providesTags: ["article"],
    }),

    // View count for Content
    recordContentView: builder.mutation({
      query: (body) => ({
        url: "/click/content",
        method: "POST",
        body,
      }),
    }),

    // View count for Article
    recordArticleView: builder.mutation({
      query: (articleId) => ({
        url: "/click/article",
        method: "POST",
        body: { article_id: articleId },
      }),
    }),

    // View count for Article
    recordBlogView: builder.mutation({
      query: (body) => ({
        url: "/click/blog",
        method: "POST",
        body, // { blog: id }
      }),
    }),

    // === BLOG (Vaults) CONTENTS ===
    getBlogContents: builder.query({
      query: () => "/blog/contents/list/",
      providesTags: ["blogContents"],
    }),

    // ✅ GET FEATURED (Highlighted) BLOGS
    getHighlightedBlogs: builder.query({
      query: () => `/highlighted-blogs/`,
      providesTags: ["contents"],
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
  useGetContributionsQuery,
  useGetCountriesQuery,
  useGetFunctionsQuery,
  useGetGenresQuery,
  useGetLanguagesQuery,
  useGetMovementsQuery,
  useGetPeriodsQuery,
  useGetRegionsQuery,
  useGetThemesQuery,
  useGetTheoreticalsQuery,
  useGetTypeOfContentsQuery,
  useGetHighlightedContentsQuery,
  useSendContactMessageMutation,
  useLikeContentMutation,
  useGetAboutUsQuery,
  useGetCoreValuesQuery,
  useGetArticleContentsQuery,
  useGetArticleContentByIdQuery,
  useGetHighlightedArticlesQuery,
  useLikeArticleMutation,
  useGetRelatedContentsQuery,
  useGetRelatedArticlesQuery,
  useRecordContentViewMutation,
  useRecordArticleViewMutation,
  useRecordBlogViewMutation,
  useGetBlogContentsQuery,
  useGetHighlightedBlogsQuery,
  useGetBlogContentByIdQuery,
  useLikeBlogMutation,
  useGetRelatedBlogsQuery,
  useGetPopularTagsQuery,
  useSubscribeEmailMutation,
  useGetPrivacyPolicyQuery,
  useGetTermsQuery,
} = authApi;
