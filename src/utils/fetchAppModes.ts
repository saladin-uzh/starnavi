interface AppMode {
  field: number
}

export type AppModes = Record<string, AppMode>

const endpoint = 'http://demo1030918.mockable.io/'
const options = { method: 'GET' }

export default async function (): Promise<AppModes | null> {
  try {
    const response = await fetch(endpoint, options)
    const appModes = await response.json()

    return appModes ?? null
  } catch (err) {
    console.error(err)
    return null
  }
}
