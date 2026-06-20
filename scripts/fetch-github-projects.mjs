#!/usr/bin/env node
/**
 * 从 GitHub API 获取用户仓库信息并生成项目数据
 * 用于博客首页和项目页面展示
 */

import { writeFileSync, existsSync, mkdirSync } from 'node:fs'
import { join, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const GITHUB_USERNAME = 'gitfox-enter'
const OUTPUT_FILE = join(__dirname, '..', 'src', 'data', 'github-projects.json')

/**
 * 从 GitHub API 获取用户仓库列表
 * GitHub API 无需认证也可访问公开仓库，但有 60次/小时 的限制
 * 添加 GITHUB_TOKEN 环境变量可提升至 5000次/小时
 */
async function fetchGitHubRepos() {
  const token = process.env.GITHUB_TOKEN
  const headers = {
    'Accept': 'application/vnd.github.v3+json',
    'User-Agent': 'gitfox-enter-blog/1.0'
  }
  
  if (token) {
    headers['Authorization'] = `token ${token}`
  }
  
  const url = `https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=updated&per_page=100`
  const controller = new AbortController()
  const timeout = setTimeout(() => controller.abort(), 10000)
  
  console.log(`[GitHub API] Fetching repos for ${GITHUB_USERNAME}...`)
  
  const response = await fetch(url, { headers, signal: controller.signal })
  
  if (!response.ok) {
    throw new Error(`GitHub API error: ${response.status} ${response.statusText}`)
  }
  
  clearTimeout(timeout)
  const repos = await response.json()
  console.log(`[GitHub API] Fetched ${repos.length} repositories`)
  
  return repos
}

/**
 * 过滤和排序仓库
 * 只保留有价值的公开仓库
 */
function filterRepos(repos) {
  return repos
    .filter(repo => {
      // 只保留公开仓库
      if (repo.private) return false
      
      // 排除 fork 的仓库（可选，根据需求调整）
      // if (repo.fork) return false
      
      // 排除特定的仓库（根据您的需求添加）
      const excludedRepos = [
        // 'repo-name-to-exclude'
      ]
      if (excludedRepos.includes(repo.name)) return false
      
      return true
    })
    .sort((a, b) => {
      // 按星数降序排序
      return b.stargazers_count - a.stargazers_count
    })
}

/**
 * 转换为博客展示格式
 */
function transformToProjects(repos) {
  // 精选项目（首页展示的前6个）
  const featuredProjects = repos.slice(0, 6).map(repo => ({
    name: repo.name,
    description: repo.description || '暂无描述',
    stars: repo.stargazers_count,
    forks: repo.forks_count,
    language: repo.language,
    url: repo.html_url,
    homepage: repo.homepage || null,
    topics: repo.topics || [],
    updated_at: repo.updated_at
  }))
  
  // 所有项目（项目页面展示）
  const allProjects = repos.map(repo => ({
    name: repo.name,
    full_name: repo.full_name,
    description: repo.description || '暂无描述',
    stars: repo.stargazers_count,
    forks: repo.forks_count,
    language: repo.language,
    url: repo.html_url,
    homepage: repo.homepage || null,
    topics: repo.topics || [],
    is_fork: repo.fork,
    created_at: repo.created_at,
    updated_at: repo.updated_at
  }))
  
  // 统计信息
  const stats = {
    total_repos: repos.length,
    total_stars: repos.reduce((sum, repo) => sum + repo.stargazers_count, 0),
    total_forks: repos.reduce((sum, repo) => sum + repo.forks_count, 0),
    languages: [...new Set(repos.map(r => r.language).filter(Boolean))],
    last_updated: new Date().toISOString()
  }
  
  return { featuredProjects, allProjects, stats }
}

/**
 * 保存数据到 JSON 文件
 */
function saveData(data) {
  // 确保目录存在
  const dataDir = dirname(OUTPUT_FILE)
  if (!existsSync(dataDir)) {
    mkdirSync(dataDir, { recursive: true })
  }
  
  writeFileSync(OUTPUT_FILE, JSON.stringify(data, null, 2), 'utf-8')
  console.log(`[GitHub API] Data saved to ${OUTPUT_FILE}`)
  console.log(`[GitHub API] Stats:`, data.stats)
}

/**
 * 主函数
 */
async function main() {
  try {
    console.log('='.repeat(50))
    console.log('Fetching GitHub Projects Data')
    console.log('='.repeat(50))
    
    // 获取仓库数据
    const repos = await fetchGitHubRepos()
    
    // 过滤和排序
    const filteredRepos = filterRepos(repos)
    console.log(`[GitHub API] After filtering: ${filteredRepos.length} repositories`)
    
    // 转换格式
    const data = transformToProjects(filteredRepos)
    
    // 保存数据
    saveData(data)
    
    console.log('='.repeat(50))
    console.log('✅ GitHub projects data fetched successfully!')
    console.log('='.repeat(50))
  } catch (error) {
    console.error('❌ Error fetching GitHub data:', error.message)
    
    // 如果已有缓存数据，使用缓存
    if (existsSync(OUTPUT_FILE)) {
      console.log('📦 Using cached data from previous fetch')
    } else {
      // 没有缓存数据，创建空数据
      saveData({
        featuredProjects: [],
        allProjects: [],
        stats: {
          total_repos: 0,
          total_stars: 0,
          total_forks: 0,
          languages: [],
          last_updated: new Date().toISOString()
        }
      })
    }
    
    // 不抛出错误，让构建继续进行
  }
}

main()
