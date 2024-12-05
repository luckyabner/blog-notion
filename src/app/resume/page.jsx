import React from 'react';
import { Mail, Phone, MapPin, Award, Book } from 'lucide-react';
import { Github } from 'lucide-react';
import Link from 'next/link';

export default function ResumePage() {
  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg">
      {/* Personal Info Section */}
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-gray-800">Abner</h1>
        {/* <p className="text-gray-600">Web开发工程师</p> */}

        <div className="flex justify-center space-x-4 mt-4">
          {/* <div className="flex items-center">
            <Phone className="mr-2 text-blue-500" size={20} />
            <span>15690024496</span>
          </div> */}
          <div className="flex items-center">
            <Mail className="mr-2 text-blue-500" size={20} />
            <span>tiankong089@gmail.com</span>
          </div>
          <div className="flex items-center underline">
            <Github className="mr-2 text-blue-500" size={20} />
            <a href="https://github.com/cdt3211" target="_blank" rel="noopener noreferrer">GitHub</a>
          </div>
        </div>
      </div>

      {/* Education Section */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold border-b-2 border-blue-500 pb-2 mb-4">教育背景</h2>
        <div>
          <h3 className="font-bold text-xl">中国石油大学(北京)</h3>
          <p className="text-gray-600">软件工程 | 本科 | 2022-2026</p>
          <p className="text-gray-600">GPA: 23/123</p>
        </div>
      </div>

      {/* Skills Section */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold border-b-2 border-blue-500 pb-2 mb-4">技能清单</h2>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <h3 className="font-bold mb-2">前端开发</h3>
            <ul className="list-disc pl-5">
              <li>框架：NextJS, React</li>
              <li>样式：HTML, CSS, Tailwind, Sass</li>
              <li>语言：JavaScript</li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-2">其他技能</h3>
            <ul className="list-disc pl-5">
              <li>数据库：MySQL</li>
              <li>版本控制：Git</li>
              <li>编程语言：Python</li>
              {/* <li>AI技术：大模型应用</li> */}
            </ul>
          </div>
        </div>
      </div>

      {/* Projects Section */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold border-b-2 border-blue-500 pb-2 mb-4">项目经历</h2>
        <div>
          <h3 className="font-bold">团队项目</h3>
          <ul className="list-disc pl-5 mb-4">
            <li>
              <Link href={'https://github.com/cdt3211/YouXiang'} target='blank' className='underline'><strong>时光优享</strong></Link>：创新的好物分享平台，引入讯飞星火大模型对用户分享的贴文进行总结分析
            </li>
            <li>
              <Link href={'https://github.com/cdt3211/TravelPlatform'} target='blank' className='underline'><strong>中国旅游数据可视化平台</strong></Link>：用Echarts对全国旅游数据进行可视化分析
            </li>
            <li>
              <Link href={'https://github.com/sugarshop/chain-ads'} target='blank' className='underline'><strong>chain-ads</strong></Link>：基于TON链的去中心化广告合约投放系统
            </li>
          </ul>

          <h3 className="font-bold">个人项目</h3>
          <ul className="list-disc pl-5">
            <li>
              <Link href={'https://blog.abnerz6.top'} target='blank' className='underline'><strong>blog-notion</strong></Link>：基于NextJS和Notion开发的个人博客网站
            </li>
            <li>
              <Link href={'https://album.abnerz6.top'} target='blank' className='underline'><strong>album-next</strong></Link>：基于NextJS和腾讯云COS开发的相册展示网站
            </li>
            <li>
              <Link href={'https://divinate.abnerz6.top'} target='blank' className='underline'><strong>小六壬</strong></Link>：小六壬快速起卦，引入讯飞星火大模型针对用户问题对卦象进行分析
            </li>
          </ul>
        </div>
      </div>

      {/* Certificates and Awards */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold border-b-2 border-blue-500 pb-2 mb-4">证书与获奖经历</h2>
        <ul className="list-disc pl-5">
          <li>CET4英语等级证书</li>
          <li>CET6英语等级证书</li>
          <li>国家励志奖学金</li>
          <li>Adventure2024 黑客松主题一等奖</li>
        </ul>
      </div>

      {/* Footer */}
      <div className="text-center text-gray-600 italic">
        感谢您花时间阅读我的简历，期待能有机会和您共事。
      </div>
    </div>
  );
}
