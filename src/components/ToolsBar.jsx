import { Clapperboard } from 'lucide-react';
import { Flame } from 'lucide-react';
import { Github } from 'lucide-react';
import Link from 'next/link';
import React from 'react';
import ToggleTheme from './ToggleTheme';

export default function ToolsBar() {
	return (
		<div className="flex items-center space-x-2">
			<Link
				href={'/movies'}
				className="rounded-full p-2 hover:text-sky-700 transition-transform duration-200 hover:rotate-12"
				title="Threads"
			>
				<Clapperboard />
			</Link>
			<Link
				href={'/projects'}
				className="rounded-full p-2  hover:text-sky-700 transition-transform duration-200 hover:rotate-12"
				title="Projects"
			>
				<Flame />
			</Link>
			<ToggleTheme />
		</div>
	);
}
