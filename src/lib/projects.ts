/**
 * 项目数据辅助函数
 * 合并 GitHub API 数据和自定义配置
 */

import githubData from '@/data/github-projects.json'
import projectConfig from '@/data/project-config.json'

export interface Project {
  name: string
  title: string
  subtitle: string
  description: string
  image: string
  url: string
  homepage?: string
  stars: number
  forks: number
  language?: string
  featured: boolean
  order: number
  category?: string
  tags?: string[]
  repo?: string
}

export interface Category {
  title: string
  description: string
}

export interface ProjectConfig {
  categories: Record<string, Category>
  projects: Record<string, ProjectCustomConfig>
}

interface ProjectCustomConfig {
  title?: string
  subtitle?: string
  category?: string
  customDescription?: string
  image?: string
  homepage?: string
  featured?: boolean
  order?: number
  repo?: string
  tags?: string[]
}

interface GithubRepo {
  name: string
  description: string
  language?: string
  url: string
  homepage?: string
  stars: number
  forks: number
}

/**
 * 获取分类信息
 */
export function getCategories(): Record<string, Category> {
  return (projectConfig as any).categories ?? {}
}

/**
 * 获取合并后的项目列表
 */
export function getProjects(): Project[] {
  const githubProjects: GithubRepo[] = (githubData as any).allProjects ?? []
  const config: Record<string, ProjectCustomConfig> = (projectConfig as any).projects ?? {}
  
  // 合并 GitHub 数据和配置
  const mergedProjects: Project[] = githubProjects.map((repo: GithubRepo) => {
    const customConfig: ProjectCustomConfig = config[repo.name] || {}
    
    return {
      name: repo.name,
      title: customConfig.title || repo.name,
      subtitle: customConfig.subtitle || repo.language || '',
      description: customConfig.customDescription || repo.description,
      image: customConfig.image || '/default-project.png',
      url: repo.url,
      homepage: customConfig.homepage || repo.homepage || undefined,
      stars: repo.stars,
      forks: repo.forks,
      language: repo.language,
      featured: customConfig.featured !== false,
      order: customConfig.order || 999,
      category: customConfig.category || 'other',
      tags: customConfig.tags || [],
      repo: customConfig.repo || repo.url.replace('https://github.com/', '')
    }
  })
  
  // 添加配置中有但 GitHub 没有的项目
  for (const [name, customConfig] of Object.entries(config) as [string, ProjectCustomConfig][]) {
    if (!mergedProjects.find(p => p.name === name)) {
      mergedProjects.push({
        name,
        title: customConfig.title || name,
        subtitle: customConfig.subtitle || '',
        description: customConfig.customDescription || '',
        image: customConfig.image || '/default-project.png',
        url: customConfig.homepage || customConfig.repo ? `https://github.com/${customConfig.repo}` : '#',
        homepage: customConfig.homepage,
        stars: 0,
        forks: 0,
        featured: customConfig.featured !== false,
        order: customConfig.order || 999,
        category: customConfig.category || 'other',
        tags: customConfig.tags || [],
        repo: customConfig.repo || ''
      })
    }
  }
  
  return mergedProjects.sort((a, b) => a.order - b.order)
}

/**
 * 按分类获取项目
 */
export function getProjectsByCategory(): Record<string, Project[]> {
  const projects = getProjects()
  const grouped: Record<string, Project[]> = {}
  for (const proj of projects) {
    const cat = proj.category || 'other'
    if (!grouped[cat]) grouped[cat] = []
    grouped[cat].push(proj)
  }
  return grouped
}

/**
 * 获取精选项目
 */
export function getFeaturedProjects(): Project[] {
  return getProjects().filter(p => p.featured)
}

/**
 * 获取项目统计信息
 */
export function getProjectStats() {
  return (githubData as any).stats ?? { total_repos: 0, total_stars: 0, total_forks: 0, languages: [], last_updated: '' }
}
