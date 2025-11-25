'use client'

import { useState, useEffect } from 'react'
import DOMPurify from 'isomorphic-dompurify'

interface MarkdownRendererProps {
  content: string
}

export default function MarkdownRenderer({ content }: MarkdownRendererProps) {
  const [html, setHtml] = useState('')

  useEffect(() => {
    const renderMarkdown = () => {
      // Convert basic markdown to HTML
      let processedContent = content

      // Headers
      processedContent = processedContent.replace(/^### (.*$)/gim, '<h3>$1</h3>')
      processedContent = processedContent.replace(/^## (.*$)/gim, '<h2>$1</h2>')
      processedContent = processedContent.replace(/^# (.*$)/gim, '<h1>$1</h1>')

      // Bold
      processedContent = processedContent.replace(/\*\*(.*)\*\*/gim, '<strong>$1</strong>')

      // Lists
      processedContent = processedContent.replace(/^\* (.+)/gim, '<li>$1</li>')
      // Wrap consecutive li elements in ul
      processedContent = processedContent.replace(/(<li>[\s\S]*?<\/li>)/g, '<ul>$1</ul>')

      // Paragraphs
      processedContent = processedContent.replace(/\n\n/gim, '</p><p>')
      processedContent = '<p>' + processedContent + '</p>'

      // Clean up empty paragraphs
      processedContent = processedContent.replace(/<p><\/p>/g, '')
      processedContent = processedContent.replace(/<p>(<h[1-3]>)/g, '$1')
      processedContent = processedContent.replace(/(<\/h[1-3]>)<\/p>/g, '$1')
      processedContent = processedContent.replace(/<p>(<ul>)/g, '$1')
      processedContent = processedContent.replace(/(<\/ul>)<\/p>/g, '$1')

      // Sanitize HTML
      const clean = DOMPurify.sanitize(processedContent)
      setHtml(clean)
    }

    renderMarkdown()
  }, [content])

  return (
    <div
      className="prose prose-lg max-w-none prose-slate
        prose-h1:text-3xl prose-h1:font-bold prose-h1:text-slate-900 prose-h1:mb-6
        prose-h2:text-2xl prose-h2:font-bold prose-h2:text-slate-800 prose-h2:mt-8 prose-h2:mb-4
        prose-h3:text-xl prose-h3:font-semibold prose-h3:text-slate-700 prose-h3:mt-6 prose-h3:mb-3
        prose-p:text-slate-600 prose-p:leading-relaxed prose-p:mb-4
        prose-ul:space-y-2 prose-ul:mb-6
        prose-li:text-slate-600 prose-li:leading-relaxed
        prose-strong:text-slate-900 prose-strong:font-semibold"
      dangerouslySetInnerHTML={{ __html: html }}
    />
  )
}