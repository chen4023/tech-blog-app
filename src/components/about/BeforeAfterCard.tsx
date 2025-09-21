import React from 'react';
import { ExclamationIcon, CheckCircleIcon, ArrowDownIcon, TrendingUpIcon } from '@/components/icons';

interface ComparisonItem {
  label: string;
  before: string;
  after: string;
  improvement: string;
}

interface BeforeAfterCardProps {
  title: string;
  description: string;
  comparisons: ComparisonItem[];
}

export function BeforeAfterCard({ title, description, comparisons }: BeforeAfterCardProps) {
  return (
    <div className="bg-gradient-to-r from-pink-50 to-purple-50 border border-pink-200 rounded-xl p-8 mb-6">
      <div className="text-center mb-8">
        <h3 className="text-2xl font-bold text-slate-900 mb-3">
          {title}
        </h3>
        <p className="text-slate-600 leading-relaxed">
          {description}
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {comparisons.map((item, index) => (
          <div key={index} className="bg-white rounded-lg p-6 shadow-sm border border-slate-200">
            <h4 className="font-bold text-slate-900 mb-4 text-center">
              {item.label}
            </h4>

            <div className="space-y-4">
              {/* Before */}
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-red-100 rounded-full mb-2">
                  <ExclamationIcon className="w-6 h-6 text-red-600" />
                </div>
                <p className="text-sm text-red-600 font-medium mb-1">Before</p>
                <p className="text-slate-700 font-semibold">{item.before}</p>
              </div>

              {/* Arrow */}
              <div className="flex justify-center">
                <ArrowDownIcon className="w-6 h-6 text-pink-500" />
              </div>

              {/* After */}
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-green-100 rounded-full mb-2">
                  <CheckCircleIcon className="w-6 h-6 text-green-600" />
                </div>
                <p className="text-sm text-green-600 font-medium mb-1">After</p>
                <p className="text-slate-700 font-semibold">{item.after}</p>
              </div>
            </div>

            {/* Improvement Badge */}
            <div className="mt-4 text-center">
              <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-pink-100 text-pink-700">
                <TrendingUpIcon className="w-4 h-4 mr-1" />
                {item.improvement}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Summary */}
      <div className="mt-8 text-center">
        <div className="inline-flex items-center px-6 py-3 bg-pink-500 text-white rounded-full font-medium">
          <CheckCircleIcon className="w-5 h-5 mr-2" />
          20명이 함께 개발해도 5명이 개발하는 것처럼 매끄러운 협업 환경 구축
        </div>
      </div>
    </div>
  );
}
