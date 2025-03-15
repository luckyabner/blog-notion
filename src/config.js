export const SITE = {
	website: 'https://blog.abnerz6.top/',
	author: 'Abner',
	title: "Abner 's Blog",
	desc: 'Welcome to my site!',
	ogImage: '',
	lightAndDarkMode: true,
	postPerPage: 5,
};

export const LOGO_IMAGE = {
	enable: true,
	svg: true,
	width: 216,
	height: 46,
	path: '/public/logo.ico',
};

export const SOCIALS = [
	{
		name: 'Github',
		href: 'https://github.com/cdt3211',
		linkTitle: ` ${SITE.author} on Github`,
		active: true,
	},
	// {
	//   name: 'Twitter',
	//   href: 'https://twitter.com/AbnerTy1',
	//   linkTitle: `${SITE.author} on Twitter`,
	//   active: true,
	// },
	{
		name: 'Rss',
		href: '/rss.xml',
		linkTitle: `${SITE.title} RSS Feed`,
		active: true,
	},
];
