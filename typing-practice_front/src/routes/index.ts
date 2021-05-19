import React from 'react';
import { RouteProps } from 'react-router-dom';
import { MainLayout } from '../layouts/MainLayout';
import { ContentOnlyLayout } from '../layouts/ContentOnlyLayout';

import { AdminMain } from '../views/AdminMain';
import { AdminSection } from '../views/AdminSection';

import { Home } from '../views/Home';
import { Lesson } from '../views/Lesson';
import { Section } from '../views/Section';
import { Sections } from '../views/Sections';
import { SignUp } from '../views/SignUp';
import { SignIn } from '../views/SignIn';
import { ForgotPassword } from '../views/ForgotPassword';
import { Contacts } from '../views/Contacts';
import { NotFound } from '../views/NotFound';
import {
  ADMIN_ROUTE,
  ADMIN_SECTION,
  SIGN_IN_ROUTE,
  SIGN_UP_ROUTE,
  HOME_ROUTE,
  SECTIONS_ROUTE,
  SECTION_ROUTE,
  LESSON_ROUTE,
  CONTACTS_ROUTE
} from '../utils/routes';

export interface IRouteProps extends RouteProps {
  title: string;
  layout: React.FC;
}

export const authRoutes: IRouteProps[] = [
  {
    path: ADMIN_ROUTE,
    component: AdminMain,
    exact: true,
    title: 'Home',
    layout: MainLayout
  },
  {
    path: `${ADMIN_SECTION}/:id`,
    component: AdminSection,
    exact: true,
    title: 'AdminSection',
    layout: MainLayout
  }
];

export const unAuthRoutes: IRouteProps[] = [
  {
    path: SIGN_UP_ROUTE,
    component: SignUp,
    exact: true,
    title: 'SignUp',
    layout: ContentOnlyLayout
  },
  {
    path: SIGN_IN_ROUTE,
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
    title: 'Lesson',
    layout: MainLayout
  },
  {
    path: SECTIONS_ROUTE,
    component: Sections,
    exact: true,
    title: 'Sections',
    layout: MainLayout
  },
  {
    path: `${SECTION_ROUTE}/:id`,
    component: Section,
    exact: true,
    title: 'Section',
    layout: MainLayout
  },
  {
    path: CONTACTS_ROUTE,
    component: Contacts,
    title: 'Contacts',
    layout: MainLayout
  }
  // {
  //   path: '*',
  //   component: NotFound,
  //   title: 'Page not found',
  //   layout: ContentOnlyLayout
  // }
];
