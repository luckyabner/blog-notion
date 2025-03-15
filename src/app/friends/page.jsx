import { Users } from 'lucide-react';
import { Code } from 'lucide-react';
import PageHeader from '@/components/PageHeader';
import { Suspense } from 'react';
import ListSkeleton from '@/components/ListSkeleton';
import FriendsList from '@/features/friends/components/FriendsList';
import { fetchFriends } from '@/features/friends/server/friends';
import { CACHE_TIME } from '@/config';

export const metadata = {
	title: "Friends | Abner's Blog",
};

export const revalidate = CACHE_TIME;

async function FriendsContainer() {
	const friends = await fetchFriends();

	return <FriendsList friends={friends} />;
}

export default function FriendsPage() {
	return (
		<main className="min-h-screen px-4">
			<PageHeader title={'Friends'} />

			{/* Friends Grid */}
			<div className=" mx-auto px-4 pb-16">
				<Suspense fallback={<ListSkeleton />}>
					<FriendsContainer />
				</Suspense>

				{/* 添加友链和我的网站信息 */}
				<div className="mt-16 space-y-4">
					{/* 添加友链 */}
					<section className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 p-8">
						<div className="flex items-center gap-3 mb-6">
							<div className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-lg">
								<Users className="h-6 w-6 text-blue-600 dark:text-blue-400" />
							</div>
							<h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100">添加友链</h3>
						</div>

						<div className="space-y-4">
							<p className="text-gray-600 dark:text-gray-300">
								如果您想要添加友链，请确保您的网站：
							</p>
							<ul className="space-y-2 text-gray-600 dark:text-gray-300">
								<li className="flex items-center gap-2">
									<div className="h-1.5 w-1.5 rounded-full bg-blue-500 dark:bg-blue-400"></div>
									网站内容积极向上，符合法律法规
								</li>
								<li className="flex items-center gap-2">
									<div className="h-1.5 w-1.5 rounded-full bg-blue-500 dark:bg-blue-400"></div>
									站点稳定，加载速度正常
								</li>
								<li className="flex items-center gap-2">
									<div className="h-1.5 w-1.5 rounded-full bg-blue-500 dark:bg-blue-400"></div>
									网站有实质性的原创内容
								</li>
							</ul>
							<div className="pt-4">
								<a
									href="mailto:tiankong089@gmail.com"
									className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 font-medium"
								>
									<svg
										className="h-5 w-5"
										fill="none"
										viewBox="0 0 24 24"
										stroke="currentColor"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth={2}
											d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
										/>
									</svg>
									发送邮件申请
								</a>
							</div>
						</div>
					</section>

					{/* 我的网站信息 */}
					<section className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 p-8">
						<div className="flex items-center gap-3 mb-6">
							<div className="p-2 bg-purple-100 dark:bg-purple-900/30 rounded-lg">
								<Code className="h-6 w-6 text-purple-600 dark:text-purple-400" />
							</div>
							<h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100">
								我的网站信息
							</h3>
						</div>

						<div className="space-y-4">
							<div className="p-4 bg-gray-50 dark:bg-gray-900 rounded-lg font-mono text-sm">
								<div className="grid gap-3">
									<div className="grid grid-cols-[80px,1fr] gap-2">
										<span className="text-gray-500 dark:text-gray-400">name:</span>
										<span className="text-blue-600 dark:text-blue-400">Abner`s Blog</span>
									</div>
									<div className="grid grid-cols-[80px,1fr] gap-2">
										<span className="text-gray-500 dark:text-gray-400">link:</span>
										<a
											href="https://abner.top"
											target="_blank"
											rel="noopener noreferrer"
											className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 truncate"
										>
											https://blog.abnerz6.top
										</a>
									</div>
									<div className="grid grid-cols-[80px,1fr] gap-2">
										<span className="text-gray-500 dark:text-gray-400">avatar:</span>
										<span className="text-blue-600 dark:text-blue-400 break-all">
											https://abnerblog-1317606226.cos.ap-nanjing.myqcloud.com/202501092104977.jpg
										</span>
									</div>
									<div className="grid grid-cols-[80px,1fr] gap-2">
										<span className="text-gray-500 dark:text-gray-400">desc:</span>
										<span className="text-blue-600 dark:text-blue-400">日拱一卒，功不唐捐</span>
									</div>
								</div>
							</div>
							<div className="pt-2 text-sm text-gray-500 dark:text-gray-400">
								复制以上信息进行友链配置
							</div>
						</div>
					</section>
				</div>
			</div>
		</main>
	);
}
