import "./index.css";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Contact, Home, Travel } from "./pages";

import React from "react";
import ReactDOM from "react-dom/client";
import SiteContainer from "./SiteContainer";
import reportWebVitals from "./reportWebVitals";
import { allPosts, travelPosts, featuredPosts } from "./posts";
import { Post } from "./components";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <SiteContainer>
        <Routes>
          <Route index element={<Home />} />
          <Route path="contact" element={<Contact />} />
          <Route path="travel">
            {travelPosts.map((post) => {
              console.log(post);
              // We don't have any props to pass to the post component, but we could in the future.
              return (
                <Route
                  key={post.postId}
                  path={post.postId}
                  element={<Post post={post} />}
                />
              );
            })}
            <Route index element={<Travel />} />
          </Route>
          {featuredPosts.map((post) => {
            return (
              <Route
                key={post.postId}
                path={`${post.postId}`}
                element={<Post post={post} />}
              />
            );
          })}
        </Routes>
      </SiteContainer>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
