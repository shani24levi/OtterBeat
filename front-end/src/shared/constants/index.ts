import { backend, creator, mobile, web } from '../../assets';

export interface NavLinks {
  id: string;
  title: string;
  path: string;
}

export interface Services {
  title: string;
  icon: string;
}

export const navLinksPublic: NavLinks[] = [
  {
    id: 'home',
    title: 'Home',
    path: '/',
  },
  {
    id: 'albums',
    title: 'Albums',
    path: '/albums',
  },
];

export const navLinksLogged: NavLinks[] = [
  {
    id: 'dashboard',
    title: 'Home',
    path: '/',
  },
  {
    id: 'albums',
    title: 'Albums',
    path: '/albums',
  },
  {
    id: 'favorites',
    title: 'Favorites',
    path: '/favorites',
  },
  {
    id: 'likes',
    title: 'Likes',
    path: '/likes',
  },
];

export const services: Services[] = [
  {
    title: 'Web Developer',
    icon: web,
  },
  {
    title: 'React Native Developer',
    icon: mobile,
  },
  {
    title: 'Backend Developer',
    icon: backend,
  },
  {
    title: 'Content Creator',
    icon: creator,
  },
];
