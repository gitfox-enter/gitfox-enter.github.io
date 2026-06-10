/**
 * 项目数据辅助函数
 * 合并 GitHub API 数据和自定义配置
 */

// @ts-ignore - generated at build time by fetch-github-projects.mjs
import githubData from '@/data/github-projects.json'
// @ts-ignore - may not exist
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

interface CustomConfig {
  title?: string
  subtitle?: string
  customDescription?: string
  image?: string
  homepage?: string
  featured?: boolean
  order?: number
}

/**
 * 获取合并后的项目列表
 */
export function getProjects(): Project[] {
  const githubProjects: GithubRepo[] = githubData.allProjects
  const config: Record<string, CustomConfig> = projectConfig.projects
  
  // 合并 GitHub 数据和配置
  const mergedProjects: Project[] = githubProjects.map((repo: GithubRepo) => {
    const customConfig: CustomConfig = config[repo.name] || {}
    
    return {
      name: repo.name,
      title: customConfig.title || repo.name,
      subtitle: customConfig.subtitle || repo.language || '',
      description: customConfig.customDescription || repo.description,
      image: customConfig.image || '/gold-bear-blog/default-project.png',
      url: repo.url,
      homepage: customConfig.homepage || repo.homepage || undefined,
      stars: repo.stars,
      forks: repo.forks,
      language: repo.language,
      featured: customConfig.featured !== false,
      order: customConfig.order || 999
    }
  })
  
  // 添加配置中有但 GitHub 没有的项目（如外部项目）
  for (const [name, customConfig] of Object.entries(config) as [string, CustomConfig][]) {
    if (!githubProjects.find((r: GithubRepo) => r.name === name)) {
      mergedProjects.push({
        name,
        title: customConfig.title || name,
        subtitle: customConfig.subtitle || '',
        description: customConfig.customDescription || '',
        image: customConfig.image || '/gold-bear-blog/default-project.png',
        url: customConfig.homepage || '#',
        homepage: customConfig.homepage,
        stars: 0,
        forks: 0,
        featured: customConfig.featured !== false,
        order: customConfig.order || 999
      })
    }
  }
  
  // 按配置的 order 排序
  return mergedProjects.sort((a, b) => a.order - b.order)
}

/**
 * 获取精选项目（首页展示）
 */
export function getFeaturedProjects(): Project[] {
  return getProjects().filter(p => p.featured)
}

/**
 * 获取项目统计信息
 */
export function getProjectStats() {
  return githubData.stats
}
