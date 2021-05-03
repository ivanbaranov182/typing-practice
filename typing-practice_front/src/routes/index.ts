import { RouteProps } from 'react-router-dom';
import { MainLayout } from '../layouts/MainLayout';
import { ContentOnlyLayout } from '../layouts/ContentOnlyLayout';

import { Home } from '../views/Home';
import { Lesson } from '../views/Lesson';
import { SignUp } from '../views/SignUp';
import { SignIn } from '../views/SignIn';
import { ForgotPassword } from '../views/ForgotPassword';
import { NotFound } from '../views/NotFound';
import React from 'react';

export interface IRouteProps extends RouteProps {
  title: string;
  layout: React.FC;
}

export const authRoutes: IRouteProps[] = [
  {
    path: '/',
    component: Home,
    exact: true,
    title: 'Home',
    layout: MainLayout,
  },
  {
    path: '/lesson/:id',
    component: Lesson,
    exact: true,
    title: 'Lesson',
    layout: MainLayout,
  },
];

export const unAuthRoutes: IRouteProps[] = [
  {
    path: '/',
    component: SignUp,
    exact: true,
    title: 'SignUp',
    layout: ContentOnlyLayout,
  },
  {
    path: '/signup',
    component: SignUp,
    exact: true,
    title: 'SignUp',
    layout: ContentOnlyLayout,
  },
  {
    path: '/signin',
    component: SignIn,
    title: 'SignIn',
    layout: ContentOnlyLayout,
  },
  {
    path: '/forgot-password',
    component: ForgotPassword,
    title: 'ForgotPassword',
    layout: ContentOnlyLayout,
  },
];

export const commonRoutes: IRouteProps[] = [
  {
    path: '*',
    component: NotFound,
    title: 'Page not found',
    layout: ContentOnlyLayout,
  },
];
