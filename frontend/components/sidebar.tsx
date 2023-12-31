import {cn} from "@/lib/utils"
import {Button} from "@/components/ui/button"
import {ScrollArea} from "@/components/ui/scroll-area"

import {Playlist} from "@/data/playlists"
import { NavLink } from "react-router-dom"

interface SidebarProps extends React.HTMLAttributes<HTMLDivElement> {
    playlists: Playlist[]
}

export function Sidebar({className, playlists}: SidebarProps) {
    return (
        <div className={cn(className)}>
            <div className="space-y-4 py-2">
                <div className="px-3 py-2">
                    <div className="space-y-1">
                        <NavLink
                            key={"/about"}
                            to={"/about"}
                        >
                            <Button variant="secondary" className="w-full justify-start">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="mr-2 h-4 w-4"
                                >
                                    <circle cx="12" cy="12" r="10"/>
                                    <polygon points="10 8 16 12 10 16 10 8"/>
                                </svg>
                                Notes
                            </Button>
                        </NavLink>
                    </div>
                </div>
                <div className="py-2">
                    <h2 className="relative px-7 text-lg font-semibold tracking-tight">
                        Tags
                    </h2>
                    <ScrollArea className="h-[300px] px-1">
                        <div className="space-y-1 p-2">
                            {/*{playlists?.map((playlist, i) => (*/}
                            {/*    <Button*/}
                            {/*        key={`${playlist}-${i}`}*/}
                            {/*        variant="ghost"*/}
                            {/*        className="w-full justify-start font-normal"*/}
                            {/*    >*/}
                            {/*        <svg*/}
                            {/*            xmlns="http://www.w3.org/2000/svg"*/}
                            {/*            viewBox="0 0 24 24"*/}
                            {/*            fill="none"*/}
                            {/*            stroke="currentColor"*/}
                            {/*            strokeWidth="2"*/}
                            {/*            strokeLinecap="round"*/}
                            {/*            strokeLinejoin="round"*/}
                            {/*            className="mr-2 h-4 w-4"*/}
                            {/*        >*/}
                            {/*            <path d="M21 15V6"/>*/}
                            {/*            <path d="M18.5 18a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z"/>*/}
                            {/*            <path d="M12 12H3"/>*/}
                            {/*            <path d="M16 6H3"/>*/}
                            {/*            <path d="M12 18H3"/>*/}
                            {/*        </svg>*/}
                            {/*        {playlist}*/}
                            {/*    </Button>*/}
                            {/*))}*/}
                        </div>
                    </ScrollArea>
                </div>
            </div>
        </div>
    )
}
