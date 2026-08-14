import React, { useState } from 'react';
import { X, Copy, Check, FileCode2, Terminal, Download, Sparkles } from 'lucide-react';

interface StaticExportModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const StaticExportModal: React.FC<StaticExportModalProps> = ({ isOpen, onClose }) => {
  const [activeTab, setActiveTab] = useState<'guide' | 'html' | 'workflow'>('guide');
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const githubPagesWorkflow = `# .github/workflows/deploy.yml
name: Deploy to GitHub Pages

on:
  push:
    branches: ["main"]
  workflow_dispatch:

permissions:
  contents: read
  pages: write
  id-token: write

concurrency:
  group: "pages"
  cancel-in-progress: false

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v4
      - name: Setup Node
        uses: actions/setup-node@v4
        with:
          node-version: "20"
      - name: Install dependencies
        run: npm ci || npm install
      - name: Build static site
        run: npm run build
      - name: Upload artifact
        uses: actions/upload-pages-artifact@v3
        with:
          path: ./dist

  deploy:
    environment:
      name: github-pages
      url: \${{ steps.deployment.outputs.page_url }}
    runs-on: ubuntu-latest
    needs: build
    steps:
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v4`;

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
      <div className="relative w-full max-w-4xl max-h-[90vh] bg-black bento-box-cyan p-6 sm:p-8 flex flex-col shadow-[0_0_40px_rgba(0,255,255,0.3)]">
        
        {/* Header */}
        <div className="flex items-center justify-between pb-4 border-b border-[#222]">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-black border border-[#00FFFF] text-[#00FFFF]">
              <FileCode2 className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-display font-bold text-xl text-white uppercase tracking-wider">
                GitHub Pages Static Deployment
              </h3>
              <p className="text-xs font-mono-code text-[#94a3b8]">
                Deploy to bmoreonrails.github.io or any static web host
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 bg-black text-[#94a3b8] hover:text-[#FF00FF] border border-[#333] transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab Selection */}
        <div className="flex gap-2 my-4 border-b border-[#222] pb-2 text-xs font-mono-code">
          <button
            onClick={() => setActiveTab('guide')}
            className={`px-4 py-2 border font-bold uppercase transition-colors ${
              activeTab === 'guide' 
                ? 'bg-[#00FFFF] text-black border-[#00FFFF]' 
                : 'bg-black text-[#94a3b8] border-[#333] hover:text-white'
            }`}
          >
            01 // Deployment Steps
          </button>
          <button
            onClick={() => setActiveTab('workflow')}
            className={`px-4 py-2 border font-bold uppercase transition-colors ${
              activeTab === 'workflow' 
                ? 'bg-[#00FFFF] text-black border-[#00FFFF]' 
                : 'bg-black text-[#94a3b8] border-[#333] hover:text-white'
            }`}
          >
            02 // GitHub Actions Workflow
          </button>
        </div>

        {/* Content Area */}
        <div className="flex-1 overflow-y-auto pr-2 space-y-4 font-mono-code text-xs text-[#cbd5e1]">
          {activeTab === 'guide' && (
            <div className="space-y-4">
              <div className="p-4 bg-[#050505] bento-box-magenta space-y-3">
                <div className="text-sm font-bold text-[#FF00FF] uppercase">
                  Option A: Automated GitHub Actions (Recommended)
                </div>
                <ol className="list-decimal list-inside space-y-2 text-[#cbd5e1] leading-relaxed">
                  <li>In your repository (<code className="text-[#00FFFF]">bmoreonrails.github.io</code>), create the file <code className="text-[#00FFFF]">.github/workflows/deploy.yml</code>.</li>
                  <li>Copy the GitHub Actions workflow from Tab 02.</li>
                  <li>In repository settings under <strong>Settings &gt; Pages</strong>, set <strong>Source</strong> to <strong>GitHub Actions</strong>.</li>
                  <li>Push your commits to <code className="text-[#00FFFF]">main</code>. GitHub Pages will build <code className="text-[#00FFFF]">npm run build</code> and publish the <code className="text-[#00FFFF]">dist/</code> folder automatically.</li>
                </ol>
              </div>

              <div className="p-4 bg-[#050505] bento-box-green space-y-3">
                <div className="text-sm font-bold text-[#39FF14] uppercase">
                  Option B: Local Static Build
                </div>
                <p className="text-[#cbd5e1] leading-relaxed">
                  Run <code className="text-white bg-black px-1.5 py-0.5 border border-[#333]">npm run build</code> in the project directory. The bundled production assets (<code className="text-[#00FFFF]">dist/index.html</code>, JS, CSS, images) will be compiled into the <code className="text-[#00FFFF]">dist/</code> directory, completely standalone and ready to copy to your static repo root.
                </p>
              </div>
            </div>
          )}

          {activeTab === 'workflow' && (
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs text-[#00FFFF]">.github/workflows/deploy.yml</span>
                <button
                  onClick={() => handleCopy(githubPagesWorkflow)}
                  className="flex items-center gap-1.5 px-3 py-1 bg-black hover:bg-[#111] text-[#39FF14] border border-[#39FF14] text-[11px]"
                >
                  {copied ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copied ? 'COPIED TO CLIPBOARD' : 'COPY WORKFLOW YAML'}</span>
                </button>
              </div>

              <pre className="p-4 bg-[#050505] border border-[#222] text-[11px] text-[#00FFFF] overflow-x-auto leading-relaxed">
                {githubPagesWorkflow}
              </pre>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="pt-4 mt-4 border-t border-[#222] flex items-center justify-between">
          <span className="text-[10px] font-mono-code text-[#64748b]">
            BMORE ON RAILS // GITHUB PAGES PIPELINE
          </span>
          <button
            onClick={onClose}
            className="px-6 py-2 bg-[#FF00FF] hover:bg-white text-black font-black font-mono-code text-xs uppercase transition-all"
          >
            CLOSE INSPECTOR
          </button>
        </div>

      </div>
    </div>
  );
};

