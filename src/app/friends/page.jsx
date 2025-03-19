import { Users } from "lucide-react";
import { Code } from "lucide-react";
import PageHeader from "@/components/PageHeader";
import { Suspense } from "react";
import ListSkeleton from "@/components/ListSkeleton";
import FriendsList from "@/features/friends/components/FriendsList";
import { fetchFriends } from "@/features/friends/server/friends";
import { SITE } from "@/config";
import Link from "next/link";

export const metadata = {
  title: "Friends | Abner's Blog",
};

export const revalidate = 86400;

async function FriendsContainer() {
  const friends = await fetchFriends();

  return <FriendsList friends={friends} />;
}

export default function FriendsPage() {
  return (
    <main className="min-h-screen px-4">
      <PageHeader title={"Friends"} />

      {/* Friends Grid */}
      <div className="mx-auto px-4 pb-16">
        <Suspense fallback={<ListSkeleton />}>
          <FriendsContainer />
        </Suspense>

        {/* 添加友链和我的网站信息 */}
        <div className="mt-16 space-y-4">
          {/* 添加友链 */}
          <section className="rounded-xl border border-border bg-card p-8 shadow-sm">
            <div className="mb-6 flex items-center gap-3">
              <div className="rounded-lg bg-blue-100 p-2 dark:bg-blue-900/30">
                <Users className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold text-card-foreground">
                添加友链
              </h3>
            </div>

            <div className="space-y-4 text-card-foreground">
              <p>如果您想要添加友链，请确保您的网站：</p>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <div className="h-1.5 w-1.5 rounded-full bg-accent-foreground"></div>
                  网站内容积极向上，符合法律法规
                </li>
                <li className="flex items-center gap-2">
                  <div className="h-1.5 w-1.5 rounded-full bg-accent-foreground"></div>
                  站点稳定，加载速度正常
                </li>
                <li className="flex items-center gap-2">
                  <div className="h-1.5 w-1.5 rounded-full bg-accent-foreground"></div>
                  网站有实质性的原创内容
                </li>
              </ul>
              <div className="pt-4">
                <a
                  href="mailto:tiankong089@gmail.com"
                  className="hover:text-hover inline-flex items-center gap-2 font-medium text-accent-foreground"
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
          <section className="rounded-xl border border-border bg-card p-8 shadow-sm">
            <div className="mb-6 flex items-center gap-3">
              <div className="rounded-lg bg-purple-100 p-2 dark:bg-purple-900/30">
                <Code className="h-6 w-6 text-purple-600 dark:text-purple-400" />
              </div>
              <h3 className="text-xl font-semibold text-card-foreground">
                我的网站信息
              </h3>
            </div>

            <div className="space-y-4">
              <div className="rounded-lg bg-accent p-4 font-mono text-sm">
                <div className="grid gap-3">
                  <div className="grid grid-cols-[80px,1fr] gap-2">
                    <span className="text-muted-foreground">name:</span>
                    <span className="text-foreground">{SITE.title}</span>
                  </div>
                  <div className="grid grid-cols-[80px,1fr] gap-2">
                    <span className="text-muted-foreground">link:</span>
                    <Link
                      href={SITE.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="truncate text-foreground"
                    >
                      {SITE.website}
                    </Link>
                  </div>
                  <div className="grid grid-cols-[80px,1fr] gap-2">
                    <span className="text-muted-foreground">avatar:</span>
                    <span className="break-all text-foreground">
                      {SITE.avatar}
                    </span>
                  </div>
                  <div className="grid grid-cols-[80px,1fr] gap-2">
                    <span className="text-muted-foreground">desc:</span>
                    <span className="text-foreground">{SITE.motto}</span>
                  </div>
                </div>
              </div>
              <div className="pt-2 text-sm text-muted-foreground">
                复制以上信息进行友链配置
              </div>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
