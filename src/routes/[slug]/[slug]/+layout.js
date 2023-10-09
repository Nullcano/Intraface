import { port } from '$lib/port'
import { repo } from '$lib/repo'
import { wiki } from '$lib/wiki'

export async function load({ params }) {
  let allItems = []
  allItems.push(port, repo, wiki)
  let section = allItems.find(i => i.slug == params.slug)
  return {
    section: section
  }
}