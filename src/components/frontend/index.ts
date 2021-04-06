import loadable from '../../utils/loadable';

export const Search: () => JSX.Element = loadable(() => import('./search'));
