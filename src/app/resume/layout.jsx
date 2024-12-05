import React from 'react'
import "../globals.css";
import { SpeedInsights } from "@vercel/speed-insights/next"
import { OpenPanelComponent } from "@openpanel/nextjs";

export default function layout({ children }) {
  return (
    <html lang="zh-CN">
      <body className="min-h-screen flex flex-col font-mono">
        <main className="flex-1">
          {children}
        </main>
        <OpenPanelComponent
          clientId="780a8a43-9efb-4bf4-aa2b-645145330bf8"
          trackScreenViews={true}
        />
        <SpeedInsights />
      </body>
    </html>
  )
}
