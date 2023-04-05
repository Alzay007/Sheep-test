import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";

export const productAPI = createApi({
  reducerPath: 'productAPI',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://dummyjson.com' }),
  endpoints: (build) => ({
    fetchAllProducts: build.query({
      query: () => ({
        url: '/products'
      })
    })
  })
})