"use client";
import Link from "next/link";
//Notes:
//we dont need a button for results right now 
export default function NavigationButtons(){
    return(
        <nav className="flex gap-4">
            <Link href="/"> 
                <button className="text-sm text-slate-600 hover:text-slate-900">
                    Home
                </button>
            </Link>
            <Link href="/about"> 
                <button className="text-sm text-slate-600 hover:text-slate-900">
                    About
                </button>
            </Link>
            <Link href="/assessment">
                <button className="text-sm text-slate-600 hover:text-slate-900">
                   Start Assessment
                </button>
            </Link>
            <Link href="/news">
                <button className="text-sm text-slate-600 hover:text-slate-900">
                    Latest News
                </button>
            </Link>
            {/* <Link href="/results">
                <button className="text-sm text-slate-600 hover:text-slate-900">
                    ??Results??
                </button>
            </Link> */}
            <Link href="/screenOptions">
                <button className="text-sm text-slate-600 hover:text-slate-900">
                    Screening Options
                </button>
            </Link>
        </nav>
    );
}

