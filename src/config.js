export const SITE = {
  website: "https://blog.luckyabner.top/",
  author: "Abner",
  title: "Abner 's Blog",
  desc: "Welcome to my site!",
  ogImage: "",
  lightAndDarkMode: true,
  postPerPage: 5,
  avatar:
    "https://abnerblog-1317606226.cos.ap-nanjing.myqcloud.com/202501092104977.jpg",
  motto: "日拱一卒，功不唐捐",
};

export const LOGO_IMAGE = {
  enable: true,
  svg: true,
  width: 216,
  height: 46,
  path: "/public/logo.ico",
};

export const SOCIALS = [
  {
    name: "Github",
    href: "https://github.com/luckyabner",
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
    name: "Rss",
    href: "/rss.xml",
    linkTitle: `${SITE.title} RSS Feed`,
    active: true,
  },
];
