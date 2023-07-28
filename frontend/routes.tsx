import HelloReactView from '@/views/helloreact/HelloReactView';
import MainLayout from '@/views/MainLayout';
import { createBrowserRouter, IndexRouteObject, NonIndexRouteObject, useMatches } from 'react-router-dom';
import AboutView from '@/views/about/AboutView';

export type MenuProps = Readonly<{
    icon?: string;
    title?: string;
}>;

export type ViewMeta = Readonly<{ handle?: MenuProps }>;

type Override<T, E> = Omit<T, keyof E> & E;

export type IndexViewRouteObject = Override<IndexRouteObject, ViewMeta>;
export type NonIndexViewRouteObject = Override<
    Override<NonIndexRouteObject, ViewMeta>,
    {
        children?: ViewRouteObject[];
    }
>;
export type ViewRouteObject = IndexViewRouteObject | NonIndexViewRouteObject;

type RouteMatch = ReturnType<typeof useMatches> extends (infer T)[] ? T : never;

export type ViewRouteMatch = Readonly<Override<RouteMatch, ViewMeta>>;

export const useViewMatches = useMatches as () => readonly ViewRouteMatch[];

export const routes: readonly ViewRouteObject[] = [
    {
        element: <MainLayout />,
        handle: { icon: 'null', title: 'Main' },
        children: [
            { path: '/', element: <HelloReactView />, handle: { icon: 'la la-globe', title: 'Hello React' } },
            { path: '/about', element: <AboutView />, handle: { icon: 'la la-file', title: 'About' } },
        ],
    },
];

const router = createBrowserRouter([...routes]);
export default router;
