import React, { lazy, Suspense } from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Layout from './components/layout/Layout';
import LoadingScreen from './components/layout/LoadingScreen';

// Lazy-loaded route components for high performance and code-splitting
const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const Services = lazy(() => import('./pages/Services'));
const RoadFreight = lazy(() => import('./pages/RoadFreight'));
const Warehousing = lazy(() => import('./pages/Warehousing'));
const ExpressDelivery = lazy(() => import('./pages/ExpressDelivery'));
const HeavyHaulage = lazy(() => import('./pages/HeavyHaulage'));
const Fleet = lazy(() => import('./pages/Fleet'));
const Tracking = lazy(() => import('./pages/Tracking'));
const Quote = lazy(() => import('./pages/Quote'));
const Blog = lazy(() => import('./pages/Blog'));
const BlogPost = lazy(() => import('./pages/BlogPost'));
const Contact = lazy(() => import('./pages/Contact'));
const NotFound = lazy(() => import('./pages/NotFound'));

// Wrapper for lazy components with branded suspense loader
const withSuspense = (Component) => (
  <Suspense fallback={<LoadingScreen />}>
    <Component />
  </Suspense>
);

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: withSuspense(Home),
      },
      {
        path: 'about',
        element: withSuspense(About),
      },
      {
        path: 'services',
        element: withSuspense(Services),
      },
      {
        path: 'services/road-freight',
        element: withSuspense(RoadFreight),
      },
      {
        path: 'services/warehousing',
        element: withSuspense(Warehousing),
      },
      {
        path: 'services/express-delivery',
        element: withSuspense(ExpressDelivery),
      },
      {
        path: 'services/heavy-haulage',
        element: withSuspense(HeavyHaulage),
      },
      {
        path: 'fleet',
        element: withSuspense(Fleet),
      },
      {
        path: 'tracking',
        element: withSuspense(Tracking),
      },
      {
        path: 'quote',
        element: withSuspense(Quote),
      },
      {
        path: 'blog',
        element: withSuspense(Blog),
      },
      {
        path: 'blog/:slug',
        element: withSuspense(BlogPost),
      },
      {
        path: 'contact',
        element: withSuspense(Contact),
      },
      {
        path: '*',
        element: withSuspense(NotFound),
      },
    ],
  },
]);
