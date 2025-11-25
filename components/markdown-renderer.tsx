'use client'

import { useState, useEffect } from 'react'

interface MarkdownRendererProps {
  content: string
}

export default function MarkdownRenderer({ content }: MarkdownRendererProps) {
  const [html, setHtml] = useState('')

  useEffect(() => {
    // Simple markdown to HTML conversion without external dependencies
    let processedContent = content

    // Headers
    processedContent = processedContent.replace(/^### (.*$)/gim, '<h3>$1</h3>')
    processedContent = processedContent.replace(/^## (.*$)/gim, '<h2>$1</h2>')
    processedContent = processedContent.replace(/^# (.*$)/gim, '<h1>$1</h1>')

    // Bold
    processedContent = processedContent.replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>')

    // Italic
    processedContent = processedContent.replace(/\*([^*]+)\*/g, '<em>$1</em>')

    // Lists
    processedContent = processedContent.replace(/^\* (.+)$/gim, '<li>$1</li>')
    processedContent = processedContent.replace(/^\- (.+)$/gim, '<li>$1</li>')
    processedContent = processedContent.replace(/^\d+\. (.+)$/gim, '<li>$1</li>')

    // Wrap consecutive <li> elements in <ul>
    processedContent = processedContent.replace(/(<li>[\s\S]*?<\/li>)/g, (match) => {
      return '<ul>' + match + '</ul>'
    })

    // Clean up multiple consecutive </ul><ul> tags
    processedContent = processedContent.replace(/<\/ul>\s*<ul>/g, '')

    // Paragraphs
    processedContent = processedContent
      .split('\n\n')
      .map(para => {
        if (!para.startsWith('<') && para.trim()) {
          return `<p>${para}</p>`
        }
        return para
      })
      .join('\n')

    // Line breaks
    processedContent = processedContent.replace(/\n/g, '<br>')

    setHtml(processedContent)
  }, [content])

  return (
    <div
      className="prose prose-slate max-w-none"
      dangerouslySetInnerHTML={{ __html: html }}
    />
  )
}