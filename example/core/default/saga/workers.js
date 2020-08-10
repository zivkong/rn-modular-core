export function* defaultWorker() {
  try {
    yield true
  } catch (error) {
    console.error('default Worker error', error)
  }
}