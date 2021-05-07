import React from 'react';
import { RouteProps } from 'react-router-dom';
import { MainLayout } from '../layouts/MainLayout';
import { ContentOnlyLayout } from '../layouts/ContentOnlyLayout';

import { Home } from '../views/Home';
import { Lesson } from '../views/Lesson';
import { SignUp } from '../views/SignUp';
import { SignIn } from '../views/SignIn';
import { ForgotPassword } from '../views/ForgotPassword';
import { NotFound } from '../views/NotFound';
import {
  ADMIN_ROUTE,
  SIGN_IN_ROUTE,
  SIGN_UP_ROUTE,
  HOME_ROUTE,
  LESSON_GROUP_ROUTE,
  LESSON_ROUTE
} from '../utils/routes';

export interface IRouteProps extends RouteProps {
  title: string;
  layout: React.FC;
}

export const authRoutes: IRouteProps[] = [
  {
    path: HOME_ROUTE,
    component: Home,
    exact: true,
    title: 'Home',
    layout: MainLayout
  },
  {
    path: `${LESSON_ROUTE}/:id`,
    component: Lesson,
    exact: true,
    title: 'LessonGroup',
    layout: MainLayout
  },
  {
    path: `${LESSON_GROUP_ROUTE}/:id`,
    component: Home,
    exact: true,
    title: 'Lesson',
    layout: MainLayout
  },
  {
    path: ADMIN_ROUTE,
    component: Home,
    exact: true,
    title: 'Home',
    layout: MainLayout
  }
];

export const unAuthRoutes: IRouteProps[] = [
  {
    path: HOME_ROUTE,
    component: Home,
    exact: true,
    title: 'Home',
    layout: MainLayout
  },
  {
    path: SIGN_UP_ROUTE,
    component: SignUp,
    exact: true,
    title: 'SignUp',
    layout: ContentOnlyLayout
  },
  {
    path: '/signin',
    component: SignIn,
    title: 'SignIn',
    layout: ContentOnlyLayout
  },
  {
    path: '/forgot-password',
    component: ForgotPassword,
    title: 'ForgotPassword',
    layout: ContentOnlyLayout
  }
];

export const commonRoutes: IRouteProps[] = [
  {
    path: '*',
    component: NotFound,
    title: 'Page not found',
    layout: ContentOnlyLayout
  }
];
