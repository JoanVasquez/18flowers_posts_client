# PRODUCTION DEMO

To check it out, follow the next link
https://practical-ride-59af26.netlify.app/

---

# INSTALLATIONS

Run the next command in the root directory to install all of the dependencies

    * npm i

---

# HOW TO RUN THE APP

Before running the client side app, it is necessary to run the server side. Run the next commands to run or to start testing the app

    * npm start
    * npm run test

---

# STRUCTURE

    * components
        * DataTable.tsx
        * Filter.tsx
        * Form.tsx
        * Modal.tsx
        * Pagination.tsx
    * constants
        * APP_CONST.ts
        * BASE_URL.ts
    * integrations
        * actions
            * pagination.action.test.ts
            * post.action.test.ts
        * services
            * pagination.service.test.ts
            * post.service.test.ts
    * models
        * Post.ts
    * services
        * PaginationService.ts
        * PostService.ts
    * store
        * actions
            * paginationAction.ts
            * paginationActionType.ts
            * postAction.ts
            * postActionType.ts
        * reducers
            * pagination
                * paginationReducer.ts
            * posts
                * postReducer.ts
            * allReducers.ts
        * store.ts
    * util
        * actionCreator.ts
        * reducerCreator.ts
        * filterUtil.js
        * paginationUtil.js
    * App.tsx
    * index.tsx
