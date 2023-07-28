import {AppLayout} from '@hilla/react-components/AppLayout.js';
import {DrawerToggle} from '@hilla/react-components/DrawerToggle.js';
import {useViewMatches} from 'Frontend/routes.js';
import {Sidebar} from '@/components/sidebar';
import {playlists} from '@/data/playlists';
import React from 'react';
import {UserNav} from '@/components/usernav';
import {Search} from '@/components/search';

export default function MenuOnLeftLayout() {
    const matches = useViewMatches();

    const currentTitle = matches[matches.length - 1]?.handle?.title ?? 'Unknown';

    return (
        <AppLayout className="block h-full">
            <header className="bg-white" slot="drawer">
                <Sidebar playlists={playlists}/>
            </header>
            <footer className="bg-white" slot="drawer"/>

            <DrawerToggle className="bg-white" slot="navbar" aria-label="Menu toggle"></DrawerToggle>
            <h2 slot="navbar" className="text-l m-0 w-full">
                <div className="flex h-16 justify-between px-4">
                    <div className="flex items-center">
                        {currentTitle}
                    </div>
                    <div className="ml-auto flex items-center space-x-4">
                        <Search />
                        <UserNav />
                    </div>
                </div>
            </h2>
        </AppLayout>
    );
}
